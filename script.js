'use strict';
let money, time; 
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    btnExp = document.getElementsByTagName('button')[0],
    btnOptExp = document.getElementsByTagName('button')[1],
    btnCountButget = document.getElementsByTagName('button')[2],
    optExp = document.querySelectorAll('.optionalexpenses-item'),
    chooseInc = document.querySelector('#income'),
    checkSavings = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsProcent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
let appData={
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income : [],
    savings:false,
    active:false,
    sumExpenses:0
};




startBtn.addEventListener('click', function(){
    time=prompt('Введите дату в формате YYYY-MM-DD', '');   
    money=+prompt('ваш бютжет на месяц?', '');
    while(isNaN(money) || money=='' || money==null){
        money=+prompt('ваш бютжет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    appData.active = true;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth()+1;
    day.value = new Date(Date.parse(time)).getDate();
    btnCountButget.addEventListener('click',function(){
        if(appData.budget != undefined){
            appData.moneyPerDay=((appData.budget-appData.sumExpenses)/30).toFixed(2);
            daybudgetValue.textContent = appData.moneyPerDay;
            if(appData.moneyPerDay<=100){
                levelValue.textContent = ' минимальный уровень достатка';
            }else if (appData.moneyPerDay>100 && appData.moneyPerDay<=2000){
                levelValue.textContent = ' средний уровень достатка';
            } else if(appData.moneyPerDay>2000){
                levelValue.textContent = ' высокий уровень достатка';
            }
        }else{
            daybudgetValue.textContent = 'произошла ошибка';
        }
        
    });
    btnExp.addEventListener('click', function(){
        let sum = 0;
        for(let i = 0;i<expensesItem.length;i++){
            let a = expensesItem[i].value,
                b= expensesItem[++i].value;
            if((typeof(a))==='string'&& (typeof(a)) !=null &&(typeof(b)) !=null && a!='' && b !='' && a.length<50){
                appData.expenses[a]=b;
                sum += +b;
            }
        }   
        appData.sumExpenses=sum;
        expensesValue.textContent=sum;
    });
    btnOptExp.addEventListener('click', function(){
        for (let i=0; i<optExp.length;i++){
            let opt = optExp[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
        }
    });
    chooseInc.addEventListener('input', function(){
        let items = chooseInc.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    });
    checkSavings.addEventListener('click', function(){
        if (appData.savings==true){
            appData.savings=false;
        }else{
            appData.savings=true;
        }
    });
    savingsSum.addEventListener('input', function(){
        if(appData.savings==true){
            let sum = +savingsSum.value;
            let procent = +savingsProcent.value; 
            appData.monthIncome = sum/100/12*procent;
            appData.yearIncome = sum/100*procent;
            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
    savingsProcent.addEventListener('input', function(){
        if(appData.savings==true){
            let sum = +savingsSum.value;
            let procent = +savingsProcent.value; 
            appData.monthIncome = sum/100/12*procent;
            appData.yearIncome = sum/100*procent;
            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
     
});



/*
console.log('Наша программа включает в себя данные: ');
for(let data in appData){
    console.log(data+ ': '+ appData[data]);
}    
*/





