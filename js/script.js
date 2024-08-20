let menus=document.querySelector("nav");
let menuBtn=document.querySelector(".menu-btn");
let closeBtn=document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
    menus.classList.add("active");
})

closeBtn.addEventListener("click",function(){
    menus.classList.remove("active");
})

/*var swiper = new swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween:30,
    slidesPerGroup: 1,
    loop:true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },*/
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        968:{
            slidesPerView:3,
        },
    }
  });

  //Dynamic images

  const SectionCenter=document.querySelector('.menus_items_container');
  const filterBtn=document.querySelectorAll('.btn-cat');
  
  filterBtn.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const Category=e.currentTarget.dataset.id;
        const menuCategory=menu.filter(function(menuItem){
            if(menuItem.Category==Category){
                return menuItem;
            }
        });
        if(Category=="all"){
            displayMenusItem(menu);
        }
        else{
            displayMenusItem(menuCategory);
        }
    })
  });
  const menu =[
    {
        id: 1,
        title:"Daal chawal",
        Category:"Dinner",
        price: 25,
        images: ""
    },
    {
        id:2,
        title:"Daal chawal",
        Category:"Lunch",
        price:25,
        images:"./images/01 copy.jpeg"
    },
    {
        id:3,
        title:"Daal chawal",
        Category:"Drinks",
        price:25,
        images:"./images/01 copy.jpeg"
    },
    {
        id:4,
        title:"Daal chawal",
        Category:"Starter",
        price:25,
        images:"./images/01 copy.jpg"
    },
    {
        id:5,
        title:"Daal chawal",
        Category:"Dinner",
        price:25,
        images:"./images/01 copy.jpeg"
    },
    {
        id:6,
        title:"Daal chawal",
        Category:"Lunch",
        price:25,
        images:"./images/01 copy.jpeg"
    },
    {
        id:7,
        title:"Daal chawal",
        Category:"Drinks",
        price:25,
        images:"./images/01 copy.jpeg"
    },
    {
        id:8,
        title:"Daal chawal",
        Category:"Starter",
        price:25,
        images:"./images/01 copy.jpeg"
    },
    {
        id:9,
        title:"Daal chawal",
        Category:"Dinner",
        price:25,
        images:"./images/"
    },

  ]

  window.addEventListener("DOMContentLoaded",function(){
    displayMenusItem(menu);
  });
  function displayMenusItem(menuItem){
    let displayMenusItem=menuItem.map(function(item){
        return`<div class="img_cards">
        <img src=${item.images} alt=" "/>
        <p class="price" >Only on ${item.price} dollars</p>
        <p>${item.title}</p>
    </div>`;
    })
        displayMenusItem=displayMenusItem.join("");
        SectionCenter.innerHTML=displayMenusItem;

    
  }


  //sticky

  const nav=document.querySelector("header");
  window.addEventListener("scroll",function(){
    if(this.document.documentElement.scrollTop>20){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
  })

  //parallax effect
  const Parallax=document.querySelector("#showcase");
  window.addEventListener("scroll",function(){
    let offset=this.window.pageYOffset;
    Parallax.style.backgroundPositionY=offset*0.7+"px";
  });