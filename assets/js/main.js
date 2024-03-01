// SHOW MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // if (toggle && nav) {
  // }
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
};

showMenu("nav_toggle", "nav_menu");

// header shadow after scroll

const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

addEventListener("scroll", scrollHeader);

//
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

const successMsg = document.getElementById("success-msg");

// -------------------------------------------------------------
// validation

const username = document.getElementById("name");
const email = document.getElementById("email");
const textArea = document.getElementById("textArea");
const form = document.getElementById("form");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const textAreaValue = document.getElementById("textArea").value;

  let success = true;

  if (usernameValue === "") {
    success = false;
    setError(username, "*Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    success = false;

    setError(email, "*Email is required");
  } else if (!isValidEmail(emailValue)) {
    success = false;

    setError(email, "*Provide a valid email address");
  } else {
    setSuccess(email);
  }
  if (textAreaValue === "") {
    success = false;

    setError(textArea, "*Message is required");
  } else {
    setSuccess(textArea);
  }

  return success;
};

function resetForm() {
  successMsg.style.display = "Block";
  document.getElementById("name").style.borderColor = "black";
  document.getElementById("email").style.borderColor = "black";
  document.getElementById("textArea").style.borderColor = "black";
  form.reset();
}

// ----------------------------------------------------------------------------------------

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  } else {
    form.submit();
    setTimeout(() => {
      form.reset();
    }, 1000);
  }
});

// function submitForm() {
//   if (!validateInputs()) {
//     e.preventDefault();
//   } else {
//     e.preventDefault();

//     form.submit();

//     form.reset();
//   }
// }
