
function promoteDocumentVersion(uuid, label) {
	var majorVersion = $("input:radio[name='majorVersion']:checked").val();
    var description = $("#description").val();
	// llamada ajax a webscript de alfresco para promover version
	$.ajax({
		url:'/share/page/dashlets/promoteVersion',
		type: "get",
		dataType: "json",  
		async: false, 
		data : {
			uuid : uuid,
			label : label,
			description : description,
			majorVersion : majorVersion
		},
		success: function(data) {
			$('.bootbox.modal.fade.box-dialog.in').remove();
			$('.bootbox.modal.fade.box-medium.in').remove();
			$('.modal-backdrop.fade.in').remove();
			popupSuccess("Documento promovido desde la versión " + label);
			
		}
	});
}