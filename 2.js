function checkName(name) {

    if(typeof name !== "string"){
        return "Invalid"
    }

    let splitted = name.split("")

    let lastElement = splitted[splitted.length -1]

    if(lastElement ==="A"||lastElement==="a"||lastElement==="y"||lastElement==="Y"||lastElement==="e"||lastElement==="E"||lastElement==="i"||lastElement==="I"|| lastElement==="o"||lastElement==="O"||lastElement==="u"||lastElement==="U"||lastElement==="w"||lastElement==="W"){

        return "Good Name"
    }

    else{
        return "Bad Name"
    }
    
    }

    console.log(checkName("Salman"))