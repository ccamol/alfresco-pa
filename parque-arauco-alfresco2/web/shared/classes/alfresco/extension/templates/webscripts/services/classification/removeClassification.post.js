<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var parent= bodyContent.parent ? bodyContent.parent : null;
var uuid= bodyContent.uuid ? bodyContent.uuid : null;

var classification = null;
var parentClassification = null;

if(uuid!=null && parent!=null){
	parentClassification = ClassificationService.getByUuid(parent);
	classification = ClassificationService.unClassify(parentClassification.result, uuid);
}

model.response=classification;







