/* Adds header image with subject name */
function addHeaderImage(subj){
	$('.circleOne').append($('<img src="/img/' + subj + '.png">'));
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

/* Loads subject that is specified */
function loadSubject(title, subject){
	$("title").html(title);
	$("h1").html(title);
	$(".subj").html(title + ": ");
	addHeaderImage(subject);
	$("button").attr("onclick", "submit('" + subject + "')");
}

/* Adds subject link in its container */
function addSubject(subj, name){
	$('#' + subj).append($('<div class="circle-container"><a href="/subjects/' + 
		subj + '.html"><div class="circle"><img src="/img/' + 
		subj + '.png"></div></a></div><h4><a href="subjects/' + 
		subj + '.html">' + 
		name + '</a></h4>'));
}