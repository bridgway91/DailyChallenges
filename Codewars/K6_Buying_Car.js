// Let us begin with an example:

// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// Can you help him?

// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

// Parameters and return of function:

// parameter (positive int or float, guaranteed) start_price_old (Old car price)
// parameter (positive int or float, guaranteed) start_price_new (New car price)
// parameter (positive int or float, guaranteed) saving_per_month 
// parameter (positive float or int, guaranteed) percent_loss_by_month

// nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
// Detail of the above example:
// end month 1: percent_loss 1.5 available -4910.0
// end month 2: percent_loss 2.0 available -3791.7999...
// end month 3: percent_loss 2.0 available -2675.964
// end month 4: percent_loss 2.5 available -1534.06489...
// end month 5: percent_loss 2.5 available -395.71327...
// end month 6: percent_loss 3.0 available 766.158120825...
// return [6, 766] or (6, 766)
// where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158... (rounding 766.158 gives 766).

// Note:

// Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:

// nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
// nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]
// We don't take care of a deposit of savings in a bank:-)

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){ // a bit drawn out, but i fell it makes the solution clear... probably could improve the month count and its effect on valueChange, but lazy, and a -1 in the solution fixed any problems
    console.log(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth)
    let relativeCarValue = startPriceOld - startPriceNew // 2000 - 8000 = -6000
    let valueChange = 1 - (percentLossByMonth / 100) // 0.985
    let savings = 0
    let month = 1
    while (relativeCarValue + savings < 0) {
      relativeCarValue = relativeCarValue * valueChange
      savings = savings + savingperMonth
      valueChange = month%2 ? (valueChange - .005) : valueChange // increase after odd months
      month++
    }
    return [month-1,Math.round(relativeCarValue + savings)]
  }


// alternatively...

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){ // basically a slighter cleaner version of my method
    var months = 0, moneySaved = 0;
      while (startPriceNew > startPriceOld + moneySaved){
          moneySaved += savingperMonth;
          startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
          startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
          months++;
          if (months % 2 == 1){
              percentLossByMonth += .5;
          }
      }
      return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
  }