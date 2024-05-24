import { allExportedApi } from "@/utils/apis/Apis";
import CareerPage from "./components/CareerPage";


async function Career() {
    const api = allExportedApi();
    let data = await api.careerPageApi();

    return (
        <>
           <CareerPage data={data} />
            
        </>
    );
}

export default Career
