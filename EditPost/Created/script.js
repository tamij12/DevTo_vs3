//alert('HOla');
//PROBLEMAS:
// Seleccionar los elementos. (OK)
//acceder al valor de las propiedades del objeto. (OK)
// Crear el objeto con la información de los artículos. (OK)
// Guardarlo en un arreglo cada vez que damos clic. (ok)
// Mostrar la información en el nuevo formato de articulo. 
    // Maquetar el contenedor donde se visualizarán la información. 
    // Identificar los elementos fijos y dinámicos
    // Renderizar los elementos HTML dinámicos con JS, 

// Cada vez que haga clic se guardará un artículo dentro del arreglo. 
// Ejecutar la función del nuevo articulo con el arreglo para representar los datos. 


const URL_FIREBASEPOST = 'https://crud-js28g-default-rtdb.firebaseio.com/';
const enviar = document.querySelector('#artPublish');

//referencias a elementos: 
const titleContainer = document.querySelector('#titleContainer');
const contentContainer = document.querySelector('#contentContainer');
const imgContainer = document.querySelector('#imgContainer');
const buttonsContainer = document.querySelector('#buttonsContainer');
// const mainContainer = document.querySelector('#mainContainer');


//Función para limpiar la lista de Artículos(-----REVISAR----)
const cleanListArticle = () => {
    while(titleContainer.firstChild) {
        titleContainer.removeChild(titleContainer.firstChild);    
    };

    while(contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    };

    while(imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
    };

    while(buttonsContainer.firstChild) {
        buttonsContainer.removeChild(buttonsContainer.firstChild);
    };
}

//Función para borrar Artículos: 
const deleteArticle =  async (id) => {
    console.log(id)
    const url = URL_FIREBASEPOST + id + ".json"
    const deleted = await fetch (url,{
        method:'DELETE'
    });
    if(deleted.status === 200){
        getArticlesApi();
    };
};

//Funicón para crear artículos: 
const postArticles = async (article) => {
    const url = URL_FIREBASEPOST + '.json'
    const create = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(article),
    });
    if(create.status === 200){
        getArticlesApi()
    }
};

// Función para guardar al dar clic: 
enviar.addEventListener('click',() => {
    // console.log('Hola')
    const inputImg = document.querySelector('#coverImg');
    const inputTitle = document.querySelector('#mainTitle');
    const inputTags = document.querySelector('#sectionTags');
    const inputContent = document.querySelector('#writeContent');

    const article = {
        coverImg: inputImg.value,
        mainTitle: inputTitle.value,
        sectionTags: inputTags.value,
        writeContent: inputContent.value,
    };
    postArticles(article);
});

//Función para renderizar Artículos: 
const renderArticle = (infoArticle, index) => {
    console.log(infoArticle)
    
    //Img:
    const divImg = document.createElement('div');
    const theCoverImg = document.createElement('img');
    //Img dinámica: 
    const imagen = infoArticle.coverImg
    // console.log(imagen)

    divImg.className = 'card-body';
    theCoverImg.src = imagen;

    divImg.appendChild(theCoverImg)
    imgContainer.appendChild(divImg);

    //Crear Título + #:
    const titleH1 = document.createElement('h1'); 
    const hashP = document.createElement('p');
    //Crear Título + # dinámicos: 
    const titulo = infoArticle.mainTitle
    const tags = infoArticle.sectionTags
    // console.log(titulo)
    // console.log(tags)

    titleH1.className = 'card-title';
    hashP.className = 'card-text';
    titleH1.textContent = titulo;
    hashP.textContent = tags;

    titleContainer.appendChild(titleH1);
    titleContainer.appendChild(hashP);

    //Crear Content:
    const contentP = document.createElement('p');
    //Crear Content dinámico: 
    const contenido = infoArticle.writeContent
    // console.log(contenido)

    contentP.className = 'card-text';
    contentP.textContent = contenido;

    contentContainer.appendChild(contentP);

    //Crear Boton Eliminar: 
    const buttonDelete = document.createElement('button');

    buttonDelete.className = 'btn btn-primary';
    buttonDelete.textContent = 'Delete';
    buttonDelete.dataset.item = infoArticle.id;

    buttonsContainer.appendChild(buttonDelete);
    
    //Listener Boton Eliminar: ---- check
    buttonDelete.addEventListener('click',(event) =>{
        const articleToRemove = event.target.dataset.item
        deleteArticle(articleToRemove)
    });
    
    //boton Editar: 
    const buttonEdit = document.createElement('button');
    
    buttonEdit.className = 'btn btn-primary';
    buttonEdit.textContent = 'Edit';
    buttonEdit.dataset.item = infoArticle.id;
    
    buttonsContainer.appendChild(buttonEdit);

    //Listener Boton Editar: ---- check
    buttonEdit.addEventListener('click', (event) => {
        console.log(window)
        const articleToEdit = event.target.dataset.item;
        window.location.href = 'http://127.0.0.1:5500/edit/?id=' + articleToEdit;
    });

// REVISAR CÓDIGO AQUÍ 


}

//Función para renderizar la lista de Artículos: 
const renderListArticle = (articleToRender) => {
    articleToRender.forEach((article, index) => {
        renderArticle(article, index);
    });
};


// Función que convierte los datos de JSON de un GET, a una estructura que nos permitirá manipularnos. 
const parserResponseFireBase = (response) => {
    const parsedResponse = []
        for(const key in response){
            const element = {
                id: key,
                coverImg: response[key].coverImg,
                mainTitle: response[key].mainTitle,
                sectionTags: response[key].sectionTags,
                writeContent: response[key].writeContent,
            };
            parsedResponse.push(element)
        };
    return parsedResponse;
};

// Segundo, hacer la consulta a la BBD para traer la información que se guardó. 
const getArticlesApi = async() => {
    try {
        const url = URL_FIREBASEPOST + '.json'
        const response = await fetch(url);
        console.log(response)
        if(response.status !== 201){
            const parsed = await response.json();
            const responseParsered = parserResponseFireBase(parsed);
            cleanListArticle()
            renderArticle(responseParsered)
            }
    } catch (error) {
            console.error(error)
    }
};

getArticlesApi()
