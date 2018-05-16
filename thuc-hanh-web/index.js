function next(node){
  page = node.parentNode.querySelector(".scroller").getAttribute("page").split("-");
  nodes = node.parentNode.querySelectorAll(".scroller > *");
  if(page[1] == (nodes.length -1)){
    page[0] = 0;
    page[1] = 4;
  }
  else if(nodes.length - page[1] < 6) {
    page[0] = nodes.length - 5;
    page[1] = page[0] + 4;
  }
  else {
    page[0] = parseInt(page[1]) + 1;
    page[1] = page[0] + 4;
  }
  node.parentNode.querySelectorAll(".show").forEach((i)=>{
    i.classList.remove("show");
  });
  for(i = page[0];i <= page[1];i++){
    nodes[i].classList.add("show");
  }
  node.parentNode.querySelector(".scroller").setAttribute("page",page[0]+"-"+page[1]);
}


function prev(node){
  page = node.parentNode.querySelector(".scroller").getAttribute("page").split("-");
  nodes = node.parentNode.querySelectorAll(".scroller > *");
  if(page[0] == 0){
    page[1] = nodes.length - 1;
    page[0] = page[1] - 4;
  }
  else if(page[0] < 6) {
    page[0] = 0;
    page[1] = 4;
  }
  else {
    page[1] = parseInt(page[0] - 1);
    page[0] = page[1] - 4;
  }
  node.parentNode.querySelectorAll(".show").forEach((i)=>{
    i.classList.remove("show");
  });
  for(i = page[0];i <= page[1];i++){
    nodes[i].classList.add("show");
  }
  node.parentNode.querySelector(".scroller").setAttribute("page",page[0]+"-"+page[1]);
}



window.onload = ()=>{
  var state = true;
  time();
  window.onfocus = ()=>{state = true;time()};
  window.onblur = ()=>{document.title = "Come backkkkkkkkkkkkkkk"; state = false;};
  function time(){
    if(state){
      var d = new Date();
      var str = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      document.title = str;
      setTimeout(time,1000);
    }
  }
}
