import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'
import { CATEGORIES } from '../data/categoryMockData'

const Dashboard = () => {

  const { user, token } = useSelector(state => state.auth)

  const colors = ["#D89B88", "#E8B4A0", "#A68A6E", "#C8AA88", "#8B7355"]
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get('/api/users/resumes', { headers: { Authorization: token } })
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (event) => {
    try {
      event.preventDefault()
      const { data } = await api.post('/api/resumes/create', { title }, { headers: { Authorization: token } })
      setAllResumes([...allResumes, data.resume])
      setTitle('')
      setShowCreateResume(false)
      // Navigate with category so the builder loads the right mock data
      navigate(`/app/builder/${data.resume._id}?category=${selectedCategory}`)
      setSelectedCategory('')
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId)
    setShowCreateResume(true)
  }

  const handleCreateResumeClick = () => {
    setSelectedCategory('')
    setShowCreateResume(true)
  }

  const uploadResume = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await api.post('/api/ai/upload-resume', { title, resumeText }, { headers: { Authorization: token } })
      setTitle('')
      setResume(null)
      setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const editTitle = async (event) => {
    try {
      event.preventDefault()
      const { data } = await api.put(`/api/resumes/update`, { resumeId: editResumeId, resumeData: { title } }, { headers: { Authorization: token } })
      setAllResumes(allResumes.map(resume => resume._id === editResumeId ? { ...resume, title } : resume))
      setTitle('')
      setEditResumeId('')
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }

  }

  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this resume?')
      if (confirm) {
        const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, { headers: { Authorization: token } })
        setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
        toast.success(data.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }

  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  return (
    <div style={{ backgroundColor: '#FEF9ED', minHeight: '100vh' }}>
      <div className='max-w-7xl mx-auto px-4 py-8'>

        <p className='text-2xl font-medium mb-6 sm:hidden' style={{ color: '#5D524B' }}>Welcome, {user?.name}</p>

        <div className='flex gap-4 '>
          <button onClick={handleCreateResumeClick} className='w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border border-dashed group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{ backgroundColor: '#FEF9ED', borderColor: '#D89B88', color: '#8B7355' }}>
            <PlusIcon className='size-11 transition-all duration-300 p-2.5 text-white rounded-full' style={{ background: 'linear-gradient(135deg, #D89B88, #E8B4A0)' }} />
            <p className='text-sm group-hover:opacity-80 transition-all duration-300'>Create Resume</p>
          </button>
          <button onClick={() => setShowUploadResume(true)} className='w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border border-dashed group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{ backgroundColor: '#FEF9ED', borderColor: '#A68A6E', color: '#8B7355' }}>
            <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 text-white rounded-full' style={{ background: 'linear-gradient(135deg, #A68A6E, #C8AA88)' }} />
            <p className='text-sm group-hover:opacity-80 transition-all duration-300'>Upload Existing</p>
          </button>
        </div>

        {/* Category Templates Section */}
        <div className='mt-8'>
          <h2 className='text-lg font-semibold mb-1' style={{ color: '#5D524B' }}>Start from a Template</h2>
          <p className='text-sm mb-4' style={{ color: '#A68A6E' }}>Choose a category to get a pre-filled resume you can customize</p>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3'>
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className='flex flex-col items-center justify-center gap-2 p-4 py-6 rounded-xl border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer group'
                  style={{ backgroundColor: cat.bg, borderColor: cat.color + '30' }}
                >
                  <div className='p-2.5 rounded-full transition-transform duration-300 group-hover:scale-110' style={{ backgroundColor: cat.color + '15' }}>
                    <Icon className='size-6' style={{ color: cat.color }} />
                  </div>
                  <p className='text-sm font-medium text-center' style={{ color: cat.color }}>{cat.name}</p>
                </button>
              );
            })}
          </div>
        </div>

        <hr className='my-6' style={{ borderColor: '#E8B4A0' }} />

        {/* My Resumes */}
        {allResumes.length > 0 && (
          <div>
            <h2 className='text-lg font-semibold mb-4' style={{ color: '#5D524B' }}>My Resumes</h2>
            <div className="grid grid-cols-2 sm:flex flex-wrap gap-4 ">
              {allResumes.map((resume, index) => {
                const baseColor = colors[index % colors.length];
                return (
                  <button key={index} onClick={() => navigate(`/app/builder/${resume._id}`)} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer' style={{ background: `linear-gradient(135deg, ${baseColor}15, ${baseColor}40)`, borderColor: baseColor + '50' }}>

                    <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all " style={{ color: baseColor }} />
                    <p className='text-sm group-hover:scale-105 transition-all  px-2 text-center' style={{ color: baseColor }}>{resume.title}</p>
                    <p className='absolute bottom-1 text-[11px] transition-all duration-300 px-2 text-center' style={{ color: baseColor + 'CC' }}>
                      Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                    </p>
                    <div onClick={e => e.stopPropagation()} className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                      <TrashIcon onClick={() => deleteResume(resume._id)} className="size-7 p-1.5 rounded transition-colors" style={{ color: '#5D524B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = baseColor + '30'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'} />
                      <PencilIcon onClick={() => { setEditResumeId(resume._id); setTitle(resume.title) }} className="size-7 p-1.5 rounded transition-colors" style={{ color: '#5D524B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = baseColor + '30'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'} />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Create Resume Modal with Category Picker */}
        {showCreateResume && (
          <form onSubmit={createResume} onClick={() => { setShowCreateResume(false); setSelectedCategory('') }} className='fixed inset-0 backdrop-blur z-10 flex items-center justify-center' style={{ backgroundColor: 'rgba(93, 82, 75, 0.7)' }}>
            <div onClick={e => e.stopPropagation()} className='relative border shadow-md rounded-lg w-full max-w-md p-6' style={{ backgroundColor: '#FEF9ED' }}>
              <h2 className='text-xl font-bold mb-4' style={{ color: '#5D524B' }}>Create a Resume</h2>

              {/* Category Selection */}
              <p className='text-sm font-medium mb-2' style={{ color: '#5D524B' }}>Choose a category</p>
              <div className='grid grid-cols-3 gap-2 mb-4'>
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className='flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 transition-all duration-200 cursor-pointer'
                      style={{
                        backgroundColor: isSelected ? cat.color + '15' : '#FEF9ED',
                        borderColor: isSelected ? cat.color : '#E8B4A0',
                        transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                      }}
                    >
                      <Icon className='size-5' style={{ color: isSelected ? cat.color : '#A68A6E' }} />
                      <span className='text-xs font-medium' style={{ color: isSelected ? cat.color : '#8B7355' }}>{cat.name}</span>
                    </button>
                  );
                })}
              </div>

              <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4' required />

              <button disabled={!selectedCategory} className='w-full py-2 text-white rounded transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed' style={{ backgroundColor: '#8B7355' }}>Create Resume</button>
              <XIcon className='absolute top-4 right-4 cursor-pointer transition-colors hover:opacity-70' style={{ color: '#8B7355' }} onClick={() => { setShowCreateResume(false); setTitle(''); setSelectedCategory('') }} />
            </div>
          </form>
        )
        }

        {showUploadResume && (
          <form onSubmit={uploadResume} onClick={() => setShowUploadResume(false)} className='fixed inset-0 backdrop-blur z-10 flex items-center justify-center' style={{ backgroundColor: 'rgba(93, 82, 75, 0.7)' }}>
            <div onClick={e => e.stopPropagation()} className='relative border shadow-md rounded-lg w-full max-w-sm p-6' style={{ backgroundColor: '#FEF9ED' }}>
              <h2 className='text-xl font-bold mb-4' style={{ color: '#5D524B' }}>Upload Resume</h2>
              <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4' required />
              <div>
                <label htmlFor="resume-input" className="block text-sm" style={{ color: '#5D524B' }}>
                  Select resume file
                  <div className='flex flex-col items-center justify-center gap-2 border border-dashed rounded-md p-4 py-10 my-4 hover:border-opacity-80 cursor-pointer transition-colors' style={{ borderColor: '#8B7355', color: resume ? '#5D524B' : '#A68A6E' }}>
                    {resume ? (
                      <p style={{ color: '#5D524B' }}>{resume.name}</p>
                    ) : (
                      <>
                        <UploadCloud className='size-14 stroke-1' />
                        <p>Upload resume</p>
                      </>
                    )}
                  </div>
                </label>
                <input type="file" id='resume-input' accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])} />
              </div>
              <button disabled={isLoading} className='w-full py-2 text-white rounded transition-colors flex items-center justify-center gap-2 hover:opacity-90' style={{ backgroundColor: '#8B7355' }}>
                {isLoading && <LoaderCircleIcon className='animate-spin size-4 text-white' />}
                {isLoading ? 'Uploading...' : 'Upload Resume'}

              </button>
              <XIcon className='absolute top-4 right-4 cursor-pointer transition-colors hover:opacity-70' style={{ color: '#8B7355' }} onClick={() => { setShowUploadResume(false); setTitle('') }} />
            </div>
          </form>
        )
        }

        {editResumeId && (
          <form onSubmit={editTitle} onClick={() => setEditResumeId('')} className='fixed inset-0 backdrop-blur z-10 flex items-center justify-center' style={{ backgroundColor: 'rgba(93, 82, 75, 0.7)' }}>
            <div onClick={e => e.stopPropagation()} className='relative border shadow-md rounded-lg w-full max-w-sm p-6' style={{ backgroundColor: '#FEF9ED' }}>
              <h2 className='text-xl font-bold mb-4' style={{ color: '#5D524B' }}>Edit Resume Title</h2>
              <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4' required />

              <button className='w-full py-2 text-white rounded transition-colors hover:opacity-90' style={{ backgroundColor: '#8B7355' }}>Update</button>
              <XIcon className='absolute top-4 right-4 cursor-pointer transition-colors hover:opacity-70' style={{ color: '#8B7355' }} onClick={() => { setEditResumeId(''); setTitle('') }} />
            </div>
          </form>
        )
        }

      </div>
    </div>
  )
}

export default Dashboard
