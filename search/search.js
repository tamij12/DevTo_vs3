const buttonSearch = document.querySelector("#button-search");
const postsContainer = document.querySelector("#posts-main-search");

const test = [
  {
    cardId: 1,
    profile: "http.jajjjaj.com",
    name: "Karishma Shukla",
    date: "07/12/23",
    title: "react",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 2,
    profile: "http.jajjjaj.com",
    name: "Luias",
    date: "07/12/23",
    title: "react",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 3,
    profile: "http.jajjjaj.com",
    name: "Juan",
    date: "07/12/23",
    title: "node",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 4,
    profile: "http.jajjjaj.com",
    name: "Kjilo Shukla",
    date: "07/12/23",
    title: "react",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
];

const renderPostSearch = (postInfo) => {

  const ulPosts = document.querySelector("#posts-main-search");

  const name = document.createElement("a");
  name.textContent = postInfo.name;

  const date = document.createElement("a");
  date.textContent = postInfo.date;

  const nameDateDiv = document.createElement("div");
  nameDateDiv.className = "name__date--container d-flex flex-column";

  nameDateDiv.appendChild(name);
  nameDateDiv.appendChild(date);

  const profile = document.createElement("img");
  profile.src = postInfo.profile;

  const spanImg = document.createElement("span");

  const aImg = document.createElement("a");
  aImg.className = "card__comment--image--final d-flex";

  const divContainerImgProfile = document.createElement("div");
  divContainerImgProfile.className = "card__comment--image--final d-flex";

  spanImg.appendChild(profile);
  aImg.appendChild(spanImg);
  divContainerImgProfile.appendChild(aImg);

  const cardPhotoName = document.createElement("div");
  cardPhotoName.appendChild(divContainerImgProfile);
  cardPhotoName.appendChild(nameDateDiv);

  const divCardTop = document.createElement("div");
  divCardTop.className = "card__top--content d-flex flex-row";
  divCardTop.appendChild(cardPhotoName);

  const liTag = document.createElement("li");
  liTag.className = "card__tag me-2";

  const ulCardTags = document.createElement("ul");
  ulCardTags.className = "card__tags d-flex flex-wrap list-unstyled";
  ulCardTags.appendChild(liTag);

  const h5CardTitle = document.createElement("h5");
  h5CardTitle.className = "card-title";
  h5CardTitle.textContent = postInfo.title;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.appendChild(divCardTop);
  cardBody.appendChild(h5CardTitle);
  cardBody.appendChild(ulCardTags);

  const reactionImgFire = document.createElement("img");
  reactionImgFire.src =
    "https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg";

  const spanReaction1 = document.createElement("span");
  spanReaction1.className = "reaction--item";
  spanReaction1.appendChild(reactionImgFire);

  const reactionImgRaisedHands = document.createElement("img");
  reactionImgRaisedHands.src =
    "https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg";

  const spanReaction2 = document.createElement("span");
  spanReaction2.className = "reaction--item";
  spanReaction2.appendChild(reactionImgRaisedHands);

  const reactionImgExploding = document.createElement("img");
  reactionImgExploding.src =
    "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg";

  const spanReaction3 = document.createElement("span");
  spanReaction3.className = "reaction--item";
  spanReaction3.appendChild(reactionImgExploding);

  const reactionImgMultiUnicorn = document.createElement("img");
  reactionImgMultiUnicorn.src =
    "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg";

  const spanReaction4 = document.createElement("span");
  spanReaction4.className = "reaction--item";
  spanReaction4.appendChild(reactionImgMultiUnicorn);

  const reactionImgSparkleHeart = document.createElement("img");
  reactionImgSparkleHeart.src =
    "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg";

  const spanReaction5 = document.createElement("span");
  spanReaction5.className = "reaction--item";
  spanReaction5.appendChild(reactionImgSparkleHeart);

  const reactionsContainer = document.createElement("span");
  reactionsContainer.className = "multiple__reactions--container";

  reactionsContainer.appendChild(spanReaction1);
  reactionsContainer.appendChild(spanReaction2);
  reactionsContainer.appendChild(spanReaction3);
  reactionsContainer.appendChild(spanReaction4);
  reactionsContainer.appendChild(spanReaction5);

  const imgComments = document.createElement("img");
  imgComments.src = "/src/comments.svg";

  const spanCommentsNumber = document.createElement("span");
  spanCommentsNumber.className = "comments__number--card text-primary-emphasis";
  spanCommentsNumber.textContent = "8 comments";

  const commentsNumberCard = document.createElement("a");
  commentsNumberCard.className =
    "comments__number--cards d-flex align-items-center";

  commentsNumberCard.appendChild(imgComments);
  commentsNumberCard.appendChild(spanCommentsNumber);

  const imgBookmark = document.createElement("img");
  imgBookmark.src = "/src/bookmark.svg";

  const spanButtonReactionMenu = document.createElement("span");
  spanButtonReactionMenu.className = "button-reaction-menu";
  spanButtonReactionMenu.appendChild(imgBookmark);

  const pMinuteRead = document.createElement("p");
  pMinuteRead.className = "minute-read-font text-primary-emphasis";
  pMinuteRead.textContent = "3min read";

  const divLastMinute = document.createElement("div");
  divLastMinute.className = "last__minute__reaction d-flex";
  divLastMinute.appendChild(pMinuteRead);
  divLastMinute.appendChild(spanButtonReactionMenu);

  const aMainReactionContainer = document.createElement("a");
  aMainReactionContainer.className = "main__reaction--container";

  aMainReactionContainer.appendChild(reactionsContainer);
  aMainReactionContainer.appendChild(commentsNumberCard);
  aMainReactionContainer.appendChild(divLastMinute);

  const divMultipleReactionNumber = document.createElement("div");
  divMultipleReactionNumber.className = "multiple__reactions__number";
  divMultipleReactionNumber.appendChild(aMainReactionContainer);

  const divCard = document.createElement("div");
  divCard.className = "card";

  divCard.appendChild(cardBody);
  divCard.appendChild(divMultipleReactionNumber);

  const liPost = document.createElement("li");
  liPost.appendChild(divCard);

  ulPosts.appendChild(liPost);
};


const renderListPosts = (list) => {
  list.forEach((post) => {
    renderPostSearch(post)
  });
};
renderListPosts(test);

const search = (word, listPosts) => {
  const result = listPosts.filter((e) => e.title.includes(word));
  
  console.log(result);
  return result;
};

buttonSearch.addEventListener("click", (event) => {
  const inputSearch = document.querySelector("#input-search");
  const wordSearch = inputSearch.value;
  console.log(wordSearch);
  event.preventDefault();


  search(wordSearch, test);
});
