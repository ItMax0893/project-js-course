'use strict';
    let money, time;
function start(){
        money=prompt("ваш бютжет на месяц?");
        time=prompt("Введите дату в формате YYYY-MM-DD");   
        while(isNaN(money) || money=='' || money==null){
            money=prompt("ваш бютжет на месяц?");
        } 
}
start();

let appData={
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income : [],
    savings:true
};

function chooseExpenses(){
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

}
chooseExpenses();
function chooseOptExpenses(){
    for (let i=1; i<=3;i++){
        let a=prompt("Введите необязательную статью расходов в этом месяце");
        if((typeof(a))==='string'&& (typeof(a)) !=null&& a!='' && a.length<50){
            appData.expenses[i]=a;
        }else{
            alert('вы не ввели обязательную статью расходов');
            i--;
        }
    }
}
chooseOptExpenses();

function detectDayBudget(){
    appData.moneyPerDay=(appData.budget/30).toFixed(2);
    alert("бюджет на 1 день = "+ appData.moneyPerDay);
}
function detectLevel(){

    if(appData.moneyPerDay<=100){
        alert(' минимальный уровень достатка');
    }else if (appData.moneyPerDay>100 && appData.moneyPerDay<=2000){
        alert(' средний уровень достатка');
    } else if(appData.moneyPerDay>2000){
        alert(' высокий уровень достатка');
    }
    
}
detectDayBudget();
detectLevel();

function checkSavings(){
    if (appData.savings==true){
        let save = +prompt('какова сумма накоплений?'),
            procent= +prompt('под какой процент?');
        appData.monthIncome = save/100/12*procent;
        alert('Доход в месяц с вашего депозита: '+ appData.monthIncome);
    }
}
checkSavings();
console.log(appData);