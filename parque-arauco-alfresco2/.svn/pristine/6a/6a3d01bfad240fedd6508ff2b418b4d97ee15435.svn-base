function downloadDocumentFromPopup(urlDoc) {
//	var documentDownloadUrl = $("input:radio[name=doc-download]:checked").val();
	var varHost = window.location.hostname;
	var varPort = window.location.port;
	var downloadUrl = "http://"+varHost+":"+varPort + urlDoc;
    window.location.href = downloadUrl;
}

function downloadPDF(uuid){
	$.ajax({
		url : '/alfresco/service/documentService/downloadWs?uuid='+uuid,
		type : "get",
		dataType : "html",
		async : false,
		success : function(data) {
			alert("aaaaaaaaaaaaaaaaa");
			alert(data);
			window.location.href = data;
		}
	});
}





