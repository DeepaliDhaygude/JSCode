var applicantObj = {
    Department: "",
    Authority:"",
    EmailID: "",
    MobileNumber: "",
    FirstName: "",
    LastName: "",
    Address: "",
    Pin: "",
    Gender: "",
}

function onSaveForm() {
    var dept = document.getElementById('ministry').value;
    var authority = document.getElementById('authority').value;
    var emailid = document.getElementById('emailid').value;
    var mnumber = document.getElementById('mobilenumber').value;
    var txtfname = document.getElementById('firstname').value;
    var txtlname = document.getElementById('lastname').value;
    var addr = document.getElementById('txtAddress').value;
    var pin = document.getElementById('pin').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    applicantObj.Department = dept;
    applicantObj.Authority = authority;
    applicantObj.EmailID = emailid;
    applicantObj.MobileNumber = mnumber;
    applicantObj.FirstName = txtfname;
    applicantObj.LastName = txtlname;
    applicantObj.Address = addr;
    applicantObj.Pin = pin;
    applicantObj.gender = gender;

    var alertText = "Applicant Details \n \n Department : " + applicantObj.Department +
    "\n Email ID : " + applicantObj.Authority
        + "\n Authority : " + applicantObj.EmailID + "\n Mobile Number : " + applicantObj.MobileNumber
        + "\n First Name : " + applicantObj.FirstName + "\n Last Name : " +
        applicantObj.LastName + "\n Address : " + applicantObj.Address +
        "\n Pin Code : " + applicantObj.Pin + "\n Gender : " + applicantObj.gender;

    alert(alertText);
}
function onClearForm() {
    document.getElementById('ministry').value = "";
    document.getElementById('authority').value = "";
    document.getElementById('emailid').value = "";
    document.getElementById('mobilenumber').value = "";
    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('txtAddress').value = "";
    document.getElementById('pin').value = "";
    document.querySelector('input[name="gender"]:checked').value = false;
}
function getFullname() {
    var txtfname = document.getElementById('firstname').value;
    var txtlname = document.getElementById('lastname').value;

    if (txtfname != '' && txtlname != '') {

        var txtfullname = txtfname + " " + txtlname;
        document.getElementById('txtFullname').value = txtfullname
    }

}

//authority
function populateAuthority(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "----Select----";

    if (s1.value == "Department of Atomic Energy") {
        var optArr = ["----Select----","Atomic Energy Education Society", "Atomic Energy Regulatory Board", "Department of Atomic Energy"];
    }
    else if (s1.value == "Department of Commerce") {
        var optArr = ["----Select----","Department_Of_Commerce", "Coffee Board", "Government E Marketplace"];
    }
    else if(s1.value == "Department of Defence"){
        var optArr = ["----Select----","ADEO, Agartala","ADEO, Baramulla","ADEO, Port Blair","ADEO, Rajouri"];
    }
    else if(s1.value == "Department of Health Research"){
        var optArr = ["----Select----","Department of Health Research","ICMR-National AIDS Research Institute","ICMR-National Institute of Epidemeology, Chennai","ICMR-National Institute of Nutrition, Hyderabad"];
    }
    else if (s1.value == "Department of Higher Education") {
        var optArr = ["----Select----","Central University of Kashmir", "Central University of Kerala", "Central University of Orissa","Central University of Punjab"];
    }
    for(var opt in optArr)
        {
            //var myOption = "<option value='" + optArr2[i] + "'>" + optArr2[i] + "</option>";
            var newoption = document.createElement('option');
            newoption.value = optArr[opt];
            newoption.innerHTML = optArr[opt];
            s2.options.add(newoption);
            opt++;
        }
}