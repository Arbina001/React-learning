import React, {useEffect,useState} from "react";

export function Usehook (){
const [windowWidth, setwindowWidth] = useState (window.innerWidth)

const handleresize =()=> {
  setwindowWidth(window.innerWidth)
}
useEffect (()=> {
  window.addEventListener ('resize', handleresize)

}, [])

return (
  <>
{windowWidth}
  </>
)

} 

