import React, { useState, useEffect } from 'react';

function WorkForm() {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFormData() {
      try {
        const response = await fetch('https://api.eligo.cloud/wp-json/contact-form-7/v1/contact-forms/af7ddc7');
        if (!response.ok) {
          throw new Error('Failed to fetch form data');
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching form data:', error);
        setError(error.message);
      }
    }

    fetchFormData();
  }, []);

  return (
    <>
      {error && <div>Error: {error}</div>}
      {formData && (
        <form>
          {formData.fields.map((field, index) => (
            <div key={index}>
              <label>{field.label}</label>
              <input type={field.type} name={field.name} placeholder={field.placeholder} />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default WorkForm;
