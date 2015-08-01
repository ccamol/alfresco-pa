var idProject = null;
var idStage = null;
var idMall = null;
var nodeType = null;
$(document).ready(function() {
	
	nodeType = getUrlVars()["nodeType"];
	idProject = getUrlVars()["idProject"].replace(".","");
	console.log("idProject: "+idProject);
	id = getUrlVars()["id"].replace(".","");
	var stageStatus  = detailsStage(idStage).stageStatus;
	console.log("stageStatus: "+stageStatus);
	if(parseInt(stageStatus) != 1){
		$("#externanLoad").attr("disabled", "disabled");
	}
	siteId = $("#siteId").val();
	console.log("site: "+siteId);
});

function selectProject(id){
	window.location.href = '/share/page/site/'+siteId+'/projectManagement?id='+id+'&idProject='+idProject+'&nodeType='+nodeType;
}

function closeStage(idSelectStage){
	checkComplete(5, idSelectStage);
}


function closeStageFinal(idSelectStage){
	bootbox.confirm("¿Está seguro que desea cerrar la etapa?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/closeStage',
				type: "get",
				dataType: "html",
				data: {
					id : idSelectStage,
					projectId : idProject,
					siteId : nodeType,
					stageStatus : 0
				},
				success:   function(data) {
					selectProject(idSelectStage);
				}
			});
		
		}
		
	}).addClass("mdsuccess").attr('id','smallModal'); 

}

function openStage(idSelectStage){
	bootbox.confirm("¿Está seguro que desea abrir la etapa?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/closeStage',
				type: "get",
				dataType: "html",
				data: {
					id : idSelectStage,
					projectId : idProject,
					siteId : nodeType,
					stageStatus : 1
				},
				success:   function(data) {
					selectProject(idSelectStage);
				}
			});
		
		}
		
	}).addClass("mdsuccess").attr('id','smallModal'); 

}

function checkComplete(nodeType, idSelectStage){
	var check;
	$.ajax({
		url:'/share/page/dashlets/checkComplete',
		type: "get",
		dataType: "json",
		data: {
			nodeType : nodeType,
			nodeId : id
		},
		success:   function(data) {
//			check = data.resultSet;
//			if(check == "true"){
				closeStageFinal(idSelectStage);
//			}else{
//				popupAlert("No se encuentran los documentos necesarios para finalizar la etapa");
//			}
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

function detailsStage(idStage){

	var resultData = null;

	$.ajax({
		url: '/share/page/dashlets/detailsStage',
		type: "get",
		dataType: "json",  
		async: false,  
		data: {
			idStage : idStage
		},
		success:   function(data) {
			console.log(data);
			if(data.status != "-1"){
				resultData = data;
			}
		},

	});

	return resultData;

}


