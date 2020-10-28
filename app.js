//variables
const sideBar = document.querySelector('.side-bar');
const lines = document.querySelector('.lines');
const date = document.getElementById('date')

//eventListeners
lines.addEventListener('click', () => {
    sideBar.classList.toggle('open');
});

//generate the current year

date.innerHTML = new Date().getFullYear();

//shop items
const menShop = [
    {
        id: 1,
        img: '../images/man-10.jpg',
        category: 'men',

    },
    {
        id: 2,
        img: '../images/man-2.jpg',
        category: 'men'

    },
    {
        id: 3,
        img: '../images/man-3.jpg',
        category: 'men'

    },
    {
        id: 4,
        img: '../images/man-4.jpg',
        category: 'men'
    },
    {
        id: 5,
        img: '../images/man-9.jpg',
        category: 'men'
    },
    {
        id: 6,
        img: '../images/man-6.jpg',
        category: 'men'
    },
    {
        id: 7,
        img: '../images/man-7.jpg',
        category: 'men'
    },
    {
        id: 8,
        img: '../images/man-11.jpg',
        category: 'men'
    },
    {
        id: 9,
        img: '../images/man-1.jpg',
        category: 'men'
    },
    {
        id: 10,
        img: '../images/man-2.jpg',
        category: 'men'
    },
    {
        id: 11,
        img: '../images/man-4.jpg',
        category: 'men'
    },
    {
        id: 12,
        img: '../images/man-1.jpg',
        category: 'men'
    }
];

const ladiessShop = [
    {
        id: 1,
        img: '../images/woman-10.jpg',
        category: 'ladies',

    },
    {
        id: 2,
        img: '../images/woman-2.jpg',
        category: 'ladies'

    },
    {
        id: 3,
        img: '../images/woman-3.jpg',
        category: 'ladies'

    },
    {
        id: 4,
        img: '../images/woman-4.jpg',
        category: 'ladies'
    },
    {
        id: 5,
        img: '../images/man-9.jpg',
        category: 'men'
    },
    {
        id: 6,
        img: '../images/man-6.jpg',
        category: 'men'
    },
    {
        id: 7,
        img: '../images/man-7.jpg',
        category: 'men'
    },
    {
        id: 8,
        img: '../images/man-11.jpg',
        category: 'men'
    },
    {
        id: 9,
        img: '../images/man-1.jpg',
        category: 'men'
    },
    {
        id: 10,
        img: '../images/man-2.jpg',
        category: 'men'
    },
    {
        id: 11,
        img: '../images/man-4.jpg',
        category: 'men'
    },
    {
        id: 12,
        img: '../images/man-1.jpg',
        category: 'men'
    }
];



const cloths = document.querySelector('.cloth');

window.addEventListener('DOMContentLoaded', ()=> {
    let displayItem = menShop.map((item) => {
       // console.log(item)
    return `
        <div class="cloth__product">
            <div class="cloth__product-imgbox">
                <img src="${item.img}" alt="pic" class="cloth__product-img">
            </div>
        </div>
    `
    });

    displayItem = displayItem.join('');
    cloths.innerHTML = displayItem;
    console.log(displayItem)

});

const men = document.querySelector('.men');
const ladies = document.querySelector('.ladies');
const kids = document.querySelector('.kids');



//change portfolio images when btn is clicked

/** 
const men = document.querySelector('.men');
const ladies = document.querySelector('.ladies');
const kids = document.querySelector('.kids');
const menCloths = document.querySelector('.men-cloths')
const ladiesCloths = document.querySelector('.ladies-cloths')
const kidsCloths = document.querySelector('.kids-cloths')

men.addEventListener('click',(event)=> {
    event.preventDefault()
    if(menCloths.classList.contains('men-cloths')) {
        menCloths.style.zIndex = '3'       
        ladiesCloths.style.zIndex = 1;
    
    }
});

ladies.addEventListener('click',(event)=> {
    event.preventDefault()
    if(ladiesCloths.classList.contains('ladies-cloths')) {
        ladiesCloths.style.zIndex = '3'       
    
    }
});

kids.addEventListener('click',(event)=> {
    event.preventDefault()
    if(kidsCloths.classList.contains('kids-cloths')) {
        kidsCloths.style.zIndex = '3'       
    
    }
});

*/

