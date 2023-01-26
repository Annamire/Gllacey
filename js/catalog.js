let paginationList = document.querySelector('.pagination__list');
let basket = document.querySelector('.basket__tbody')

paginationList.addEventListener('click', function(e) {
    if (e.target.classList.contains('pagination__link')) {
        e.preventDefault();
        let target =  e.target;
        if (!target.classList.contains('active')) {
            paginationList.querySelector('.pagination__link.active').classList.remove('active');
            target.classList.add('active')
        }
    }
});

basket.addEventListener('click', function(e){
    if(e.target.closest('.basket__btn-delete')) {
        e.target.closest('.basket__row').remove()
    }
});


