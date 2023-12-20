import React, { useState } from 'react';
import '../App.css';
import Select from 'react-select';

const Contact = () => {
  const [charCount, setCharCount] = useState(1000);
  const [isSearchable, setIsSearchable] = useState(true);

  const handleTextareaChange = (event) => {
    const newCharCount = 1000 - event.target.value.length;
    setCharCount(newCharCount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Send Clicked');
  };

  const themas = [
    { value: 'Thema 1', label: 'Thema 1' },
    { value: 'Thema 2', label: 'Thema 2' },
    { value: 'Thema 3', label: 'Thema 3' },
  ];

  return (
    <>
      <div className="container">
        <div className="partOne">
          <h1>Contact Us</h1>
          <p>Would you like to send us an e-mail?</p>
        </div>

        <div className="partTwo">
          <div className="grid-container">
          <form onSubmit={handleSubmit} className="cForm">
               <div className="grid-item">
                <label htmlFor="theme">Themas:</label>
                <Select
                  options={themas}
                  className="select"
                  defaultValue={themas[0]}
                  isSearchable={isSearchable}
                  name="thema"
                />
              </div>
              <div className="grid-item">
                
                <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
              </div>
              <div className="grid-item">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                  required
                />
              </div>
              <div className="grid-item">
                <input
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  placeholder="Confirm e-mail"
                  pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                  required
                />
              </div>
              <div className="grid-item">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message"
                  maxLength="1000"
                  onChange={handleTextareaChange}
                ></textarea>
                <div id="charCount">{charCount}/1000</div>
              </div>
              <div className="grid-item">
              <input type="submit" className="sendBtn" value="SEND" />
                            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;




 {/* <form onSubmit={handleSubmit} className="cForm">
                        <label className="loginLabel">Thema: </label>


                        <Select
                            options={themas}
                            className="select"
                            defaultValue={themas[0]}
                            isSearchable={isSearchable}
                            name="thema"
                        />





                        <label className="loginLabel">First Name:</label>
                        <input
                            type="text"
                            id="fName"
                            className="input"
                            name="fName"
                            placeholder="Type your first name"
                            required
                        />
                        <label className="loginLabel">Last Name:</label>
                        <input
                            type="text"
                            id="lName"
                            className="input"
                            name="lName"
                            placeholder="Type your last name"
                            required
                        />

                        <label className="loginLabel">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            className="input"
                            name="email"
                            placeholder='Enter email'
                            pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
                            required
                        />
                        <label className="loginLabel">Confirm e-mail:</label>
                        <input
                            type="email"
                            id="email"
                            className="input"
                            name="email"
                            placeholder='Enter email'
                            pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
                            required
                        />




                        <input type="submit" className="sendBtn" value="SEND" />
                    </form> */}