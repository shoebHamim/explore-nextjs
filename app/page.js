"use client"

import { useEffect, useState } from "react"
import Movie from "./Movie"

export default function Home() {
const [data,setData]=useState([])
useEffect(()=>{
fetch(`
 https://api.themoviedb.org/3/movie/popular?api_key=46345f7c7079179c2975dbbba8f9cb47`)
 .then(res=>res.json())
 .then(data=>setData(data))
},[])
  return (
    <main >

      <div className="grid gap-16 grid-cols-fluid">
      {data.results?.map(m=>
        <Movie key={m.id} movie={m}></Movie>)}
      </div>
      
      
    </main>
  )
}
