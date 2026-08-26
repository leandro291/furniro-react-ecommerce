import React from 'react'
import emailjs from '@emailjs/browser';
import { ContactInputCard } from './contact-input-card'
import { useInputRefs } from '../../../hooks/use-inputs-ref';

export function ContactInput() {

    const name = useInputRefs();
    const email = useInputRefs();
    const subject = useInputRefs();
    const message = useInputRefs()

    const handleSubmit = (e) => {

        e.preventDefault();
        
        const nameValue = name.getValue()
        const emailValue = email.getValue()
        const subjectValue = subject.getValue()
        const messageValue = message.getValue()

        if (nameValue.trim() == ""){
            alert("Your name is required")
            return
        }

        if (!emailValue.includes("@")){
            alert("Your email is required")
            return
        }

        if (subjectValue.trim() == ""){
            alert("Your subject is required")
            return
        }

        if (messageValue.trim() == ""){
            alert("Your message is required")
            return
        }

        const formData = {
            name: nameValue,
            email: emailValue,
            subject: subjectValue,
            message: messageValue
        }

        emailjs
            .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formData, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    alert("Your email was sent successfully")
                    name.clear()
                    email.clear()
                    subject.clear()
                    message.clear()
                },
                (error) => {
                    console.log('An error occurred while sending data.', error.text);
                },
            );
        };

    return (
        <div>

            <form className='flex flex-col gap-8 max-w-80 sm:max-w-100 md:max-w-150 mx-auto '>

                <ContactInputCard type={"text"} title={"Your name"} ref={name.ref} />
                <ContactInputCard type={"email"} title={"Email address"} ref={email.ref} />
                <ContactInputCard type={"text"} title={"Subject"} ref={subject.ref} />


            <div className='flex flex-col gap-6'>
                <label className='font-["Poppins"] text-base font-medium'>Message</label>
                <textarea className='border-2 border-gray-400 px-5 py-6 rounded-xl resize-none' placeholder="Hi! i'd like to ask about" ref={message.ref}></textarea>
            </div>

            <button className=' py-5 bg-brand w-60 text-white cursor-pointer' onClick={handleSubmit} >Submit</button>

            </form>
        </div>
    )
}