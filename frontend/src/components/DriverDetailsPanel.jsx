import React from 'react'

function DriverDetailsPanel(props) {
    return (
        <div>
            <h5 onClick={() => props.setDriverDetailsPanelOpen(false)} className='p-1 text-center w-[93%] absolute top-0'>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl text-center font-semibold mb-5'>Driver Details</h3>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" />
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

            </div>
        </div>
    )
}

export default DriverDetailsPanel