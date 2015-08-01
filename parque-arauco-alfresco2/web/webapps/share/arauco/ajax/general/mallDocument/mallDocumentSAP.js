var selectedElement='';
var flagMax=0;
var itemsDisabled = {};


function checkDocumentalRol(rol){
	nodeId = getUrlVars()["id"].replace(".", "");
	nodeType = getUrlVars()["nodeType"];
	var checkResult=false;
	
	$.ajax({
		url: '/share/page/dashlets/checkDocumentalRol',
		type :"get",
		dataType:"html",
		async: false,
		data:{
			nodeType : nodeType,
			id : nodeId,
			documentalRol : rol
		},
		success: function (data){
			if(data.indexOf("true")>-1){
				checkResult = false;
			}else{
				checkResult = true;
			}
		}
	});
	
	return checkResult;
}

var menu1 = [
         	{'Nueva clasificación':{
         	    onclick:function(menuItem,menu) { 
         	    	editClassification($(this).attr('id')); 
             	},
         		icon:'/share/images/icons/new_classification.gif',
         		disabled:checkDocumentalRol("collaborator")
         		}
         	},
         	{'Renombrar':{
         	    onclick:function(menuItem,menu) { 
         	    	alert($(this).children("ul").attr('id'));
         	    },
         		icon:'/share/images/icons/rename_classification.gif',
         		disabled:checkDocumentalRol("collaborator")
         		}
         	},	
         	{'':{
         		disabled:true
         		}
         	},
          	{'Pegar':{
          	    onclick:function(menuItem,menu) {
          	    	treeClipboard.paste(selectedElement);
          	    },
          		icon:'/share/images/icons/paste.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},
         	{'':{
         		disabled:true
         		}
         	},
         	{'Cerrar':{
         		icon:'/share/images/icons/close_panel.gif',
         		disabled:false
         		}
         	}
         ];


var menu2 = [
          	{'Descargar':{
          	    onclick:function(menuItem,menu) { 
          	    	downloadDocument($(this).attr('id'), $(this).html());
          	    },
          		icon:'/share/images/icons/download_doc.gif',
         		disabled:checkDocumentalRol("consumer")
          		}
          	},
          	{'Previsualizar':{
          	    onclick:function(menuItem,menu) { 
          	    	previewDocument($(this).attr('id'), $(this).html());
          	    },
          		icon:'/share/images/icons/preview.gif',
         		disabled:checkDocumentalRol("consumer")
          		}
          	},
          	{'':{
          		disabled:true
          		}
          	},
          	{'Comentar':{
          	    onclick:function(menuItem,menu) { 
          	    	commentPdf($(this).attr('id'));
          	    },
          		icon:'/share/images/icons/forum-16.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},
          	{'':{
          		disabled:true
          		}
          	},
          	{'Flujos de trabajo asociados':{
          	    onclick:function(menuItem,menu) { 
          	    	documentWorkflows($(this).attr('id'));
          	    },
          		icon:'/share/images/icons/workflow.gif',
         		disabled:checkDocumentalRol("consumer")
          		}
          	},
          	{'':{
          		disabled:true
          		}
          	},
          	{'Cerrar':{
          		icon:'/share/images/icons/close_panel.gif',
          		disabled:false
          		}
          	}
          ];


var menu3 = [
          	{'Descargar':{
          	    onclick:function(menuItem,menu) { 
          	    	downloadDocument($(this).attr('id'), $(this).html());
          	    },
          		icon:'/share/images/icons/download_doc.gif',
         		disabled:checkDocumentalRol("consumer")
          		}
          	},
          	{'Previsualizar':{
          	    onclick:function(menuItem,menu) { 
          	    	previewDocument($(this).attr('id'), $(this).html());
          	    },
          		icon:'/share/images/icons/preview.gif',
         		disabled:checkDocumentalRol("consumer")
          		}
          	},
          	{'Solicitar eliminación':{
          	    onclick:function(menuItem,menu) { 
          	    	deleteDocument($(this).attr('id'));
          	    },
          		icon:'/share/images/icons/delete.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},
          	{'':{
          		disabled:true
          		}
          	},
          	{'':{
          		disabled:true
          		}
          	},
          	{'Comentar':{
          	    onclick:function(menuItem,menu) { 
          	    	commentPdf($(this).attr('id'));
          	    },
          		icon:'/share/images/icons/forum-16.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},
          	{'':{
          		disabled:true
          		}
          	},
          	{'Histórico':{
          	    onclick:function(menuItem,menu) { 
          	    	documentHistory($(this).attr('id'), $(this).html());
          	    },
          		icon:'/share/images/icons/versionHistory_icon.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},          	
          	{'Flujos de trabajo asociados':{
          	    onclick:function(menuItem,menu) { 
          	    	documentWorkflows($(this).attr('id'));
          	    },
          		icon:'/share/images/icons/workflow.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},
          	{'':{
          		disabled:true
          		}
          	}
          ];

var menu4 = [
          	{'Actualizar':{
          	    onclick:function(menuItem,menu) { 
          	    	updateDocument($(this).attr('id'), $(this).html());
              	},
          		icon:'/share/images/icons/update.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},
          	{'Descargar':{
          	    onclick:function(menuItem,menu) { 
          	    	downloadDocument($(this).attr('id'), $(this).html());
          	    },
          		icon:'/share/images/icons/download_doc.gif',
         		disabled:checkDocumentalRol("consumer")
          		}
          	},
          	{'Previsualizar':{
          	    onclick:function(menuItem,menu) { 
          	    	previewDocument($(this).attr('id'), $(this).html());
          	    },
          		icon:'/share/images/icons/preview.gif',
         		disabled:checkDocumentalRol("consumer")
          		}
          	},
          	{'Solicitar eliminación':{
          	    onclick:function(menuItem,menu) { 
          	    	deleteDocument($(this).attr('id'));
          	    },
          		icon:'/share/images/icons/delete.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},
          	{'':{
          		disabled:true
          		}
          	},
         	{'Copiar':{
         	    onclick:function(menuItem,menu) {
         	    	treeClipboard.copy($(this).attr('id'), selectedElement);
         	    },
         		icon:'/share/images/icons/copy.gif',
         		disabled:checkDocumentalRol("editor")
         		}
         	},
         	{'Cortar':{
         	    onclick:function(menuItem,menu) { 
         	    	treeClipboard.cut($(this).attr('id'),selectedElement);
         	    	
         	    },
         		icon:'/share/images/icons/cut.gif',
         		disabled:checkDocumentalRol("editor")
         		}
         	},
          	{'':{
          		disabled:true
          		}
          	},
          	{'Editar en línea':{
          	    onclick:function(menuItem,menu) { 
          	    	editOnGoogleDocs($(this).attr('id'), $(this).html());
          	    },
          		icon:'/share/images/icons/edit_icon.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},
          	{'Comentar':{
          	    onclick:function(menuItem,menu) { 
          	    	commentPdf($(this).attr('id'));
          	    },
          		icon:'/share/images/icons/forum-16.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},
          	{'':{
          		disabled:true
          		}
          	},
          	{'Histórico':{
          	    onclick:function(menuItem,menu) { 
          	    	documentHistory($(this).attr('id'), $(this).html());
          	    },
          		icon:'/share/images/icons/versionHistory_icon.gif',
         		disabled:checkDocumentalRol("editor")
          		}
          	},          	
          	{'Flujos de trabajo asociados':{
          	    onclick:function(menuItem,menu) { 
          	    	documentWorkflows($(this).attr('id'));
          	    },
          		icon:'/share/images/icons/workflow.gif',
         		disabled:checkDocumentalRol("consumer")
          		}
          	},
          	{'':{
          		disabled:true
          		}
          	},
          	{'Cerrar':{
          		icon:'/share/images/icons/close_panel.gif',
          		disabled:false
          		}
          	}
          ];

function downloadDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/downloadDocumentPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get", 
		dataType: "html",
		async: false,
		success: function(data) {
			bootbox.dialog(data).addClass("box-dialog");
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


function documentHistory(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/documentHistoryPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupDefault(data);
		}
	});
}

function commentPdf(uuid) {
	var commentPdfUrl = '/share/page/site/arauco/comment-pdf?uuid=workspace://SpacesStore/' + uuid;
	window.location.assign(commentPdfUrl);
}

function documentWorkflows(uuid) {
	$.ajax({
		url:'/share/page/dashlets/showDocumentWorkflowsPopup?uuid=' + uuid,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupDefault(data);
		}
	});
}

function deleteDocument(uuid){
	bootbox.confirm("Se iniciara una petición de anulación del documento. ¿Desea continuar?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/deleteDocument?uuid='+uuid,
				type: "get",
				dataType: "json",
				success:   function(data) {
					if(data.status == true){
						popupSuccess("Petición de anulación iniciada exitosamente");
					}else{
						popupAlert("No se pudo iniciar la petición de anulación");
					}
				}
			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

$(document).ready(function() {
	nodeId = getUrlVars()["id"].replace(".", "");
	nodeType = getUrlVars()["nodeType"];
});

function bindDocumentMenu(){
	$('.documentNode').off('contextmenu');
	if(nodeType == null || nodeType == undefined){
		$('.documentNode').contextMenu(menu3,{theme:'vista'});
	}

	switch(nodeType) {
	case "1":
		$('.documentNode').contextMenu(menu2,{theme:'vista'});
		break;
	case "3":
		$('.documentNode').contextMenu(menu2,{theme:'vista'});
		break;
	case "4":
		$('.documentNode').contextMenu(menu2,{theme:'vista'});
		break;
	case "5" :
		$('.documentNode').contextMenu(menu4,{theme:'vista'});
		break;
	case "6" :
		$('.documentNode').contextMenu(menu4,{theme:'vista'});
		break;
	case "7" :
		$('.documentNode').contextMenu(menu4,{theme:'vista'});
		break;
	case "8" :
		$('.documentNode').contextMenu(menu4,{theme:'vista'});
		break;
	case "9":
		$('.documentNode').contextMenu(menu2,{theme:'vista'});
		break;
	case "10":
		$('.documentNode').contextMenu(menu2,{theme:'vista'});
		break;
	default:
	}

}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value.replace("#", "");;
	});
	return vars;
}
