function calculateMoney(ticketSale) {

        if(ticketSale<0){
            return "error"
        }

      let perTicketPrice =120;
      let porterLunch = 500;
      let staffNumber =8;
      let perStaffEat =50;


      let output = (ticketSale*perTicketPrice)-(porterLunch + (staffNumber*perStaffEat));

      return output;
    }

    console.log(calculateMoney(-3));