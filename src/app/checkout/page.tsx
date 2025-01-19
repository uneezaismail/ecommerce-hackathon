import React from 'react'
import Billing from '../../components/Billing'
import Delivery from '../../components/ourDelivery'
import NavImage from '../../components/NavImage'

const Checkout = () => {
  return (
    <section>
        <NavImage heading={"Checkout"} path={"Home"} currentPage={"Checkout"}/>
    <div className='mx-auto max-w-screen-xl gap-y-10 my-14 '>
        <div><Billing /></div>
    </div>
    <div><Delivery/></div>
    </section>
  )
}

export default Checkout