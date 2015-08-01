var ALF_WEBSCRIPT_URL = "/arauco/addConsultApplicant";

var idTender= args.idTender ? args.idTender : null;
var author= args.author ? args.author : null;
var question= args.question ? args.question : null;
var category= args.category ? args.category : null;
var questionDate= args.questionDate ? args.questionDate : null;
var status= args.status ? args.status : null;
var publicationStatus= args.publicationStatus ? args.publicationStatus : null;
var id= args.id ? args.id : null;


if (question != null && category !== null) {
	var params = new Array();
	params["id"] = id;
	params["idTender"] = idTender;
	params["author"] = author;
	params["question"] = question;
	params["category"] = category;
	params["questionDate"] = questionDate;
	params["status"] = status;
	params["publicationStatus"] = publicationStatus;

	
	var connector = remote.connect("alfresco");
	var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//	logger.log(data);
	result = eval('(' + data + ')');
}else {
	result = null
}

model.resultSet = result;