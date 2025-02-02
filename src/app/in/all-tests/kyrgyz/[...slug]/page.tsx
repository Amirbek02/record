import React from "react";
import Analogies from "@/components/user/test-questuions/Analogies";
import Grammer from "@/components/user/test-questuions/Grammer";

const TestQuestions = ({ id }: { id: number }) => {
    return (
        <div>
            <Grammer /> 
            <Analogies />
        </div>
    );
};

export default TestQuestions;