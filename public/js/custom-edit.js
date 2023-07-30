const customEditFormHandler = async function (event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
  
    try {
      await fetch(`/api/edit-post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          body,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      document.location.replace('/custom-dashboard');
    } catch (error) {
      console.error('Failed to edit the post:', error);
    }
  };
  
  const customDeleteClickHandler = async function () {
    const postId = document.querySelector('input[name="post-id"]').value;
  
    try {
      await fetch(`/api/delete-post/${postId}`, {
        method: 'DELETE',
      });
  
      document.location.replace('/custom-dashboard');
    } catch (error) {
      console.error('Failed to delete the post:', error);
    }
  };
  
  document
    .querySelector('#custom-edit-post-form')
    .addEventListener('submit', customEditFormHandler);
  document
    .querySelector('#custom-delete-btn')
    .addEventListener('click', customDeleteClickHandler);
  