
// document.getElementById("style").style.display="none"
// document.getElementsByClassName
// document.write('hellojs')
// function test()
// {
//     document.getElementById("title").innerHTML = "a"
// }

function hello() {
    let hello = document.getElementById("hello");
    if (hello.getAttribute("class") == "firstclass") {
      hello.setAttribute("class", "");
    } else {
      hello.setAttribute("class", "firstclass");
    }
  }
  
  function light() {
    // let swichon = document.getElementById("TurnOn");
    let light1 = document.querySelector(".circle");
    let light2 = document.querySelector(".circle2");
    let light3 = document.querySelector(".circle3");
    let light4 = document.querySelector(".circle4");
    let light5 = document.querySelector(".circle5");
  
    light1.style.boxShadow = "0 0 20px 10px #D50300";
    light2.style.boxShadow = "0 0 20px 10px #00D510";
    light3.style.boxShadow = "0 0 20px 10px #E6E308";
    light4.style.boxShadow = "0 0 20px 10px #087EE6";
    light5.style.boxShadow = "0 0 20px 10px #BE08E6";
  }
  
  function off(){
    let light1 = document.querySelector(".circle");
    let light2 = document.querySelector(".circle2");
    let light3 = document.querySelector(".circle3");
    let light4 = document.querySelector(".circle4");
    let light5 = document.querySelector(".circle5");
    
    light1.style.boxShadow = "0 0 0px 0px #D50300";
    light2.style.boxShadow = "0 0 0px 0px #00D510";
    light3.style.boxShadow = "0 0 0px 0px #E6E308";
    light4.style.boxShadow = "0 0 0px 0px #087EE6";
    light5.style.boxShadow = "0 0 0px 0px #BE08E6";
  }