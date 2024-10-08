
button.addEventListener("click", accendi);

function accendi() {
    let onOff = button.innerHTML


    
    if (onOff == "Accendi") {
        document.getElementById("accesa").className = "d_inline_block"
        document.getElementById("spenta").className = "d_none" 
        button.innerHTML = "Spegni"
        
        
    }else if (onOff == "Spegni"){
        document.getElementById("spenta").className = "d_inline_block" 
        document.getElementById("accesa").className = "d_none"
        button.innerHTML = "Accendi"

    }

}



