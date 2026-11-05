import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehicleListPanel from '../components/VehicleListPanel'
import SelectedVehiclePanel from '../components/SelectedVehiclePanel'
import DriverDetailsPanel from '../components/DriverDetailsPanel'
import DriverConfrimationPanel from '../components/DriverConfrimationPanel'



const Home = () => {
	const [pickup, setPickup] = useState('')
	const [destination, setDestination] = useState('')
	//location list pannel state and ref
	const [panelOpen, setPanelOpen] = useState(false)
	const slidePanel = useRef(null)
	const panelCloseRef = useRef(null)

	//Vehicle panel state and ref
	const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
	const vehiclePanelRef = useRef(null)

	//Vehicle panel state and ref
	const [selectedVehiclePanelOpen, setSelectedVehiclePanelOpen] = useState(false);
	const selectedVehiclePanelRef = useRef(null)

	//Driver Details panel state and ref
	const [driverDetailsPanelOpen, setDriverDetailsPanelOpen] = useState(false);
	const driverDetailsPanelRef = useRef(null)

	//Driver confirmation panel state and ref
	const [driverConfirmPanelOpen, setDriverConfirmPanelOpen] = useState(false);
	const driverConfirmPanelRef = useRef(null)



	//Slide location list panel on click of any input
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

	//Slide vehicle list panel on click of any location address
	useGSAP(function () {
		if (vehiclePanelOpen) {
			gsap.to(vehiclePanelRef.current, {
				transform: 'translateY(0)'
			})

		} else {
			gsap.to(vehiclePanelRef.current, {
				transform: 'translateY(100%)'
			})
		}

	}, [vehiclePanelOpen])


	//Slide vehicle details panel on click of any vehicle name
	useGSAP(function () {
		if (selectedVehiclePanelOpen) {
			gsap.to(selectedVehiclePanelRef.current, {
				transform: 'translateY(0)'
			})

		} else {
			gsap.to(selectedVehiclePanelRef.current, {
				transform: 'translateY(100%)'
			})
		}

	}, [selectedVehiclePanelOpen])

	//Slide driver details panel on click of any vehicle name
	useGSAP(function () {
		if (driverDetailsPanelOpen) {
			gsap.to(driverDetailsPanelRef.current, {
				transform: 'translateY(0)'
			})

		} else {
			gsap.to(driverDetailsPanelRef.current, {
				transform: 'translateY(100%)'
			})
		}

	}, [driverDetailsPanelOpen])

	//Slide driver conformation panel on click of any vehicle name
	useGSAP(function () {
		if (driverConfirmPanelOpen) {
			gsap.to(driverConfirmPanelRef.current, {
				transform: 'translateY(0)'
			})

		} else {
			gsap.to(driverConfirmPanelRef.current, {
				transform: 'translateY(100%)'
			})
		}

	}, [driverConfirmPanelOpen])







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
				{/* slide panel to display address */}
				<div ref={slidePanel} className='h-[0%] bg-white'>
					<LocationSearchPanel setVehiclePanelOpen={setVehiclePanelOpen} setPanelOpen={setPanelOpen} />
				</div>
			</div>
			{/* vehicle panel for listing of available vehile for an address */}
			<div ref={vehiclePanelRef} className='fixed w-full z-10 bg-white px-3 py-8 pt-15 bottom-0 translate-y-full'>
				<VehicleListPanel setVehiclePanelOpen={setVehiclePanelOpen} setSelectedVehiclePanelOpen={setSelectedVehiclePanelOpen} />
			</div>
			{/* Selected vehicle detail panel */}
			<div ref={selectedVehiclePanelRef} className='fixed w-full z-10 bg-white px-3 py-6 pt-12 bottom-0 translate-y-full'>
				<SelectedVehiclePanel setSelectedVehiclePanelOpen={setSelectedVehiclePanelOpen} setDriverDetailsPanelOpen={setDriverDetailsPanelOpen}/>
			</div>
			
			{/* Driver details panel */}
			<div ref={driverDetailsPanelRef} className='fixed w-full z-10 bg-white px-3 py-6 pt-12 bottom-0 translate-y-full'>
				<DriverDetailsPanel setDriverDetailsPanelOpen={setDriverDetailsPanelOpen}/>
			</div>
			{/* Driver confirmation panel */}
			<div ref={driverConfirmPanelRef} className='fixed w-full z-10 bg-white px-3 py-6 pt-12 bottom-0 translate-y-full'>
				<DriverConfrimationPanel setDriverDetailsPanelOpen={setDriverDetailsPanelOpen} setDriverConfirmPanelOpen={setDriverConfirmPanelOpen} />
			</div>
		</div>
	)
}

export default Home