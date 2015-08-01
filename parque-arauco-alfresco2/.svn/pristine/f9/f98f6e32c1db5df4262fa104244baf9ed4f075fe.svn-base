<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var area= bodyContent.area ? bodyContent.area : null;
var entryPointType= bodyContent.entryPointType ? bodyContent.entryPointType : null;
var entryPointId= bodyContent.entryPointId ? bodyContent.entryPointId : null;

var root = null;

if(area!=null && entryPointType!=null && entryPointId!=null){
	
	if(area=='engineering') root = ClassificationService.getEngineeringRoot();
	if(area=='architecture') root = ClassificationService.getArchitectureRoot();
	
}

model.response=root;







