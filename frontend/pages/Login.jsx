import { Lock, Mail, User2Icon } from 'lucide-react'
import React from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const Login = () => {

    const dispatch = useDispatch()
    const query = new URLSearchParams(window.location.search)
    const urlState = query.get('state')
    const [state, setState] = React.useState(urlState || "login")

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api.post(`/api/users/${state}`, formData)
            dispatch(login(data))
            localStorage.setItem('token', data.token)
            toast.success(data.message)
        } catch (error) {
            const message = error?.response?.data?.message || error.message
            if (message === "Network Error") {
                toast.error("Connecting to server... (this may take up to 1 minute to wake up)", {
                    duration: 6000,
                    icon: '⏳'
                })
            } else {
                toast.error(message)
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    return (
        <div className='flex items-center justify-center min-h-screen fade-in' style={{ backgroundColor: '#FEF9ED' }}>
            <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border rounded-2xl px-8" style={{ backgroundColor: '#FEF9ED', borderColor: '#E8B4A0' }}>
                <h1 className="text-3xl mt-10 font-medium" style={{ color: '#5D524B' }}>{state === "login" ? "Login" : "Sign up"}</h1>
                <p className="text-sm mt-2" style={{ color: '#8B7355' }}>Please {state} to continue</p>
                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full border h-12 rounded-full overflow-hidden pl-6 gap-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8B4A0' }}>
                        <User2Icon size={16} color='#8B7355' />
                        <input type="text" name="name" placeholder="Name" className="border-none outline-none ring-0" value={formData.name} onChange={handleChange} required />
                    </div>
                )}
                <div className="flex items-center w-full mt-4 border h-12 rounded-full overflow-hidden pl-6 gap-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8B4A0' }}>
                    <Mail size={13} color="#8B7355" />
                    <input type="email" name="email" placeholder="Email id" className="border-none outline-none ring-0" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="flex items-center mt-4 w-full border h-12 rounded-full overflow-hidden pl-6 gap-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#E8B4A0' }}>
                    <Lock size={13} color="#8B7355" />
                    <input type="password" name="password" placeholder="Password" className="border-none outline-none ring-0" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="mt-4 text-left" style={{ color: '#8B7355' }}>
                    <button className="text-sm" type="reset">Forget password?</button>
                </div>
                <button type="submit" className="mt-2 w-full h-11 rounded-full text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#8B7355' }}>
                    {state === "login" ? "Login" : "Sign up"}
                </button>
                <p onClick={() => setState(prev => prev === "login" ? "register" : "login")} className="text-sm mt-3 mb-11" style={{ color: '#8B7355' }}>{state === "login" ? "Don't have an account?" : "Already have an account?"} <a href="#" className="hover:underline" style={{ color: '#A68A6E' }}>click here</a></p>
            </form>
        </div>
    )
}

export default Login
