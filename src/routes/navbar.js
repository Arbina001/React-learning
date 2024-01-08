import { Link } from "react-router-dom";


export function Nvbarpage (){
  return(
    <>
    <nav> 
<Link to= '/'>home</Link>
<Link to= '/about'>about</Link>
 </nav>
    </>
  );
}