import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import CreatableSelect from 'react-select/creatable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

    const [charCount, setCharCount] = useState(1000);
    const [isSearchable, setIsSearchable] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('')
    const [confirmation, setConfirmation] = useState('')
    const [message, setMessage] = useState('');



    const confirmationError = useRef(null);
    const messageError = useRef(null);



    const handleTextareaChange = (event) => {
        const newCharCount = 1000 - event.target.value.length;
        setCharCount(newCharCount);
        setMessage(event.target.value);

    };

    const notify = () => toast.success("Message sent successfully!");

    useEffect(() => {


        const messageErrorTimeout = setTimeout(() => {
            messageError.current.style.display = 'none';
        }, 4000);

        return () => {
            clearTimeout(messageErrorTimeout);
        };
    }, [message]);

    useEffect(() => {
        const confirmationErrorTimeout = setTimeout(() => {
            confirmationError.current.style.display = 'none';
        }, 4000);

        return () => {
            clearTimeout(confirmationErrorTimeout);

        };
    }, [confirmation]);




    const handleSubmit = (e) => {
        if (email !== confirmation) {
            e.preventDefault();
            e.stopPropagation();
            confirmationError.current.style.display = null;
        } else if (message === '') {
            e.preventDefault();
            e.stopPropagation();
            messageError.current.style.display = null;
        } else {
            // confirmationError.current.style.display = 'none';
            // messageError.current.style.display = 'none';
            e.preventDefault();
            setSubmitted(true);
            notify();
            console.log('Send Clicked');


            setTimeout(() => {
                window.location.reload();
            }, 10000);

        }


    };


    const themas = [
        { value: 'Thema 1', label: 'Question about services' },
        { value: 'Thema 2', label: 'Feedback' },
        { value: 'Thema 3', label: 'Notification of change of address' },
        { value: 'Thema 4', label: 'Request for an invoice' },

    ];


    return (
        <>
            <div className="container">
                <div className="header"><h1>Contact Us</h1></div>
                <div className="sidebar">
                    <h2>Hi!</h2>
                    <p>Would you like to ask something, give us your feedback or share something with us? We are happy to hear from you!</p>
                    <p className="promise"><sup className='asterisk'>*</sup>We will never share your personal information or your messages with anyone else.</p>
                </div>
                <div className="content">
                    <form onSubmit={handleSubmit} className="cForm">
                        <div className="item themas">
                            <CreatableSelect
                                isClearable
                                options={themas}
                                className="select"
                                placeholder="Choose a subject or start writing"
                                isSearchable={isSearchable}
                                name="thema"
                            />


                        </div>

                        <div className="item names">

                            <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                        </div>
                        <div className="item email">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E-mail"
                                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                required
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>
                        <div className="item email">
                            <input
                                type="email"
                                id="confirmEmail"
                                name="confirmEmail"
                                placeholder="Confirm e-mail"
                                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                required
                                onChange={(e) => setConfirmation(e.target.value)}
                            />
                            <p className='error'
                                style={{ color: 'red', display: 'none' }}
                                ref={confirmationError}
                            >
                                Password and confirmation are not the same
                            </p>
                        </div>
                        <div className="item textarea">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Type your message"
                                maxLength="1000"
                                onChange={handleTextareaChange}
                            ></textarea>
                            {message === '' ? <p className='error'
                                style={{ color: 'red', display: 'none' }}
                                ref={messageError}
                            >
                                This field can not be empty
                            </p> : <div id="charCount">{charCount}/1000</div>}
                            {submitted ? <div className="popup" id="popup">Thank you for using our contact form! For the most accurate assistance, please allow an estimated 2 business days for our team to respond to your email.</div> : null}


                        </div>
                        <div className="item button">
                            <input type="submit" className="sendBtn" value="SEND" />
                        </div>
                    </form>

                    <ToastContainer
                        position="top-right"
                        autoClose={1500}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />

                </div>
            </div>
        </>
    )

};
export default Contact