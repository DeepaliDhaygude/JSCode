var arr = [];
function saveData()
{
  
    debugger;
    let txtFirstName = document.getElementById('txtFirstName').value;
    let txtLastName = document.getElementById('txtLastName').value;
    let txtMobileNumber = document.getElementById('txtMobileNumber').value;
    let txtAddress = document.getElementById('txtAddress').value;

    var obj = {
        fName : txtFirstName,
        lName : txtLastName,
        mNumber : txtMobileNumber,
        addr : txtAddress
    };

    arr.push(obj);
    document.getElementById('footerMsg').innerHTML = 'Record added successfully!!!'
    printRecord();
    
}
function printRecord(){
    debugger;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        var TR = "<tr><td>"+element.fName+"</td><td>"+element.lName+"</td><td>"+element.mNumber+"</td><td>"+element.addr+"</td></tr>";
      // var tbl = document.getElementById('tbl').getElementsByTagName('tbody')[0];
       // var tr1 = document.getElementById('firstrow');
       //var tbl = document.getElementsByTagName('tbody');
       //var myTbody = document.querySelector("#myTable>tbody");
       //document.getElementById('tb').innerHTML = TR;
       $("#tblData tbody").append(TR);
           
        
    }
    document.getElementById('txtFirstName').value ='';
    document.getElementById('txtLastName').value ='';
    document.getElementById('txtMobileNumber').value ='';
    document.getElementById('txtAddress').value ='';
}

function clearForm()
{
    document.getElementById('txtFirstName').value ='';
    document.getElementById('txtLastName').value ='';
    document.getElementById('txtMobileNumber').value ='';
    document.getElementById('txtAddress').value ='';
}
