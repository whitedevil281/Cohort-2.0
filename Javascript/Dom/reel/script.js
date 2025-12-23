const friend = document.querySelectorAll(".add-friend-btn");
const reelsSection = document.querySelector(".reels-section");


let reelsData = [
  {
    id: 1,
    username: "urban_vibes",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    video: "./videos/1.mp4",
    caption: "City lights hit different ✨",
    likesCount: 1284,
    commentsCount: 96,
    isLiked: false,
    isFollowed: true,
    sharesCount: 55,
  },
  {
    id: 2,
    username: "nature.soul",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
    video: "./videos/2.mp4",
    caption: "Peace is a place 🌿",
    likesCount: 5421,
    commentsCount: 211,
    isLiked: true,
    isFollowed: false,
    sharesCount: 55,
  },
  {
    id: 3,
    username: "fit_with_raj",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
    video: "./videos/3.mp4",
    caption: "No excuses. Just results 💪",
    likesCount: 3120,
    commentsCount: 143,
    isLiked: false,
    isFollowed: false,
    sharesCount: 55,
  },
  {
    id: 4,
    username: "lens.story",
    profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
    video: "./videos/4.mp4",
    caption: "Every frame tells a story 📸",
    likesCount: 874,
    commentsCount: 34,
    isLiked: true,
    isFollowed: true,
    sharesCount: 55,
  },
  {
    id: 5,
    username: "tech.daily",
    profilePic: "https://randomuser.me/api/portraits/men/56.jpg",
    video: "./videos/5.mp4",
    caption: "Future is already here 🚀",
    likesCount: 1987,
    commentsCount: 88,
    isLiked: false,
    isFollowed: true,
    sharesCount: 55,
  },
  {
    id: 6,
    username: "artsy_mind",
    profilePic: "https://randomuser.me/api/portraits/women/63.jpg",
    video: "./videos/6.mp4",
    caption: "Art heals the soul 🎨",
    likesCount: 2563,
    commentsCount: 129,
    isLiked: true,
    isFollowed: false,
    sharesCount: 55,
  },
  {
    id: 7,
    username: "travel_diary",
    profilePic: "https://randomuser.me/api/portraits/men/71.jpg",
    video: "./videos/7.mp4",
    caption: "Lost somewhere beautiful 🌍",
    likesCount: 6402,
    commentsCount: 301,
    isLiked: true,
    isFollowed: true,
    sharesCount: 55,
  },
  {
    id: 8,
    username: "foodie_corner",
    profilePic: "https://randomuser.me/api/portraits/women/82.jpg",
    video: "./videos/8.mp4",
    caption: "Taste before you judge 😋",
    likesCount: 1893,
    commentsCount: 77,
    isLiked: false,
    isFollowed: false,
    sharesCount: 55,
  },
  {
    id: 9,
    username: "minimal.life",
    profilePic: "https://randomuser.me/api/portraits/men/90.jpg",
    video: "./videos/9.mp4",
    caption: "Less but better 🤍",
    likesCount: 921,
    commentsCount: 41,
    isLiked: false,
    isFollowed: true,
    sharesCount: 55,
  },
  {
    id: 10,
    username: "creative.codes",
    profilePic: "https://randomuser.me/api/portraits/women/95.jpg",
    video: "./videos/10.mp4",
    caption: "Turning ideas into reality 💡",
    likesCount: 3675,
    commentsCount: 164,
    isLiked: true,
    isFollowed: true,
    sharesCount: 55,
  },
];

async function renderReels() {
     let htmlContent = "";
  reelsData.forEach((reel, idx) => {
    htmlContent += `
      <div class="reel">
                <video src="${reel.video}" autoplay loop muted class="reel-video"></video>
                
                <div class="reel-overlay">
                    <div class="reel-info">
                        <div class="user-header">
                            <div class="profile">
                                <img src="${reel.profilePic}" alt="" class="profile-img">
                            </div>
                            <div class="username">@${reel.username}</div>
                            <button class="add-friend-btn">Add Friend</button>
                        </div>
                        <div class="caption">${reel.caption}</div>
                    </div>
                </div>

                <div class="reel-actions">
                    <div id="${idx}" class="action-button">
                       <img src="${reel.isLiked? "./icons/heart-fill.png": "./icons/heart-line (1).png"}"
                            alt="" srcset="" class="action-icon like">
                        <span class="action-count">${reel.likesCount}</span>
                    </div>
                    <div  class="action-button">
                        <img src="./icons/chat-1-line (1).svg" alt="Comment" class="action-icon">
                        <span class="action-count">${reel.commentsCount}</span>
                    </div>
                    <div  class="action-button">
                        <img src="./icons/share-forward-line.png" alt="Share" class="action-icon">
                        <span class="action-count">${reel.sharesCount}</span>
                    </div>
                </div>
            </div>
    `;
  });
  reelsSection.innerHTML = htmlContent;
}

renderReels();


reelsSection.addEventListener("click", (e) => {
    if (reelsData[e.target.id].isLiked === true) {
      reelsData[e.target.id].isLiked = false;
      reelsData[e.target.id].likesCount -= 1;
      renderReels();
      return;
    }
    reelsData[e.target.id].likesCount++
    reelsData[e.target.id].isLiked = true;
    console.log(reelsData[e.target.id].likesCount);
    renderReels();
    
    
});

likeIcon.forEach(async (params) => {
  params.addEventListener("click", (params) => {
    if (reel.isLiked === true) {
      reel.isLiked = false;
      reel.likesCount -= 1;
      renderReels();
      return;
    }
    reel.isLiked = true;
    reel.likesCount += 1;
    renderReels();
  });
});
friend.forEach(async function name(e) {
  console.log(e);
  e.addEventListener("click", (params) => {
    if (reel.isFollowed === true) {
      e.innerHTML = "Add Friend";
      e.style.backgroundColor = "rgb(9, 198, 255)";
      reel.isFollowed = false;
      renderReels();
      return;
    }
    e.innerHTML = "Remove Friend";
    e.style.backgroundColor = "grey";
    reel.isFollowed = true;
    renderReels();
  });
});
