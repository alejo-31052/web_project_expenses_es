let budgetValue=0; 
let totalExpensesValue=0;
let balanceColor ='green';
let categoriesData=["groceries", "restaurants", 'transport', 'home', 'subscriptions']

let expenseEntries=[['groceries', 33], ['restaurants', 50], ['transport', 12], ['home', 70], ['subscriptions', 14],
['groceries', 28], ['subscriptions', 12]];

function calculateTotalExpense(){
    totalExpensesValue=0;
for(let i=0; i< expenseEntries.length; i++){
totalExpensesValue+=expenseEntries[i][1]
}
}

function calculateAverageExpense(){
    if(expenseEntries.length===0){
        return 0;
    }
    else{
        return totalExpensesValue/expenseEntries.length;
        console.log(totalExpensesValue/expenseEntries.length)
    }
}

function calculateBalance(){
    return budgetValue - totalExpensesValue;
}



function updateBalanceColor(){

    let balance=calculateBalance();

    if(balance<0){
        balanceColor='red';
        return balanceColor;
    } else if(balance < budgetValue*0.25 ){
        balanceColor='orange';
        return balanceColor;
    } else {
        balanceColor='green';
        return balanceColor;
    }
}

function calculateCategoryExpenses(x){
    let categoryExpense=0;
    for( let expense of expenseEntries){
        if(x===expense[0])
        categoryExpense+=expense[1]
    }
return categoryExpense
}



function calculateLargestCategory(){
    let comparativeValue=0;
    let highestCategory='';

    for(let expense of categoriesData){
        let categoryExpense= calculateCategoryExpenses(expense);
        if(categoryExpense>comparativeValue){
            highestCategory=expense;
            comparativeValue=categoryExpense
        }
    }
    return highestCategory
}

function addExpenseEntry([x,y]){
expenseEntries.push([x,y]);
calculateTotalExpense()
}