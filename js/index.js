let modal = document.getElementById ('modal');
let feedbackBtn = document.getElementById('feedbackBtn');
let modalClose = document.getElementsByClassName('modal__close')[0];

if (feedbackBtn) {
    feedbackBtn.addEventListener('click', function() {
        document.querySelector('body').classList.add('modal-active')
    });
};

if (modalClose) {
    modalClose.addEventListener('click', function() {
        document.querySelector('body').classList.remove('modal-active')
    });
};


window.addEventListener('click', function(event) {
    if (event.target == modal) {
        document.querySelector('body').classList.remove('modal-active')
    }
});

window.addEventListener('keydown', function(e) {
    if(e.key === "Escape") {
        document.querySelector('body').classList.remove('modal-active')
    }
});

window.addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        document.querySelector('body').classList.add('modal-active')
    }
});


