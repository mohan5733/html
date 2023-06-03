function register(){

    let fname=document.forms["regform"]["fname"].value;
    let arr1=[];
    if(/^$/.test(fname)){
        arr1.push("first name can't left blank");
    }else if(!/^[a-zA-Z0-9$_]{4,8}$/.test(fname)){
        arr1.push("must follow validation rules");
    }
    document.getElementById("fname_errors").innerHTML=arr1.join(",");
 
 
 
    let lname=document.forms["regform"]["lname"].value;
    let arr2=[];
    if(/^$/.test(lname)){
        arr2.push("last name can't left blank");
    }else if(!/^[a-zA-Z0-9$_]{4,8}$/.test(lname)){
        arr2.push("must follow validation rules");
    }
    document.getElementById("lname_errors").innerHTML=arr2.join(",");


    let upwd=document.forms["regform"]["upwd"].value;
    let arr3=[];
    if(/^$/.test(upwd)){
        arr3.push("password can't left blank");
    }else if(!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,12}/.test(upwd)){
        arr3.push("must follow validation rules");
    }
    document.getElementById("upwd_errors").innerHTML=arr3.join(",");


    let cupwd=document.forms["regform"]["cupwd"].value;
    let arr4=[];
    if(/^$/.test(cupwd)){
        arr4.push("conf password can't left blank");
    }else if(upwd!=cupwd){
        arr4.push("must match the password");
    }
    document.getElementById("cupwd_errors").innerHTML=arr4.join(",");











    return false;
};