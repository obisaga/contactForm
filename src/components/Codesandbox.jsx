import React, { useState } from 'react';
import '../App2.css';
import CreatableSelect from 'react-select/creatable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


const Codesandbox = () => {

    const [charCount, setCharCount] = useState(1000);
    const [isSearchable, setIsSearchable] = useState(true);
    const [submitted, setSubmitted] = useState(false);


    const handleTextareaChange = (event) => {
      const newCharCount = 1000 - event.target.value.length;
      setCharCount(newCharCount);
    };
  
    const notify = () => toast("Message sent successfully!");

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      notify();
      console.log('Send Clicked');
    };

  
    const themas = [
      { value: 'Thema 1', label: 'Question about XYZ' },
      { value: 'Thema 2', label: 'Feedback' },
      { value: 'Thema 3', label: 'New address' },
    ];


  return (
    <div className="container">
    <div className="header"><h1>Contact Us</h1></div>


    <div className="sidebar">
      <h2>Hi!</h2>
      <p>Would you like to ask something, give your feedback or share something with us? Choose the subject that best suits your message or add your own thema.</p>
      <p className="promise"> *We will never share your personal information or your messages with anyone else.</p>

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
                {/* <Select
                  options={themas}
                  className="select"
                  placeholder="Choose a subject"
                  isSearchable={isSearchable}
                  name="thema"
                /> */}

              </div>

              <div className="item names">        
              
                <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
              </div>
              <div className="item email">               
               <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                  required
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
                />
              </div>
              <div className="item textarea">            
                  <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message"
                  maxLength="1000"
                  onChange={handleTextareaChange}
                ></textarea>
                <div id="charCount">{charCount}/1000</div>
              </div>
              <div className="item button">        
                    <input type="submit" className="sendBtn" value="SEND" />
                            </div>
            </form>
           
            <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

    </div>
    {submitted ? <div className="footer">Thank you for using our contact form. For the most accurate assistance, please allow our team an estimated 2 business days to respond to your email.</div> : null}</div>  
  )
}

export default Codesandbox