// import React from 'react'

import { ArrowRightOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons"
import { Button } from "antd"



const DataCenter = () => {
  return (
    <div className="w-full  h-screen ">
        <div className="w-full min-h-450px md:w-[60%] mx-auto md:h-[150px] bg-violet-200 mt-10 flex ">
            <div className="max-w-[70%] mx-auto md:text-md py-4">
            <p className="w font-bold pt-2 ">Important changes to our Server and Data Center products</p>
            <p className=" ">We've ended sales for new server licenses and will end support for server on February 15, 2024 PT. We're continuing investment in Data Center <br />
                with several key improvements. <span className="underline text-blue-700"> <a href="#" className="hover:text-blue-500 hover:underline" >Learn what it means for you</a>
                 </span></p>
                
            </div>
            <div className="mr-10 mt-3"><CloseOutlined /></div>
        </div>
        <div className="w-full h-auto my-20" >
            <p className="text-center ">FREE 30 DAYS</p>
            <p className="ml-10 font-bold text-4xl md:text-center pt-10">For teams that require a self-managed solution</p>
        </div>
        <div className="max-w-[90%] h-auto mx-auto md:flex justify-center align-center gap-4  mt-5">
            <div className="w-[340px] h-[450px] bg-gray-100 text-center rounded-sm pt-5">
                <p className="mt-10 font-bold text-2xl">Data Center</p>
                <p className="font-bold text-4xl pt-10">USD 44,000</p>
                <p className="pt-5 text-lg">per year</p>
                <div>
                <input type="text" placeholder="500 users" className="w-[60%] h-8 mt-10 p-2 rounded-md"/>
                    <div className="mt-10">
                        <Button className="bg-violet-800 text-white font-bold h-10 text-xl">
                            Try it Free
                        </Button>
                    </div>
                    <p className="mt-10 pb-10 text-violet-700"><a href="#">Buy it now <span><ArrowRightOutlined /></span></a></p>
               
                
                </div>
            </div>
            <div className="h-[400px] mt-8 rounded-sm flex flex-col align-center justify-around -py-2">
                <p className="mx-auto"><span><CheckOutlined className='mr-2' /></span>Complete control of your environment</p>
                <p className="mx-auto"><span><CheckOutlined className='mr-2' /></span>Complete control of your environment</p>
                <p className="mx-auto"><span><CheckOutlined className='mr-2' /></span>Complete control of your environment</p>
                <p className="mx-auto"><span><CheckOutlined className='mr-2' /></span>Complete control of your environment</p>
                <p className="mx-auto"><span><CheckOutlined className='mr-2' /></span>Complete control of your environment</p>
                <p className="mx-auto"><span><CheckOutlined className='mr-2' /></span>Complete control of your environment</p>
                <p className="mx-auto" ><span><CheckOutlined className='mr-2' /></span>Complete control of your environment</p>
                <p className="mx-auto"><span><CheckOutlined className='mr-2' /></span>Complete control of your environment</p>
                <p className="mx-auto"><span><CheckOutlined className='mr-2' /></span>Complete control of your environment</p>


            </div>

        </div>
    </div>
  )
}

export default DataCenter