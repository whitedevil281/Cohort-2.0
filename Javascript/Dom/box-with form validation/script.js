const open_form = document.querySelector(".add");
const cardsection = document.querySelector(".cards");
const open_cards_section = document.querySelector("#close-btn");
const cards_box = document.querySelector(".cards-boxes");
const form = document.querySelector("#new-call-form");
const select = document.querySelector("#home-town");
const error = document.querySelector("#error");
const up = document.querySelector(".up");
const down = document.querySelector(".down");

const homeTowns = [
  "Delhi",
  "Mumbai",
  "Kolkata",
  "Chennai",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Chandigarh",
  "Lucknow",
  "Indore",
  "Bhopal",
  "Patna",
  "Ranchi",
  "Guwahati",
  "Bhubaneswar",
  "Cuttack",
  "Visakhapatnam",
  "Vijayawada",
  "Kochi",
  "Thiruvananthapuram",
  "Coimbatore",
  "Madurai",
  "Trichy",
  "Salem",
  "Erode",
  "Tiruppur",
  "Noida",
  "Gurgaon",
  "Faridabad",
];

const initialUsers = [
  {
    imageurl:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
    name: "Card1 Singh",
    hometown: "Delhi",
    bookings: 44,
    category: "no-rush",
  },
  {
    imageurl:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
    name: "Card2 Singh",
    hometown: "Delhi",
    bookings: 44,
    category: "emergency",
  },
  {
    imageurl:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
    name: "Card3 Singh",
    hometown: "Delhi",
    bookings: 44,
    category: "emergency",
  },
];

if (!localStorage.getItem("Users")) {
  localStorage.setItem("Users", JSON.stringify(initialUsers));
}
localStorage.setItem("Users", JSON.stringify(initialUsers));

select.innerHTML = `
  <option id="default-option" value="" disabled selected>Select Home Town</option>
  ${homeTowns
    .map((city) => `<option value="${city}">${city}</option>`)
    .join("")}
`;

function updateusers(imageurl, name, hometown, bookings, category) {
  const users = JSON.parse(localStorage.getItem("Users")) || [];
  users.push({
    imageurl: imageurl,
    name: name,
    hometown: hometown,
    bookings: bookings,
    category: category,
  });
  console.log(users);
  localStorage.setItem("Users", JSON.stringify(users));
}

function DeleteUser(username) {
  let users = JSON.parse(localStorage.getItem("Users")) || [];
  users = users.filter((user) => {
    return user.name !== username;
  });
  console.log(users);
  localStorage.setItem("Users", JSON.stringify(users));
  UpdateCards();
}

function UpdateCards() {
  const tempUsers = JSON.parse(localStorage.getItem("Users")) || [];
  cards_box.innerHTML = "";
  tempUsers.forEach((userobj) => {
    console.log(userobj);

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        
          <button class="delete"><img src="./delete.png" alt=""></button>
              <div class="img">
              <img src="${userobj.imageurl}" alt="">
            </div>
            <div class="info">
             <div class="name">${userobj.name}</div>
             <div class="des">
              <div class="hometown-box">
                <div class="hometown-head">Home Town</div>
                <div class="hometown">${userobj.hometown}</div>
              </div>
              <div class="bookings">
                <div class="bookings-head">Bookings</div>
                <div class="bookings-text">${userobj.bookings}</div>
              </div>
              <div class="urgency">
                <div class="category-head">Category</div>
                <div class="category ${userobj.category}">
                </div>
              </div>
             </div>
            </div>
            <div class="actions">
              <button class="call">
                <img src="./phone-fill.png" alt="">
                Call
              </button>
              <button class="message">Message</button>
            </div>
      
         `;
    card.querySelector(".category").classList.add(userobj.category);
    cards_box.appendChild(card);
  });
}

open_form.addEventListener("click", () => {
  cardsection.style.display = "none";
});
open_cards_section.addEventListener("click", (e) => {
  cardsection.style.display = "flex";
});
UpdateCards();



// ---------- helpers ----------
function showError(msg) {
  error.innerText = msg;
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  error.innerText = ""; // reset error

  const imageurl = document.querySelector("#image-url").value.trim();
  const name = document.querySelector("#full-name").value.trim();
  const hometown = document.querySelector("#home-town").value;
  const purpose = document.querySelector("#purpose").value.trim();
  const category = document.querySelector('input[name="category"]:checked');
  console.log(imageurl, name, hometown, purpose, category?.value);

  // ❌ Image URL
  if (!imageurl) {
    return showError("Image URL is required");
  }

  if (!isValidUrl(imageurl)) {
    return showError("Please enter a valid Image URL");
  }

  // ❌ Full Name
  if (!name) {
    return showError("Full Name is required");
  }

  if (name.length < 3) {
    return showError("Full Name must be at least 3 characters");
  }

  // ❌ Home Town
  if (!hometown) {
    return showError("Please select a Home Town");
  }

  // ❌ Purpose
  if (!purpose) {
    return showError("Purpose is required");
  }

  // ❌ Category
  if (!category) {
    return showError("Please select a Category");
  }

  // ✅ ALL VALID
  updateusers(
    imageurl,
    name,
    hometown,
    0, // bookings default
    category.value
  );

  UpdateCards();
  form.reset();
});


function updatecards(){
  const cards  = document.querySelectorAll(".card");
  cards.forEach((card,index) => {
    card.style.zIndex = 3- index;
    card.style.transform = `translateY(${index * 20}px) scale(${1 - index * 0.01})`;
    if(index === 0){
      card.style.opacity = 1;
    }
    else{
      card.style.opacity = 1 - index * 0.1;
    }
  });

}

up.addEventListener("click", () => {
  let lastchild = cards_box.lastElementChild;
  if (lastchild) {
    cards_box.insertBefore(lastchild,cards_box.firstElementChild);
    updatecards();
  }
});
down.addEventListener("click", () => {
  let firstchild = cards_box.firstElementChild;
  if(firstchild){
    cards_box.appendChild(firstchild);
    updatecards();
  }
});



const deletebuttons = document.querySelectorAll(".delete");
deletebuttons.forEach((deletebutton) => {
  deletebutton.addEventListener("click", (e) => {
    const deletename = e.target.closest(".card").querySelector(".name").innerText;
    DeleteUser(deletename);
  });
});
