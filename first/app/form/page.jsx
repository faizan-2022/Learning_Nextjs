"use client"
import React, { useRef } from 'react'
import { submitAction } from '@/app/actions/form'

const page = () => {

    const ref = useRef();

  return (
    <div className='w-2/3 mx-auto my-12'>
      <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
        <div className='my-6'>
        <label htmlFor="name">Name</label>
            <input name='name' id='name' className='text-black mx-4' type="text"/>
        </div>
        <div className='my-6'>
        <label htmlFor="address">Address</label>
            <input name='address' id='address' className='text-black mx-4' type="text"/>
        </div>
        <div className='my-6'>
            <button className='border border-white px-3'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default page