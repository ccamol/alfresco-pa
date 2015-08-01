<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var username= bodyContent.username ? bodyContent.username : null;
var type = 1;
var CONTAINS = 8;
var EQUALS_TO = 0;
var resultDocumentToCarry=[];
var doumentUploaded=[];
var documentsToCarryFilter = DocumentsToCarryFilter();
var documentToCarryObject = null;
var documentUploadedObject= null;
var flag=0;
var requestedDocumentApplicantFilter = new RequestedDocumentApplicantFilter();

if(idTender !== null){
	documentsToCarryFilter.tender.exact(idTender, EQUALS_TO);
	documentsToCarryFilter.type.exact(type, EQUALS_TO);
	documentToCarryObject = DocumentsToCarrySrv.getListByFilter(documentsToCarryFilter);
	if(documentToCarryObject.status > -1){

		for (var i = 0; i < documentToCarryObject.result.size(); i++) {
			flag=0;
//			logger.log(documentToCarryObject.result.get(i).name);

			requestedDocumentApplicantFilter.documentToCarry.exact(documentToCarryObject.result.get(i).id,EQUALS_TO);
			requestedDocumentApplicantFilter.userTender.exact(username,EQUALS_TO);
//			logger.log("user:"+ username);
			documentUploadedObject=RequestedDocumentApplicantsSrv.getListByFilter(requestedDocumentApplicantFilter);
			//logger.log("no agrega ya que ya se encuentra subido.");
			if(documentUploadedObject.status > -1){
				for (var a = 0; a < documentUploadedObject.result.size(); a++) {
//					logger.log("Documento subido.");
					flag=1;
					doumentUploaded.push(documentUploadedObject.result.get(a));

				}

				if (flag==0) {
//					logger.log("Documento no subido");
					resultDocumentToCarry.push(documentToCarryObject.result.get(a));
				}
			}
		}
		model.resulSetUploaded = doumentUploaded;
		model.resulSettDocumentToCarry = resultDocumentToCarry;

	}else{
		model.resulSetUploaded = null;
		model.resulSettDocumentToCarry = null;

	}
}
