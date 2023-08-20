var dem=0;
function selectsit(obj) {
    var a=document.getElementById("number");
    var b=document.getElementById("price");
    var gia=45;
    if(obj.style.background==="white"){
        obj.style.background="aquamarine";
        dem--; 
    }
    else
    {
        obj.style.background="white";
        dem++;
    }
    gia=gia*dem;
    a.innerHTML=dem;
    b.innerHTML=`${gia}.000đ`;
}
function selecttime(obj){
   let a=document.getElementsByClassName("time-begin");
   for(let i=0;i<a.length;i++)
   {
    a[i].style.background="yellow";
   }
   obj.style.background="darkkhaki";
}
var space=0;
var cong=1;
function next(){
    var slides=document.getElementsByClassName("slide-itiem");
    var slideShow=document.querySelector(".slide-show");
    var i=slides.length-4;
    space-=20;
    cong++;
    if(cong>i){
        space=0;
        cong=1;
    }
    slideShow.style.transform=`translateX(${space}%)`;
    slideShow.style.transition="translateX 3s";
}
function prev(){
    var slides=document.getElementsByClassName("slide-itiem");
    var slideShow=document.querySelector(".slide-show");
    var i=slides.length;
    space+=20;
    cong--;
    if(cong<1){
        space=-20*4;
        cong=i;
    }
    slideShow.style.transform=`translateX(${space}%)`;
}
function loadCates() {
    fetch("./data/categories.json").then(res => res.json()).then(data => {
        let h=" ";
        for (let c of data) {
            h += `<li><a href="${c.link}">${c.name}</a></li>`;
        }
         let e = document.querySelector(".nav");
         e.innerHTML += h;

    })
}
function loadMovies(){
    fetch("./data/movie.json").then(res => res.json()).then(data => {
        let h=" ";
        for (let c of data) {
            h += `<div class="movie">
            <div>
                <a href="${c.goto}">
                    <div class="text">
                        <div class="pic"><img src="${c.image}" alt="movie-pic"></div>
                        <div><h2>${c.name}</h2></div>
                        <div>${c.info}</div>
                    </div>
                </a>
                <ul>
                    <li><a href="${c.link}">TRAILER</a></li>
                    <li><a href="${c.ticket}">MUA VÉ</a></li>
                </ul>
            </div>
        </div>`;
        }
         let e = document.querySelector(".list-movie");
         e.innerHTML += h;

    })
}

window.onload=function(){
    var slidesindex
    function showsildes(){
        var i;
        var slides=document.getElementsByClassName("mySlides");
        for(i=0;i<slides.length;i++){
            slides[i].style.display="none";
        }
        slides[slidesindex].style.display="block";
        slidesindex++;
        if(slidesindex > slides.length-1){
            slidesindex=0;
        }
        setTimeout(showsildes,3000);
    }
    showsildes(slidesindex =0);
    loadCates();
    loadMovies();
    prev();
    next();
    selectsit();
    selecttime();
}
window.onscroll=function(){
    var header= document.getElementById("header");
    var gototop=document.getElementById("gototop");
    if(document.documentElement.scrollTop>100)
    {
            header.style.background="rgb(30, 26, 26,0.5)";
            gototop.style.display="block";
    }
    else
    {
        header.style.background="inherit";
        gototop.style.display="none";
    }    
}

//JQUERY
$(document).ready(function(){
    $('.nav-click > a').click(function(){   
        $('div.menu').toggleClass('active');
})
    $('.exit').click(function(){
        $('div.menu').removeClass('active');
    })
})







