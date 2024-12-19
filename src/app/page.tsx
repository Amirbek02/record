/** @format */

import { inputStyles } from "@/components/UI/CustomInputClassName"
import { Input } from "@/components/UI/input"

export default function Home() {
	return (
		<div>
			<Input type="text" placeholder="text" className={inputStyles} />
		</div>
	)
}
