
function toggleDarkMode() {
    const body = document.querySelector("body")
    body.classList.toggle("dark")
    const darkModeButton = document.querySelector("#dark-mode-button")
  
  
  
    if (body.classList.contains("dark")) {
      darkModeButton.innerText = "☀️ Light Mode"
    } else {
      darkModeButton.innerText = "🌛 Dark Mode"
    }
  }
  