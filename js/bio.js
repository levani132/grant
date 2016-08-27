function main(){
	$("#here").load("template.html", function() {
  alert( "Load was performed." );
});
}
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(document).ready(
	// var client = new XMLHttpRequest();
	// client.open('GET', '/template.html');
	// client.onreadystatechange = function() {
	//   alert(client.responseText);
	// }
	// client.send();
	// $("!DOCTYPE html").append(client);
	main()
	// $.get( "template.html", function( data ) {
	//   alert( data );
	// });
);


function writeSubjScore(sSubj, wSubj, minSubj, maxSubj){
	if(sSubj == 0)
		document.getElementById(wSubj).innerHTML = "გთხოვთ მიუთითოთ სწორი მონაცემები. (ქულის მინიმალური ზღვარი " + minSubj +", ხოლო მაქსიმალური " + maxSubj +", თუ თქვენი ქულა არის მინიმალურზე ნაკლები, სამწუხაროდ თქვენ ჩაიჭერით.)";
	else 
		document.getElementById(wSubj).innerHTML = "სკალირებული ქულა 2015 წლის ვარიანტების საშვალო ქულების მიხედვით: " + sSubj;
}

function writeGrant(percent){
	if(percent == "f")
		document.getElementById("result").innerHTML = "თქვენ სამწუხაროდ ჩაიჭერით ერთიან ეროვნულ გამოცდებში";
	else if(percent == "fx")
		document.getElementById("result").innerHTML = "თქვენ ჩააბარეთ ერთიანი ეროვნული გამოცდები, მაგრამ სამწუხაროდ ვერ მიიღეთ გრანტი";
	else 
		document.getElementById("result").innerHTML = "თქვენ ჩააბარეთ ერთიანი ეროვნული გამოცდები წარმატებით და გეკუთვნით " + percent + "-იანი გრანტი";
}

function subject(maxP, minP, maxSP, minSP, g50, g70, g100){
	this.maxP = maxP;
	this.minP = minP;
	this.minSP = minSP;
	this.point = (maxSP - minSP) / (maxP - minP);
	this.g50 = g50;
	this.g70 = g70;
	this.g100 = g100;
	this.getScalePointsFor = function(points){
		if(points >= this.minP && points <= this.maxP) return (points - this.minP) * this.point + this.minSP;
		else return 0;
	}
}

function subjectOf(name){
	
}

function submit(subjName){
	var geoP = Number(document.getElementById("geo").value);
	var satP = Number(document.getElementById("sat").value);
	var lanP = Number(document.getElementById("lan").value);
	var subjP = Number(document.getElementById("subj").value);
	
	var geo = new subject(80.0, 21.0, 183.0, 120.0, null, null, null);
	var sat = new subject(80, 24, 192.7, 134.9, null, null, null);
	var lan = new subject(100, 21, 177.5, 131.6, null, null, null);
	var subj = 

	/** Georgian vars and scal point. */
	var geoSP = geo.getScalePointsFor(geoP);
	
	/** Sat vars and scal point. */
	var maxSat = 80;
	var minSat = 24;
	var maxSSat = 192.7;
	var minSSat = 134.9;
	var satPoint = (maxSat - minSat) / (maxSat - minSat);
	var sSat;
	if(sat >= minSat && geo <= maxSat) sSat = (sat - minSat) * satPoint + minSSat;
	else sSat = 0;
	
	/** Language vars and scal point. */
	var maxLan = 100;
	var minLan = 21;
	var maxSLan = 177.5;
	var minSLan = 131.6;
	var lanPoint = (maxSLan - minSLan) / (maxLan - minLan);
	var sLan;
	if(lan >= minLan && lan <= maxLan) sLan = (lan - minLan) * lanPoint + minSLan;
	else sLan = 0;
	
	/** Subject vars and scal point. */
	var maxSubj = 75;
	var minSubj = 19;
	var maxSSubj = 183.4;
	var minSSubj = 131.5;
	var subjPoint = (maxSSubj - minSSubj) / (maxSubj - minSubj);
	var sSubj;
	if(subj >= minSubj && subj <= maxSubj) sSubj = (subj - minSubj) * subjPoint + minSSubj;
	else sSubj = 0;
	
	
	var grant = 10 * (sGeo + 1.5 * sSat + sLan + sSubj);
	
	writeSubjScore(sGeo, "wgeo", minGeo, maxGeo);
	writeSubjScore(sSat, "wsat", minSat, maxSat);
	writeSubjScore(sLan, "wlan", minLan, maxLan);
	writeSubjScore(sSubj, "wbio", minSubj, maxSubj);
	
	
	document.getElementById("wgrant").innerHTML = "თქვენი საერთო სკალირებული ქულა 2015 წლის ქულების მიხედვით: " + grant;
	if(grant>=7921.0){
		writeGrant("100%");
	}else if(grant>=7745.5){
		writeGrant("70%");
	}else if(grant>=7358.0){
		writeGrant("50%");
	}else if(sGeo==0 || sSat==0 || sLan==0 || sSubj==0){
		writeGrant("f");
	}else{
		writeGrant("fx");
	}
	document.getElementById("br").innerHTML = "<br class='br'>";
	document.getElementById("bk").innerHTML = "<br class='br'>";
	document.getElementById("bl").innerHTML = "<br class='br'>";
	document.getElementById("bn").innerHTML = "<br class='br'>";
	document.getElementById("button").style.top = "570px";
}