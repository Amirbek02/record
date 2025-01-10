// убакыт
"use client";
import React from "react";

const Timer = ({ timeLeft, totalTime }) => {
  const circleRadius = 50;
  const circumference = 2 * Math.PI * circleRadius;
  const progress = (timeLeft / totalTime) * 100;
  const offset = circumference - (progress / 100) * circumference;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const arrowRotation = (progress) => {
    return (progress / 100) * 360;
  };

  return (
    <div className="flex justify-center items-center mt-6 relative">
      <svg height="190" width="130" className="relative  ">
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="10"
        />

        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          fill="none"
          stroke="#1d4ed8"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />

        <g transform={`rotate(${arrowRotation(progress)} 60 60)`}>
          <polygon points="63,20 57,60 63,60" fill="black" />
        </g>
        <text
          x={60}
          y={130}
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-bold   text-lg fill-blue-700"
        >
          {timeLeft > 0 ? formatTime(timeLeft) : "ЖРТ Түшүндө!"}
        </text>
      </svg>
    </div>
  );
};

export default Timer;
