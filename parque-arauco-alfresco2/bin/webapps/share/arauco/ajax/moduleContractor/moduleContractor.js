$(document).ready(function() {
	getMallProjectContractor();
	
});
function getMallProjectContractor(){
	$.ajax({
		url:'/share/page/dashlets/getMallProjectContractor?status=1',
		type: "get",
		dataType: "html",
		data: {
			
		},
		success:   function(data) {
			$('#proyectMalls').html(data);
		}
	});
}
	function getSharedDocument(idProject){
		$.ajax({
			url:'/share/page/dashlets/getSharedDocument?idProject='+idProject,
			type: "get",
			dataType: "html",
			data: {
			},
			success:   function(data) {
            alert(data);
				$('#tableShared').html(data);
			}
		});
	}
	
//	function searchProject(){
//		$.ajax({
//			url:'/share/page/dashlets/searchProject',
//			type: "get",
//			dataType: "html",
//			data: {
//				nameProject : $("#nameProject").val(),
//				year : $("#yearProject").val(),
//				status :  $("#statusProject").val(),
//				from : $("#txDateFromMallProject").val(),
//				to :$("#txDateToMallProject").val(),
//			},
//			success:   function(data) {
//				document.getElementById('proyectMalls').innerHTML = data;
//			}
//		});
//	}