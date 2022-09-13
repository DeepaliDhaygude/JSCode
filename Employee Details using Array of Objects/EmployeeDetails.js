var arr = [];

function clearForm()
{
    document.getElementById('txtFirstName').value ='';
    document.getElementById('txtLastName').value ='';
    document.getElementById('txtTechnology').value ='';
    document.getElementById('txtDesignation').value ='';
    document.getElementById('txtSkills').selectedIndex = -1;
    document.getElementById('txtCoreExpertise').value ='';
    var radioBtn = document.querySelector('input[type="radio"][name = Certifications]:checked');
    radioBtn.checked=false;
    document.getElementById('txtCertifications').value ='';
    document.getElementById('txtCompany').value ='';
    document.getElementById('txtLines').value ='';
    
}

function saveData()
{
    var txtFirstName = document.getElementById('txtFirstName').value;
    var txtLastName = document.getElementById('txtLastName').value;
    var txtTechnology = document.getElementById('txtTechnology').value;
    var txtDesignation = document.getElementById('txtDesignation').value;
    var txtSkills = document.getElementById('txtSkills').value;
    var txtCoreExpertise = document.getElementById('txtCoreExpertise').value;
    var radioBtn = document.querySelector('input[type="radio"][name = Certifications]:checked').value;
    var txtCertifications = document.getElementById('txtCertifications').value;
    var txtCompany = document.getElementById('txtCompany').value;
    var txtLines = document.getElementById('txtLines').value;

    var obj = {
        txtFirstName : txtFirstName,
        txtLastName : txtLastName,
        txtTechnology : txtTechnology,
        txtDesignation : txtDesignation,
        txtSkills : txtSkills,
        txtCoreExpertise : txtCoreExpertise,
        radioBtn : radioBtn,
        txtCertifications : txtCertifications,
        txtCompany : txtCompany,
        txtLines : txtLines
    };

    arr.push(obj);
    printRecord();
    clearForm();
}

function printRecord(){
        
}