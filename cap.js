function dropdownCountry(){
   var country= document.getElementById("sltcon").value;


        document.getElementById("sltcp").value=country;
} 
function dropdownCapital(){
    var capital= document.getElementById("sltcp").value;
    document.getElementById("sltcon").value=capital;
}