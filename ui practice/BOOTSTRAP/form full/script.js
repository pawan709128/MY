document.getElementById('homeForm').addEventListener('submit', function(event) {
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const zip = document.getElementById('zip').value;

  if (!address || !city || !zip) {
      alert('Please fill out all required fields.');
      event.preventDefault();
  } else {
      alert('Form submitted successfully!');
  }
});
