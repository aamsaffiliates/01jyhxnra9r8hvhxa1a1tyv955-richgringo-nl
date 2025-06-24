// Rich Gringo Casino JavaScript

// Redirect function for CTA buttons
function redirectToRegister() {
  window.location.href = "/register"
}

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links

  // FAQ Toggle functionality
  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    const answer = item.querySelector(".faq-answer")
    const icon = question.querySelector("i")

    // Initially hide answers
    answer.style.display = "none"

    question.addEventListener("click", () => {
      const isOpen = answer.style.display === "block"

      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        const otherAnswer = otherItem.querySelector(".faq-answer")
        const otherIcon = otherItem.querySelector(".faq-question i")
        otherAnswer.style.display = "none"
        otherIcon.style.transform = "rotate(0deg)"
      })

      // Toggle current item
      if (!isOpen) {
        answer.style.display = "block"
        icon.style.transform = "rotate(180deg)"
      }
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    ".step-card, .game-card, .stat-card, .provider-card, .support-card, .promo-card, .feature-card",
  )
  animatedElements.forEach((el) => {
    el.style.animationPlayState = "paused"
    observer.observe(el)
  })

  // Mobile menu toggle (if needed)
  const mobileMenuButton = document.querySelector(".mobile-menu-button")
  const mobileMenu = document.querySelector(".mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxBg = document.querySelector(".parallax-bg")
    if (parallaxBg) {
      parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Add loading animation to images
  // const images = document.querySelectorAll("img")
  // images.forEach((img) => {
  //   img.addEventListener("load", function () {
  //     this.style.opacity = "0"
  //   })
  //   img.style.opacity = "1"
  //   img.style.transition = "opacity 0.3s ease"
  // })

  // Navbar background on scroll
  const navbar = document.querySelector("nav")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(13, 25, 54, 0.95)"
      navbar.style.backdropFilter = "blur(10px)"
    } else {
      navbar.style.background = "rgba(13, 25, 54, 0.9)"
      navbar.style.backdropFilter = "blur(5px)"
    }
  })

  // Add click tracking for analytics (placeholder)
  document.addEventListener("click", (e) => {
    if (e.target.matches(".cta-button, .cta-button-large, .cta-button-secondary, .play-btn")) {
      // Analytics tracking would go here
      console.log("CTA button clicked:", e.target.textContent)
    }
  })

  // Preload critical images
  const criticalImages = ["images/hero.webp", "images/tournaments.webp", "images/vip.webp"]

  criticalImages.forEach((src) => {
    const img = new Image()
    img.src = src
  })

  // Add hover sound effects (optional)
  const buttons = document.querySelectorAll("button, .cta-button, .cta-button-large, .cta-button-secondary")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      // Sound effect would go here
      this.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Floating elements random movement
  const floatingElements = document.querySelectorAll(".floating-element")
  floatingElements.forEach((element, index) => {
    setInterval(
      () => {
        const randomX = Math.random() * 20 - 10
        const randomY = Math.random() * 20 - 10
        element.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 10 - 5}deg)`
      },
      3000 + index * 500,
    )
  })

  // Countdown timer for special offers (if needed)
  function startCountdown(endDate) {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // Update countdown display if element exists
      const countdownElement = document.querySelector(".countdown")
      if (countdownElement) {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
      }
    }, 1000)
  }

  // Initialize tooltips for game cards
  const gameCards = document.querySelectorAll(".game-card")
  gameCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const tooltip = document.createElement("div")
      tooltip.className = "tooltip"
      tooltip.textContent = "Klik om te spelen!"
      tooltip.style.cssText = `
                position: absolute;
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
                background: #c62047;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 6px;
                font-size: 0.8rem;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
            `
      this.style.position = "relative"
      this.appendChild(tooltip)
    })

    card.addEventListener("mouseleave", function () {
      const tooltip = this.querySelector(".tooltip")
      if (tooltip) {
        tooltip.remove()
      }
    })
  })
})

// Utility functions
function formatCurrency(amount) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(amount)
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error)
})

// Performance monitoring
window.addEventListener("load", () => {
  const loadTime = performance.now()
  console.log(`Page loaded in ${loadTime.toFixed(2)}ms`)
})
