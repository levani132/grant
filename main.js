function addSubject(subj, name){
	$('#' + subj).append($('<div class="circle-container"><a href="subjects/' + 
		subj + '.html"><div class="circle"><img src="img/' + 
		subj + '.png"></div></a></div><h4><a href="subjects/' + 
		subj + '.html">' + 
		name + '</a></h4>'));
}

function addHeaderImage(subj){
	$('#headerImage').append($('<div class="circleOne"><img src="img/' + subj + '.png"></div>'));
}

$(document).ready(function(){
	addHeaderImage('info');
	addSubject('math', 'მათემატიკა');
	addSubject('lit', 'ლიტერატურა');
	addSubject('geog', 'გეოგრაფია');
	addSubject('ist', 'ისტორია');
	addSubject('bio', 'ბიოლოგია');
	addSubject('qim', 'ქიმია');
	addSubject('fiz', 'ფიზიკა');
	addSubject('info', 'ინფორმაცია');
});

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