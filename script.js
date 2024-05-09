const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.getElementsByClassName("fa fa-close")[0];
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");
const imgMode = document.getElementsByClassName("wrapper")[0];
const tableForm = document.getElementById("tableForm");
const videoForm = document.getElementById("promoVideo");
const thevideo = document.getElementById("thevideo");

sidebarClose.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  sidebarClose.style.animation = "rotateButton 0.7s ease 1";
  setTimeout(()=>{
    sidebarClose.classList.toggle("fa-bars");
  },400);
  setTimeout(()=>{
    sidebarClose.style.animation = "none";
  },700);});

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});


  let imgtodrag = $(this).parent('.buttons').parent('.content').parent('.card').find("img").eq(0);
  if (imgtodrag) {
    
    var imgclone = imgtodrag.clone().offset({
      top: imgtodrag.offset().top,
      left: imgtodrag.offset().left
    }).css({
      'opacity': '0.8',
      'position': 'absolute',
      'height': '150px',
      'width': '150px',
      'z-index': '100'
    }).appendTo($('body')).animate({
      'top': cart.offset().top + 20,
      'left': cart.offset().left + 30,
      'width': 75,
      'height': 75
    }, 1000, 'easeInOutExpo');



    imgclone.animate({
      'width': 0,
      'height': 0
    }, function(){
      $(this).detach()
    });
  }

function updateContent(){
  var updateValue = document.querySelector('input[name="view-mode"]:checked').value;
  if(updateValue == 0){
    imgMode.style.display = "flex"
    tableForm.style.display = "none"
    videoForm.style.display = "none"
    thevideo.pause();
  }
  if(updateValue == 1){
    tableForm.style.display = "block"
    imgMode.style.display = "none"
    videoForm.style.display = "none"
    thevideo.pause();
  }
  if(updateValue == 2){
    tableForm.style.display = "none"
    imgMode.style.display = "none"
    videoForm.style.display = "block"
    thevideo.play();
  }
}