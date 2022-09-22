function scl() {
  var it, gtl, gl, gt;
  var Age, tax, salary;
  basic = document.getElementById("sal").value;
  // it=basic*8/100;
  // gtl=basic*10/100;
  // gl=basic*12/100;
  // gt=basic*14/100;
  document.getElementById("RESULT").value;
  //document.getElementById("gtl").value;
  // document.getElementById("gl").value;
  // document.getElementById("gt").value;    
  salary = document.getElementById("sal").value;
  Age = document.getElementById("age").value;

  if ((Age > 18)) {
    tax = (salary * 8) / 100;
    document.getElementById("RESULT").value = tax;
  }
  else {
    tax = (salary * 5) / 100;
    document.getElementById("RESULT").value = tax;
  }
}

//function  sample() { 
//  var a=200;
//var b=50;

//var   c=a>b?100+a:200;
//   console.log(c);
//}
//  sample();

function terybtn() {

  var a;
  var b;
  var c;

  d = "a is grater than b";
  e = "b is grater than a";

  a = document.getElementById("val1").value;
  b = document.getElementById("val2").value;
  //c=a > b ? d : e;

  document.getElementById("terypara").innerHTML = c;
  console.log(a > b ? d : e);
}

function stringbtn() {
  let text = document.getElementById("string").value;
  // console.log(document.getElementById("string").value);

  let length = text.length;
  console.log(text.length);
  document.getElementById("stgln").innerHTML = "text length" + length;
}
 function stringbt() {
   let replac = document.getElementById("stringrp").value;

   //console.log(replac.replace('college', 'mall'))
   let x=replac.replace('college', 'mall');
  document.getElementById("stgrp").innerHTML = "text replace is " + x;
 }

  function stringup(){
    var UpperCase=document.getElementById('stringup').value;
   let upper = UpperCase.toUpperCase();
   console.log(UpperCase.toUpperCase());
   document.getElementById("stgup").innerHTML = upper;
  }

  function stringlo(){
    var LowerCase=document.getElementById('stringlo').value;
   let lower = LowerCase.toLowerCase();
  console.log(LowerCase.toLowerCase());
   document.getElementById("stglc").innerHTML = lower;
  }

  function stringct(){
    let concatM=document.getElementById('stringct').value;
    let concat= " in  credo system";
    let conc = concatM.concat(concatM);
   console.log(concatM.concat(concat));
   document.getElementById("stgct").innerHTML = conc;
   document.getElementById("stgct").innerHTML = concat;
  }
  function stringrm(){
    let text=document.getElementById('stringrm').value;
   let text3 = "i am leraning java  script";
   let trim = text.trim(text3);
   console.log(text3.trim());
    document.getElementById("stgtrm").innerHTML = trim;
  }
  function stringcct(){
    let text=document.getElementById('stringcct').value;
     let char = text.charAt(5);
   console.log(text.charAt(5));
   document.getElementById("stgca").innerHTML = "value of 5 th index  is:" + char;
  }
  function stringiD(){
    let text=document.getElementById('stringid').value;
   let intex = text.indexOf("a");
   console.log(text.indexOf("a"));
   document.getElementById("stgio").innerHTML = " The char 'a' posistion is:" + intex;
  }
  function stringsl(){
    let text=document.getElementById('stringsl').value;
   let part = text.slice(-5);
   console.log(text.slice(-5));
   document.getElementById("stgsl").innerHTML = part;
  }
  function stringsg(){
    let text=document.getElementById('stringsg').value;
   let subs = text.substring(3);
   console.log(text.substring(3));
   document.getElementById("stgss").innerHTML = subs;
  }
  function stringslt(){
    let text=document.getElementById('stringslt').value;
   let splt = text.split("  ");
   console.log(text.split("  "));
   document.getElementById("stgsp").innerHTML = splt;

 }

 //----------Array method---------------//
 let studentlistt = ["201", "ram", "bsc", "A"];
 console.log(studentlist);



 studentlist.push("2022");
 studentlist.unshift("welcome to student list");
 studentlist.pop("");
 studentlist.shift("");

 console.log(studentlist.toString());
 console.log(studentlist.join("-"));
 console.log(studentlist.length);

 const myDailAct = ['eat', 'reading', 'sleep'];
 const addingmy = ['palying'];
 let updateArry = myDailAct.concat(addingmy);
 console.log(updateArry);

 studentlist.splice(4, 0, 'male', '10');
 console.log(studentlist);

 function printnumbers() {
   for (let i = 0; i <= 10; i++) {
     console.log(i);
   }
 }
 printnumbers();

 function printwhilenum() {
   var i = 0;
   while (i < 5) {
     console.log(i);
     i++;
   }
 }
 printwhilenum();

 function printdowhilenum() {
   let i = 8;
   const n = 6;
   do {
     console.log(i);
  i++;

   }
   while (i < n);
 }
 printdowhilenum();

 function switchex() {
   let age = document.getElementById('age').value;
   //let a=2

  switch (age) {
     case "2":
      a = 2;
       console.log("the value of a " + age);
       document.getElementById("value").age;
       break;

     case "1":
       a = 4;
       console.log("the value of a " + age);
       break;

    default:
       console.log('age provided doesnt mathces to the criteria');
       break;


   }

 }
 switchex();

console.log("----------------array loop using for for------------")

 let testarry = ["banana", "mango", "apple", "orange", "pinaple"];

let DisPly="";

 for (let i = 0; i < testarry.length; i++) {

   console.log(testarry[i]);
   DisPly +="<li>"+ (i+1)+"."  +testarry[i]+"</li>";
   }

   document.getElementById('fruitss').innerHTML= DisPly;
   console.log(DisPly);

   console.log("----------------array loop using for foreach------------")

   testarry.forEach(function(iteam,y,arr){

    console.log("Index is "+ y  + " value is "+ iteam);
    console.log(arr);
   })

   console.log("---------------object------------")

   let studentlist={
    name:"ajamal",
    rollnumber:191901,
    age:20,
    class:"A",
    branch:"bsccomputerScience",
   
    

   }
   console.log(studentlist);

   console.log("---------------accessing object------------")

   
   console.log("name of the student " +studentlist  ["name"]);
   console.log("rollnumber of the student " +studentlist  ["rollnumber"]);
   console.log("age of the student " +studentlist  ["age"]);
   console.log("class of the student " +studentlist  ["class"]);
   console.log("branch of the student " +studentlist  ["branch"]);


console.log("--------------- object for in------------")

for (let prop in studentlist ){

  console.log(studentlist[prop]);

}

console.log("---------------  array of object------------")

let thirdstudentlist=[
  {
  name:"ajamal",
    rollnumber:191901,
    age:20,
    class:"A",
    branch:"bsccomputerScience",
},
{
  name:"arun",
  rollnumber:191902,
  age:20,
  class:"A",
  branch:"bsccomputerScience",
},
{
  name:"aravind",
    rollnumber:191903,
    age:20,
    class:"A",
    branch:"bsccomputerScience",
},
]

console.log(thirdstudentlist);
console.log(thirdstudentlist[1]);
console.log(thirdstudentlist[1]["rollnumber"]);