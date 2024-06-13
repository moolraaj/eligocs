'use client'
import { allExportedApi } from "@/utils/apis/Apis.jsx";
import PortfolioChild from "./portfolioChild";
import { useEffect, useState } from "react";

export default function PortfolioComponent() {
    let api = allExportedApi()

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)


    const loadPortfolio = async () => {
        try {
            let result = await api.fetchAllportFolio()
            setData(result)
        } catch (error) {
            console.error("Failed to load services", error)
        }
    }


    useEffect(() => {
        const loadData = async () => {
            await loadPortfolio()
            setLoading(false)
        }
        loadData()
    }, [])



    return (
        <>
            {loading ? (
                <div className="page_top">
                    <p className="loading_data">Loading...</p>
                </div>
            ) : (
                <PortfolioChild data={data} />
            )}

        </>
    );
}





