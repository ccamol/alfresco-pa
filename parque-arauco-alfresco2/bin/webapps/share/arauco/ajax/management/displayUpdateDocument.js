var varTicket = "";
$( document ).ready(function() {
	datePickers();
	number();
});

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
	});
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

function datePickers(){
	$(".metadataInput-date").datepicker({ 
		dateFormat:"dd/mm/yy",
		closeText:"Cerrar",
		prevText: '<Ant',
		nextText: 'Sig>',
		showButtonPanel: false,
		changeYear: true,
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
		dayNamesShort: ['Dom','Lun','Mar','Mie','Juv','Vie','Sab'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
		weekHeader: 'Sm'
	});
}

function number(){
	$(".metadataInput-int").keypress(function(evt) {
		var charCode = (evt.which) ? evt.which : event.keyCode
				if (charCode > 31 && (charCode < 48 || charCode > 57))
					return false;

		return true;
	});
}

function edit() {
	
	var isValid = true;
	var hasInvalidNumber = false;
	var hasInvalidDate = false;
	
	$(".metadataInput-int").each(function() {
		if ($(this).val() % 1 != 0) {
			isValid = false;
			hasInvalidNumber = true;
			return false;
		}
	});
	$(".metadataInput-date").each(function() {
		var isDate = function() {
			return (new Date($(this).val()) !== "Invalid Date") ? true : false;
		}
		if (isDate == false) {
			isValid = false;
			hasInvalidDate = true;
			return false;
		}
	});
	
	//check for empty mandatory fields contained within the 'extraData' div
	$("div > input").each(function() {
		if ($(this).parent().attr("name") == "extraData") {
			if ($("label[for='" + $(this).attr('id') + "']").has('img').attr('id') == "imgMandatory" && $(this).val() == '') {
				isValid = false;
				return false;
			}
		}
	});
	
	if (isValid) {
		var parameters = {};
		parameters["uuid"] = $("#hiddenUuid").val();
		parameters["versioningType"] = $('input:radio[name=versioningType]:checked').val();
		
		$("div > input").each(function() {
			if ($(this).parent().attr("name") == "extraData") {
				if ($(this).attr('class').indexOf('-date') !== -1  || $(this).attr('class').indexOf('datePickers') !== -1) {
					parameters[$(this).attr("id") + '$isDate'] = $(this).val().replace(/-/g, '/');
				} else if ($(this).attr('class').indexOf('-int') !== -1) {
					parameters[$(this).attr("id")] = $(this).val().replace('.', '').replace(',', '');
				} else {
					parameters[$(this).attr("id")] = $(this).val();
				}
			}
		});
		$("div > select").each(function() {
			if ($(this).parent().attr('name') == "extraData") {
				parameters[$(this).attr('id')] = $(this).val();
			}
		});
		
		$.ajax({
			url:"/share/page/dashlets/editDocument",
			data : parameters,
			type: "GET",
			dataType: "html",
			async: false,
			success: function(data) {
				popupSuccess("Documento actualizado correctamente");
			},
			error : function(xhr, ajaxOptions, thrownError) {
				popupAlert('Error al editar documento'+ xhr.status + " " + thrownError);
			}
		});
	} else {
		if (hasInvalidNumber)
			popupAlert('Debe ingresar s\u00F3lo n\u00FAmeros enteros');
		if (hasInvalidDate)
			popupAlert('Debe ingresar una fecha v\u00e1lida');
	}
}