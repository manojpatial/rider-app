import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const token = localStorage.getItem('captainToken')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).finally(() => {
            // Always clear the token and redirect, even if the backend errors out
            localStorage.removeItem('captainToken')
            navigate('/captain/login')
        })
    }, [token, navigate])

    return (
        <div>Logging out...</div>
    )
}

export default CaptainLogout