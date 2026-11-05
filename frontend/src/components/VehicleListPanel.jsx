import React from 'react'

function VehicleListPanel(props) {
    return (
        <div>
            <span onClick={() => props.setSelectedVehiclePanelOpen(false)} className='p-1 w-[93%] absolute text-center top-0'><i className="text-gray-400 text-3xl ri-arrow-down-wide-line"></i></span>
            <h2 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h2>
            <div  onClick={() => {
                        props.setSelectedVehiclePanelOpen(true)
                        props.setVehiclePanelOpen(false) 
                        }
                    }
                            className='border-white active:border-black border-2 rounded-2xl mb-3 flex items-center justify-between w-full p-3'>
                <img className='h-12' src="https://www.redtaxi.co.in/images/cabs/red-sedan-taxi.webp" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>UberGO <span><i className="ri-user-fill">4</i></span></h4>
                    <h5 className='font-medium text-sm'>10 min away</h5>
                    <p className='font-normal text-xm text-gray-600'>Affordable  ride</p>
                </div>
                <h3 className='text-lg font-semibold'>₹ 199.99</h3>
            </div>
            <div className='border-white active:border-black border-2 rounded-2xl mb-3 flex items-center justify-between w-full p-3'>
                <img className='h-12' src="https://www.bajajauto.com/-/media/globalbajajauto/common-media/blogs/kenya/74" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>Uber Auto <span><i className="ri-user-fill">3</i></span></h4>
                    <h5 className='font-medium text-sm'>7 min away</h5>
                    <p className='font-normal text-xm text-gray-600'>Affordable Auto ride</p>
                </div>
                <h3 className='text-lg font-semibold'>₹ 100.99</h3>
            </div>
            <div className='border-white active:border-black border-2 rounded-2xl mb-3 flex items-center justify-between w-full p-3'>
                <img className='h-12' src="https://imgd.aeplcdn.com/642x336/n/cw/ec/103183/raider-125-right-side-view-12.png?isig=0&q=80" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill">1</i></span></h4>
                    <h5 className='font-medium text-sm'>5 min away</h5>
                    <p className='font-normal text-xm text-gray-600'>Affordable motorcycle ride</p>
                </div>
                <h3 className='text-lg font-semibold'>₹ 50.99</h3>
            </div>
        </div>
    )
}

export default VehicleListPanel