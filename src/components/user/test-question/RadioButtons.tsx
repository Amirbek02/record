import React from 'react';
import { Label } from "@/components/UI/label"
import { RadioGroup, RadioGroupItem } from "@/components/UI/radio-group" 

type TQuestionProps= {
  questionNumber: number;
  choices: string[];
  selectedAnswer: string | null;
  onSelect: (questionNumber: number, choice: string) => void;
}
const RadioButtons = ({ questionNumber, choices, selectedAnswer, onSelect }:TQuestionProps) => {
  
  return (
    <div className="border p-2 rounded-md">
      <p className="font-bold">{questionNumber}</p>
      <RadioGroup
        value={selectedAnswer || ''}
        onValueChange={(value) => onSelect(questionNumber, value)}
      >
        {choices.map((choice, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={choice} id={`q${questionNumber}_choice${index}`} />
            <Label htmlFor={`q${questionNumber}_choice${index}`}>{choice}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioButtons;
