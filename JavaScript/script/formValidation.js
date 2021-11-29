function mainfunction()
{
    // validating user Name
    applicantName();

    //validating father Name
    fatherNames();

    // validating email
    emailId();

    //current location
    currentAddresslocation();

    //Permanent Address
    permanentAddress();
    
    //validating date of birth
    dateOfBirth();

    //Validating mobile number
    mobileNumber();

    //validating the Pincode.
    currentPincode();

    //permanant PIN CODE.
    permanentPinCode();

    //select the photo.
    selectPhoto();
    return false;
}
function applicantName()
{
    var userName = document.getElementById("applicantName");
    var userregular = /^([a-zA-Z]{1,})$/;
    if(userName.value.trim() == "")
    {
        document.getElementById("userErrorMessage").style.visibility="visible";
        document.getElementById("userErrorMessage").style.color="red";
        userName.style.border="1px solid red";
    }
    else if(userregular.test(userName.value)==false)
    {
        document.getElementById("userErrorMessage").innerHTML = "Special characters and numbers are not allowed";
        document.getElementById("userErrorMessage").style.visibility="visible";
        document.getElementById("userErrorMessage").style.color="red";
        userName.style.border="1px solid red";
    }
    else
    {
        document.getElementById("userErrorMessage").innerHTML = "Vaild Input";
        document.getElementById("userErrorMessage").style.visibility="visible";
        document.getElementById("userErrorMessage").style.color="green";

    }
}
function fatherNames()
{
    var fathername = document.getElementById("fatherName");
    var userregular = /^([a-zA-Z]{1,})$/;
    if(fathername.value.trim() == "")
    {
        document.getElementById("fatherErrorMessage").style.visibility="visible";
        document.getElementById("fatherErrorMessage").style.color="red";
        fathername.style.border="1px solid red";
    }
    else if(userregular.test(fathername.value)==false)
    {
        document.getElementById("fatherErrorMessage").innerHTML = "Special characters and numbers are not allowed";
        document.getElementById("fatherErrorMessage").style.visibility="visible";
        document.getElementById("fatherErrorMessage").style.color="red";
        fathername.style.border="1px solid red";
        return false;
    }
    else
    {
        document.getElementById("fatherErrorMessage").innerHTML = "Vaild Input";
        document.getElementById("fatherErrorMessage").style.visibility="visible";
        document.getElementById("fatherErrorMessage").style.color="green";
        return false;
    }
}
function  emailId()
{
    var mailId = document.getElementById("emailId");
    var mailregular = /^([a-zA-Z0-9\.-]{1,}@)+([a-zA-Z0-9-]{1,}.)+([a-zA-Z]{2,20}.)([a-zA-Z]{2,20})$/;
    if(mailId.value.trim() == "")
    {
        document.getElementById("emailErrorMessage").style.visibility="visible";
        document.getElementById("emailErrorMessage").style.color="red";
        mailId.style.border = "1px solid red";
    }
    else if(mailregular.test(mailId.value)==false)
    {
        document.getElementById("emailErrorMessage").innerHTML = "Your mail Id is not in the correct formate.";
        document.getElementById("emailErrorMessage").style.visibility="visible";
        document.getElementById("emailErrorMessage").style.color="red";
        mailId.style.border="1px solid red";
        
    }
    else
    {
        document.getElementById("emailErrorMessage").innerHTML = "Vaild Input";
        document.getElementById("emailErrorMessage").style.visibility="visible";
        document.getElementById("emailErrorMessage").style.color="green";
    }
}
function permanentAddress()
{
    var curreentAdress=document.getElementById("permanentAddress");
    if(curreentAdress.value.trim() == "")
    {
        document.getElementById("permanentAddressErrorMessage").style.visibility="visible";
        document.getElementById("permanentAddressErrorMessage").style.color="red";
        curreentAdress.style.border = "1px solid red";
    }
    else
    {
        document.getElementById("permanentAddressErrorMessage").innerHTML = "Vaild Input";
        document.getElementById("permanentAddressErrorMessage").style.visibility="visible";
        document.getElementById("permanentAddressErrorMessage").style.color="green";
    }
}
function currentAddresslocation()
{
    var curreentAdress=document.getElementById("currentAddress");
    if(curreentAdress.value.trim() == "")
    {
        document.getElementById("addressErrorMessage").style.visibility="visible";
        document.getElementById("addressErrorMessage").style.color="red";
        curreentAdress.style.border = "1px solid red";
    }
    else
    {
        document.getElementById("addressErrorMessage").innerHTML = "Vaild Input";
        document.getElementById("addressErrorMessage").style.visibility="visible";
        document.getElementById("addressErrorMessage").style.color="green";
    }
}

function dateOfBirth()
{
    var dobRegeular = /^([0-9]{2})-([0-1][0-9])-([0-9]{4})$/;
    var dateOfBirth = document.getElementById("dateOfBirth");
    if(dateOfBirth.value.trim() == "")
    {
        document.getElementById("dateError").style.visibility="visible";
        document.getElementById("dateError").style.color="red";
        dateOfBirth.style.border = "1px solid red";
    }
    else if(dobRegeular.test(dateOfBirth.value)==false)
    {
        document.getElementById("dateError").innerHTML = "Enter the correct date of birth";
        document.getElementById("dateError").style.visibility="visible";
        document.getElementById("dateError").style.color="red";
        dateOfBirth.style.border="1px solid red";
        
    }
    else
    {
        document.getElementById("dateError").innerHTML = "Vaild Input";
        document.getElementById("dateError").style.visibility="visible";
        document.getElementById("dateError").style.color="green";
    }
}

function mobileNumber()
{
    var mobile = document.getElementById("mobileNumber");
    var mobileError = /^[7-9]([0-9]{9})$/;
    if(mobile.value.trim() == "")
    {
        document.getElementById("mobileNumberError").style.visibility="visible";
        document.getElementById("mobileNumberError").style.color="red";
        mobile.style.border = "1px solid red";
    }
    else if(mobileError.test(mobile.value)==false)
    {
        document.getElementById("mobileNumberError").innerHTML = "Enter the correct date of birth";
        document.getElementById("mobileNumberError").style.visibility="visible";
        document.getElementById("mobileNumberError").style.color="red";
        mobile.style.border="1px solid red";
        
    }
    else
    {
        document.getElementById("mobileNumberError").innerHTML = "Vaild Input";
        document.getElementById("mobileNumberError").style.visibility="visible";
        document.getElementById("mobileNumberError").style.color="green";
    }
}

function currentPincode()
{
    var currentpin = document.getElementById("currentPincode");
    var pinregular = /^[6]([0-9]{5})$/;
    if(currentpin.value.trim() == "")
    {
        document.getElementById("cPinError").style.visibility="visible";
        document.getElementById("cPinError").style.color="red";
        currentpin.style.border = "1px solid red";
    }
    else if(pinregular.test(currentpin.value)==false)
    {
        document.getElementById("cPinError").innerHTML = "Enter the correct date of birth";
        document.getElementById("cPinError").style.visibility="visible";
        document.getElementById("cPinError").style.color="red";
        currentpin.style.border="1px solid red";
        
    }
    else
    {
        document.getElementById("cPinError").innerHTML = "Vaild Input";
        document.getElementById("cPinError").style.visibility="visible";
        document.getElementById("cPinError").style.color="green";
    }
}
function copyContents()
{
    var currentaddress=document.getElementById("currentAddress").value;
    var currentaddress2=document.getElementById("currentAddressLine").value;
    var currentcity=document.getElementById("currentCityName").value;
    var currentstate=document.getElementById("currentStateName").value;
    var cPinCode=document.getElementById("currentPincode").value;

    var permanantaddress1=document.getElementById("permanentAddress");
    var permanentaddress2=document.getElementById("permanentAddressLine");
    var permanantcity=document.getElementById("permanentCityName");
    var permanantstate=document.getElementById("permanentStatename");
    var permanatpincode=document.getElementById("permanentPincode");
    var checklist=document.getElementById("sameAddress");
    if(checklist.checked==true){
        permanantaddress1.value=currentaddress;
        permanentaddress2.value= currentaddress2;
        permanantcity.value=currentcity;
        permanatpincode.value=cPinCode;
        permanantstate.value=currentstate;
    }
    else{
        permanantaddress1.value="";
        permanentaddress2.value="";
        permanantcity.value="";
        permanatpincode.value="";
        permanantstate.value=state1[0].value;
    }
}
function permanentPinCode()
{
    var permanantpin = document.getElementById("permanentPincode");
    var pinregular = /^[6]([0-9]{5})$/;
    if(permanantpin.value.trim() == "")
    {
        document.getElementById("pPinError").style.visibility="visible";
        document.getElementById("pPinError").style.color="red";
        permanantpin.style.border = "1px solid red";
    }
    else if(pinregular.test(permanantpin.value)==false)
    {
        document.getElementById("pPinError").innerHTML = "Enter the correct date of birth";
        document.getElementById("pPinError").style.visibility="visible";
        document.getElementById("pPinError").style.color="red";
        permanantpin.style.border="1px solid red";
        
    }
    else
    {
        document.getElementById("pPinError").innerHTML = "Vaild Input";
        document.getElementById("pPinError").style.visibility="visible";
        document.getElementById("pPinError").style.color="green";
    }
}
function selectPhoto(){
    var photo=document.getElementById("profilephoto");
    if(photo.value.trim()=="")
    {
        document.getElementById("photoSelection").style.visibility="visible";
        document.getElementById("photoSelection").style.color="red";
        permanantpin.style.border = "1px solid red";
    }
    else{
        document.getElementById("photoSelection").style.visibility="hidden";
    }
}