var varTicket = "";

function getPreview(uuid) {
	getTicket();
	var varHost = window.location.hostname;
	var varPort = window.location.port;
	var dataPreview = null;
	if(varPort == '' || varPort == null || varPort == null || varPort == undefined || varPort == 'null'){
		varPort = 80;
	}
	$.ajax({
		url : '/alfresco/service/components/arauco/getPreview?alf_ticket='
				+ varTicket + "&host=" + varHost + "&port=" + varPort,
		type : "POST",
		dataType : "html",
		async : false,
		data : {
			uuid : uuid
		},
		success : function(data) {
			$("#viewer").html(data);
			$("#viewer").show();
			
		},
		error : function(xhr, ajaxOptions, thrownError) {
			popupAlert('Error en la Llamada al Servicio: generatePreview '+ xhr.status + " " + thrownError);
		}
	})
}

function getTicket() {
	$.ajax({
		url : '/share/page/dashlets/getTicket',
		type : "GET",
		dataType : "json",
		async : false,
		success : function(data) {
			varTicket = data.ticket;
		},
	});
}

//function generatePreview(uuid) {
//
//	getTicket();
//
//	var varHost = window.location.hostname;
//	var varPort = window.location.port;
//
//	$.ajax({
//		url : '/alfresco/service/components/arauco/generatePreview?alf_ticket='
//				+ varTicket + "&host=" + varHost + "&port=" + varPort,
//		type : "POST",
//		dataType : "html",
//		async : false,
//		data : {
//			uuid : uuid
//		},
//		success : function(data) {
//			console.log(data);
//			$("#viewer").html(data);
//			$("#viewer").show();
//
//		},
//		error : function(xhr, ajaxOptions, thrownError) {
//			alert("Error en la Llamada al Servicio: generatePreview "
//					+ xhr.status + " " + thrownError);
//		}
//	})
//
//}