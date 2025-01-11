'use client';

import React from 'react';
import Image from 'next/image';

interface Graduate {
  id: number;
  name: string;
  score: number;
  image: string;
  feedback: string;
}

const graduates: Graduate[] = [
  {
    id: 1,
    name: 'Алина Тургунова',
    score: 230,
    image: '/images/graduates.jpeg',
    feedback: 'Бул курс мага абдан жардам берди, кайра кайталап көргөнгө эң сонун экен.',
  },
  {
    id: 2,
    name: 'Мадина Асылова',
    score: 220,
    image: '/images/graduates1.jpeg',
    feedback: 'Бул курс мага абдан жардам берди, кайра кайталап көргөнгө эң сонун экен.',
  },
  {
    id: 3,
    name: 'Айбек Бийбосунов',
    score: 225,
    image: '/images/graduates2.jpeg',
    feedback: 'Бул курс мага абдан жардам берди, кайра кайталап көргөнгө эң сонун экен.',
  },
  {
    id: 1,
    name: 'Алина Тургунова',
    score: 230,
    image: '/images/graduates.jpeg',
    feedback: 'Бул курс мага абдан жардам берди, кайра кайталап көргөнгө эң сонун экен.',
  },
  {
    id: 2,
    name: 'Мадина Асылова',
    score: 220,
    image: '/images/graduates1.jpeg',
    feedback: 'Бул курс мага абдан жардам берди, кайра кайталап көргөнгө эң сонун экен.',
  },
  {
    id: 3,
    name: 'Айбек Бийбосунов',
    score: 225,
    image: '/images/graduates2.jpeg',
    feedback: 'Бул курс мага абдан жардам берди, кайра кайталап көргөнгө эң сонун экен.',
  },
];

const Graduates: React.FC = () => {
  return (
    <section className="bg-[#2E3095] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-400 text-center text-[24px] md:text-[40px] font-bold mb-20">Биздин бүтүрүүчүлөр</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mb-20">
          {graduates.map((graduate) => (
            <div
              key={graduate.id}
              className="bg-gradient-to-b from-[#1A1A25] to-[#2E3095] rounded-lg shadow-lg p-2 flex flex-col"
            >
             <div className='flex gap-5'>
             <Image
                src={graduate.image}
                alt={graduate.name}
                 className="relative top-[-50px] rounded-full object-cover w-[150px] h-[150px] sm:w-[120px] sm:h-[120px] xs:w-[100px] xs:h-[100px]"
                width={150}
                height={150}
              />
              <div className='flex flex-col gap-1 items-center mt-2'>
              <p className="text-red font-bold text-[24px]  xl:text-[30px]">{graduate.score} бал</p>
              <h3 className="text-[12px] xl:text-[20px] font-bold text-gray-400">{graduate.name}</h3>
              </div>
             </div>
              <p className="text-gray-400 relative top-[-20px] text-center">{graduate.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Graduates;
