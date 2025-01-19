'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    else if (!/^\+?[1-9]\d{1,14}$|^\d{10,15}$/.test(formData.phone)) newErrors.phone = 'Phone number is invalid'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true)
      try {
        const response = await fetch('/api/contactEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })

        const result = await response.json()

        if (response.ok) {
          setSuccessMessage(true)
          setFormData({ name: '', email: '', message: '', phone: '' })
          setErrors({})
        } else {
          throw new Error(result.message || 'Failed to submit form')
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('An error occurred. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div id='contact' className="flex justify-center items-center bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-2xl mt-8 sm:mt-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-primary text-white text-center p-6">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p>Fill out the form below to get in touch with us.</p>
          </div>
          {successMessage ? (
            <div className="p-6 text-center bg-green-100 text-green-700 rounded-lg mt-6">
              <p>Email sent successfully! Thank you for reaching out, we will contact you soon.</p>
              <button
                onClick={() => {
                  setSuccessMessage(false)
                  router.refresh()
                }}
                className="mt-3 text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-4 py-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {['name', 'email', 'phone'].map((field) => (
                  <div key={field} className="relative">
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      className={`peer form-input border-0 p-3 rounded-lg w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 ${
                        errors[field] ? 'border-red-500' : ''
                      }`}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder=" "
                      aria-invalid={errors[field] ? 'true' : 'false'}
                      aria-describedby={`${field}-error`}
                    />
                    <label
                      htmlFor={field}
                      className="absolute left-3 -top-2.5 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      {field === 'name' ? 'Your Name' : field === 'email' ? 'Your Email' : 'Your Phone'}
                    </label>
                    {errors[field] && (
                      <p id={`${field}-error`} className="text-red-500 text-xs mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className="relative">
                <textarea
                  className={`peer form-textarea border-0 p-3 rounded-lg w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows={4}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby="message-error"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-2.5 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Message
                </label>
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-xs mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors duration-300"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
