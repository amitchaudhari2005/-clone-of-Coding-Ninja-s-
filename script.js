// -----------------------------
// Utility: Load External Script
// -----------------------------
function loadExternalScript(url, callback) {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.onload = callback;
  script.onerror = () => console.error(`Failed to load script: ${url}`);
  document.head.appendChild(script);
}

// Example usage: Load Google Fonts
loadExternalScript("https://fonts.googleapis.com/css2?family=Roboto&display=swap", () => {
  console.log("Google Fonts Loaded");
});

// -----------------------------
// Theme Toggle (Light / Dark)
// -----------------------------
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Apply stored theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});

// -----------------------------
// Simple Form Validation
// -----------------------------
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = 'green';
      }
    });

    if (valid) {
      alert('Form submitted successfully!');
      form.reset();
    } else {
      alert('Please fill all required fields.');
    }
  });
}

// -----------------------------
// Fetch Example API (Optional)
// -----------------------------
function fetchJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {
      alert(`Chuck Norris Joke: ${data.value}`);
    })
    .catch(() => alert('Failed to fetch joke.'));
}

// -----------------------------
// Add Event Listeners
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Button
  const themeBtn = document.getElementById('toggleThemeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Joke Button
  const jokeBtn = document.getElementById('jokeBtn');
  if (jokeBtn) {
    jokeBtn.addEventListener('click', fetchJoke);
  }

  // Form validation setup
  validateForm('contactForm'); // Make sure your form has id="contactForm"
});
