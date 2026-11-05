import React from 'react'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptianRiding from './pages/CaptianRiding'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/user/riding" element={<Riding />} />
                <Route path="/user/signup" element={<UserSignup />} />
                <Route path="/captain/login" element={<CaptainLogin />} />
                <Route path="/captain/signup" element={<CaptainSignup />} />
                <Route path="/home" element=
                    {
                        <UserProtectWrapper>
                            <Home />
                        </UserProtectWrapper>
                    }
                />
                <Route path="/captain/home" element=
                    {
                        <CaptainProtectWrapper>
                            <CaptainHome />
                        </CaptainProtectWrapper>
                    }
                />
                <Route path="/user/logout" element=
                    {
                        <UserProtectWrapper>
                            <UserLogout />
                        </UserProtectWrapper>
                    }
                />
                <Route path="/captain/logout" element=
                    {
                        <CaptainProtectWrapper>
                            <CaptainLogout />
                        </CaptainProtectWrapper>
                    }
                />
                <Route path="/captain-riding" element=
                    {
                        <CaptainProtectWrapper>
                            <CaptianRiding />
                        </CaptainProtectWrapper>
                    }
                />
            </Routes>


        </div>
    )
}

export default App