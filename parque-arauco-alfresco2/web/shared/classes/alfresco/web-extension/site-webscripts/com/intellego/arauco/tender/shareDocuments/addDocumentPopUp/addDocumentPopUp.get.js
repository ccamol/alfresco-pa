//securityMatrix.apply();
var uuid= args.uuid ? args.uuid : null;
var name= args.name ? args.name : null;
var documentType= args.documentType ? args.documentType : null;
var createdDate= args.createdDate ? args.createdDate : null;

if(uuid !== null && name !== null){
	model.uuid = uuid;
	model.name = name;
	model.documentType = documentType;
	model.createdDate = createdDate;
}else{
	model.uuid = null;
	model.name = null;
	model.documentType = null;
	model.createdDate = null;
}