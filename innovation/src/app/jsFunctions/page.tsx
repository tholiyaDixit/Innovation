import JsUseFullFunctionCard from '@/components/card/jsUseFullFunctionCard/JsUseFullFunctionCard'
import React from 'react'
import jsDateAndTime from '../../images/JavaScriptDateTime.webp'

const page = () => {
  return (
    <div className='flex justify-start items-center flex-wrap '>
      <JsUseFullFunctionCard img={jsDateAndTime} title={'Date And Time'} descriptions={"Vary use full date functions"} navigate={'jsFunctions/dateAndTime'} />
      <JsUseFullFunctionCard img={jsDateAndTime} title={'Date And Time'} descriptions={"Vary use full date functions"} navigate={'/#'} />
      <JsUseFullFunctionCard img={jsDateAndTime} title={'Date And Time'} descriptions={"Vary use full date functions"} navigate={'/#'} />
      <JsUseFullFunctionCard img={jsDateAndTime} title={'Date And Time'} descriptions={"Vary use full date functions"} navigate={'/#'} />
      <JsUseFullFunctionCard img={jsDateAndTime} title={'Date And Time'} descriptions={"Vary use full date functions"} navigate={'/#'} />
    </div>
  )
}

export default page
