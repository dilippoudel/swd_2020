// ES5,6,7,(8,9) task before the exam
// Create a JS program, where you just use as many of the first exam features as you 
// can = learn them for the exam

// The business value of the app can be 0
// Create a UI if wish, or just play behind the scenes and print to 
// console and use debugger to see what happens in the memory

// First adhoc object, later maybe ES6 etc. class syntax

// e.g. class Bill could extend class Cost (with e.g. dueDate and isPaid)

// daily, weekly, monthly, yearly
const costSpan = [  {span:"Daily", days:1},
                    {span:"Weekly", days:7},
                    {span:"Monthly", days:30.45},
                ];

const costs = [ {name:"Rent", amount:270.25, span:costSpan[2]},
                {name:"Food", amount:7.50, span:costSpan[0]},
              ];

const totalRent = function(){
    costSpan.forEach(val => {
    let rent = `${val.days}` * `${costs[0].amount}` / `${costSpan[2].days}`
    console.log(`The  ${val.span} rent cost is ${rent.toFixed(2)}`);
    })
}
const totalFoodCost = function(){
    costSpan.forEach(val => {
        let rent = `${val.days}` * `${costs[1].amount}`;
        console.log(`The  ${val.span} ${costs[1].name} cost is ${rent.toFixed(2)}`);
        })
}

totalRent();
totalFoodCost();






// Then do whatever reports / analysis or so, with all the costs