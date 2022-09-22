function btnyear(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    if ((year %400==0)||(year%4==0)&&(year % 100 !=0))
    {
        document.getElementById("pyear").innerHTML=year+"is a leap year";
        document.getElementById("totaldays").innerHTML="Total  days in" +year+"in 366";
    
    if (month==1){
        document.getElementById("pmonth").innerHTML="Total number of days in jan 31";
    }
    else if (month==2){
        document.getElementById("pmonth").innerHTML="Total number of days in feb 29";
    }
    else if (month==3){
        document.getElementById("pmonth").innerHTML="Total number of days in mar 31";
    }
    else if (month==4){
        document.getElementById("pmonth").innerHTML="Total number of days in apr 31";
    }
    else if (month==5){
        document.getElementById("pmonth").innerHTML="Total number of days in may 31";
    }
    else if (month==6){
        document.getElementById("pmonth").innerHTML="Total number of days in jun 31";
    }
    else if (month==7){
        document.getElementById("pmonth").innerHTML="Total number of days in jly 31";
    }
    else if (month==8){
        document.getElementById("pmonth").innerHTML="Total number of days in aug 31";
    }
    else if (month==9){
        document.getElementById("pmonth").innerHTML="Total number of days in sep 31";
    }
    else if (month==10){
        document.getElementById("pmonth").innerHTML="Total number of days in oct 31";
    }
    else if (month==11){
        document.getElementById("pmonth").innerHTML="Total number of days in nov 31";
    }
    else if (month==12){
        document.getElementById("pmonth").innerHTML="Total number of days in dec 31";
    }

}
    
    else{
        document.getElementById("pyear").innerHTML=year+"is common year";
        document.getElementById("totaldays").innerHTML="Total  days in" +year+"in 365";
    }
        if (month==1){
            document.getElementById("pmonth").innerHTML="Total number of days in jan 31";
        }
        else if (month==2){
            document.getElementById("pmonth").innerHTML="Total number of days in feb 29";
        }
        else if (month==3){
            document.getElementById("pmonth").innerHTML="Total number of days in mar 31";
        }
        else if (month==4){
            document.getElementById("pmonth").innerHTML="Total number of days in apr 31";
        }
        else if (month==5){
            document.getElementById("pmonth").innerHTML="Total number of days in may 31";
        }
        else if (month==6){
            document.getElementById("pmonth").innerHTML="Total number of days in jun 31";
        }
        else if (month==7){
            document.getElementById("pmonth").innerHTML="Total number of days in jly 31";
        }
        else if (month==8){
            document.getElementById("pmonth").innerHTML="Total number of days in aug 31";
        }
        else if (month==9){
            document.getElementById("pmonth").innerHTML="Total number of days in sep 31";
        }
        else if (month==10){
            document.getElementById("pmonth").innerHTML="Total number of days in oct 31";
        }
        else if (month==11){
            document.getElementById("pmonth").innerHTML="Total number of days in nov 31";
        }
        else if (month==12){
            document.getElementById("pmonth").innerHTML="Total number of days in dec 31";
        }
    
    }
    
    
