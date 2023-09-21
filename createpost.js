const image = document.querySelector('#image');
const titulo = document.querySelector('#titulo');
const tags = document.querySelector('#tags')
const descripcion = document.querySelector('#descripcion');
const publish = document.querySelector('#publish');

listcontent=[];

publish.addEventListener('click',() =>{
    const imageData = image.value;
    const tituloData = titulo.value;
    const tagsData = tags.value;
    const descripcionData = descripcion.value;
    const postData = {
        image: imageData,
        titulo: tituloData,
        tags: tagsData,
        descripcion: descripcionData,
    }
    listcontent.push(postData);
    console.log(listcontent);
})
