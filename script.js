    console.log('Hello World!');

var menuList = document.getElementById('menu');
function showMenu(){
  menuList.style.width = '100%';
}
function hideMenu(){
  menuList.style.width = '0px';
}

const sidebar = document.getElementById('menu');
document.onclick=function(e){
  if(e.target.id =="menu"){
    sidebar.classList.remove('active');
  }
}
