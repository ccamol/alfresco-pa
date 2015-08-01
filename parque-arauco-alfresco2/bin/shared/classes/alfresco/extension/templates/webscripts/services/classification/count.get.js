<import resource="classpath:alfresco/extension/objectModel.js">

var uuid= args.uuid ? args.uuid : null;
var nodeType= args.nodeType ? args.nodeType : null;
var nodeId= args.nodeId ? args.nodeId : null;
var count = 0;

if(uuid!=null && nodeType!=null && nodeId!=null){
	var classification = null;
	classification = ClassificationService.getByUuid(uuid);
	if(classification.status>-1){
		var entryPoint = new EntryPoint();
		entryPoint.nodeType=nodeType;
		entryPoint.nodeId=nodeId.replace(".","");
		var response = ClassificationService.count(entryPoint, classification.result, true, false);
		if(response.status>-1){
			count = response.result;
		}
	}
}
model.count=count;







