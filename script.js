'use strict';
    let money, time;
function start(){
        money=prompt("ваш бютжет на месяц?");
        time=prompt("Введите дату в формате YYYY-MM-DD");   
        while(isNaN(money) || money=='' || money==null){
            money=prompt("ваш бютжет на месяц?");
        } 
}
//start();

let appData={
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income : [],
    savings:true,
    chooseExpenses: function (){
        for(let i=0;i<2;i++){
            let a=prompt("Введите обязательную статью расходов в этом месяце"),
                b=+prompt("Во сколько обойдется?");
            if((typeof(a))==='string'&& (typeof(a)) !=null &&(typeof(b)) !=null && a!='' && b !='' && a.length<50){
                appData.expenses[a]=b;
            }else{
                alert('вы не ввели обязательную статью расходов');
                i--;
            }
        }    
    },
    detectDayBudget: function(){
        appData.moneyPerDay=(appData.budget/30).toFixed(2);
        alert("бюджет на 1 день = "+ appData.moneyPerDay);
    },
    detectLeve: function(){
        if(appData.moneyPerDay<=100){
            alert(' минимальный уровень достатка');
        }else if (appData.moneyPerDay>100 && appData.moneyPerDay<=2000){
            alert(' средний уровень достатка');
        } else if(appData.moneyPerDay>2000){
            alert(' высокий уровень достатка');
        }
    },
    chooseOptExpenses: function(){
        for (let i=1; i<=3;i++){
            let a=prompt("Введите необязательную статью расходов в этом месяце");
            if((typeof(a))==='string'&& (typeof(a)) !=null&& a!='' && a.length<50){
                appData.expenses[i]=a;
            }else{
                alert('вы не ввели обязательную статью расходов');
                i--;
            }
        }

    },
    checkSavings:function(){
        if (appData.savings==true){
            let save = +prompt('какова сумма накоплений?'),
                procent= +prompt('под какой процент?');
            appData.monthIncome = save/100/12*procent;
            alert('Доход в месяц с вашего депозита: '+ appData.monthIncome);
        }
    },
    chooseIncome: function(){
            let items = prompt('Что принесет дополнительный доход? (деречислите через запятую)', '');
            if(typeof(items) != 'string'|| typeof(items) ==null || items ==''){
                alert('вы не ввели доболнителные источники дохода, либо ввели их некорректно');                
            }else{
                appData.income = items.split(', ');
                appData.income.push(prompt('может что-то еще?', ''));
                appData.income.sort();
            }
        appData.income.forEach(function(i, items){
            let income=((items+1)+'й '+i);
            alert('Способы доп. заработка: '+ income);
        });
         
    }

};

console.log('Наша программа включает в себя данные: ');
for(let data in appData){
    console.log(data+ ': '+ appData[data]);
}    




let starts = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    inputExp = document.getElementsByClassName('expenses-item'),
    btnExp = document.getElementsByTagName('button')[0],
    btnOptExp = document.getElementsByTagName('button')[1],
    btnCount = document.getElementsByTagName('button')[2],
    optExp = document.querySelectorAll('.optionalexpenses-item'),
    chooseInc = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    savingsSum = document.querySelector('#sum'),
    savingsProcent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


