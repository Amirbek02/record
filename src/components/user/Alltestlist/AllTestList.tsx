"use client";
import React, { useEffect } from "react";
import TestList from "./TestList";
import useTrialTestStore from "@/lib/store/TrialTest";

const AllTestList = () => {
	const { data, loading, error, getSubTest } = useTrialTestStore();

	useEffect(() => {
		getSubTest();
	}, [getSubTest]);

	return (
		<>
			<TestList tests={data} isMainTest />
			<TestList tests={data} />
		</>
	);
};

export default AllTestList;
