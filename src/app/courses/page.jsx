import { allExportedApi } from "@/utils/apis/Apis"
import CoursesPage from "./component/CoursesPage";


export default async function page() {

    let api = allExportedApi();
    let CoursesPageData = await api.CoursesPageApi();
    let AllCourses = await api.AllCourses();
  return (
   <>
   <CoursesPage  CoursesPageData={CoursesPageData} AllCourses={AllCourses} />
   </>
  )
}

