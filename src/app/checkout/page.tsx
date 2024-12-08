import React from 'react'
import Billing from '../../components/Billing'
import Subtotal from '../../components/Subtotal'
import Delivery from '../../components/ourDelivery'
import NavImage from '../../components/NavImage'

const Checkout = () => {
  return (
    <section>
        <NavImage heading={"Checkout"} path={"Home"} currentPage={"Checkout"}/>
    <div className='md:justify-between xl:justify-center gap-y-10 my-14 flex flex-col mx-auto lg:flex-row'>
        <div><Billing/></div>
        <div><Subtotal/></div>
    </div>
    <div><Delivery/></div>
    </section>
  )
}

export default Checkout