<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var id= bodyContent.id ? bodyContent.id : null;
var name= bodyContent.name ? bodyContent.name : null;
var mall= bodyContent.mall ? bodyContent.mall : null;
var getTypeProject= bodyContent.getTypeProject ? bodyContent.getTypeProject : null;
var getStatusProject= bodyContent.getStatusProject ? bodyContent.getStatusProject : null;
var creationDate= bodyContent.creationDate ? bodyContent.creationDate : null;
var finishDate= bodyContent.finishDate ? bodyContent.finishDate : null;
var description= bodyContent.description ? bodyContent.description : null;

var finishD = new Date(finishDate);
var creationD = new Date(creationDate);

var lastProject =null;
logger.log("================================1=================================");
logger.log("mall es: "+ mall);
var mallObject = MallSrv.getById(mall);

logger.log("================================2=================================");
logger.log("type es: "+ getTypeProject);
var ProjectTypeObject =ProjectTypeSrv.getById(getTypeProject);
logger.log("================================3=================================");
logger.log("status es: "+ getStatusProject);
var getStatusProjectObject = ProjectStatusSrv.getById(getStatusProject);
 

var engineeringProject = new EngineeringProject();

if(id != null || id != undefined ){
	logger.log("================================Modifica=================================");
	logger.log("id es: "+id);
	logger.log("=================================================================");
	engineeringProject.id = id;
	engineeringProject.name = name;
	engineeringProject.finishDate = formatDate(finishDate);
	engineeringProject.mall = mallObject.result;
	engineeringProject.projectType = ProjectTypeObject.result;
	engineeringProject.projectStatusEntity = getStatusProjectObject.result;
	engineeringProject.description = description;
	engineeringProject.createdDate = formatDate(creationDate);
	
	
	
}else{
	logger.log("================================Agrega=================================");
	

	engineeringProject.name = name;
	engineeringProject.finishDate = formatDate(finishDate);
	engineeringProject.mall = mallObject.result;
	engineeringProject.projectType = ProjectTypeObject.result;
	engineeringProject.projectStatusEntity = getStatusProjectObject.result;
	engineeringProject.description = description;
	engineeringProject.createdDate = formatDate(creationDate);
}


function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}


model.resultSet = EngineeringProjectSrv.addOrUpdate(engineeringProject);














