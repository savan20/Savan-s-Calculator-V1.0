function Add() {
    var addNum1Raw = prompt("Enter First Amount")
    var addNum2Raw = prompt("Enter Second Amount")
    var addNum1 = parseInt(addNum1Raw);
    var addNum2 = parseInt(addNum2Raw);
    var fiinelResult = addNum1 + addNum2;
    document.getElementById('Answer').textContent = addNum1 + "+" + addNum2 + "=" + fiinelResult;
}

function Substarct() {
    var substarctNum1Raw = prompt("Enter First Amount")
    var substarctNum2Raw = prompt("Enter Second Amount")
    var substarctNum1 = parseInt(substarctNum1Raw);
    var substarctNum2 = parseInt(substarctNum2Raw);
    var fiinelResult = substarctNum1 - substarctNum2;
    document.getElementById('Answer').textContent = substarctNum1 + "-" + substarctNum2 + "=" + fiinelResult;
}

function Multiply() {
    var multiplyNum1Raw = prompt("Enter First Amount")
    var multiplyNum2Raw = prompt("Enter Second Amount")
    var multiplyNum1 = parseInt(multiplyNum1Raw);
    var multiplyNum2 = parseInt(multiplyNum2Raw);
    var fiinelResult = multiplyNum1 * multiplyNum2;
    document.getElementById('Answer').textContent = multiplyNum1 + "×" + multiplyNum2 + "=" + fiinelResult;
}

function Devide() {
    var devideNum1Raw = prompt("Enter First Amount")
    var devideNum2Raw = prompt("Enter Second Amount")
    var devideNum1 = parseInt(devideNum1Raw);
    var devideNum2 = parseInt(devideNum2Raw);
    var fiinelResult = devideNum1 / devideNum2;
    document.getElementById('Answer').textContent = devideNum1 + "÷" + devideNum2 + "=" + fiinelResult;
}