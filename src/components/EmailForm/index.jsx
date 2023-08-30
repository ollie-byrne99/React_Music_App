import React, { useState } from 'react';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleEmailSubmission = e => {
      e.preventDefault();
      setMessage(`${email} has been added to the mailing list!`);
      setEmail('');
    };
  
    return (
      <div class = "sign_up">
      <h2>Join the Community!</h2>
      <div className="email_form">
        <form onSubmit={handleEmailSubmission}>
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="example@outlook.com" 
            required 
          />
          <button class = "like_button" type="submit">Submit</button>
        </form>
      </div>
      <p id = "message">{message}</p>
      </div>
    );
  };

  export default EmailForm;
