import React from 'react';
import MakePayment from '@/components/user/payments/MakePayment';
import CancelSaveButtons from '@/components/UI/cancelSaveButtons';
import EditDeleteRefresh from '@/components/UI/editDeleteRefresh';

const PaymentsData = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="flex flex-col ">
        <div className="flex justify-end items-end -mb-5 pr-5">
          <EditDeleteRefresh />
        </div>
        <MakePayment isAdmin telNumber={''} fullName={''} amount={0} />
        <div className="mt-10 flex justify-end">
          <CancelSaveButtons />
        </div>
      </div>
    </div>
  );
};

export default PaymentsData;
