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
	clearMessages: () => void;
}

const apiClient = axios.create({
	baseURL: "https://api.recordonline.kg/api/v1",
	headers: { "Content-Type": "application/json" },
});

const validateFormData = (formData: IFormData): string | null => {
	if (!formData.email.includes("@")) return "Invalid email format.";
	if (formData.password !== formData.confirmPassword)
		return "Passwords do not match.";
	if (!formData.name || !formData.lastName)
		return "Name fields cannot be empty.";
	return null;
};

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
					const { data } = await axios.post(
						"https://api.recordonline.kg/api/v1/sign-in/",
						{ email, password },
						{ headers: { "Content-Type": "application/json" } }
					);

					set({
						token: data.token,
						user: data.user,
						isAuthenticated: true,
					});
					localStorage.setItem("token", data.token);
					console.log("Login successful:", data.token);
				} catch (error: any) {
					set({ error: error.response?.data?.message || "Login failed" });
					console.error("Login error:", error.response?.data);
				} finally {
					set({ isLoading: false });
				}
			},

			register: async (formData) => {
				set({ isLoading: true, error: null, successMessage: null });

				const validationError = validateFormData(formData);
				if (validationError) {
					set({ error: validationError });
					set({ isLoading: false });
					return;
				}

				const userData = {
					first_name: formData.name.trim(),
					last_name: formData.lastName.trim(),
					email: formData.email.trim(),
					password: formData.password,
					password_confirm: formData.confirmPassword,
					user_status: "Менеджер",
					paid: "Не оплачено",
				};

				try {
					const response = await apiClient.post("/sign-up/", userData);
					if (response.status === 200) {
						set({
							successMessage:
								"Registration code has been sent to your email.",
						});
					}
				} catch (error: any) {
					const errorResponse = error.response?.data;
					const emailError = errorResponse?.email?.[0] || "";
					const lastNameError = errorResponse?.last_name?.[0] || "";
					set({
						error:
							`${emailError} ${lastNameError}`.trim() ||
							"Validation error occurred.",
					});
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
				localStorage.removeItem("token");
			},

			clearMessages: () => set({ error: null, successMessage: null }),
		}),
		{
			name: "auth", // persist under the key "auth" in localStorage
		}
	)
);

export default useAuthStore;
