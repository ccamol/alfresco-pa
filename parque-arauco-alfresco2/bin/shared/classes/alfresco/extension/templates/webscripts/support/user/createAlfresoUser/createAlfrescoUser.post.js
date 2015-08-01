<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">


var bodyContent = eval('(' + requestbody.content + ')');

var userName= bodyContent.userName ? bodyContent.userName : null;
var password= bodyContent.password ? bodyContent.password : null;
var mail= bodyContent.mail ? bodyContent.mail : null;
var newUser = null;
if(userName !== null && password !== null){
	newUser = people.createPerson(userName, " ", " ", mail, password, true);
	if (newUser){
		model.response = 1;
	}else{
		model.response = 0;
	}
}else{
	model.response = 0;
}