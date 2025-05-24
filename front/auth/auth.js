const API_BASE = 'http://localhost:8080/api';

document.getElementById('signup-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  const role = document.getElementById('signup-role').value;

  const response = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role })
  });

  if (response.ok) {
    alert('Sign-up successful!');
    // Optionally clear signup form
    e.target.reset();
  } else {
    alert('Sign-up failed.');
  }
});

document.getElementById('login-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const response = await fetch(`http://localhost:8080/educator/dashboard`, {
    headers: {
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    }
  });

  const statusDiv = document.getElementById('login-status');
  if (response.ok) {
    // Save credentials to localStorage for future API calls
    localStorage.setItem('auth', `${username}:${password}`);

    statusDiv.innerHTML = '<div class="alert alert-success">Login successful</div>';
    e.target.reset();

    // Optionally redirect or trigger post-login action:
    // window.location.href = '/index.html';  <-- uncomment if needed
  } else {
    statusDiv.innerHTML = '<div class="alert alert-danger">Login failed</div>';
  }
});

