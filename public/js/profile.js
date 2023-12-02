const newFormHandler = async (event) => {
  event.preventDefault();

  const verse = document.querySelector('#bibleverses-verse').value.trim();
  const description = document.querySelector('#bibleverses-desc').value.trim();

  if (verse&& description) {
    const response = await fetch(`/api/bibleverses`, {
      method: 'POST',
      body: JSON.stringify({ verse, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create bibleverses');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/bibleversess/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete bibleverses');
    }
  }
};

document
  .querySelector('.new-bibleverses-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.bibleverses-list')
  .addEventListener('click', delButtonHandler);
