import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
function Lowerfooter() {
  return (
    <div className='flex flex-row justify-center bg-neutral-900 h-16'>
            <h1 className='text-white mt-6 hover:text-yellow-700'><FaFacebookF/></h1>
            <h1 className='text-white mt-6 ml-16 hover:text-yellow-700'><BsInstagram /></h1>
    </div>
  );
}

export default Lowerfooter
