/**
 * Return true if the passed string looks like a valid US phone number.
 * The user may fill out the form field any way they choose as long as it has the format of a valid US number
 */

function telephoneCheck(str) {
    var isPhone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);

    if(isPhone){
        return true;
    }else{
        return false;
    }
}
  
telephoneCheck("555-555-5555");