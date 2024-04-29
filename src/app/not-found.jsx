import Link from "next/link"

 

function NotFound() {
  return (
    <div style={{paddingTop:'100px'}}>
      <h1>page not found </h1>

      <Link href={'/'}>go to home page</Link>
        
    </div>
  )
}

export default NotFound
