var ALF_WEBSCRIPT_URL = "/arauco/addAnswer";

var answer= args.answer ? args.answer : null;
var author= args.author ? args.author : null;
var consultId= args.consultId ? args.consultId : null;
var answerDate= args.answerDate ? args.answerDate : null;


if (answer != null && author !=null && consultId!= null && answerDate != null) {
	var params = new Array();
	params["answer"] = answer;
	params["author"] = author;
	params["consultId"] = consultId;
	params["answerDate"] = answerDate;

	
	var connector = remote.connect("alfresco");
	var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//	logger.log(data);
	result = eval('(' + data + ')');
}else {
	result = null
}

model.resultSet = result;