import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice'

const Navbar = () => {

  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const logoutUser = () => {
    navigate('/')
    dispatch(logout())
  }

  return (
    <div className='shadow' style={{ backgroundColor: '#FEF9ED' }}>
      <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 transition-all' style={{ color: '#5D524B' }}>
        <Link to='/'>
          <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
        </Link>
        <div className='flex items-center gap-4 text-sm'>
          <p className='max-sm:hidden'>Hi, {user?.name}</p>
          <button onClick={logoutUser} className='border px-7 py-1.5 rounded-full active:scale-95 transition-all hover:opacity-80' style={{ backgroundColor: '#FEF9ED', borderColor: '#8B7355', color: '#8B7355' }}>Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
