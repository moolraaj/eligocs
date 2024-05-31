'use client'
import React, { useEffect, useState } from 'react';
import { allExportedApi } from "@/utils/apis/Apis";
import TermsAndConditions from "./components/TermsAndConditions";

function Terms() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = allExportedApi();
                const responseData = await api.TermsandConditions();
                setData(responseData);
            } catch (error) {
                console.error("Error fetching Terms and Conditions:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <TermsAndConditions data={data}/>
    );
}

export default Terms;
