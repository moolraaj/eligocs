'use client'
import { useState, useEffect } from 'react';
import { allExportedApi } from '@/utils/apis/Apis';

export function LayoutCompo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = allExportedApi();
                const response = await api.fetchHeaderFooter();
                const data = await response.data;
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return data;
}
