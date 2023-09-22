const URL_API ='https://js-bb127-default-rtdb.firebaseio.com/';
const buttonDelete = document.querySelector('#deletepostbutton');


buttonDelete.addEventListener('click',(event) => {
    const elementToRemove = event.target.dataset.post;
    console.log(elementToRemove)
    deletePost(elementToRemove);
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


