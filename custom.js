



document.getElemenetById('randTxt').innerHTML ="changing value usingd document.getelementById method, dynamically updating value using JS";
document.getElemenetById('randTxt').style.backgroundcolor ="red";
document.getElemenetById('randTxt').style.color ="red";
document.getElemenetById('randTxt').title ="some random text in para element";

function  changeHdgstyle(){
    document.getElementsByClassName('hdg')[0].style.color ="red";
    document.getElementsByClassName('hdg')[1].style.color ="yellow";
    document.getElementsByClassName('hdg')[2].style.color ="green";
}

function    selectcity(){               

        var  value = document.getElementById('cites').value;
        document.getElementById('slctval').innerHTML=value;                                                                                                                                                                                                                              
}   
function mouseoveraction(){
    document.getElementById("btnsubmit").style.backgroundcolor="red";
    document.getElementById("btnsubmit").style.color="white";
}   
function mouseoutaction() {
    document.getElementById('btnsubmit').style.backgroundColor="green";
    document.getElementById('btnsubmit').style.color="black";
}    
function    keypressaction(){
    var nm=document.getElemenetById('nmtxt').value;
    document.getElemenetById('txt').innerHTML=nm;
    }
                                                 