import React, { useEffect, useState } from "react";

export  function Example (){
  const [resourceType,setResourceType] =useState('posts')
const[item,setitem]=useState([])
  console.log('render')

  useEffect (()=> {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json =>setitem(json))
  }, [resourceType]) 
  return (
    <>
    <div>
      <button onClick={ () =>setResourceType('posts')} >Posts</button>
      <button onClick={ () =>setResourceType('comments')} >comments</button>
      <button onClick={ () =>setResourceType('albums')} >albums</button>
      <h1>{resourceType}</h1>

      {item.map(item=>{  
        return (<p>{JSON.stringify(item)}</p>)
      })}
      </div>

    </>
  )
}