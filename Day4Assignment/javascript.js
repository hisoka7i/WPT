function f1(){
  let n1 = document.getElementById('number1').value;
  let n2 = document.getElementById('number2').value;
  document.getElementById('output').style.visibility="visible";
  switch (document.getElementById('s1').value) {
    case '+':
    document.getElementById('output').innerHTML = (parseInt(n1) + parseInt(n2));
    break;
    case '-': document.getElementById('output').innerHTML = (parseInt(n1) - parseInt(n2));
    break;
    case '*': document.getElementById('output').innerHTML = (parseInt(n1) * parseInt(n2));
    break;
    case '/': document.getElementById('output').innerHTML = (parseInt(n1) / parseInt(n2));

      break;
    default: document.getElementById('output').innerHTML = "Wrong Input";

  }
  console.log(document.getElementById('number2').getAttribute("class"));
  setTimeout(
    ()=>{document.getElementById('output').style.visibility="hidden";}, 1000);


}
function fun2(){
  document.getElementById('number2').setAttribute('value', 0);
  document.getElementById('number1').setAttribute('value', 0);
}

function convert(){

						 }



function stop(){
  var e = document.getElementById('Checkbox1');
  //console.log(e.checked);
  if(e.checked){
    document.getElementById('number4').setAttribute("readonly","true");
  }
  else{
    document.getElementById('number4').removeAttribute("readonly");
  }
}
function assignment4(case1){
  var number = document.getElementById('number5').value;
  document.getElementById('output1').style.visibility="visible";
  switch (case1) {
    case 'sq': document.getElementById('output1').innerHTML=(number*number);
      break;
    case 'cube':  document.getElementById('output1').innerHTML=(number*number*number);
      break;
    case 'same':  document.getElementById('output1').innerHTML=(number);
      break;
  }
  setTimeout(()=>{document.getElementById('output1').style.visibility="hidden";},800);
}
