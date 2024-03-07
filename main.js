let menus = document.getElementById("menus")

const toggle = () =>{
    if(menus.style.display =="none")
    {
        menus.style.display ="block"
        menus.style.textAlign="right"
    }
    else{
        menus.style.display ="none"
    }
}