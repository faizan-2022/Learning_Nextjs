"use client"
import React, { useState } from 'react'
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';

const page = () => {
  const [count, setCount] = useState(0);

  const handleClick = async ()=>{
    let data = {
      name: "Faizan",
      role: "Coder"
    }

    try{
      let a = await fetch("/api/add/", {method: "POST", headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
      let res = await a.json();
      console.log(res);
    }catch(err){
      console.log(err)
    }

  }

  return (
    <>
    <div>
{/* // Usage of Script */}
      <Script>
      {`
      alert("Welcome to the home page")
      `}
    </Script>

    <NavBar style={{marginBottom:"10px"}}/>
      <h1 style={{marginBottom:"10px"}}>{count}</h1>

      <button style={{padding:"10px", border:"2px solid white", borderRadius:"25px", marginBottom:"10px"}} onClick={()=>setCount(count+1)} >Click Me</button>


      <ul style={{marginBottom:"10px"}}>
      // Usage of Link
       <Link href="/about"> <li>about</li> </Link>
       {/* <a href="/about">about</a> */}
      </ul>

      {/* // Usage of Image */}
      <Image style={{marginBottom:"10px"}} width={100} height={100} src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg" alt="image" />

    </div>

    {/* // Creating an API in NextJs */}
    <div className='text-x1 font-bold'>
      <h1>Creating an API in NextJs</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>

    </>
  )
}

export default page