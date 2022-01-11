reverse=()=>{  
        var str=  document.getElementById("text").value
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i]        
    }
    /* console.log(newString); */
    document.getElementById("display").innerHTML=newString;
    if(str&& str!=" ") document.getElementById("display").style.display='block';
    else alert('Type Something!!!')
}

tryagain=()=>{
    document.getElementById("display").innerHTML=" ";
    document.getElementById("display").style.display='none';
    document.getElementById("text").value=" "
}