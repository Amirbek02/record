import React from "react";
import Analogies from "@/components/user/test-questuions/Analogies";
import Grammer from "@/components/user/test-questuions/Grammer";

const TestQuestions = ({ id }: { id: number }) => {
    return (
        <div>
            {id === 1 ? <Grammer /> : <Analogies />}
        </div>
    );
};

export default TestQuestions;