
'use client'
import { fetchAllportFolio } from '@/utils/apis/Apis';

import React, { useEffect, useState } from 'react';
import PortfolioComponent from './component/portfolioComponent';

function Portfolio() {
    const [data, setData] = useState([]);
   

    useEffect(() => {
        const loadPortfolio = async () => {
                const response = await fetchAllportFolio()
                 setData(response)
        };
        loadPortfolio();
    }, []);

    

    return (
       <>
       <PortfolioComponent data={data}/>
       </>
    );
}

export default Portfolio;



