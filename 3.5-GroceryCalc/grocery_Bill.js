let grocery1;
let grocery2;
let grocery3;
let grocery4;

function calculateBill(){
    grocery1=parseFloat(document.getElementById("Grocery-1").value);
    grocery2=parseFloat(document.getElementById("Grocery-2").value);
    grocery3=parseFloat(document.getElementById("Grocery-3").value);
    grocery4=parseFloat(document.getElementById("Grocery-4").value);

    let Total = grocery1+grocery2+grocery3+grocery4;

    document.getElementById("bill_Result").innerText = `Total Bill of groceries is: Rs${Total}`;
}