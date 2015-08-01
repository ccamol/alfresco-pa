<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var classificationId= bodyContent.classificationId ? bodyContent.classificationId : null;
var newClassification= bodyContent.newClassification ? bodyContent.newClassification : null;
var uuid= bodyContent.uuid ? bodyContent.uuid : null;


var targetclassification = ClassificationService.getByUuid(newClassification);

if(targetclassification.status>-1){
	ClassificationService.classify(targetclassification.result, uuid);
	model.status=1;
	model.message="Operación realizada con éxito";
	
}else{
	model.status=-1;
	model.message="Classificación destino no encontrada";
}



