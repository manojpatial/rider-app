import React from 'react'

function CaptainDetails() {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className="h-10 w-10 object-cover rounded-full" src="https://thumb.photo-ac.com/11/112ef58778fad94852fe9c290ec77a90_t.jpeg" alt="" />
                    <h3 className='text-lg font-medium'>Manoj Cap</h3>

                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹499.99</h4>
                    <p className="text-sm text-gray-600">Earned</p>
                </div>
            </div>
            <div className='flex justify-between gap-5 items-start p-3 bg-gray-200 rounded-xl mt-10'>
                <div className='text-center'>
                    <i className="text-3xl mb-3 font-thin ri-history-fill   "></i>
                    <h5 className="text-lg font-medium">10.2</h5>
                    <p className="text-sm text-gray-600">Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-3 font-thin ri-speed-up-line  "></i>
                    <h5 className="text-lg font-medium">20 KM</h5>
                    <p className="text-sm text-gray-600">Today</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-3 font-thin ri-booklet-line   "></i>
                    <h5 className="text-lg font-medium">5</h5>
                    <p className="text-sm text-gray-600">Rides</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails