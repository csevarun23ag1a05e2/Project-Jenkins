document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const branch = document.getElementById('branch').value;

  const confirmation = document.getElementById('confirmation');
  confirmation.classList.remove('hidden');
  confirmation.innerHTML = `
    <h3>Registration Successful!</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Branch:</strong> ${branch}</p>
  `;

  this.reset();
});