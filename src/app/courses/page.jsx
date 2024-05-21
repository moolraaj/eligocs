 

import CoursesPage from "./component/CoursesPage";
import { CourseScoData } from "./component/courseScoMetaData";


export default async function page() {


  return (
   <>
   <CoursesPage />
   </>
  )
}

export async function generateMetadata(){
  let metadata=await CourseScoData()
  return metadata
}

