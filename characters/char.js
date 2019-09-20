
 var Instructions=document.getElementById('helpIcon')
 Instructions.addEventListener('click',show)

 var characters=[];
 var choiced=null;
 var s1 = document.getElementById('avatar1');
 var s2 = document.getElementById('avatar2');
 
function setSelect0(){
    choiced=1;
   s1.setAttribute("class","pressed");       
   s2.removeAttribute("class","pressed");
    console.log(choiced);
}
s1.addEventListener('click',setSelect0);
  
 function setSelect1(){
    choiced=2;
    s2.setAttribute("class","pressed");
    s1.removeAttribute("class","pressed");
     
    console.log(choiced);
  }
  s2.addEventListener('click',setSelect1); 

  
 var clicked=false;
 var helpShow=document.getElementById('help')
 function show(){
   if(!clicked){
    helpShow.style.display='block';
    clicked=true;
   }
   else{
    helpShow.style.display='none'
    clicked=false;
}
 }
 var popUP=document.getElementById('alert')
   
 var f=document.getElementById('form');
 f.addEventListener("submit",function (e){
    
     if(choiced==null){
     e.preventDefault();
     popUP.style.display='block'
     console.log("ahe");
    
    }else{
        
        localStorage.setItem("characterId",choiced);
    } 
   
    
 })