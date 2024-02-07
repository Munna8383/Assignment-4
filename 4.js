function password(obj) {
      let newObject = Object.keys(obj)

    if(newObject.length<3){
        return "Invalid"
    }


    let newBirth = obj.birthYear;
    let changeBirth = newBirth.toString().length
    if(changeBirth<4){
        return "Invalid"
    }
    

    let upperCased = obj.siteName;

    let finalUppercased = upperCased[0].toUpperCase()+upperCased.slice(1).toLowerCase()

    let password = finalUppercased+ "#" + obj.name+ "@"+ obj.birthYear

    return password;
    }


    console.log(password({ name: "maisha" , birthYear: 2002 }))