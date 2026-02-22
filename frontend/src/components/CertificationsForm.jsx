import { Award, Plus, X } from 'lucide-react'
import React, { useState } from 'react'

const CertificationsForm = ({ data = [], onChange }) => {
    const [newCert, setNewCert] = useState("")

    const addCert = () => {
        if (newCert.trim() && !data.includes(newCert.trim())) {
            onChange([...data, newCert.trim()])
            setNewCert("")
        }
    }

    const removeCert = (indexToRemove) => {
        onChange(data.filter((_, index) => index !== indexToRemove))
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addCert();
        }
    }
    return (
        <div className='space-y-4'>
            <div>
                <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'> Certifications </h3>
                <p className='text-sm text-gray-500'> Add your licenses and certifications </p>
            </div>

            <div className="flex gap-2">
                <input type="text" placeholder="Enter a certification (e.g., AWS Certified Solutions Architect)" className='flex-1 px-3 py-2 text-sm'
                    onChange={(e) => setNewCert(e.target.value)}
                    value={newCert}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={addCert} disabled={!newCert.trim()} className='flex items-center gap-2 px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
                    <Plus className="size-4" /> Add
                </button>
            </div>

            {data.length > 0 ? (
                <div className='flex flex-wrap gap-2'>
                    {data.map((cert, index) => (
                        <span key={index} className='flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm'>
                            {cert}
                            <button onClick={() => removeCert(index)} className="ml-1 hover:bg-purple-200 rounded-full p-0.5 transition-colors">
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                    ))}
                </div>
            )
                :
                (
                    <div className='text-center py-6 text-gray-500'>
                        <Award className="w-10 h-10 mx-auto mb-2 text-gray-300" />
                        <p>No certifications added yet.</p>
                        <p className="text-sm">Add your professional certifications above.</p>
                    </div>
                )}

        </div>
    )
}

export default CertificationsForm
