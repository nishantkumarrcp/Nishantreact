
export const isNullOrEmpty = (value) => {
    var isNull = false;
    if(typeof(value) == 'undefined' || value == '' || value.trim() == ''){
        isNull = true;
    }
    return isNull;
}