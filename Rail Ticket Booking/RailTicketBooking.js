var quota = document.getElementById('quota').value;
console.log(quota);
function onChcekboxChange()
{
    if(document.getElementById('country').checked)
    {
        document.getElementById('divCountry').style.display="none";
    }
    else{
        document.getElementById('divCountry').style.display="block";
    }
}


function showFormDetails()
{
    let quota = document.getElementById('quota').value;
    let trainname = document.getElementById('trainname').value;
    let journeyfrom = document.getElementById('journeyfrom').value;
    let journeyto = document.getElementById('journeyto').value;
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
   // let country = document.getElementById('country').value;
    let passengersdetails1 = document.getElementById('passengersdetails1').value;
    let phonenumber1 = document.getElementById('phonenumber1').value;
    let country = "";
    if(document.getElementById('country').checked)
    {
        country = "India";
    }
    else{
        country = document.getElementById('txtcountry').value;
    }


    document.getElementById('spanFullName').innerHTML=passengersdetails1 ;
    document.getElementById('spanPhoneNumber').innerHTML= phonenumber1;
    document.getElementById('spanQuota').innerHTML= quota;
    document.getElementById('spanTrainName').innerHTML= trainname;
    document.getElementById('spanDeparture').innerHTML= day + month + year;
    document.getElementById('spanNationality').innerHTML=country;
    
}