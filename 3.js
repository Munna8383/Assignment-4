function deleteInvalids(array) {

    if(!Array.isArray(array)){
        return "Invalid Array"
    }  

      uniqueArray=[];

      for(let arr of array){

        if(typeof arr=="number"){
            uniqueArray.push(arr)
        }
       
      }
     let newArray = uniqueArray;
     console.log(newArray)
    
    }
console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))