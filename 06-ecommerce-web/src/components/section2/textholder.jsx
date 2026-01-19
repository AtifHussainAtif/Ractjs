import React from 'react'
import Links from '../navbar/links'

const Textholder = () => {
  return (
    <div className='flex justify-between pb-15'>
        <div>
         <h1 className='text-3xl'>New Products</h1>
        </div>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Textholder