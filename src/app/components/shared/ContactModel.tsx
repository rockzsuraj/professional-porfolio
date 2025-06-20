'use client'

import React, { useState } from 'react'
import ContactForm from '../form/ContactForm';
import Button from '../ui/button';

const ContactModel = () => {
    const [modelOpen, setModelOpen] = useState(false)

    const handleContactForm = () => {
        setModelOpen(!modelOpen);
    }

    return (
        <div>
            <Button
                onClick={handleContactForm}
                disabled={false}
                className="mt-6"
            >
                Contact Me!!
            </Button>
            <div>
                {
                    modelOpen && (
                        <div className="flex">
                            <ContactForm close={handleContactForm} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ContactModel