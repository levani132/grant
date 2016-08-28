function writeSubjScore(sSubj, wSubj, minSubj, maxSubj){
	if(sSubj == 0)
		document.getElementById(wSubj).innerHTML = "გთხოვთ მიუთითოთ სწორი მონაცემები. (ქულის მინიმალური ზღვარი " + minSubj +", ხოლო მაქსიმალური " + maxSubj +", თუ თქვენი ქულა არის მინიმალურზე ნაკლები, სამწუხაროდ თქვენ ჩაიჭერით.)";
	else 
		document.getElementById(wSubj).innerHTML = "სკალირებული ქულა 2015 წლის ვარიანტების საშვალო ქულების მიხედვით: " + sSubj;
}

function writeGrant(percent){
	if(percent == "f")
		document.getElementById("result").innerHTML = "თქვენ სამწუხაროდ ჩაიჭერით ერთიან ეროვნულ გამოცდებში";
	else if(percent == "e")
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
	var bio = new subj(75, 19, 183.4, 131.5, 7358, 7745.5, 7921);
	var fiz = new subj(75, 19, 193.2, 142.2, 6050, 7265, 7648);
	var geog = new subj(60, 16, 200, 140, 7284.5, 7635, 7864);
	var ist = new subj(70, 18, 195.2, 129, 7407, 7726.5, 7924.5);
	var lit = new subj(80, 21, 188.2, 132.9, 7375.5, 7692.2, 7864.5);
	var math = new subj(59, 15, 191.7, 139, 7447.5, 7834.5, 8030);
	var qim = new subj(75, 19, 180.9, 133.1, 7110.5, 7600.5, 7858);
	return eval(name);
}

function submit(subjName){
	var geoP = Number(document.getElementById("geo").value);
	var satP = Number(document.getElementById("sat").value);
	var lanP = Number(document.getElementById("lan").value);
	var subjP = Number(document.getElementById("subj").value);
	
	var geo = new subject(80.0, 21.0, 183.0, 120.0, null, null, null);
	var sat = new subject(80, 24, 192.7, 134.9, null, null, null);
	var lan = new subject(100, 21, 177.5, 131.6, null, null, null);
	var subj = subjectOf(subjName);

	/** Georgian vars and scal point. */
	var geoSP = geo.getScalePointsFor(geoP);
	var satSP = sat.getScalePointsFor(satP);
	var lanSP = lan.getScalePointsFor(lanP);
	var subjSP = subj.getScalePointsFor(subjP);
	
	
	var grant = 10 * (geoSP + 1.5 * satSP + lanSP + subjSP);
	
	writeSubjScore(geoSP, "wgeo", geo.minP, geo.maxP);
	writeSubjScore(satSP, "wsat", sat.minP, sat.maxP);
	writeSubjScore(lanSP, "wlan", lan.minP, lan.maxP);
	writeSubjScore(subjSP, "wsubj", subj.minP, subj.maxP);
	
	
	document.getElementById("wgrant").innerHTML = "თქვენი საერთო სკალირებული ქულა 2015 წლის ქულების მიხედვით: " + grant;
	if(grant>=subj.g100){
		writeGrant("100%");
	}else if(grant>=subj.g70){
		writeGrant("70%");
	}else if(grant>=subj.g50){
		writeGrant("50%");
	}else if(geoSP==0 || satSP==0 || lanSP==0 || subjSP==0){
		writeGrant("f");
	}else{
		writeGrant("e");
	}
	document.getElementById("br").innerHTML = "<br class='br'>";
	document.getElementById("bk").innerHTML = "<br class='br'>";
	document.getElementById("bl").innerHTML = "<br class='br'>";
	document.getElementById("bn").innerHTML = "<br class='br'>";
	document.getElementById("button").style.top = "570px";
}