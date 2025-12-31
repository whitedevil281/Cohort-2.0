const users = [
  // A
  {
    id: 1,
    name: "Alice Johnson",
    description: "Loves outdoor adventures and creative photography.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    id: 2,
    name: "Adam Smith",
    description: "A tech enthusiast who loves building new things.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  // B
  {
    id: 3,
    name: "Benjamin Blue",
    description: "Passionate about fitness and healthy living.",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  },
  {
    id: 4,
    name: "Bella Swan",
    description: "Enjoys reading novels and rainy days.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
  // C
  {
    id: 5,
    name: "Charlie Brown",
    description: "A huge fan of classic jazz and coffee.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: 6,
    name: "Clara White",
    description: "Artist who paints landscapes and portraits.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  // D
  {
    id: 7,
    name: "David Rodriguez",
    description: "Calm soul who enjoys music and long walks.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    id: 8,
    name: "Diana Prince",
    description: "Traveler seeking new adventures and cultures.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  // E
  {
    id: 9,
    name: "Ethan Hunt",
    description: "Adrenaline junkie and skydiving instructor.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    id: 10,
    name: "Emma Davis",
    description: "Nature lover who finds peace in green landscapes.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  // F
  {
    id: 11,
    name: "Felix Kjellberg",
    description: "Gamer and digital content creator.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    id: 12,
    name: "Fiona Gallagher",
    description: "Resilient spirit with a love for city life.",
    image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43",
  },
  // G
  {
    id: 13,
    name: "George Miller",
    description: "Filmmaker with a vision for the future.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    id: 14,
    name: "Grace Hopper",
    description: "Pioneer in computer programming and logic.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  // H
  {
    id: 15,
    name: "Henry Ford",
    description: "Industrialist with a passion for mechanics.",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  },
  {
    id: 16,
    name: "Hannah Baker",
    description: "Poet who expresses emotions through words.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  // I
  {
    id: 17,
    name: "Ian McKellen",
    description: "Thespian with a love for Shakespeare.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
  },
  {
    id: 18,
    name: "Isabella Wilson",
    description: "Fitness-focused and disciplined lifestyle advocate.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  // J
  {
    id: 19,
    name: "James Miller",
    description: "Tech enthusiast with a love for minimal design.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    id: 20,
    name: "Julia Roberts",
    description: "Actress known for her radiant smile.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
  },
];
const inp = document.getElementById("search-input");

function Showusers(arr) {
  arr.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
    userCard.innerHTML = `
          <img
          class="user-card-image"
            src=${user.image}
            alt="User"
            />

          <div class="user-card-blur">
          <div class="user-card-content">
          <h3 class="user-card-title">${user.name}</h3>
              <p class="user-card-text">
              ${user.description}
              </p>
              </div>
              </div>
              `;
    document.getElementById("cards-section").appendChild(userCard);
  });
}

Showusers(users);

inp.addEventListener("input", () => {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().startsWith(inp.value.toLowerCase())
  );
  if (filteredUsers.length === 0) {
    document.getElementById("cards-section").innerHTML = "";
    const message = document.createElement("p");
    message.textContent = "No users found";
    message.style.color = "white";
    document.getElementById("cards-section").appendChild(message);
    console.log("dscjnjn");
    return;
  }
  document.getElementById("cards-section").innerHTML = "";
  Showusers(filteredUsers);
});
