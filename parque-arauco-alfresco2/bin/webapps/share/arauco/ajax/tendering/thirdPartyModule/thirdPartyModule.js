var idProjectThird=null;
var idMall=null;
var nodeType = null;
$(document).ready(function() {
	idMall = getUrlVars()["id"].replace(".","");
	nodeType = getUrlVars()["nodeType"]; 
	getMallProject();

});

function getMallProject(){
	$.ajax({
		url:'/share/page/dashlets/getProjectModule?filter='+idMall,
		type: "get",
		dataType: "html",
		data: {

		},
		success:   function(data) {
			$('#proyectMalls').html(data);
		}
	});
}


function searchDocumentModule(idProject){

	$.ajax({
		url:'/share/page/dashlets/getDocumentAssoc?idProject='+idProject,
		type: "get",
		dataType: "html",
		data: {

		},
		success:   function(data) {
			$('#tableAssoc').html(data);
			$('#tableAssocDocument').dataTable();
		}
	});


}

function previewDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/previewDocumentPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupDefault(data);
		}
	});
}

function downloadDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/downloadDocumentPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get", 
		dataType: "html",
		async: false,
		success: function(data) {
			popupDefault(data);
		}
	});
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function uploadDocumentModule(idPro){
	idProjectThird = idPro;
	$.ajax({
		url:'/share/service/dashlets/uploadDocumentPopup',
		type: "get",
		dataType: "html",  
		async: false,  		

		success:   function(data){
			popupDefault(data);
			searchDocumentModule(idProjectThird);
		}
	});


}

function searchProject(){
	$.ajax({
		url:'/share/page/dashlets/getFilterProject',
		type: "get",
		dataType: "html",
		data: {
			id : idMall,
			nameProject : $("#nameProject").val(),
		},
		success:   function(data) {
			document.getElementById('proyectMalls').innerHTML = data;
		}
	});
}

function dologout(){
	$.ajax({
		url:'/share/page/dologout',
		type: "get",
		dataType: "html",  
		async: false,
		success:   function(data) {
			window.location.replace("/share/page/moduleAccess");
		}
	});
}
