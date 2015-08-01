var	idArea=null;
var NameArea;
$(document).ready(function() {	
	getTender();
	$('#createTender').click(function(){
		createTenderPopUp();
	});
});

function getTender(){
	$.ajax({
		url:'/share/page/dashlets/searchTender',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
		},
		success:   function(data) {
			$('#listTendering').html(data);
			$('#searchTender').dataTable();
		}
	});
}

function createTenderPopUp(){
	$.ajax({
		url:'/share/page/dashlets/createTenderPopUp',
		type: "get",
		dataType: "html",  
		async: true,  		
		success:   function(data) {
			popupMedium(data);
		}
	});
}

function showCalendar(id){
	$.ajax({
		url:'/share/page/dashlets/calendarPopUp',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
		},
		success:   function(data) {
			popupDefault(data);
			calendar(id);
		}
	});
}

function calendar(id){
	$.ajax({
		url:'/share/page/dashlets/searchTenderCalenadar',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
			calendar : id
		},
		success:   function(data) {
			$('#listStagesCalendar').html(data);
			$('#stagesCalendarApplicant').dataTable();

		}
	});
}


//======================== Funciones agregar ======================//

function addTender(){
	var area = $("#area").val();
	var projectName = $("#projectName").val();
	var TenderName = $("#TenderName").val();
	var initDate = $("#initDate").val();
	var FinishDate = $("#FinishDate").val();
	var projectName = $("#projectName").val();
	$.ajax({
		url:'/share/page/dashlets/addTender',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
			area : area,
			projectName : projectName,
			TenderName : TenderName,
			initDate : initDate,
			FinishDate : FinishDate
		},
		success:   function(data) {
			alert("ingresado en la bd");
		}
	});
}