document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Retrieve input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if username and password match
    if (username === 'SpicyMonkeys' && password === 'dirtyIlike') {
      // Redirect to another page
      window.location.href = 'truthordare/game.html';
    } else {
      // Show error message
      document.getElementById('error-msg').textContent = 'Invalid username or password.';
    }
  });
  