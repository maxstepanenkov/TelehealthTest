import React from 'react';

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className=''>
      <div className='flex h-48 bg-gradient-to-r from-pink-300 to-pink-100 w-auto justify-center items-center'>
        <div className='relative -top-12'>
          Some LOGO
        </div>
      </div>
      <div className='h-full w-6/12 relative -top-24 justify-items-center m-auto'>
        {children}
      </div>
      <div className='flex relative bottom-5 h-16 bg-blue-200 w-6/12 m-auto items-center border-blue-800 rounded'>
        <div className='w-6/12 text-center'><p>LOGO</p></div>
        <div className='w-6/12 pl-1 pr-20 text-[11px] font-bold'>Your Information Is Protected Under Federal Law</div>
      </div>
    </div>
  )
}

export default FormContainer