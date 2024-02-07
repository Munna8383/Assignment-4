function monthlySavings(arr , livingCost) {

    if(!Array.isArray(arr) && livingCost !== "number"){
        return "Inavlid Input"
    }

     let numbersAbove3000=[];
     let numbersBelow3000=[];
     let totalOfBelow3000=0;
     let totalOfAbove3000=0;

     for(let pay1 of arr){
        if(pay1<3000){
            numbersBelow3000.push(pay1)
        }
     }

     for(let pay of arr){
        if(pay>=3000){
            numbersAbove3000.push(pay)
        }
     }

     for(let below3000 of numbersBelow3000){

        totalOfBelow3000 = totalOfBelow3000+below3000
     }

     for(let above3000 of numbersAbove3000){
        totalOfAbove3000 = totalOfAbove3000 + above3000-(above3000*20/100)
     }
    
     let totalPayment = totalOfAbove3000 + totalOfBelow3000;



     if(totalPayment>=livingCost){
        let remain = totalPayment - livingCost;
        return remain
     }
     else{
        return "earn more"
     }







        
    }



    console.log(monthlySavings(100, [ 900 , 2700 , 3400]))