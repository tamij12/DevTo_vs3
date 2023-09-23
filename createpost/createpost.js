const URL_API ='https://js-bb127-default-rtdb.firebaseio.com/';
const image = document.querySelector('#image');
const titulo = document.querySelector('#titulo');
const tags = document.querySelector('#tags')
const descripcion = document.querySelector('#descripcion');
const publish = document.querySelector('#publish');


const createPost = async (post) => {
    const url = URL_API + '.json';
    const create = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(post)
    });
    if (create.status === 200) {
        getInfo();
};
}

publish.addEventListener('click', async () => {
    const imageData = image.value;
    const tituloData = titulo.value;
    const tagsData = tags.value;
    const descripcionData = descripcion.value;
    const postData = {
        image: imageData,
        titulo: tituloData,
        tags: tagsData,
        descripcion: descripcionData,
    };
    createPost(postData);
});