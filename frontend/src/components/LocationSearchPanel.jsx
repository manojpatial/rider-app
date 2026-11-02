import React from 'react'

const LocationSearchPanel = () => {
    const locations = [
        "Flat 12 A, Hollywood's Heights",
        "Ward 7, Modern city, Kurali",
        "Kharar, near sunny enclave",
        "Kurali, bus stand"
    ]
    return (
        <div>
            {
                locations.map((location, index) => {
                    return (
                        <div key={index} className='flex items-center justify-start gap-4 my-2 border-2 rounded-xl border-gray-50 active:border-black p-3'>
                            <span className='bg-[#eee] w-8 h-8 rounded-full flex items-center justify-center'><i className="ri-map-pin-2-line"></i></span>
                            <h4 className='font-medium'>{location}</h4>
                        </div>
                    )
                })  
            }

        </div>
    )
}

export default LocationSearchPanel