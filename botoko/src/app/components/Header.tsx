import React from 'react'
import Logo from '../../../public/logo-botoko.svg';
import Image from 'next/image';

function Header() {
  return (
    <div className='flex justify-between items-center p-5'>
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div>
        <p>Language</p>
      </div>

    </div>
  )
}

export default Header