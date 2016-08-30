function addSubject(subj, name){
	$('#' + subj).append($('<div class="circle-container"><a href="subjects/' + 
		subj + '.html"><div class="circle"><img src="img/' + 
		subj + '.png"></div></a></div><h4><a href="subjects/' + 
		subj + '.html">' + 
		name + '</a></h4>'));
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