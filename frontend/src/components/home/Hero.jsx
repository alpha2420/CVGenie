import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = () => {

    const { user } = useSelector(state => state.auth)

    const [menuOpen, setMenuOpen] = React.useState(false);

    const logos = []

    return (
        <>
            <div className="min-h-screen pb-20" style={{ backgroundColor: '#FEF9ED' }}>
                {/* Navbar */}
                <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm fade-in">
                    <a href="#">
                        <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
                    </a>

                    <div className="hidden md:flex items-center gap-8 transition duration-500" style={{ color: '#5D524B' }}>
                        <a href="#" className="hover:opacity-70 transition" style={{ color: '#8B7355' }}>Home</a>
                        <a href="#features" className="hover:opacity-70 transition" style={{ color: '#8B7355' }}>Features</a>
                        <a href="#testimonials" className="hover:opacity-70 transition" style={{ color: '#8B7355' }}>Testimonials</a>
                        <a href="#cta" className="hover:opacity-70 transition" style={{ color: '#8B7355' }}>Contact</a>
                    </div>

                    <div className="flex gap-2">
                        <Link to='/app?state=register' className="hidden md:block px-6 py-2 active:scale-95 transition-all rounded-full text-white hover:shadow-lg" style={{ backgroundColor: '#8B7355' }} hidden={user}>
                            Get started
                        </Link>
                        <Link to='/app?state=login' className="hidden md:block px-6 py-2 border active:scale-95 transition-all rounded-full hover:shadow-md" style={{ borderColor: '#A68A6E', color: '#5D524B' }} hidden={user}>
                            Login
                        </Link>
                        <Link to='/app' className='hidden md:block px-8 py-2 active:scale-95 transition-all rounded-full text-white hover:shadow-lg' style={{ backgroundColor: '#8B7355' }} hidden={!user}>
                            Dashboard
                        </Link>
                    </div>

                    <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="#5D524B" strokeWidth="2" className="lucide lucide-menu" >
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 z-[100] backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} style={{ backgroundColor: 'rgba(93, 82, 75, 0.95)' }} >
                    <a href="#" className="text-white">Home</a>
                    <a href="#features" className="text-white">Features</a>
                    <a href="#testimonials" className="text-white">Testimonials</a>
                    <a href="#contact" className="text-white">Contact</a>
                    <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center transition text-white rounded-md flex" style={{ backgroundColor: '#8B7355' }} >
                        X
                    </button>
                </div>

                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 slide-up" style={{ color: '#5D524B' }}>
                    <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 blur-[100px] opacity-30" style={{ background: 'linear-gradient(135deg, #E8B4A0 0%, #D89B88 100%)' }}></div>

                    {/* Headline + CTA */}
                    <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-16 md:leading-[70px]" style={{ color: '#5D524B' }}>
                        Build a <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #8B7355, #A68A6E)' }}>Professional Resume </span> That Helps You Stand Out and Get Hired
                    </h1>

                    <p className="max-w-md text-center text-base my-7" style={{ color: '#5D524B' }}>Create, edit and download professional resumes with AI-powered assistance.</p>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4 ">
                        <Link to='/app' className="text-white rounded-full px-9 h-12 m-1 flex items-center transition-all hover:shadow-lg hover:-translate-y-0.5" style={{ backgroundColor: '#8B7355', boxShadow: '0 0 0 1px #A68A6E' }}>
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>

                    </div>
                    {/* Resume Preview Image */}
                    <div className="mt-12 w-full max-w-4xl px-4 md:px-0">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#8B7355] to-[#A68A6E] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src="/resume-preview.png"
                                alt="Resume Preview"
                                className="relative rounded-xl shadow-2xl border border-white/20 w-full object-cover transition duration-500 group-hover:scale-[1.01]"
                            />
                        </div>
                    </div>

                    <p className="py-6 mt-14" style={{ color: '#8B7355' }}>Trusting by leading brands, including</p>

                    <div className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4" id="logo-container">
                        {logos.map((logo, index) => <img key={index} src={logo} alt="logo" className="h-6 w-auto max-w-xs opacity-60 hover:opacity-100 transition-opacity" />)}
                    </div>
                </div>
            </div>
            <style>
                {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

            * {
                font-family: 'Poppins', sans-serif;
            }
        `}
            </style>
        </>
    )
}

export default Hero
