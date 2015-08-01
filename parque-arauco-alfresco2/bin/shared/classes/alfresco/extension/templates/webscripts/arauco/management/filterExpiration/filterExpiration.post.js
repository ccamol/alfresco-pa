var bodyContent = eval('(' + requestbody.content + ')');
var id = bodyContent.id ? bodyContent.id : null;
var nodeType = bodyContent.nodeType ? bodyContent.nodeType : null;
var nodeId = bodyContent.nodeId ? bodyContent.nodeId : null;
var textExpiration = bodyContent.textExpiration ? bodyContent.textExpiration : null;
var amountDay = bodyContent.amountDay ? bodyContent.amountDay : null;
var amountMonth = bodyContent.amountMonth ? bodyContent.amountMonth : null;
var txExpirationFrom = bodyContent.txExpirationFrom ? bodyContent.txExpirationFrom : null;
var txExpirationTo = bodyContent.txExpirationTo ? bodyContent.txExpirationTo : null;
var query = null;


//logger.log(amountDay + "	amountDay--------");
//logger.log(amountMonth + "	amountDay--------");
//logger.log(txExpirationFrom + "	amountDay--------");
//logger.log(txExpirationTo + "	amountMonth--------");

if(nodeType!=null && nodeType!=undefined){
	query = 'TYPE:"pa:paDocument"' + 'AND ASPECT:"pa:vigencyData"';
	switch (nodeType) { 
	case "1":
		query = query + " AND @pa\\:mallID:" + id;
		break;
	case "2":
		break;
	case "3":
		query = query + " AND @pa\\:sectionID:1 AND @pa\\:sucNumberID:" + id;
		break;
	case "4":
		break;
	case "5":
		query = query + " AND @pa\\:stageID:" + nodeId;
		break;
	case "7":
		query = query + " AND @pa\\:sectionID:1 AND  @pa\\:stageID:" + id;
		break;
	case "6":
		query = query + " AND @pa\\:sectionID:1 AND  @pa\\:projectID:" + id;
		break;
	case "9":
		query = query + " AND @pa\\:sectionID:1 AND  @pa\\:mallID:" + id;
		break;
	}

	if(amountDay!=0 && amountMonth!=0 && amountDay!='0' && amountMonth!='0'){
//		logger.log("flag 1");
		var now = new Date();
		var day = '01';
		var month = amountMonth;
		var year = now.getFullYear();
		var dateInit = day+"/"+month+"/"+year;
		var dayCurrent = now.getDate();
		var monthCurrent = now.getMonth();
		if(amountDay=='30' || amountDay==30){
			if(parseInt(month)==12){
				month = 1;
				year = parseInt(year) + 1;
			}else{
				month = parseInt(month) + 1;
			}
		}
		if(amountDay=='60' || amountDay==60){
			if(parseInt(month)==11){
				month = 1;
				year = parseInt(year) + 1;
			}else if(parseInt(month)==12){
				month = 2;
				year = parseInt(year) + 1;
			}else{
				month = parseInt(month) + 2;
			}
		}
		if(amountDay=='61' || amountDay==61){
			if(parseInt(month)==10){
				month = 1;
				year = parseInt(year) + 1;
			}else if(parseInt(month)==11){
				month = 2;
				year = parseInt(year) + 1;
			}else if(parseInt(month)==12){
				month = 3;
				year = parseInt(year) + 1;
			}else{
				month = parseInt(month) + 3;
			}
		}

		var dateFinish = day+"/"+month+"/"+year;
		var fromValues = dateInit.split("/");
		var toValues = dateFinish.split("/");
		var fromDate = fromValues[2] + "-" + fromValues[1] + "-" + fromValues[0];
		var toDate = toValues[2] + "-" + toValues[1] + "-" + toValues[0];
		query = query + " AND @pa\\:endDate:[\"" + fromDate + "\" TO \"" + toDate + "\"]" ;
	}else{
		var valueFrom = txExpirationFrom.split("/");
		var valueTo = txExpirationTo.split("/");
		var dateFrom = valueFrom[2] + "-" + valueFrom[1] + "-" + valueFrom[0];
		var dateTo = valueTo[2] + "-" + valueTo[1] + "-" + valueTo[0];

		query = query + " AND @pa\\:endDate:[\"" + dateFrom + "\" TO \"" + dateTo + "\"]" ;
	}

	var resultSet = search.luceneSearch(query);
	model.resultSet = resultSet;
	var currentDate = new Date(); 
	model.date = currentDate;
	model.filterExpiration = amountDay;
}

