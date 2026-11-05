import React from 'react'
import { Link } from 'react-router-dom'

const FinishRidePanel = (props) => {
    return (
        <div>
            <h5 onClick={() => { props.setFinishRidePanelOpen(false) }} className='p-1 text-center w-[93%] absolute top-0'>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this ride to start!</h3>
            <div className='flex items-center justify-between mt-3 bg-amber-200 rounded-lg px-2 py-3'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://img.magnific.com/free-photo/fair-haired-woman-looking-with-pleased-calm-expression_176420-15145.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    <h2 className='text-xl font-medium'>Riya</h2>
                </div>
                <h5 className='text-lg font-semibold'>3 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b border-gray-300'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm-mt-text-gray-600'>Kankariya Talab, Bhopal</p> </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b border-gray-300'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm-mt-1 text-gray-600'>Kankariya Talab, Bh</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b border-gray-300'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>193.20 </h3>
                            <p className='text-sm-mt-1text-gray-600'>Cash Cash</p>

                        </div>
                    </div>
                </div>
                <div className='mt-6 w-full'>
                    <Link to='/captain/home' className='w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>
                </div>
            </div>
        </div>
    )
}

export default FinishRidePanel