'use client'
import Logger from '@/lib/logger';
import React, { ChangeEvent, FC, MouseEvent, useState } from 'react'

interface Props {
    close: () => void;
}

const ContactForm: FC<Props> = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSetSubmitting = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error('Failed to send');
            }
            setSubmitStatus('success');
            setFormData({ name: '', email: '', title: '', message: '' });
        } catch (e: unknown) {
            Logger.error('error submitting form!', e);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center z-30 backdrop-blur-none'>
            <div className='relative bg-background border-1 border-gray max-w-full'>
                <button onClick={props.close} className='absolute right-4 top-4 text-gray'>X</button>
                <div className='flex col p-5'>
                    <form>
                        <div className='mt-10 flex flex-row'>
                            <input
                                required
                                placeholder='Name'
                                type='text'
                                id='name'
                                name='name'
                                min={3}
                                maxLength={25}
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full h-8 border-1 z-20 border-gray placeholder:text-sm pl-5 font-extralight'
                            />
                            <input
                                required
                                placeholder='Email'
                                type='email'
                                name='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='ml-5 w-full h-8 border-1 z-20 border-gray placeholder:text-sm pl-5 font-extralight'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <input
                                required
                                placeholder='Title'
                                type='text'
                                id='title'
                                name='title'
                                minLength={3}
                                maxLength={25}
                                value={formData.title}
                                onChange={handleChange}
                                className='mt-5 w-1/2-10 h-8 border-1 z-20 border-gray placeholder:text-sm pl-5 font-extralight'
                            />
                            <textarea
                                required
                                placeholder='Message'
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                minLength={3}
                                maxLength={100}
                                className='mt-5 w-1/2-10 border-1 z-20 border-gray placeholder:text-sm pl-5 pt-2 font-extralight'
                            />
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`hover:bg-[#C778DD33] transition-colors border-1 border-${isSubmitting ? 'gray' : 'primary'} my-5 text-sm py-1 px-5`}
                                    onClick={handleSetSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </div>
                        {submitStatus === 'success' && (
                            <p className="text-green-600">Message sent successfully!</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-600">Failed to send message. Please try again.</p>
                        )}
                    </form>

                </div>
            </div>
        </div >
    )
}

export default ContactForm
