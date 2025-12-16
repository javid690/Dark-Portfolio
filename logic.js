// auto type text

var typed = new Typed("#typed", {
    strings: [
        "I'm a Web Developer",
        "I'm a UI/UX Designer",
        "I'm a Freelancer",
    ],
    typeSpeed: 100, // Typing speed
    backSpeed: 50,  // Backspacing speed
    loop: true      // Repeat infinitely
});



// mouse Cursor Code
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText = 
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});





// admin skill
document.addEventListener("DOMContentLoaded", function () {
    let progressCircles = document.querySelectorAll(".progress");
    let percentageTexts = document.querySelectorAll(".percentage");

    progressCircles.forEach((circle, index) => {
        let progressValue = 0;
        let targetValue = circle.getAttribute("data-value");
        let circumference = 2 * Math.PI * 14;
        
        let interval = setInterval(() => {
            if (progressValue >= targetValue) {
                clearInterval(interval);
            }
            progressValue++;
            let offset = circumference - (progressValue / 100) * circumference;
            circle.style.strokeDashoffset = offset;
            percentageTexts[index].textContent = progressValue + "%";
        }, 20);
    });
});




// Click Sound
// Audio object create karna
var audio = new Audio('sound.mp3');

// Function jo sound play karega
function playSound() {
    audio.currentTime = 0; // Har baar sound ko start se play karne ke liye
    audio.play();
}

// Sabhi buttons ko select karna aur event listener add karna
var buttons = document.querySelectorAll(".playSoundBtn");
buttons.forEach(function(button) {
    button.addEventListener("click", playSound);
});
// menu responsive
document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    document.body.appendChild(menuToggle);

    // Mobile Sidebar
    const mobileNav = document.createElement("div");
    mobileNav.classList.add("mobile-nav");

    mobileNav.innerHTML = `
        <div class="close-menu">&times;</div>
        <ul>
            <li><a href="#home-section"><i class="fa-solid fa-house"></i> Home</a></li>
            <li><a href="#about-section"><i class="fa-solid fa-user"></i> About</a></li>
            <li><a href="#services-section"><i class="fa-solid fa-calendar"></i> Services</a></li>
            <li><a href="#skill-section"><i class="fa-solid fa-graduation-cap"></i> Skills</a></li>
            <li><a href="#resume-section"><i class="fa-solid fa-file"></i> Resume</a></li>
            <li><a href="#portfolio-section"><i class="fa-solid fa-folder"></i> Portfolio</a></li>
            <li><a href="#blog-section"><i class="fa-solid fa-blog"></i> Blog</a></li>
            <li><a href="#testimonail-section"><i class="fa-solid fa-message"></i> Testimonial</a></li>
            <li><a href="#contact-section"><i class="fa-solid fa-envelope"></i> Contact</a></li>
        </ul>
    `;

    document.body.appendChild(mobileNav);

    const closeMenu = mobileNav.querySelector(".close-menu");

    menuToggle.addEventListener("click", function () {
        mobileNav.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
        mobileNav.classList.remove("active");
    });
});


// =============================Portfolio Tabs===========================
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  


//   bottom to top btn
const scrollBtn = document.getElementById("scrollBtn");
const progressCircle = document.getElementById("progressCircle");

const radius = 28;
const circumference = 2 * Math.PI * radius;

progressCircle.setAttribute("stroke-dasharray", circumference);
progressCircle.setAttribute("stroke-dashoffset", circumference);

function updateProgress() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  const offset = circumference - (scrollPercent / 100) * circumference;
  progressCircle.setAttribute("stroke-dashoffset", offset);

  // Show button after 5% scroll
  if (scrollPercent > 5) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener("scroll", updateProgress);
window.addEventListener("load", updateProgress);

// preloader code 

  // window.addEventListener("load", function () {
  //   const preloader = document.getElementById("preloader");
  //   preloader.style.opacity = "0";
  //   setTimeout(() => {
  //     preloader.style.display = "none";
  //   }, 500); // Delay to allow fade out
  // });

// ========Modal ========
 // Open modal
 document.querySelectorAll('[data-modal]').forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';
  });
});

// Close modal
document.querySelectorAll('[data-close]').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const modalId = closeBtn.getAttribute('data-close');
    document.getElementById(modalId).style.display = 'none';
  });
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


// preloader
window.addEventListener("load", ()=>{
  let preloader = document.getElementById("preloader")
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none"
  }, 5000);
})