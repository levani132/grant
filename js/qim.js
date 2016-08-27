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

function submit(){
	var geo = Number(document.getElementById("geo").value);
	var sat = Number(document.getElementById("sat").value);
	var lan = Number(document.getElementById("lan").value);
	var subj = Number(document.getElementById("qim").value);
	
	/** Georgian vars and scal point. */
	var maxGeo = 80.0;
	var minGeo = 21.0;
	var maxSGeo = 183.0;
	var minSGeo = 120.0;
	var geoPoint = (maxSGeo - minSGeo) / (maxGeo - minGeo);
	var sGeo;
	if(geo >= minGeo && geo <= maxGeo) sGeo = (geo - minGeo) * geoPoint + minSGeo;
	else sGeo = 0;
	
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
	var maxSSubj = 180.9;
	var minSSubj = 133.1;
	var subjPoint = (maxSSubj - minSSubj) / (maxSubj - minSubj);
	var sSubj;
	if(subj >= minSubj && subj <= maxSubj) sSubj = (subj - minSubj) * subjPoint + minSSubj;
	else sSubj = 0;
	
	
	var grant = 10 * (sGeo + 1.5 * sSat + sLan + sSubj);
	
	writeSubjScore(sGeo, "wgeo", minGeo, maxGeo);
	writeSubjScore(sSat, "wsat", minSat, maxSat);
	writeSubjScore(sLan, "wlan", minLan, maxLan);
	writeSubjScore(sSubj, "wqim", minSubj, maxSubj);
	
	
	document.getElementById("wgrant").innerHTML = "თქვენი საერთო სკალირებული ქულა 2015 წლის ქულების მიხედვით: " + grant;
	if(grant>=7858){
		writeGrant("100%");
	}else if(grant>=7600.5){
		writeGrant("70%");
	}else if(grant>=7110.5){
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