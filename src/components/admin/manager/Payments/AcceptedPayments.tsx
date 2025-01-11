import React from "react";
import AcceptPayment from "@/components/user/payments/AcceptPayment";
import CancelSaveButtons from "@/components/UI/cancelSaveButtons";
const AcceptedPayments = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-[80px]">
        <AcceptPayment isAdmin />
        <CancelSaveButtons />
      </div>
    </div>
  );
};

export default AcceptedPayments;
