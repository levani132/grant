const endl = "<br />"

function cout(text){
	document.getElementById("write").innerHTML += text + endl;
}

function write(text){
	document.getElementById("write").innerHTML = text + endl;
}

function option(first, second, third) {
    this.rootAmount = first;
    this.addedAmount = second;
    this.moneyToPay = third;
}

function generateCreditInfo(credit, percent, months){
	var result = [];
	percent *= 0.01;
	var perMonth = percent / 12;
	var curCredit = credit;
	var y1 = perMonth * credit / (1 - Math.pow(1 - perMonth, months));
	var q = 1 - perMonth;
	var allToPay = 0;
	for(i = 1; i <= months; i++){
		var rootAmount = Math.pow(q,(months - i)) * y1;
		var addedAmount = perMonth * curCredit;
		var moneyToPay = rootAmount + addedAmount;
		curCredit -= rootAmount;
		allToPay += moneyToPay;
		result[i - 1] = new option(rootAmount, addedAmount, moneyToPay);
	}
	return result;
}

function submit(){
	write("");
	var credit = Number(document.getElementById("credit").value);
	var percent = Number(document.getElementById("percent").value);
	var months = Number(document.getElementById("months").value);
	var info = generateCreditInfo(credit, percent, months);
	var allToPay = 0;
	var percentMoney = 0;

	for(i = 0; i < info.length; i++){
		allToPay += info[i].moneyToPay;
		percentMoney += info[i].addedAmount;
		cout("You have to pay: " + info[i].moneyToPay + " for root amount of: " + info[i].rootAmount + " and percent money: " + info[i].addedAmount + "<br>");
	}
	
	cout("You have to pay: " + allToPay + " the percent is: " + percentMoney);
}