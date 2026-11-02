import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'



const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const slidePanel = useRef(null)
  const panelCloseRef = useRef(null)

  //Slide section on click of any input
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(slidePanel.current, {
        height: '70%',
        opacity: 1,
        padding: 20,
        duration: 0.5 // Recommended: add a duration so it animates smoothly
      })

      gsap.to(panelCloseRef.current, {
        opacity: 1
      })

    } else {
      gsap.to(slidePanel.current, {
        height: '0%',
        opacity: 0,
        padding: 0,
        duration: 0.5
      })

      gsap.to(panelCloseRef.current, {
        opacity: 0
      })

    }
  }, [panelOpen]);

  //submit form action
  const submitHandler = (e) => {
    e.preventDefault()

  }
  return (
    <div className='h-screen relative overflow-hidden'>
      <h1 className='text-2xl font-bold absolute top-5 left-5'>Uber</h1>
      <div className='h-screen w-screen'>
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-screen flex flex-col justify-end absolute w-full top-0'>
        <div className='h-[30%] bg-white p-6 relative'>
          <span ref={panelCloseRef} className='absolute opacity-0 right-6 top-6 text-2xl' onClick={() => setPanelOpen(false)} >
            <i className="ri-arrow-down-wide-line"></i>
          </span>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 bg-gray-700 top-[45%] left-10 rounded-full"></div>
            <input
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder='Enter pick-up location'
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
            />
            <input
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder='Enter your destination location'
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
            />

          </form>
        </div>
        {/* slide panel for display address */}
        <div ref={slidePanel} className='h-[0%] bg-white'>
          <LocationSearchPanel />
        </div>
      </div>
      {/* vehicle list for an address */}
      <div className='fixed w-full z-10 bg-white px-3 py-8 bottom-0 translate-y-full'>
        <h2 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h2>
        <div className='border-white active:border-black border-2 rounded-2xl mb-3 flex items-center justify-between w-full p-3'>
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

    </div>
  )
}

export default Home