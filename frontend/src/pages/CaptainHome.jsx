import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ConfirmRidePopup'


const CaptainHome = () => {
    //Ride Notification panel
    const [ridePopupPanel, setRidePopupPanel] = useState(true) //set true for now
    const ridePopupPanelRef = useRef(null);
    //Ride Notification panel
    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false) 
    const confirmRidePopupPanelRef = useRef(null);

    //Slide Ride Notification panel if avaiable
    useGSAP(function () {
        if (ridePopupPanel) {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(0)'
            })

        } else {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }

    }, [ridePopupPanel])

    //Slide Ride Notification panel if avaiable
    useGSAP(function () {
        if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(0)'
            })

        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }

    }, [confirmRidePopupPanel])
    return (
        <div className='h-screen'>
            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className="h-12" src="https://pngimg.com/uploads/uber/uber_PNG27.png" />
                <Link to='/home' className='h-10 w-10 flex items-center bg-white justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='h-3/5'>
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-2/5 p-6'>
                <CaptainDetails />
            </div>
            {/* Ride Notification panel */}
            <div ref={ridePopupPanelRef} className='translate-y-full fixed w-full z-10 bg-white px-3 py-6 pt-12 bottom-0'>
                <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
            </div>
             {/* Ride confirmation panel */}
            <div ref={confirmRidePopupPanelRef} className='h-screen translate-y-full fixed w-full z-10 bg-white px-3 py-6 pt-12 bottom-0'>
                <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
            </div>
        </div>
    )
}

export default CaptainHome