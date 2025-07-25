import React, { useState } from 'react';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://formspree.io/f/xqalpvwl', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: new FormData(e.target)
            });

            if (response.ok) {
                setFormData({ name: '', email: '', message: '' });
                alert('Message sent successfully!');
            } else {
                alert('Something went wrong.');
            }
        } catch (err) {
            console.error('Error sending message:', err);
            alert('Error sending message.');
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div id='contact' className='my-18 relative mx-auto md:w-[70%]'>
            <h3 className='font-semibold mb-6 md:text-xl lg:text-center'>
                <span className='text-[#78b86a] font-light font-[caveat]'>&lt;form&gt;</span> Contact Me <span className='text-[#78b86a] font-light font-[caveat]'>&lt;/form&gt;</span>
            </h3>
            <form
                className='relative max-w-md mx-auto bg-[#171717] p-6 rounded-lg border border-gray-400 overflow-hidden before:content-[""] before:absolute before:w-40 before:h-40 before:bg-white/30 before:rounded-full before:-top-20 before:-left-20 after:content-[""] after:absolute after:w-16 after:h-16 after:bg-[#78b86a]/30 after:rounded-full after:-bottom-8 after:right-4  before:shadow-lg before:shadow-white/35 shadow-lg shadow-[#78b86a]/35'
                onSubmit={handleSubmit}
            >
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='name'>Name</label>
                    <input
                        className='w-full p-2 border border-gray-400 rounded'
                        type='text'
                        id='name'
                        name='name'
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='email'>Email</label>
                    <input
                        className='w-full p-2 border border-gray-400 rounded'
                        type='email'
                        id='email'
                        name='email'
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='message'>Message</label>
                    <textarea
                        className='w-full p-2 border border-gray-400 rounded'
                        id='message'
                        name='message'
                        rows='4'
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className='w-full border-1 border-gray-400 text-white py-2 px-4 rounded hover:bg-white/10 transition-colors flex items-center justify-center'
                    type='submit'
                    disabled={loading}
                >
                    {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                    ) : (
                        'Send'
                    )}
                </button>
            </form>
        </div>
    );
};

export default Contact;
