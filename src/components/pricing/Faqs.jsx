import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"

const Faqs = () => {
  return (
    <>
      <Back title='FAQ' />
      {/* <section className='price padding'> */}
        {/* <div className='container grid'>
          {/* <PriceCard /> */}
        {/* </div> */} 
      {/* </section> */}
      <Faq />
    </>
  )
}

export default Faqs