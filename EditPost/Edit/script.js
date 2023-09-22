//alert('Hola')
const URL_FIREBASEPOST = 'https://crud-js28g-default-rtdb.firebaseio.com/';
const search = window.location.search;
const url = new URLSearchParams(search);
const IDARTICLE = url.get('id');

const inputImg = document.querySelector('#coverImg');
const inputTitle = document.querySelector('#mainTitle');
const inputTags = document.querySelector('#sectionTags');
const inputContent = document.querySelector('#writeContent');
const buttonSave = document.querySelector('#artPublish');

const updateArticle = async() => {
    const article = {
        coverImg: inputImg.value,
        mainTitle: inputTitle.value,
        sectionTags: inputTags.value,
        writeContent: inputContent.value,
    };

    const url = URL_FIREBASEPOST + IDARTICLE + '.json';
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(article)
    });
    //console.log(response)
    console.log(response)
    console.log(url)
    if(response.status === 200){
    //window.location.href = 'http://127.0.0.1:5500/create/'
    }
};

buttonSave.addEventListener('click', () => {
    updateArticle()
});


const getInfoId = async() => {
    const url = URL_FIREBASEPOST + IDARTICLE + '.json';
    const info = await fetch(url);
    const parsed = await info.json();
    console.log(parsed)
        inputImg.value = parsed.coverImg;
        inputTitle.value = parsed.mainTitle;
        inputTags.value = parsed.sectionTags;
        inputContent.value = parsed.writeContent;
};

(getInfoId())
