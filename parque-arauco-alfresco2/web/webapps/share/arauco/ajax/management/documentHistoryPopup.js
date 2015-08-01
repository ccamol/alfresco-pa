//$(".btn.btn-link.promotelink").click(function(){
//	// obteniendo el uuid y etiqueta de version
//	var uuid = $("#uuidHidden").val();
//	// mostrar popup de promover
//	showPromoteDocumenVersionPopup(uuid);
//});

function showPromoteDocumenVersionPopup(uuid, label) {
	
	// llamada ajax al popup de promover version
	$.ajax({
		url:'/share/page/dashlets/promoteDocumentVersionPopup?uuid='+uuid+'&label='+label,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupMedium(data);
		}
	});
}

function downloadDocumentVersion(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/downloadDocumentPopupVersion?uuid=' + uuid + '&documentName=' + documentName,
		type: "get", 
		dataType: "html",
		async: false,
		success: function(data) {
			popupBoxDialog(data);
		}
	});
}
