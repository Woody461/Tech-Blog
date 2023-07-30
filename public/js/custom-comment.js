const customCommentFormHandler = async function (event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  
    if (body) {
      try {
        await fetch('/api/create-comment', {
          method: 'POST',
          body: JSON.stringify({
            postId,
            body,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        document.location.reload();
      } catch (error) {
        console.error('Failed to create the comment:', error);
      }
    }
  };
  
  document
    .querySelector('#custom-new-comment-form')
    .addEventListener('submit', customCommentFormHandler);
  