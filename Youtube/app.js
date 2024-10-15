const menuLogo = document.querySelector(".fa-bars");
const asideMenu = document.querySelector(".aside-bar");
const cards = document.querySelector("#card-part");
menuLogo.addEventListener('click' , ()=>{asidebar()})

var present = true;
function asidebar(){
   console.log("hello");
    if (present === true){
        asideMenu.style.display = 'flex';
        present = false;
        cards.style.marginLeft = '20px';

    }else{
        asideMenu.style.display = 'none';
        present = true;
        cards.style.marginLeft = '0px';
    }
}


function cardsCreations(){

        User_data.map((data)=>{
            console.log("hello")
            cards.innerHTML +=  `<div class="video-data">
            <div class="thumbnail">
                <img src="${data.URL}" alt="thumbnail">
            </div>
            <div class = "thumb-logo">
                <img src="${data.Logo}" alt="">
                <p>${data.Title}</p>
            </div>
            <div class = "user-id">
                <p class="cha-name">${data.NAME}</p>
                <p class="count">${data.Views}</p>
            </div>
        </div>`;
        })


}

cardsCreations()