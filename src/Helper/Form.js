import React from 'react';
import "../styles/Form.css";

const Form = () => {
  return (
    <div className='form-one'>
        <form>
            <label>Your name</label>
            <input type='text' className='form-control py-2 mb-4'></input>
            <label>Email</label>
            <input type='email'className='form-control py-2 mb-4'></input>
            <label>Subject</label>
            <input type='text'className='form-control py-2 mb-4'></input>
            <label>Message</label>
            <textarea rows="6" className='form-control mb-4' placeholder='Type your message here'/>
            <button className='btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form