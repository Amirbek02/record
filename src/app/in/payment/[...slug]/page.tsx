import React from 'react';
import MakePayment from '@/components/user/payments/MakePayment';
import AcceptPayment from '@/components/user/payments/AcceptPayment';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slugDepth = (await params).slug?.length;
  return (
    <section>
      {slugDepth === 1 ? (
        <MakePayment telNumber={'+996777380432'} fullName={'Амирбек Амираев'} amount={23} />
      ) : (
        <AcceptPayment />
      )}
    </section>
  );
};

export default page;
