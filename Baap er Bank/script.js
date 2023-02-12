document.getElementById("depositBtn").addEventListener("click", function () {
  const depositStringVal = document.getElementById("depositField").value;
  const newDepositVal = parseFloat(depositStringVal);
  document.getElementById("depositField").value = "";
  if(isNaN(newDepositVal)){
    alert("Please Enter a number");
    return;
  }

  const preDepositTotal = document.getElementById("deposit");
  const preDepositTotalString = preDepositTotal.innerText;
  const preDepositTotalAmount = parseFloat(preDepositTotalString);

  const totalDeposit = newDepositVal + preDepositTotalAmount;

  preDepositTotal.innerText = totalDeposit;

  const total = document.getElementById("total");
  const totalString = total.innerText;
  const totalAmount = parseFloat(totalString);

  const newTotal = totalAmount + newDepositVal;
  total.innerText = newTotal;
  
});

document.getElementById("withdrawBtn").addEventListener("click", function () {
  const withdrawStringValue = document.getElementById("withdrawField").value;
  const withdrawValue = parseFloat(withdrawStringValue);
  
  document.getElementById("withdrawField").value = "";
  if(isNaN(withdrawValue)){
    alert("Please Enter a number");
    return;
  }
  const preWithdrawTotal = document.getElementById("withdraw");
  const preWithdrawStirngTotal = preWithdrawTotal.innerText;
  const preWithdrawTotalAmount = parseFloat(preWithdrawStirngTotal);

  const total = document.getElementById("total");
  const totalString = total.innerText;
  const totalAmount = parseFloat(totalString);
  

  if(withdrawValue > totalAmount )
  {
    if(totalAmount=== 0 ) alert('Account is Empty !!');
    else 
    alert('Eto taka nai!!');
    return;
  }

  const newWithdrawTotal = withdrawValue + preWithdrawTotalAmount;
  preWithdrawTotal.innerText = newWithdrawTotal;

  

  const newTotal = totalAmount - withdrawValue;
  total.innerText = newTotal;

  
});
