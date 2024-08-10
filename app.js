const mainPic = document.querySelector('#main-pic');
const cart = document.querySelector('#cart');
const addToCart = document.querySelector('.add-button');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const numberOfPieces = document.querySelector('#number-of-pieces');
const orders = document.querySelector('.order');
const profilePic = document.querySelector('.profile-picture');
const pictures = document.querySelectorAll('.pic');
const cartNumber = document.querySelector('.cart-number');
const firstPicture = document.querySelector('.pic1');
const secondPicture = document.querySelector('.pic2');
const thirdPicture = document.querySelector('.pic3');
const forthPicture = document.querySelector('.pic4');
const preview = document.querySelector('.secondary-pics');
const bin = document.querySelector('#bin')
const arrowLeft = document.querySelector('#arrow-left')
const arrowRight = document.querySelector('#arrow-right')
const galleryPicture = document.querySelector('.gallery-picture')
const openPicture = document.querySelector('.open')
const closePictures = document.querySelector('.close-pictures')
const closeOrder = document.querySelector('.close-order')
const orderTitle = document.querySelector('.order-title')
const item = document.querySelector('.item')
const cartItem = document.querySelector('#cart-item')
const emptyCart = document.querySelector('#cart-empty')
const gallery = [
    {
        id: pic1,
        img: 'images/image-product-1.jpg',
    },
    {
        id: pic2,
        img: 'images/image-product-2.jpg',
    },
    {
        id: pic3,
        img: 'images/image-product-3.jpg',
    },
    {
        id: pic4,
        img: 'images/image-product-4.jpg',
    }
]

let howManyPieces = 0;
let pictureNumber = 0;

preview.addEventListener('click', function(e){
    const id = e.target.id;
    if(id){
        pictures.forEach(function(picture){
            picture.classList.remove('active')
            e.target.classList.add('active')
        })
    }
})



arrowLeft.addEventListener('click', function(){
    pictureNumber = pictureNumber - 1
    if (pictureNumber < 0) {
        pictureNumber = gallery.length - 1  
    } 
    showPicture()
})

arrowRight.addEventListener('click', function(){
    pictureNumber = pictureNumber + 1
    if(pictureNumber == gallery.length){
        pictureNumber = 0
    } 
    showPicture()
})

function showPicture(){
    galleryPicture.src = gallery[pictureNumber].img
}








firstPicture.addEventListener('click', function(){
    mainPic.style.background =`url('${gallery[0].img}')`
    mainPic.style.backgroundSize = 'cover'   
})
secondPicture.addEventListener('click', function(){
    mainPic.style.background =`url('${gallery[1].img}')`
    mainPic.style.backgroundSize = 'cover'  
})
thirdPicture.addEventListener('click', function(){
    mainPic.style.background =`url('${gallery[2].img}')`
    mainPic.style.backgroundSize = 'cover' 
})
forthPicture.addEventListener('click', function(){
    mainPic.style.background =`url('${gallery[3].img}')`
    mainPic.style.backgroundSize = 'cover' 
})

mainPic.addEventListener('click', function(){
        openPicture.classList.remove('hide-div')
        orders.classList.remove('show-order')
})

closePictures.addEventListener('click',function(){
    openPicture.classList.add('hide-div')
})

closeOrder.addEventListener('click', function(){
    orders.classList.remove('show-order')
    console.log('click');
})



function cartFunction(){
    if(orders.classList.contains('show-order')){
        orders.classList.remove('show-order')
    }else{
        orders.classList.add('show-order')
    }

    if(howManyPieces > 0 ){
     cartItem.classList.add('show-item')
     emptyCart.classList.add('full-cart')
    }else{
    emptyCart.classList.remove('full-cart')
    }
}
function buyOnePair(){
    howManyPieces = howManyPieces + 1
   numberOfPieces.innerHTML =  howManyPieces

   
}
profilePic.addEventListener('click', cartFunction)
cart.addEventListener('click', cartFunction)

plusBtn.addEventListener('click',buyOnePair)
addToCart.addEventListener('click',function(){
    if(howManyPieces > 0){
        cartNumber.classList.add('show-number')
        cartNumber.innerText = 0 + howManyPieces
       }else {
        cartNumber.classList.remove('show-number')
    }
    

})


minusBtn.addEventListener('click',function(){
    if(howManyPieces > 0 ){
        howManyPieces = howManyPieces - 1
    }else{
        howManyPieces = 0
    }
    numberOfPieces.innerText =  howManyPieces
})

bin.addEventListener('click', function(){
   emptyCart.classList.remove('full-cart')
   cartItem.classList.remove('show-item')
})




const shoesPrice = 125;
function countPrice(){
    const price = shoesPrice * howManyPieces;
}









