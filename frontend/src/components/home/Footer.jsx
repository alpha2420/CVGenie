import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full py-10 px-6 md:px-16 lg:px-24 xl:px-40 mt-20" style={{ backgroundColor: '#FEF9ED', borderTop: '1px solid #E5E7EB' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
                </div>

                <div className="flex items-center gap-8 text-sm" style={{ color: '#8B7355' }}>
                    <a href="#" className="hover:opacity-70 transition">Privacy Policy</a>
                    <a href="#" className="hover:opacity-70 transition">Terms of Service</a>
                    <a href="#" className="hover:opacity-70 transition">Contact Us</a>
                </div>

                <p className="text-sm" style={{ color: '#8B7355' }}>
                    © {new Date().getFullYear()} AI Resume Builder. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
