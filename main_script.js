
const URL_FIREBASE_Post = 'https://js-80023-default-rtdb.firebaseio.com/.json';


const createpost = document.querySelector('#createpost')
createpost.addEventListener('click',() => {
    window.location.href= "./createpost.html"
})
const parserResponseFireBase = (response) => {
    const parsedResponse = []
        for(const key in response ){

            const element = {
                id: key,
                image: response[key].image,
                descripcion: response[key].descripcion,
                titulo: response[key].titulo,
                date: response[key].date
            };
  
            parsedResponse.push(element)
        };
    return parsedResponse;

  };

// const getPost = async(id, action) => {
//   try {
      

//       const response = await fetch(URL_FIREBASE_Post,  {
//           method: 'GET'
//       });
//       const parsed = await response.json();
//       return parserResponseFireBase(parsed);

//   } catch (error) {
//       console.error(error)
//   }
// };
// console.log(getPost());




const getPost = async() => {
    try {
        // codigo que se ejecutara por default
        const url = URL_FIREBASE_Post 
        const response = await fetch(url);
        console.log(response)
        if(response.status !== 201){
            const parsed = await response.json();
            const responseParsered = parserResponseFireBase(parsed);
            cleanList()
            //renderCard(responseParsered);
        }
        
        // throw new Error('este es un error en el try')
    } catch (error) {
        // codigo a ejecutarse cuando hay un error
        console.error(error, 'xxxx')
    }
};




const cleanList = () => {
    while(contentCard.firstChild) {
        contentCard.removeChild(contentCard.firstChild)
    };
};

const renderCard = (getPost) => {
    console.log(getPost);
    cardToRender.forEach(( post, index ) => {
        renderPost(post, index);
    });
};


const renderPost = (infoPost, index) => {

    const nameContainer =(url) =>{
        const autor_name__container = document.createElement("div");
        const autor_name = document.createElement("span");
        const autor_lastName = document.createElement("span");
    
        const userName = infoPost.id;
        console.log(userName);
    
        autor_name.textContent = "Fermin";
    
        autor_lastName.textContent = "López";
        
        autor_name__container.appendChild(autor_name);
        autor_name__container.appendChild(autor_lastName);
        return autor_name__container
    }
    
    const postTime =() =>{
        const post_time = document.createElement("span");
        post_time.textContent = "sep 21"
        return post_time
    }
    postTime();
    
    const postImg__container = (URL) =>{
        const  post_Img__container = document.createElement("div");
        const autor_pic = document.createElement("img");
    
        const autor_photo = document.createElement("img");
    
        autor_photo.className = "z-3"
    
        autor_pic.src ="https://fastly.picsum.photos/id/641/90/90.jpg?hmac=R269Ml4S2Dos1Hbx_4De5lW3vRyTxgzK5oFB2Cv-kgw"
        autor_photo.src = "https://fastly.picsum.photos/id/641/90/90.jpg?hmac=R269Ml4S2Dos1Hbx_4De5lW3vRyTxgzK5oFB2Cv-kgw"
        
        
        post_Img__container.appendChild(autor_photo);
        post_Img__container.appendChild(autor_pic);
        return post_Img__container
    }

    
    const deleteButton = () =>{
        const deleteContainer =document.createElement("div");
        const buttonDelete = document.createElement("button");
    
        deleteContainer.className = "d-flex justify-content-end"
        buttonDelete.className = "btn btn-danger"
    
        buttonDelete.textContent = "delete"
    
        deleteContainer.appendChild (buttonDelete);
        return deleteContainer
    }
    deleteButton();
    
    const autorInfo_container =() =>{
        const autor_info__container = document.createElement("div");
    
        autor_info__container.className = " d-flex flex-column ms-2"
    
        autor_info__container.appendChild(nameContainer(URL_API));
        autor_info__container.appendChild(postTime());
        return autor_info__container
    }
    
    const autorContainer = () =>{
        const autor_container = document.createElement("div")
        autor_container.className = "d-flex justify-content-between"
    
        autor_container.appendChild(postImg__container(URL_API))
        autor_container.appendChild(autorInfo_container())
        return autor_container
    }
    
    const renderCard = (URL_API) =>{
        const profile_deleteButton = document.createElement("div");
        profile_deleteButton.className = "d-flex justify-content-between ms-1"
    
        profile_deleteButton.appendChild(autorContainer());
        //profile_deleteButton.appendChild(deleteButton());
        return profile_deleteButton;
    }
    
    const titleContent = (url) =>{
        const h3 =document.createElement("h3")
        h3.className = "card-title card-subtitle-lg mt-3 ms-md-5 ms-lg-5 d-none d-md-block d-lg-block"
        h3.textContent = url.postInformation.titulo;
        return h3
    }
    
    
    
    
        const tagsContainer = (url) => {
            const ul = document.createElement("ul");
            ul.className = "d-flex flex-wrap ms-md-5 ms-lg-5";
    
            url.forEach(tag => {
              const li = document.createElement("li");
              li.textContent = tag;
              ul.appendChild(li);
            });
            return ul;
          };
    
    
    
    const reactions = () => {
        const a = document.createElement ("a")
        a.className = "link-underline-light d-flex align-items-center"
        const picContainer = document.createElement("div");
    
    
    }
    
    const reactionAndComments_container = () =>{
        const react_comnts_container = document.createElement("div");
        react_comnts_container.className = "d-flex align-items-center"
    
    }
    
    const infoFooter_container = (url) =>{
        const info_footer__container= document.createElement("div");
        info_footer__container.className = "d-flex justify-content-between align-items-center ms-md-5 ms-lg-5"
        info_footer_container.appendChild(reactionAndComments_container)
    }
    
    const contentCard = document.querySelector("#card_dinamic");
    contentCard.appendChild(renderCard(URL_API))
    contentCard.appendChild(titleContent(URL_API))
    contentCard.appendChild(tagsContainer(URL_API))
    console.log(contentCard);
    


};

getPost();

