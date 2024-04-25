// import React, { useState } from 'react';


// const WorkForm = ({ onClose }) => {
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     companyName: '',
//     project: '',
//     phone: '',
//     budget: ''
//   });

//   const [isVisible, setIsVisible] = useState(false);


//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // handle form submission
//   };

//   return (
//     <div className={`WorkForm-container ${isVisible ? 'visible' : ''}`}>
//       <button onClick={onClose}>Close Form</button>

//       <h2 className='WorkForm-tittle'>HELLO</h2>
//       <p className="WorkForm-subtitle">LET'S WORK ON SOMETHING COOL.</p>
//       <form className='WorkForm' onSubmit={handleSubmit}>
//         <div className="first-last-name-outer form-d-flex">
//           <div className='WorkForm-inputGroup'>
//             <label htmlFor="firstName" className='WorkForm-label'>First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={form.firstName}
//               onChange={handleChange}
//               className='WorkForm-input'
//               required
//             />
//           </div>
//           <div className='WorkForm-inputGroup'>
//             <label htmlFor="lastName" className='WorkForm-label'>Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={form.lastName}
//               onChange={handleChange}
//               className='WorkForm-input'
//               required
//             />
//           </div>
//         </div>

// <div className="email-company-outer form-d-flex">
//         <div className='WorkForm-inputGroup'>
//           <label htmlFor="email" className='WorkForm-label'>Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className='WorkForm-input'
//             required
//           />
//         </div>
//         <div className='WorkForm-inputGroup'>
//           <label htmlFor="companyName" className='WorkForm-label'>Company Name</label>
//           <input
//             type="text"
//             id="companyName"
//             name="companyName"
//             value={form.companyName}
//             onChange={handleChange}
//             className='WorkForm-input'
//             required
//           />
//         </div>
//  </div>

// <div className="project-phone-outer form-d-flex">
//         <div className='WorkForm-inputGroup'>
//           <label htmlFor="project" className='WorkForm-label'>Please Tell Us More About Project</label>
//           <textarea
//             id="project"
//             name="project"
//             value={form.project}
//             onChange={handleChange}
//             className='WorkForm-textarea'
//             required
//           ></textarea>
//         </div>
//         <div className='WorkForm-inputGroup'>
//           <label htmlFor="phone" className='WorkForm-label'>Phone Number</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             className='WorkForm-input'
//             required
//           />
//         </div>
//         </div>
// <div className="budget-outer form-d-flex">
//         <div className='WorkForm-inputGroup'>
//           <label htmlFor="budget" className='WorkForm-label'>Budget</label>
//           <input
//             type="number"
//             id="budget"
//             name="budget"
//             value={form.budget}
//             onChange={handleChange}
//             className='WorkForm-input'
//             required
//           />
//         </div>
//         </div>
//         <button type="submit" className='WorkForm-button'>SUBMIT</button>
//       </form>
//     </div>
//   );
// };

// export default WorkForm;





import React,{useState} from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';
import client from '@/app/lib/apollo-client';



const CREATE_SUBMISSION_MUTATION = gql`
  mutation CreateSubmission($firstName: String!, $lastName: String!, $emailAddress: String!, $phoneNumber: String!, $companyName: String!, $budget: String!, $moreAboutProject: String!) {
    createSubmission(input: { firstName: $firstName, lastName: $lastName, emailAddress: $emailAddress, phoneNumber: $phoneNumber, companyName: $companyName, budget: $budget, moreAboutProject: $moreAboutProject }) {
      success
      data
    }
  }
`;


function WorkForm() {

  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailAddressValue, setEmailAddressValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [companyNameValue, setCompanyNameValue] = useState('');
  const [budgetValue, setBudgetValue] = useState('');
  const [moreAboutProjectValue, setMoreAboutProjectValue] = useState('');


  return (
    <>
    <ApolloProvider client={client}>
      <div>
        <h1>Contact Form Submission to WordPress with GraphQL</h1>
        <Mutation mutation={CREATE_SUBMISSION_MUTATION}>
          {(createSubmission, { loading, error, data }) => (
            <>
              <form
                onSubmit={async event => {
                  event.preventDefault();
                  createSubmission({
                    variables: {
                      firstName: firstNameValue,
                      lastName: lastNameValue,
                      emailAddress: emailAddressValue,
                      phoneNumber: phoneNumberValue,
                      companyName: companyNameValue,
                      budget: budgetValue,
                      moreAboutProject: moreAboutProjectValue
                    }
                  });
                }}
              >
                <label htmlFor='firstNameInput'>First Name: </label>
                <input id='firstNameInput' value={firstNameValue} onChange={event => setFirstNameValue(event.target.value)} />
                <br /><br />
                <label htmlFor='lastNameInput'>Last Name: </label>
                <input id='lastNameInput' value={lastNameValue} onChange={event => setLastNameValue(event.target.value)} />
                <br /><br />
                <label htmlFor='emailAddressInput'>Email Address: </label>
                <input id='emailAddressInput' value={emailAddressValue} onChange={event => setEmailAddressValue(event.target.value)} />
                <br /><br />
                <label htmlFor='phoneNumberInput'>Phone Number: </label>
                <input id='phoneNumberInput' value={phoneNumberValue} onChange={event => setPhoneNumberValue(event.target.value)} />
                <br /><br />
                <label htmlFor='companyNameInput'>Company Name: </label>
                <input id='companyNameInput' value={companyNameValue} onChange={event => setCompanyNameValue(event.target.value)} />
                <br /><br />
                <label htmlFor='budgetInput'>Budget: </label>
                <input id='budgetInput' value={budgetValue} onChange={event => setBudgetValue(event.target.value)} />
                <br /><br />
                <label htmlFor='moreAboutProjectInput'>More About Project: </label>
                <textarea id='moreAboutProjectInput' value={moreAboutProjectValue} onChange={event => setMoreAboutProjectValue(event.target.value)} />
                <br /><br />
                <button type="submit">Send it!</button>
              </form>
              <div style={{ padding: '20px' }}>
                {loading && <p>Loading...</p>}
                {error && (
                  <p>An unknown error has occurred, please try again later...</p>
                )}
                {data && <p>Submission successful!</p>}
              </div>
            </>
          )}
        </Mutation>
      </div>
    </ApolloProvider>
    </>
  )
}

export default WorkForm
