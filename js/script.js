let menus=document.querySelector("nav");
let menuBtn=document.querySelector(".menu-btn");
let closeBtn=document.querySelector(".close-btn");

menuBtn.addEventListener("click",function(){
    menus.classList.add("active");
})

closeBtn.addEventListener("click",function(){
    menus.classList.remove("active");
})

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
        title:"Chole Chawal",
        Category:"Dinner",
        price: 125,
        images: "./images/pexels-ali-dashti-506667798-25856539 copy.jpg"
    },
    {
        id:2,
        title:"Beetroot Salad",
        Category:"Lunch",
        price:150,
        images:"./images/pexels-peps-silvestro-180443212-18229213 copy.jpg"
    },
    {
        id:3,
        title:"Mango Juice",
        Category:"Drinks",
        price:90,
        images:"./images/pexels-rajdeepcraft-17119248-6416553 copy.jpg"
    },
    {
        id:4,
        title:"Cheescake",
        Category:"Starter",
        price:250,
        images:"./images/pexels-cescrz-3185509 copy.jpg"
    },
    {
        id:5,
        title:"Veg Biryani",
        Category:"Dinner",
        price:220,
        images:"./images/pexels-ali-dashti-506667798-24206918 copy.jpg"
    },
    {
        id:6,
        title:"Burger and Fries",
        Category:"Lunch",
        price:300,
        images:"./images/pexels-the-castlebar-3902897-9201333 copy.jpg"
    },
    {
        id:7,
        title:"Blueberry Juice",
        Category:"Drinks",
        price:120,
        images:"./images/pexels-cookeat-6671856 copy.jpg"
    },
    {
        id:8,
        title:"Samosa",
        Category:"Starter",
        price:50,
        images:"./images/pexels-karthikeyan-anand-271239097-14477873 (1) copy.jpg"
    },
    {
        id:9,
        title:"Veg Platter",
        Category:"Dinner",
        price:450,
        images:"./images/pexels-ali-dashti-506667798-21856002 copy.jpg"
    },

  ]

  window.addEventListener("DOMContentLoaded",function(){
    displayMenusItem(menu);
  });
  function displayMenusItem(menuItem){
    let displayMenusItem=menuItem.map(function(item){
        return`<div class="img_cards">
        <img src="${item.images}" alt=""/>
        <p class="price" >Only for ${item.price} rupees</p>
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