<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');


//var description= bodyContent.description ? bodyContent.description : null;
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var author= bodyContent.author ? bodyContent.author : null;
//var topicTitle= bodyContent.topicTitle ? bodyContent.topicTitle : null;
var question= bodyContent.question ? bodyContent.question : null;
var category= bodyContent.category ? bodyContent.category : null;
var questionDate= bodyContent.questionDate ? bodyContent.questionDate : null;
var status= bodyContent.status ? bodyContent.status : null;
var publicationStatus= bodyContent.publicationStatus ? bodyContent.publicationStatus : null;
var id= bodyContent.id ? bodyContent.id : null;

var questionObj = new Question();
var questionObject = new Question();

//logger.log("IDTENDER ----" + idTender);
//logger.log("AUTHOR -----" + author);
//logger.log("QUESTION ---- " + question);
//logger.log("CATEGORY ---- " + category);
//logger.log("QUESTIONDATE ----- " + questionDate);
//logger.log("STATUS ----" + status);
//logger.log("PUBLICAONSTATUS ----" + publicationStatus);
//logger.log("ID ---- " + id);

if(id == null){
		questionObj.tender = TendersSrv.getById(idTender).result;
		questionObj.category = CategoriesSrv.getById(category).result;
//		questionObj.topicTitle = topicTitle;
		questionObj.author = author;
		questionObj.question = question;
//		questionObj.description = description;
		questionObj.status = status;
		questionObj.publicationStatus = publicationStatus;
		questionObj.questionDate = formatDate(questionDate);
		var result = QuestionSrv.add(questionObj);
		if(result.status > -1){
			model.resultSet = result;
		}else{
			model.resultSet = null;
		}
}else{
	questionObject = QuestionSrv.getById(id).result;
	questionObj.id = questionObject.id;
	questionObj.tender = questionObject.tender;
	questionObj.category = CategoriesSrv.getById(category).result;
//	questionObj.topicTitle = questionObject.topicTitle;
	questionObj.author = questionObject.author;
	questionObj.question = question;
//	questionObj.description = questionObject.description;
	questionObj.status = questionObject.status;
	questionObj.publicationStatus = questionObject.publicationStatus;
	questionObj.questionDate = questionObject.questionDate;
	var result = QuestionSrv.addOrUpdate(questionObj);
	if(result.status > -1){
		model.resultSet = result;
	}else{
		model.resultSet = null;
	}
}

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], dateValues[3],dateValues[4],4,567);
}