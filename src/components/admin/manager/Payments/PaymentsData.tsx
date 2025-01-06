import React from "react";
import MakePayment from "@/components/user/payments/MakePayment";
import CancelSaveButtons from "@/components/UI/cancelSaveButtons";
import EditDeleteRefresh from "@/components/UI/editDeleteRefresh";

const PaymentsData = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="flex flex-col ">
      <EditDeleteRefresh /> 
      <MakePayment isAdmin />
      <div className='mt-10 flex justify-end'>
      <CancelSaveButtons />
      </div>
      </div>
    </div>
  );
};

export default PaymentsData;
