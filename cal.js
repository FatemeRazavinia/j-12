var del = document.getElementById("del");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var zarb = document.getElementById("zarb");
var taghsim = document.getElementById("taghsim");
var ashar = document.getElementById("ashar");
var mosavi = document.getElementById("mosavi");
let btnnumber = document.querySelectorAll('.btn-number');
let display = document.querySelector('#display');
var back = document.getElementById("back");
var pn = document.getElementById("pn");
let ashar2 = false;
var c, y;
let number1,number2,result
let op="";

del.addEventListener('click', (e) => {
  display.textContent = "0.0";
  ashar2 = false;
});
back.addEventListener('click',(e) =>{
    let len = display.textContent.length;

     let lastDigit =display.textContent.substring(len -1 ,len);
     if(lastDigit == "."){
        ashar2=false
     }




    if (len >1){
        display.textContent = display.textContent.substring(0,len - 1);
    } else{
        display.textContent = "0.0";
    }
})

ashar.addEventListener('click', (e) =>{
    if(ashar2==false){
        display.textContent +=".";
        ashar2=true;
    }
  
  });

  pn.addEventListener('click', (e) =>{
    display.textContent= display.textContent * -1;
  });
  


btnnumber.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (display.textContent === "0.0") {
      y = display.textContent = e.target.textContent;
    } else {
      c = display.textContent += e.target.textContent;
    }
  });
});
plus.addEventListener('click', (e) =>{
   number1=Number(display.textContent);
   display.textContent ="0.0";
   op = "+";
  });

  mosavi.addEventListener('click', (e) =>{
    number2=Number(display.textContent);
     switch (op) {
      case"+":
        result=number1 + number2
      break;

      case"-":
      result=number1 - number2
    break;

    case"/":
    result=number1 / number2
  break;

  case"*":
  result=number1 * number2
break;
}
display.textContent=result;
  });
  
  
  ashar.addEventListener('click', (e) =>{
    number1=Number(display.textContent);
    display.textContent ="0.0";
    op = "/";
   });

   minus.addEventListener('click', (e) =>{
    number1=Number(display.textContent);
    display.textContent ="0.0";
    op = "-";
   });


   zarb.addEventListener('click', (e) =>{
    number1=Number(display.textContent);
    display.textContent ="0.0";
    op = "*";
   });




