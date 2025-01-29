import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/UI/card';

const AnswerSheet = () => {
  const questions = Array.from({ length: 30 }, (_, i) => i + 1);
  const options = ['А', 'Б', 'В', 'Г'];

  const getColor = (questionNum: number) => {
    if (questionNum <= 5) return 'bg-red-500';
    if (questionNum <= 15) return 'bg-green-500';
    return 'bg-gray-500';
  };

  return (
    <Card className=" max-w-[505px] bg-white p-2">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-purple-900">
          II. Математика 110 баллл
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {questions.map((num) => (
            <div key={num} className="flex items-center gap-2">
              <span className="w-6">{num}.</span>
              <div className="flex gap-2">
                {options.map((option) => (
                  <div key={option} className="flex items-center">
                    <div className="relative">
                      <div
                        className={`h-6 w-6 rounded-full border-2 border-gray-300 ${
                          num === 1 && option === 'А' ? getColor(num) : ''
                        }`}
                      />
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                        {option}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnswerSheet;