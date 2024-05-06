export const allExportedApi = () => {

  //fetch call to action api for all pages


  const fetchCallToAction=async()=>{
    let response=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/call_to_action?fields=acf&acf_format=standard`)
    let data=await response.json()
    return data
  }

  // fetch home page api
  const HomeApi = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=home&fields=acf&acf_format=standard`,);
    let data = await response.json();
    return data;
  };

  // fetch About page api
  const AboutApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=about&fields=acf&acf_format=standard`,);
    let response = await data.json();
    return response;
  };

  // fetch portfolio page api
  const portfolioApi = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=portfolio&fields=acf&acf_format=standard`,);
    let result = await response.json();
    return result;
  };

  // fetch Our Service page api
  const ServiceApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=our_services&fields=acf&acf_format=standard`,);
    let response = await data.json();
    return response;
  };

  // fetch meet our team page api
  const meetOurTeamPage = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=meet-our-team&fields=acf&acf_format=standard`,);
    let result = await response.json();
    return result;
  };

  // fetch Blog page api
  const BlogPageApi = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=blog&fields=acf&acf_format=standard`,);
    let response = await data.json();
    return response;
  };


 
  // fetch Our products page api
  const ProductPageApi = async() => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=products&fields=acf&acf_format=standard`,);
    let response = await data.json();
    return response;
  } 


  // fetch Courses page api
  const CoursesPageApi = async() => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pages?slug=courses&fields=acf&acf_format=standard`,);
    let response = await data.json();
    return response;
  } 


  // fetch all services template api
  const fetchAllServices = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services?fields=acf&acf_format=standard`,);
    let data = await response.json();
    return data;
  };

  // fetch single services template api
  const fetchSingleService = async (slug) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services?slug=${slug}&fields=acf&acf_format=standard`,);
    let result = await response.json();
    return result;
  };

  // fetch all portfolio api
  const fetchAllportFolio = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio?fields=acf&acf_format=standard`,);
    let result = await response.json();
    return result;
  };

  // fetch single portfolio api
  const fetchSingleportFolio = async (slug) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio?slug=${slug}&fields=acf&acf_format=standard`,);
    let result = await response.json();
    return result;
  };

  // fetch meet our team api
  const fetchMeetOurTeam = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/meet_our_team?fields=acf&acf_format=standard`,);
    let result = await response.json();
    return result;
  };

  // fetch all blog posts api
  const AllBlogPOsts = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog?fields=acf&acf_format=standard`,);
    let response = await data.json();
    return response;
  };

 // fetch all courses api
 const AllCourses = async () => {
  let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course?fields=acf&acf_format=standard`,);
  let response = await data.json();
  return response;
};

// fetch single Course api
const fetchSingleCourse = async (slug) => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/course?slug=${slug}&fields=acf&acf_format=standard`,);
  let result = await response.json();
  return result;
};
// fetch single Blog post api
const SingleBlogPost = async (slug) => {
  let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog?slug=${slug}&fields=acf&acf_format=standard`,);
  let result = await response.json();
  return result;
};

  // fetch header footer
  const fetchHeaderFooter = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL_HEADER_FOOTER}/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`);
    let response = await data.json();
    return response;
  };




  //***************************   fetch forms apis  ****************************//


  // job form api

  const fetchJobFormApi=async(userData)=>{
    let data = await fetch(`${process.env.NEXT_PUBLIC_FORM_API}/902/feedback`,userData)
    let response=await data.json()
    return response
  }


  // contact us form api

  const fetchContactFormApi=async(userData)=>{
    let data = await fetch(`${process.env.NEXT_PUBLIC_FORM_API}/942/feedback`,userData)
    let response=await data.json()
    return response
  }


  // apply for job api

  const fetchApplyForJobApi=async(userData)=>{
    let data = await fetch(`${process.env.NEXT_PUBLIC_FORM_API}/944/feedback`,userData)
    let response=await data.json()
    return response
  }


  return {
    fetchCallToAction,
    HomeApi,
    AboutApi,
    portfolioApi,
    ServiceApi,
    meetOurTeamPage,
    BlogPageApi,
    ProductPageApi,
    CoursesPageApi,
    fetchAllServices,
    fetchSingleService,
    fetchAllportFolio,
    fetchSingleportFolio,
    SingleBlogPost,
    fetchMeetOurTeam,
    AllBlogPOsts,
    AllCourses,
    fetchSingleCourse,
    fetchHeaderFooter,
    fetchJobFormApi,
    fetchContactFormApi,
    fetchApplyForJobApi
  };
  
};
