import { allExportedApi } from "@/utils/apis/Apis"
import CoursesPage from "./component/CoursesPage";


export default async function page() {

    let api = allExportedApi();
    let CoursesPageData = await api.CoursesPageApi();
  return (
   <>
   <CoursesPage  CoursesPageData={CoursesPageData} />
   </>
  )
}

