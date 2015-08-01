<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

//logger.log("ID TENDER: " + args.idTender);
var idTender= args.idTender ? args.idTender : null;
var status= args.status ? args.status : null;
var questionFilter = QuestionFilter();
var EQUALS_TO = 0;

if(idTender !== null){
	questionFilter.tender.exact(idTender, EQUALS_TO);
	questionFilter.status.exact(status, EQUALS_TO);
	var resultSet = QuestionSrv.getListByFilter(questionFilter);
	if(resultSet.status > -1){
		model.resultSet = resultSet;
	}else{
		model.resultSet = null;
	}

}else{
	model.resultSet = null;
}

