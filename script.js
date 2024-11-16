// 

    //start ofeers section  

    const offersItems = document.querySelector('.offers-items');
const offerItems = document.querySelectorAll('.offer-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalItems = offerItems.length;

function updateSliderPosition() {
  offersItems.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextOffer() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateSliderPosition();
}

function showPrevOffer() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateSliderPosition();
}

nextBtn.addEventListener('click', showNextOffer);
prevBtn.addEventListener('click', showPrevOffer);

// Optional: Auto-slide every 5 seconds
setInterval(showNextOffer, 5000);


// end offers secion
//start Menu Section


const menuData = [
    {
      name: "LASAL CHEESE",
      price: "$18.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food1.png"
    },
    {
      name: "JUMBO CRAB SHRIMP",
      price: "$24.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food2.png"
    },
    {
      name: "KOKTAIL JUICE",
      price: "$12.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food3.png"
    },
    {
      name: "CAPO STEAK",
      price: "$60.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food4.png"
    },
    {
      name: "ORGANIC FRUIT SALAD",
      price: "$8.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food5.png"
    },
    {
      name: "CHEESE PIZZA",
      price: "$18.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food6.png"
    },
    {
      name: "KOFTA MEAT",
      price: "$40.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food7.jpeg"
    },
    {
      name: "SPANISH PIES",
      price: "$14.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food8.jpeg"
    },
    {
      name: "CHEESE TOST",
      price: "$6.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food9.jpeg"
    },
    {
      name: "FRUIT SALAD",
      price: "$14.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food10.jpeg"
    },
    {
      name: "CHICKEN SHAWARMA",
      price: "$20.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food11.jpeg"
    },
    {
      name: "MEGA CHEESE PIZZA",
      price: "$30.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.",
      image: "./images/food12.jpeg"
    }
  ];
  
  window.onload = function() {
    const menuContainerLeft = document.querySelector(".menu-items-left");
    const menuContainerRight = document.querySelector(".menu-items-right");
    
    menuData.forEach((item, index) => {
      const menuItem = `
        <div class="menu-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <h3>${item.name} <span class="primary-text">${item.price}</span></h3>
            <p>${item.description}</p>
          </div>
        </div>
      `;
  
      // Divide items into two columns
      if (index < menuData.length / 2) {
        menuContainerLeft.innerHTML += menuItem;
      } else {
        menuContainerRight.innerHTML += menuItem;
      }
    });
  };
  

//end menu section


//start gallery

var BtnClose = document.getElementById("close");
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var BoxContainer = document.getElementById('boxContainer');
    var boxItem = document.getElementById('boxItem');
    var imagesArr = Array.from(document.querySelectorAll('.img-gallery img'));

    var globalIndex = 0;

    BtnClose.addEventListener('click', function() {
        BoxContainer.style.display = 'none';
    });

    imagesArr.forEach(function(image, index) {
        image.addEventListener('click', function(e) {
            BoxContainer.style.display = 'flex';
            boxItem.style.backgroundImage = `url(${e.target.src})`;
            globalIndex = index;
        });
    });

    next.addEventListener('click', function() {
        globalIndex++;
        if(globalIndex == imagesArr.length) {
            globalIndex = 0;
        }
        boxItem.style.backgroundImage = `url(${imagesArr[globalIndex].src})`;
    });

    prev.addEventListener('click', function() {
        globalIndex--;
        if(globalIndex < 0) {
            globalIndex = imagesArr.length - 1;
        }
        boxItem.style.backgroundImage = `url(${imagesArr[globalIndex].src})`;
    });

//end Gallery section



//start form vaildation


document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get the form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Get the error message containers
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");

    // Clear previous error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    subjectError.innerHTML = "";
    messageError.innerHTML = "";

    let isValid = true;

    // Validate name (at least 3 characters, max 15)
    if (name === "") {
        nameError.innerHTML = "Name is required.";
        isValid = false;
    } else if (name.length < 3 || name.length > 15) {
        nameError.innerHTML = "Name must be between 3 and 15 characters.";
        isValid = false;
    }

    // Validate email (basic email regex pattern)
    
    if (email === "" ) {
        emailError.innerHTML = "email is required";
        isValid = false;
    }

    // Validate subject (optional, but must not be empty if provided)
    if (subject !== "" && subject.length < 3) {
        subjectError.innerHTML = "Subject must be at least 3 characters long.";
        isValid = false;
    }

    // Validate message (optional, but must not be empty if provided)
    if (message !== "" && message.length < 5) {
        messageError.innerHTML = "Message must be at least 5 characters long.";
        isValid = false;
    }

    // If all validations pass, form is successfully validated
    if (isValid) {
        alert("Form submitted successfully!");
        // Here you can submit the form using AJAX or regular form submission
        // document.getElementById("contactForm").submit(); // Uncomment for actual submission
    }
});




//end form vaildation