import React, { useState } from 'react';


const WorkForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    project: '',
    phone: '',
    budget: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className='WorkForm-container'>
      <h2 className='WorkForm-tittle'>HELLO</h2>
      <p className="WorkForm-subtitle">LET'S WORK ON SOMETHING COOL.</p>
      <form className='WorkForm' onSubmit={handleSubmit}>
        <div className='WorkForm-inputGroup'>
          <label htmlFor="firstName" className='WorkForm-label'>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className='WorkForm-input'
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className='WorkForm-label'>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className='WorkForm-input'
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className='WorkForm-label'>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className='WorkForm-input'
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="companyName" className='WorkForm-label'>Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className='WorkForm-input'
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="project" className='WorkForm-label'>Please Tell Us More About Project</label>
          <textarea
            id="project"
            name="project"
            value={form.project}
            onChange={handleChange}
            className='WorkForm-textarea'
            required
          ></textarea>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="phone" className='WorkForm-label'>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className='WorkForm-input'
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="budget" className='WorkForm-label'>Budget</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
           className='WorkForm-input'
            required
          />
        </div>
        <button type="submit" className='WorkForm-button'>SUBMIT</button>
      </form>
    </div>
  );
};

export default WorkForm;

