window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) { // Adjust the scroll threshold as needed
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

function mailDirect() {
  const email = "rakshit.garg2023@vitstudent.ac.in"
  const subject = ""
  const body = ""
  const encodedSubject = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`,
    "_blank",
  )
  setTimeout(() => {
    window.open(
      `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodedSubject}&body=${encodedBody}`,
      "_blank",
    )
  }, 1000)
}

function openGithub() {
  const a = document.createElement("a")
  a.href = "https://github.com/GargRakshit"
  a.target = "_blank" // Open in a new tab
  a.click()
}

function openLinkedin() {
  const a = document.createElement("a")
  a.href = "https://www.linkedin.com/in/rakshit-garg-0b22a3291/"
  a.target = "_blank" // Open in a new tab
  a.click()
}

// Form submission handler
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact_form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Here you would typically send this data to a server
      // For now, we'll just show an alert
      alert(`Thanks for your message, ${name}! I'll get back to you soon.`)
      contactForm.reset()
    })
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav_link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("id")
      const targetSection = document.getElementById(targetId + "_section")
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" })
      }
    })
  })
})

function toggleMenu() {
  const mobileMenu = document.getElementById('mobile_menu');
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
}