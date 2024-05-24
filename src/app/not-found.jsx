import Link from "next/link"

 

function NotFound() {
  return (
    <div className="not_found_outer">
      <div className="not_found_inner">

    <div className='not_found_wrapper'>
      <h1>Ooops.</h1>
      <p>I Think You Got Lost Between The Shapes.</p>
      <p>The Page You Were Looking For Couldn't Be Found.</p>

      <Link href={'/'}>go back to home page</Link>
        
    </div>
      </div>
    </div>
  )
}

export default NotFound
