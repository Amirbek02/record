import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

export interface IFormData {
	name: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface AuthState {
	isAuthenticated: boolean;
	user: any | null;
	token: string | null;
	isLoading: boolean;
	error: string | null;
	successMessage: string | null;
	login: (email: string, password: string) => Promise<void>;
	register: (formData: IFormData) => Promise<void>;
	logout: () => void;
}

const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			isAuthenticated: false,
			user: null,
			token: null,
			isLoading: false,
			error: null,
			successMessage: null,

			login: async (email, password) => {
				set({ isLoading: true, error: null });
				try {
					const response = await axios.post(
						"https://api.example.com/login",
						{ email, password },
						{
							headers: { "Content-Type": "application/json" },
						}
					);
					if (response.status === 200) {
						set({
							isAuthenticated: true,
							user: response.data.user,
							token: response.data.token,
							successMessage: "Login successful.",
						});
					}
				} catch (error: any) {
					console.error("Login Error:", error.response?.data);
					set({
						error:
							error.response?.data?.message ||
							"Login failed. Please try again.",
					});
				} finally {
					set({ isLoading: false });
				}
			},

			register: async (formData) => {
				set({ isLoading: true, error: null, successMessage: null });
				const userData = {
					first_name: formData.name.trim(),
					last_name: formData.lastName.trim(),
					email: formData.email.trim(),
					password: formData.password,
					password_confirm: formData.confirmPassword,
					user_status: "Менеджер",
					paid: "Не оплачено",
				};

				if (!userData.email.includes("@")) {
					set({ error: "Invalid email format." });
					return;
				}
				if (userData.password !== userData.password_confirm) {
					set({ error: "Passwords do not match." });
					return;
				}
				if (!userData.first_name || !userData.last_name) {
					set({ error: "Name fields cannot be empty." });
					return;
				}

				try {
					const response = await axios.post(
						"https://api.recordonline.kg/api/v1/sign-up/",
						userData,
						{
							headers: { "Content-Type": "application/json" },
						}
					);

					if (response.status === 200) {
						set({
							successMessage:
								"Registration code has been sent to your email.",
						});
					}
				} catch (error: any) {
					console.error("Register Error:", error.response?.data);

					const errorResponse = error.response?.data;
					if (errorResponse) {
						const emailError = errorResponse.email?.[0] || "";
						const lastNameError = errorResponse.last_name?.[0] || "";
						set({
							error:
								`${emailError} ${lastNameError}`.trim() ||
								"Validation error occurred.",
						});
					} else {
						set({
							error: "An unexpected error occurred. Please try again.",
						});
					}
				} finally {
					set({ isLoading: false });
				}
			},

			logout: () => {
				set({
					isAuthenticated: false,
					user: null,
					token: null,
					successMessage: "You have been logged out.",
				});
			},
		}),
		{
			name: "auth",
		}
	)
);

export default useAuthStore;
