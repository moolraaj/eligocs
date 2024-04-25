
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
