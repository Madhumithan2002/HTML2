function  calculate(){

   let stname = document.getElementById("stname").value;
   let stclass = document.getElementById("class").value;
   let stsection = document.getElementById("SECTION").value;
   let stbtam = document.getElementById("tal").value;
   let steng = document.getElementById("eng").value;
   let stbmts = document.getElementById("mts").value;
   let stbsci= document.getElementById("sci").value;
   let stbsco = document.getElementById("soc").value;
   
      
        console.log(stname);
        console.log(stclass);
        console.log( stsection);;
        

    document.getElementById("pName").innerHTML = "NAME: " + stname;
    document.getElementById("pClass").innerHTML = "CLASS: " + stclass;
    document.getElementById("pSection").innerHTML = "SECTION: " + stsection;
  

switch (true){

             case (stbtam > "90"):
                 document.getElementById("pTamil").innerHTML = "your tamil sub grade is = O";
                 break;
    
             case (stbtam > "80"):
                 document.getElementById("pTamil").innerHTML = "your tamil sub grade is = A";
                 break;
             case (stbtam > "70"):
                 document.getElementById("pTamil").innerHTML = "your tamil sub grade is = B";
                 break;
             case (stbtam > "60"):
                 document.getElementById("pTamil").innerHTML = "your tamil sub grade is = C";
                 break;
    
             default:
                 document.getElementById("pTamil").innerHTML = "your tamil sub grade is = F";

}                
switch (true) {
             case (steng > "90"):
                 document.getElementById("pEng").innerHTML = "your english sub grade is = O";
                 break;
    
             case (steng > "80"):
                 document.getElementById("pEng").innerHTML = "your english sub grade is = A";
                 break;
             case (steng > "70"):
                 document.getElementById("pEng").innerHTML = "your english sub grade is = B";
                 break;
             case (steng > "60"):
                 document.getElementById("pEng").innerHTML = "your english sub grade is = C";
                 break;
    
             default:
                 document.getElementById("pEng").innerHTML = "your english sub grade is = F";
    
}
switch (true) {
             case (stbmts > "90"):
                 document.getElementById("pMts").innerHTML = "your maths sub grade is = O";
                 break;
    
             case (stbmts > "80"):
                 document.getElementById("pMts").innerHTML = "your maths sub grade is = A";
                 break;
             case (stbmts > "70"):
                 document.getElementById("pMts").innerHTML = "your maths sub grade is = B";
                 break;
             case (stbmts > "60"):
                 document.getElementById("pMts").innerHTML = "your maths sub grade is = C";
                 break;
    
             default:
                 document.getElementById("pMts").innerHTML = "your maths sub grade is = F";
    
    }
    switch (true) {
                 case (stbsci > "90"):
                     document.getElementById("pSci").innerHTML = "your science sub grade is = O";
                     break;
        
                 case (stbsci > "80"):
                     document.getElementById("pSci").innerHTML = "your science sub grade is = A";
                     break;
                 case (stbsci > "70"):
                     document.getElementById("pSci").innerHTML = "your science sub grade is = B";
                     break;
                 case (stbsci > "60"):
                     document.getElementById("pSci").innerHTML = "your science sub grade is = C";
                     break;
        
                 default:
                     document.getElementById("pSci").innerHTML = "your tamil sub grade is = F";
             }
             switch (true) {
                         case (stbsco > "90"):
                             document.getElementById("pSoc").innerHTML = "your social sub grade is = O";
                             break;
                
                         case (stbsco > "80"):
                             document.getElementById("pSoc").innerHTML = "your social sub grade is = A";
                             break;
                         case (stbsco > "70"):
                             document.getElementById("pSoc").innerHTML = "your social sub grade is = B";
                             break;
                         case (stbsco > "60"):
                             document.getElementById("pSoc").innerHTML = "your social sub grade is = C";
                             break;
                
                         default:
                             document.getElementById("pSoc").innerHTML = "your social sub grade is = F";
                 }         
}