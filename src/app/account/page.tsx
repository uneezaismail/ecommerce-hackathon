import Login from '@/components/Login'
import Register from '@/components/Register'
import React from 'react'

const Account = () => {
  return (
    <section className='w-full'>
        
    <div className='w-fit mx-auto flex flex-col md:flex-row gap-y-24 md:gap-y-20 py-16'>
<div>
    <Login/>
</div>
<div>
    <Register/>
</div>
    </div>
    </section>
  )
}

export default Account