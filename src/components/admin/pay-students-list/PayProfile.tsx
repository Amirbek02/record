import Image from "next/image";
import { Check } from "lucide-react";
const PayProfile = () => {
    return (
        <div className="flex gap-5 items-center">
            <Image className="w-[150px] h-[150px] rounded-[20px]" src="/images/graduates2.jpeg" alt="" width={194} height={194} />
            <div className="flex flex-col gap-2">
                <h1>Photo</h1>
                <span className="flex gap-2"><Check />Email</span>
                <span className="flex gap-2"><Check />Ватсап номери</span>
            </div>
        </div>
    );
};

export default PayProfile;