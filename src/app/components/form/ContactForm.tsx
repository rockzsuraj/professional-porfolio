import React, { FC, useState } from 'react'

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
    // const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSetSubmitting = () => {
        setIsSubmitting(true)
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center z-30 backdrop-blur-none'>
            <div className='relative bg-background border-1 border-gray max-w-full'>
                <button onClick={props.close} className='absolute right-4 top-4 text-gray'>X</button>
                <div className='flex col p-5'>
                    <form>
                        <div className='mt-10 flex flex-row'>
                            <input
                                placeholder='Name'
                                type='text'
                                id='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full h-8 border-1 z-20 border-gray placeholder:text-sm pl-5 font-extralight'
                            />
                            <input
                                placeholder='Email'
                                type='email'
                                id='name'
                                value={formData.email}
                                onChange={handleChange}
                                className='ml-5 w-full h-8 border-1 z-20 border-gray placeholder:text-sm pl-5 font-extralight'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <input
                                placeholder='Title'
                                type='text'
                                id='title'
                                value={formData.title}
                                onChange={handleChange}
                                className='mt-5 w-1/2-10 h-8 border-1 z-20 border-gray placeholder:text-sm pl-5 font-extralight'
                            />
                            <input
                                placeholder='Message'
                                type='text'
                                id='title'
                                value={formData.message}
                                onChange={handleChange}
                                className='mt-5 w-1/2-10 h-40 border-1 z-20 border-gray placeholder:text-sm pl-5 font-extralight'
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
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ContactForm
