function greeting(){
    var time = new Date().getHours();
    if(time>18)
        {alert("good evening");}
    else if(time>11)
        {alert("good afternoon");}
    else{alert("good morning");}
}
function check(input){
    if(input.value=='WAD'){
        alert("Correct");
    }
    else{alert("Wrong");}
}
function operation(n1,input,n2){
    const a = parseFloat(n1.value);
    const b = parseFloat(n2.value);
    var r;
    if(input.value=='+'){
        r = a+b;
    }
    else if(input.value=='-'){
        r = a-b;
    }
    else if(input.value=='*'){
        r = a*b;
    }
    else{
        r = a/b;
    }
    alert(r);
}

function detailscheck(n, e, p, pn) {
    if (n.value.length < 3 || !Upperlower(n.value) || specialChars(n.value)) {
        alert("The name field should contain at least 3 alphabets and should not contain numerics or special characters.");return;
    }
    if (e.value[0] === '@' || e.value[e.value.length - 1] === '.') {
        alert("The email field should validate that the input is in the format username@domain.extension.");return;
    }
    if (p.value.length < 8 || !Upperlower(p.value) || !Isnum(p.value) || !specialChars(p.value)) {
        alert("The password field should check the strength of the password, ensuring it's at least 8 characters long and contains at least one uppercase letter, one lowercase letter, one number, and one special character.");return;
    }
    if (pn.value.length !== 10 || !Isnum(pn.value) || specialChars(pn.value)) {
        alert("The phone number field should validate that the input is numeric and exactly 10 digits.");return;
    }
    alert("All inputs are valid!");
}
function Upperlower(s) {
    for (var i = 0; i < s.length; i++) {
        if ((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z')) {return true;}
    }
    return false;
}
function specialChars(s) {
    const sc = "!@#$%^&*()_+[]{}|;:'\",.<>?/";
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < sc.length; j++) {
            if (s[i] === sc[j]) {return true;}
        }
    }
    return false;
}
function Isnum(s) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] < '0' || s[i] > '9') {return false;}
    }
    return true;
}
