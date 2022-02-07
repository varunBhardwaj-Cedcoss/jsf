var result;
function cal() {
    let a = document.getElementById('age').value;
    let b = document.getElementById('weight').value;
    let name = document.getElementById('name').value
    result = val(a,b,name);
   
   display(result,b,a,name);
}
function val(a,b,name){
    let v;
    if(a && b && name){
        if(isNaN(a) && isNaN(b)){
            v = logic(a,b);
            return v;
        }
        else{
            v = logic(parseInt(a,10),parseInt(b,10));
            return v;
        }
    }
    else{
        return 2;
    }
}
function logic(a, b) {
    if ((a >= 5 && a <= 7) && (b >= 15 && b <= 20)) 
    {
        return 0;
    }
    else if ((a >= 5 || a <= 7) && (b < 15)) 
    {
        return -1;
    }
    else if ((a >= 5 || a <= 7) && (b > 20)) 
    {
        return 1;
    }
    else if ((a >= 8 || a <= 10) && (b >= 21 || b <= 25)) 
    {
        return 0;
    }
    else if ((a >= 8 || a <= 10) && (b < 21)) 
    {
        return -1;
    }
    else if ((a >= 8 || a <= 10) && (b > 21)) 
    {
        return 1;
    }
    else if ((a >= 11 || a <= 15) && (b >= 26 || b <= 30)) 
    {
        return 0;
    }
    else if ((a >= 11 || a <= 15) && (b < 26)) 
    {
        return -1;
    }
    else if ((a >= 11 || a <= 15) && (b > 30)) 
    {
        return 1;
    }
    else if ((a >= 16 || a <= 20) && (b >= 31 || b <= 40)) 
    {
        return 0;
    }
    else if ((a >= 16 || a <= 20) && (b < 31)) 
    { 
        return -1; 
    }
    else if ((a >= 16 || a <= 20) && (b > 40)) 
    { 
        return 1; 
    }
    else {
        return 2;
    }

}

function display(result,b,a,name){
    if( result == 0)
    {
        document.getElementById('res').innerHTML= name+'!!!'+'Your weight perfect.';
    }
    if( result == 1)
    {
        document.getElementById('res').innerHTML= name+'!!!'+'Your weight is greater than recommended value of '+b+'KG at an age of '+a+'.';
    }
    if( result == -1)
    {
        document.getElementById('res').innerHTML= name+'!!!'+'Your weight is less than recommended value of '+b+'KG at an age of '+a+'.';
    }
    if( result == 2)
    {
        document.getElementById('res').innerHTML='Enter the  value plz..';
    }
}