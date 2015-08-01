<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var parent= bodyContent.parent ? bodyContent.parent : null;
var name= bodyContent.name ? bodyContent.name : null;

var classification = null;
var parentClassification = null;

if(parent!=null && parent!=null){
	parentClassification = ClassificationService.getByUuid(parent);
	classification = ClassificationService.add(parentClassification.result, name);
}

model.response=classification;







