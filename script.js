'use strict';
let money=+prompt("ваш бютжет на месяц?"),
    time=prompt("Введите дату в формате YYYY-MM-DD");

let appData={
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income : [],
    savings:false
};


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
/*
let i=0;
while (i<2){
    let a=prompt("Введите обязательную статью расходов в этом месяце"),
        b=+prompt("во сколько это обойдется?");
    if((typeof(a))==='string' && (typeof(a)) !=null && (typeof(b))!=null && a !='' && b !='' && a.length<50){
        appData.expenses[a]=b;
        i++;
    }else{
        alert('вы не ввели обязательную статью расходов');
        continue;
    }
    
}
do{
    let a=prompt("Введите обязательную статью расходов в этом месяце"),
        b=+prompt("во сколько это обойдется?");
    if((typeof(a))==='string' && (typeof(a)) !=null && (typeof(b))!=null && a !='' && b !='' && a.length<50){
        appData.expenses[a]=b;
        i++;
    }else{
        alert('вы не ввели обязательную статью расходов');
        continue;
    }
}while(i<2);
*/
appData.moneyPerDay=appData.budget/30;

alert("бюджет на 1 день = "+ appData.moneyPerDay);
console.log(appData);

if(appData.moneyPerDay<=100){
    console.log('минимальный уровень достатка');
}else if (appData.moneyPerDay>100 && appData.moneyPerDay<=2000){
    console.log('средний уровень достатка');
} else if(appData.moneyPerDay>2000){
    console.log('высокий уровень достатка');
}