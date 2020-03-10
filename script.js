'use strict';
let money=prompt("ваш бютжет на месяц?"),
    time=prompt("Введите дату в формате YYYY-MM-DD");
let expenseItem=prompt("Введите обязательную статью расходов в этом месяце"),
    price=prompt("Во сколько обойдется?");
let appData={
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income : [],
    savings:false
};
appData.expenses.expenseItem=price;

alert("бюджет на 1 день = "+ (appData.mone-appData.expenses.expenseItem)/30);
console.log(appData);