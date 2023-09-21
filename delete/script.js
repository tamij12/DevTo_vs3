const URL_API ='https://js-bb127-default-rtdb.firebaseio.com/';
const borrar = document.querySelector('#prueba');

borrar.addEventListener('click', () => {

    deletePost('-NepfkLjZwZduXFUQIDH');
    
});
const deletePost = async(id) => {
    
    const url = URL_API + id + '.json'
    const deleted = await fetch(url, {
        method: 'DELETE'
    });
    if(deleted.status === 200) {
        console.log('borrado')
    };

};

