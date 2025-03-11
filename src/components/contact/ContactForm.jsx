import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { submitContact } from '@/app/action';
import toast, { Toaster } from 'react-hot-toast';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            
            const response = await fetch("https://scf-cms-be-360l.onrender.com/api/v1/web/enquiries/create-enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
            console.log(result)
    
            if (response.ok) {
                toast.success("Message sent successfully!");
                reset();
            } else {
                toast.error(result.message || "Failed to send message!");
            }
        } catch (error) {
            console.error("An error occurred", error);
            toast.error("Something went wrong! Try again later.");
        } finally {
            setLoading(false);
        }
    };
    

    const inputStyle = `w-full px-4 py-3 border rounded-lg transition-colors text-black outline-none font-outfit text-base placeholder:text-base`;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className='relative'>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        {...register('name')}
                        className={`${inputStyle} border-gray-300`}
                    />
                    <div className='absolute mr-2'>
                        {errors.name && <p className="text-red-500 text-xs ml-2">{errors.name.message}</p>}
                    </div>
                </div>

                <div className='relative'>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput
                                country={'us'}
                                value={value || ''}
                                onChange={onChange}
                                countryCodeEditable={true}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    className: `${inputStyle} border-gray-300 pl-10 text-black`,
                                    style: {
                                        fontSize: '1rem', // 16px
                                        fontFamily: 'outfit, sans-serif'
                                    }
                                }}
                                containerStyle={{ width: '100%', color: 'black' }}
                                buttonStyle={{ 
                                    borderTopLeftRadius: '0.5rem', 
                                    borderBottomLeftRadius: '0.5rem',
                                }}
                                inputStyle={{
                                    fontSize: '1rem',
                                    width: '100%',
                                }}
                            />
                        )}
                    />
                    <div className='absolute'>
                        {errors.phoneNumber && <p className="text-red-500 text-xs ml-2">{errors.phoneNumber.message}</p>}
                    </div>
                </div>
            </div>

            <div className='relative'>
                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register('email')}
                    className={`${inputStyle} border-gray-300`}
                />
                <div className="absolute">
                    {errors.email && <p className="text-red-500 text-xs ml-2">{errors.email.message}</p>}
                </div>
            </div>

            <div className='relative'>
                <textarea
                    placeholder="How can we help?"
                    rows={4}
                    {...register('message')}
                    className={`${inputStyle} border-gray-300`}
                ></textarea>
                <div className="absolute">
                    {errors.message && <p className="text-red-500 text-xs ml-2">{errors.message.message}</p>}
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center font-outfit text-base"
            >
                {loading ? 'Submitting...' : 'Contact Us Today'}
                <span className="ml-2">➡️</span>
            </button>
        </form>
    );
};

export default ContactForm;