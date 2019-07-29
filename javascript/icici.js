
let modal = document.getElementsByClassName("modal")[0];
let btn = document.getElementsByClassName("myprofile")[0];
let butn= document.getElementsByClassName("close")[0];
let tooltip=document.createElement("p");
const tableCells=document.querySelectorAll(".tabletrans td");
console.log(tableCells);
for(x in tableCells)
{
  tableCells[x].onmouseover=(e)=>{
    console.log(this.childNodes);
  }
}

btn.onclick = function() {
  modal.style.display = "block";
}
butn.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function expandTab() {
  
  let expannel = document.getElementsByClassName("expannel")[0];
  if (expannel.style.maxHeight){
    expannel.style.maxHeight = null;
  } else {
    expannel.style.maxHeight = expannel.scrollHeight + "px";
   
  } 
  }
  function expandTa() {

    let expannel = document.getElementsByClassName("expannel")[1];
    if (expannel.style.maxHeight){
      expannel.style.maxHeight = null;
    } else {
      expannel.style.maxHeight = expannel.scrollHeight + "px";
    
    } 
    }
    function expandT() {
     
      let expannel = document.getElementsByClassName("expannel")[2];
      if (expannel.style.maxHeight){
        expannel.style.maxHeight = null;
      } else {
        expannel.style.maxHeight = expannel.scrollHeight + "px";
      
      } 
      }
      
    
  
let payeform = document.getElementsByClassName("payeeform")[0];
let bt=document.getElementById("addn");


bt.onclick=function() { 
  console.log("vnfv");
  payeform.style.display = "block";
}
  window.onclick = function(event) {
    if (event.target == payeform) {
      payeform.style.display = "none";
    } 
  }
  function getSelectValue()
  {
      var selectedValue = document.getElementById("list").value;
      console.log(selectedValue);
  }
  getSelectValue();

let bttn=document.querySelector('.nav-container');
Array.from(bttn.children).forEach( (item,index) => {
  item.onclick = function() {
    let x = document.querySelector('.nav-active');
    if(x) {
     x.classList.remove('nav-active'); 
    }
    item.classList.add('nav-active');

  }
})

