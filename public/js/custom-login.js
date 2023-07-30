const customLoginFormHandler = async function (event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#custom-username-input-login');
    const passwordEl = document.querySelector('#custom-password-input-login');
  
    try {
      const response = await fetch('/api/custom-user/login', {
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
        alert('Failed to login');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };
  
  document
    .querySelector('#custom-login-form')
    .addEventListener('submit', customLoginFormHandler);
  