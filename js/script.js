let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () => {
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};

let accountForm = document.querySelector('.account-form')

document.querySelector('#account-btn').onclick = () => {
    accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () => {
    accountForm.classList.remove('active');
};

/*var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
});*/
var swiper = new Swiper('.home-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});


var swiper = new Swiper('.home-courses-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 5,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});




/*var swiper = new Swiper(".home-courses-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
*/
/*var swiper = new Swiper(".teachers-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});*/

var swiper = new Swiper('.teachers-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});
/*
var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
*/

var swiper = new Swiper('.reviews-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});

var swiper = new Swiper('.logo-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 70,
        stretch: 0,
        depth: 100,
        modifier: 7,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }
});
/*var swiper = new Swiper(".logo-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});*/

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(dion => dion.classList.remove('active'));
        acco.classList.toggle('active');
    };
});

document.querySelector('.load-more .btn').onclick = () => {
    document.querySelectorAll('.courses .box-container .hide').forEach(show => {
        show.style.display = 'block';
    });
    document.querySelector('.load-more .btn').style.display = 'none';
};




/*   students reviews show/hide */
function isChecked() {
    var chk = document.getElementById("checkboxhide");
    if (chk.checked) {
        document.getElementById("check1").style.visibility = "visible";
    } else {
        document.getElementById("check1").style.visibility = "hidden";
    }
}



function changeBackgroundColor(obj) {
    document.querySelector(".footer").style.backgroundColor = obj;
}


/*  ---- add your courses -------*/

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);
    })
})

/*
const click = document.getElementById("click");
const list = document.getElementById("list");

list.style.display = "none";

click.addEventListener("click", (Event) => {
    if (list.style.display == "none") {
        list.style.display == "block";
    } else {
        list.style.display == "none";
    }

})
*/


var state = false;

function toggle() {
    if (state) {
        document.getElementById("word").setAttribute("type", "password");
        state = false;
        document.getElementById("eye").style.color = '#062a79';

    } else {
        document.getElementById("word").setAttribute("type", "text");
        state = true;
        document.getElementById("eye").style.color = '#0eb582';
    }
}