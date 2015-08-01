var bodyContent = eval('(' + requestbody.content + ')');
var keyWords = bodyContent.keyWords ? bodyContent.keyWords : null;
var documentType = bodyContent.documentType ? bodyContent.documentType : null;
var yearSince = bodyContent.yearSince ? bodyContent.yearSince : null;
var yearUntil = bodyContent.yearUntil ? bodyContent.yearUntil : null;
var country = bodyContent.country ? bodyContent.country : null;
var mall = bodyContent.mall ? bodyContent.mall : null;
var query = "";

if (keyWords==null || keyWords==undefined) { keyWords=0; }
if (documentType==null || documentType==undefined || documentType=='null') { documentType=0; }
if (yearSince==null || yearSince==undefined) { yearSince=0; }
if (yearUntil==null || yearUntil==undefined) { yearUntil=0; }
if (country==null || country==undefined || country=='null') { country=0; }
if (mall==null || mall==undefined || mall=='null') { mall=0; }

var query = 'TYPE:"pa:paDocument"';

if(keyWords!='' || documentType!='' || yearSince!='' || yearUntil!='' || country!='' || mall!=''){
	if (keyWords!='') {
		query = query + " AND ALL:(" + keyWords + ")" ; 	
	}

	if (yearSince!='' && yearUntil!='') { 
		var fromValues = yearSince.split("/");
		var toValues = yearUntil.split("/");
		var fromDate = fromValues[2] + "-" + fromValues[1] + "-" + fromValues[0];
		var toDate = toValues[2] + "-" + toValues[1] + "-" + toValues[0];
		
		query = query + " AND @pa\\:documentDate:[\"" + fromDate + "\" TO \"" + toDate + "\"]" ;
	}
	
	if (yearSince!='' && yearUntil=='') { 
		var fromValues = yearSince.split("/");
		var fromDate = fromValues[2] + "-" + fromValues[1] + "-" + fromValues[0];
		query = query + " AND @pa\\:documentDate:\"" + fromDate + "\"";
	}
	
	if(documentType!='' && documentType!=0){
		var mallType = MallTypeSrv.getById(documentType).result;
		query = query + " AND @pa\\:mallType:" + mallType.name;
	}
	
	if(country!='' && country!=0){
		query = query + " AND @pa\\:countryID:" + country;
	}
	
	if(mall!='' && mall!=0){
		query = query + " AND @pa\\:mallID:" + mall;
	}
}

var resultSet = search.luceneSearch(query);
model.resultSet = resultSet;
