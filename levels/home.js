 var choicedLevel=null;
 var s1 = document.getElementById('btn1');
 var s2 = document.getElementById('btn2');
 var s3 = document.getElementById('btn3');
 var s4 = document.getElementById('btn4');
 
function setSelect0(){
   choicedLevel=0;
   s1.setAttribute("class","pressed btns");       
   s2.setAttribute("class","btns");
   s3.setAttribute("class","btns");
   s4.setAttribute("class","btns");
}
s1.addEventListener('click',setSelect0);
  
 function setSelect1(){
    choicedLevel=1;
    s2.setAttribute("class","pressed btns")
    s3.setAttribute("class","btns")
    s1.setAttribute("class","btns")
    s4.setAttribute("class","btns")
  }
  s2.addEventListener('click',setSelect1); 

 function setSelect2(){
    choicedLevel=2;
    s3.setAttribute("class","pressed btns")
    s1.setAttribute("class","btns")
    s4.setAttribute("class","btns")  
    s2.setAttribute("class","btns") 
}
s3.addEventListener('click',setSelect2);


 function setSelect3(){
    choicedLevel=3;
    s4.setAttribute("class","pressed btns")
    s1.setAttribute("class","btns")
    s3.setAttribute("class","btns")  
    s2.setAttribute("class","btns") 
  }
  s4.addEventListener('click',setSelect3);

  
   var f=document.getElementById('form');
   f.addEventListener("submit",function (e){
      localStorage.setItem("level",choicedLevel+1);
     if(choicedLevel==null){
      console.log("choicedLevel="+choicedLevel);
      e.preventDefault();
    }  
 })