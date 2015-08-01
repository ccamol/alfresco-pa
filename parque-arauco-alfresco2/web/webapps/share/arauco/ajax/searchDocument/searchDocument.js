var token="";
var country="";
var type="";
var filterOne="";
var filterTwo=""
var ALF_WEBSCRIPT_URL = "/arauco/seachDocument";
var query;
var documentType;
var searchDateSince;
var searchDateUntil;
var country;
var mall;

var response;


$(document).ready(function() {
//	token=Alfresco.util.CSRFPolicy.getToken();
	getType();
	getCountry();
	datePickerss();

	$("#txType").change(function(){
		type=$("#txType").val();
		country=$("#txCountry").val();
		getCommerce(country,type);
	});

	$("#txCountry").change(function(){
		type=$("#txType").val();
		country=$("#txCountry").val();
		getCommerce(country,type);
	});

	$("#btnSearch").click(function() {
		query = $("#search").val();
		documentType = $("#txType").val();
		searchDateSince = $("#txDateFrom").val();
		searchDateUntil = $("#txDateTo").val();
		country = $("#txCountry").val();
		mall = $("#txCommerce").val();
		siteLocation = $("#siteId").val();

		window.location.replace("/share/page/site/"+siteLocation+"/searchDocument?q=" + query
				+ "&type=" + documentType
				+ "&since=" + searchDateSince
				+ "&until=" + searchDateUntil
				+ "&country=" + country
				+ "&mall=" + mall);
	});

});

function datePickerss(){
	$("#txDateFrom, #txDateTo").datepicker({ 
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


function getType(){
	$.ajax({
		beforeSend: function(xhr){
//			xhr.setRequestHeader("Alfresco-CSRFToken",Alfresco.util.CSRFPolicy.getToken());
			//	xhr.setRequestHeader("Alfresco-CSRFToken",token);
		},
//		headers: {"Alfresco-CSRFToken":token },
		url:'/share/page/dashlets/getType',
		type: "get",
		dataType: "html",  


		success:   function(data) {

			$('#txType').html(data);
		}
	});
}



function getCountry(){
	$.ajax({
		beforeSend: function(xhr){
//			xhr.setRequestHeader("Alfresco-CSRFToken",Alfresco.util.CSRFPolicy.getToken());
			//	xhr.setRequestHeader("Alfresco-CSRFToken",token);
		},
//		headers: {"Alfresco-CSRFToken":token },
		url:'/share/page/dashlets/getCountry',
		type: "get",
		dataType: "html",  
		success:   function(data) {

			$('#txCountry').html(data);
		}
	});
}

function getCommerce(filterOne,filterTwo){
	$.ajax({
		url:'/share/service/dashlets/getCommerce?filterOne='+filterOne+'&filterTwo='+filterTwo,
		type: "get",
		dataType: "html",  
		success:   function(data) {
			$('#txCommerce').html(data);
		}
	});
}

function urlchange(){
	query = $("#search").val();
	siteLocation = $("#siteId").val();
		window.location.replace("/share/page/site/"+siteLocation+"/searchDocument?q=" + query);
}





