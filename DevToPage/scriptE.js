
//alert('Sí funciona')

buttonEdit.addEventListener('click', (event) => {
    console.log(window)
    const articleToEdit = event.target.dataset.item;
    window.location.href = 'http://127.0.0.1:5500/edit/?id=' + articleToEdit;
});
