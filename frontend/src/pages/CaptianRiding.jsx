import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRidePanel from '../components/FinishRidePanel'

const CaptianRiding = () => {
    const [finishRidePanelOpen, setFinishRidePanelOpen] = useState(false)
    const finishRidePanelRef = useRef(null)
    //Slide driver conformation panel on click of any vehicle name
    useGSAP(function () {
        if (finishRidePanelOpen) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })

        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }

    }, [finishRidePanelOpen])
    return (
        <div className='h-screen'>

            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className="h-12" src="https://pngimg.com/uploads/uber/uber_PNG27.png" />
                <Link to='/captain/home' className='h-10 w-10 flex items-center bg-white justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='h-4/5'>
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-1/5 p-6 bg-yellow-600 flex items-center justify-between relative'
                onClick={() => {setFinishRidePanelOpen(true)}}
            >
                <h5 className='p-1 text-center w-[95%] absolute top-0'>
                    <i className="text-3xl text-black ri-arrow-up-wide-line"></i>
                </h5>
                <h4 className='text-xl font-semibold'>4 Km Away</h4>
                <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>
            {/* Ride Notification panel */}
            <div ref={finishRidePanelRef} className='translate-y-full fixed w-full z-10 bg-white px-3 py-6 pt-12 bottom-0'>
                <FinishRidePanel setFinishRidePanelOpen={setFinishRidePanelOpen} />
            </div>
        </div>
    )
}

export default CaptianRiding