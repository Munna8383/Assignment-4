
let arr= [200,500,3200]
let totalPayment = 0;


let total=0;
for(let payment of arr){

    if(payment>=3000){

        totalPayment = totalPayment + (20*payment)/100


    }

}

for(let newPayment of arr) {

    if(newPayment<3000){
        total= total+newPayment
    }
  } 

  let paymentAfterTax = total+totalPayment;
  console.log(paymentAfterTax)

