const customNewFormHandler = async function (event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="custom-post-title"]').value;
    const body = document.querySelector('textarea[name="custom-post-body"]').value;
  
    try {
      await fetch('/api/custom-post', {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      document.location.replace('/custom-dashboard');
    } catch (error) {
      console.error('Failed to create the post:', error);
      alert('An error occurred while creating the post. Please try again later.');
    }
  };
  
  document.querySelector('#custom-new-post-form').addEventListener('submit', customNewFormHandler);
  