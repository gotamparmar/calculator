function calculator(param) {
            
    if (param=="C") {
        document.getElementById('screen').value=""
    }
    else if(param=="="){
        document.getElementById('screen').value = eval(document.getElementById('screen').value)
    }
    else{
        var text = document.getElementById('screen').value
    document.getElementById('screen').value=text+param
    
    }
}

function alt(){
    var a = document.getElementById('screen').value;
    alert(a);
}