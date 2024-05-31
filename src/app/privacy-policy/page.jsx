'use client'
import React, { useEffect, useState } from 'react';
import { allExportedApi } from "@/utils/apis/Apis";
import PrivacyPolicy from './components/PrivacyPolicy';

function Privacy() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = allExportedApi();
                const responseData = await api.PrivacyPolicy();
                setData(responseData);
            } catch (error) {
                console.error("Error fetching Terms and Conditions:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <PrivacyPolicy data={data}/>
    );
}

export default Privacy;
