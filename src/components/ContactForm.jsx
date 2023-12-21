import React, { useState } from 'react';
import '../App.css';
import Select from 'react-select';

const ContactForm = () => {
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
      {/* <div className="container">
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
      </div> */}


      <div id="page">
  <header>Here is a contact form</header>
  <nav><h1>Contact Us</h1> <p>Would you like to send us a message?</p></nav>
  <main>

  <form onSubmit={handleSubmit} className="cForm">    <div>
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
        <label>Salutation:</label>
        <div className="radio-container">
          <div className="radio-item">
            <input type="radio" id="mr" name="salutation" value="Mr."/>
            <label for="mr">Mr.</label>
          </div>
          <div className="radio-item">
            <input type="radio" id="mrs" name="salutation" value="Mrs."/>
            <label for="mrs">Mrs.</label>
          </div>
          <div className="radio-item">
            <input type="radio" id="ms" name="salutation" value="Ms."/>
            <label for="ms">Ms.</label>
          </div>          
          <div className="radio-item">
            <input type="radio" id="none" name="salutation" value="None"/>
            <label for="none">None</label>
          </div>
        </div>
      </div>
      <div className="grid-item">
        <input type="text" id="firstName" name="firstName" placeholder="First name"/>
        <input type="text" id="lastName" name="lastName" placeholder="Last name"/>
      </div>
      <div className="grid-item">
        <input type="email" id="email" name="email" placeholder="E-mail "/>
      </div>
      <div className="grid-item">
        <input type="email" id="confirmEmail" name="confirmEmail" placeholder="Confirm your email"/>
      </div>
      <div className="grid-item">
        <textarea id="message" name="message" placeholder="Type your message" maxlength="1000"></textarea>
        <div id="charCount">Characters remaining: 1000</div>
      </div>
      <div className="grid-item">
        <input type="submit" value="Send" id="submitButton"/>
      </div>
  </form>
      
  
  </main>
</div>

    </>
  );
};

export default ContactForm;




 