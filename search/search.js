const buttonSearch = document.querySelector("#button-search");
const postsContainer = document.querySelector('#posts-main-search');

const renderPostsSearch = () => {
  const name = document.createElement('a');
  name.textContent = "luis";

  const date = document.createElement('a');
  date.textContent = "agosto 08";

  const nameDateDiv = document.createElement('div');
  nameDateDiv.className = "name__date--container d-flex flex-column";

  nameDateDiv.appendChild(name);
  nameDateDiv.appendChild(date);

  const profile = document.createElement('img');
  profile.src = 'hhttppkskksk';

  const spanImg = document.createElement('span');

  const aImg = document.createElement('a');
  aImg.className= "card__comment--image--final d-flex";

  const divContainerImgProfile = document.createElement('div');
  divContainerImgProfile.className = "card__comment--image--final d-flex";

  spanImg.appendChild(profile);
  aImg.appendChild(spanImg);
  divContainerImgProfile.appendChild(aImg);

  const cardPhotoName = document.createElement('div');
  cardPhotoName.appendChild(divContainerImgProfile);
  cardPhotoName.appendChild(nameDateDiv);

  const divCardTop = document.createElement('div');
  divCardTop.className = "card__top--content d-flex flex-row";
  divCardTop.appendChild(cardPhotoName);

  const liTag = document.createElement('li');
  liTag.className = 'card__tag me-2';

  const ulCardTags = document.createElement('ul');
  ulCardTags.className = "card__tags d-flex flex-wrap list-unstyled";
  ulCardTags.appendChild(liTag);

  const h5CardTitle = document.createElement('h5');
  h5CardTitle.className = "card-title";
  h5CardTitle.textContent= 'react';

  const cardBody = document.createElement('div');
  cardBody.className = "card-body";
  cardBody.appendChild(divCardTop);
  cardBody.appendChild(h5CardTitle);
  cardBody.appendChild(ulCardTags);



   const reactionImgFire = document.createElement('img');
   reactionImgFire.src = 'https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg';

   const spanReaction1 = document.createElement('span');
   spanReaction1.className = "reaction--item";
   spanReaction1.appendChild(reactionImgFire);

   const reactionImgRaisedHands = document.createElement('img');
   reactionImgRaisedHands.src = 'https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg';

   const spanReaction2 = document.createElement('span');
   spanReaction2.className = "reaction--item";
   spanReaction2.appendChild(reactionImgFire);

   
   const reactionImgExploding = document.createElement('img');
   reactionImgExploding.src = 'https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg';

   const spanReaction3 = document.createElement('span');
   spanReaction3.className = "reaction--item";
   spanReaction3.appendChild(reactionImgFire);
   
   //TODO terminar de rear los elemnetos, a partis de las reacciones, despues terminar


}
renderPostsSearch();

buttonSearch.addEventListener("click", (event) => {
  const inputSearch = document.querySelector("#input-search");
  const wordSearch = inputSearch.value;
  console.log(wordSearch);
  event.preventDefault();

  const search = (word, listPosts) => {
    const result = listPosts.filter((e) => e.title.includes(word));
    console.log(result);
    return result;
  };
  search(wordSearch, test);
});



const test = [
  {
    cardId: 1,
    perfilImg: "http.jajjjaj.com",
    name: "Karishma Shukla",
    fecha: "07/12/23",
    title: "react",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 2,
    perfilImg: "http.jajjjaj.com",
    name: "Luias",
    fecha: "07/12/23",
    title: "react",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 3,
    perfilImg: "http.jajjjaj.com",
    name: "Juan",
    fecha: "07/12/23",
    title: "node",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
  {
    cardId: 4,
    perfilImg: "http.jajjjaj.com",
    name: "Kjilo Shukla",
    fecha: "07/12/23",
    title: "react",
    tags: ["programing", "database"],
    comments: 8,
    read: "3min read",
  },
];

