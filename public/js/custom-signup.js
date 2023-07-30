const customSignupFormHandler = async function (event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#custom-username-input-signup');
    const passwordEl = document.querySelector('#custom-password-input-signup');
  
    try {
      const response = await fetch('/api/custom-user', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/custom-dashboard');
      } else {
        alert('Failed to sign up');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('An error occurred during sign up. Please try again later.');
    }
  };
  
  document.querySelector('#custom-signup-form').addEventListener('submit', customSignupFormHandler);
  