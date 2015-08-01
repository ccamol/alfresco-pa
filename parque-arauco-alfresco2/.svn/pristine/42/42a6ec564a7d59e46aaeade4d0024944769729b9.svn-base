

var bodyContent = eval('(' + requestbody.content + ')');
var uuid = bodyContent.uuid ? bodyContent.uuid : null;
var versioningType = bodyContent.versioningType ? bodyContent.versioningType : null;
var response = "rsps";
//logger.log(" ### ACTUALIZAR DOCUMENTO ALFRESCO ### : uuid = " + uuid + " versioningType = " + versioningType);

var isMajor;
if (versioningType == 'major') {
	isMajor = true;
} else if (versioningType == 'minor') {
	isMajor = false;
} else {
	uuid = null;
}

if (uuid == null) {
//	logger.log("NULL UUID");
	response = "failure";
} else {
	var query = "@sys\\:node-uuid:" + uuid;
	var resultSet = search.luceneSearch(query);
	var node = resultSet[0];
	
//	logger.log("requestbody: " + requestbody.content);
	
	var IS_DATE = '$isDate';
	var keyValue, delimiterIndex;
	var day, month, year;
	
	for (var key in bodyContent) {
	    if (bodyContent.hasOwnProperty(key)) {
//	        logger.log("### found js object attribute: " + key + " = " + bodyContent[key]);
	        if (key !== "uuid" && key !== "versioningType") {
	        	if (key.indexOf(IS_DATE) !== -1) {
	        		keyValue = bodyContent[key];
	        		delimiterIndex = keyValue.indexOf('/');
	        		var day = keyValue.substring(0, delimiterIndex);

	        		delimiterIndex = keyValue.indexOf('/', delimiterIndex) + 1;
	        		var month = keyValue.substring(delimiterIndex, keyValue.indexOf('/', delimiterIndex)) - 1;
	        		delimiterIndex = keyValue.indexOf('/', delimiterIndex) + 1;
	        		var year = keyValue.substring(delimiterIndex, keyValue.length);
	        		
	        		node.properties["pa:" + key.substring(0, key.length - IS_DATE.length)] =
	        			new Date(year, month, day);
	        	} else {
	        		node.properties["pa:" + key] = bodyContent[key];
	        	}
	        }
	    }
	}
//	logger.log(" ### SAVING NODE WITH UPDATED PROPERTIES");
	node.save();
//	logger.log(" ### ### ### UPDT DOC - EXEC JAVA ### ### ###");
	var javaRsps = VersionUtils.createVersion(uuid, isMajor);
//	logger.log(" ### editDocument Alf, JavaRsps: " + javaRsps);
	
	response = javaRsps ? "success" : "failure";
}
model.response = response;