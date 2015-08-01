<import resource="classpath:alfresco/extension/objectModel.js">

var newNode = null;
var oldNode = null;
var destination = null;
var resulSet = null;
var siteFolder=null;
var cijFolder=null;
var cijFol=null;
var siteMall=null;
var bodyContent = eval('(' + requestbody.content + ')');

var newClassification= bodyContent.newClassification ? bodyContent.newClassification : null;
var uuid= bodyContent.uuid ? bodyContent.uuid : null;
var siteId= bodyContent.siteId ? bodyContent.siteId : null;
var classification = ClassificationService.getByUuid(newClassification);

if(classification.status>-1){

	query='@sys\\:node-uuid:' + uuid;
	resultSet= search.luceneSearch(query);

	if(resultSet.length>0){
		oldNode=resultSet[0];
	}

	var docType = oldNode.properties["pa:documentType"];
	var mall = oldNode.properties["pa:mall"];

	var sitQ="arquitectura";
	var sitA="arauco";

	if(sitA==siteId){

		siteFolder=companyhome.childByNamePath("Sites/"+sitQ+"/documentlibrary");
		if(siteFolder == null){
			siteFolder=companyhome.childByNamePath("Sitios/"+sitQ+"/documentLibrary");

		}
		cijFolder = siteFolder.childByNamePath(mall);  
		if(cijFolder==null)
		{
			cijFolder = siteFolder.createFolder(mall);
		}
		siteMall=companyhome.childByNamePath("Sites/"+sitQ+"/documentlibrary/"+mall+"");
		if(siteMall == null){
			siteMall=companyhome.childByNamePath("Sitios/"+sitQ+"/documentLibrary/"+mall+"");
		}
		cijFol = siteMall.childByNamePath(docType);  
		if(cijFol==null)
		{
			cijFol = siteMall.createFolder(docType);
		}
	}else{

		if(sitQ==siteId){

			siteFolder=companyhome.childByNamePath("Sites/"+sitA+"/documentlibrary");
			if(siteFolder == null){
				siteFolder=companyhome.childByNamePath("Sitios/"+sitA+"/documentLibrary");
			
			}
			cijFolder = siteFolder.childByNamePath(mall);  
			if(cijFolder==null)
			{
				cijFolder = siteFolder.createFolder(mall);
			}
			siteMall=companyhome.childByNamePath("Sites/"+sitA+"/documentlibrary/"+mall+"");
			if(siteMall == null){
				siteMall=companyhome.childByNamePath("Sitios/"+sitA+"/documentLibrary/"+mall+"");
			}
			cijFol = siteMall.childByNamePath(docType);  
			if(cijFol==null)
			{
				cijFol = siteMall.createFolder(docType);
			}
		}

	}

	var newNode = oldNode.copy(cijFol); 
	
	
//	logger.log("newNode.properties[\"sys:node-uuid\"]: "+newNode.properties["sys:node-uuid"])

	if(newNode.properties['pa:sectionID']==2){
		newNode.properties['pa:sectionID']= 1;
		newNode.properties['pa:sharedDate']= formatDate();
		newNode.properties['pa:sharedType'] = siteId;
//		logger.log("##############Shared Date of document: "+formatDate());
	}else{
		newNode.properties['pa:sectionID']=2;
		newNode.properties['pa:sharedDate']= formatDate();
		newNode.properties['pa:sharedType'] = siteId;
//		logger.log("##############Shared Date of document: "+formatDate());
	}
	if(newNode.properties['pa:nodeType']==9){
		newNode.properties['pa:nodeType']= 1;
		newNode.properties['pa:sharedDate']= formatDate();
		newNode.properties['pa:sharedType'] = siteId;
//		logger.log("##############Shared Date of document: "+formatDate());
	}else{
		newNode.properties['pa:nodeType']= 9;
		newNode.properties['pa:sharedDate']= formatDate();
		newNode.properties['pa:sharedType'] = siteId;
//		logger.log("##############Shared Date of document: "+formatDate());
	}
	newNode.save();

	var response= ClassificationService.classify(classification.result, newNode.properties['sys:node-uuid']);

	if(response.status>-1){
		model.status="1";
		model.message="Operación realizada con éxito";
	}else{
		model.status="-1";
		model.message=response.message;
	}
}else{
	model.status="-1";
	model.message="No se encontró la clasificación";
}

function formatDate(){
	var d = new Date();
	return new Date(d.getFullYear(),d.getMonth(),d.getDate());

}