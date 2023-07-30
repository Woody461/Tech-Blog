const customLogout = async function () {
    try {
      const response = await fetch('/api/custom-user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/custom-homepage');
      } else {
        alert('Failed to log out');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      alert('An error occurred during logout. Please try again later.');
    }
  };
  
  document.querySelector('#custom-logout-link').addEventListener('click', customLogout);
  