import React from 'react'
import Billing from '../../components/Billing'
import NavImage from '../../components/NavImage'

const Checkout = () => {
  return (
    <section className='border-b'>
        <NavImage heading={"Checkout"} path={"Home"} currentPage={"Checkout"}/>
    <div className='mx-auto max-w-screen-xl gap-y-10 my-14 '>
        <div><Billing /></div>
    </div>
    </section>
  )
}

export default Checkout