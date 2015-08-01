var menu = [
	{'Editar Imagen':{
	    onclick: function() {
	    	editImage($(this).parent().attr('id'));
    	},
		icon:'/share/images/icons/edit_icon.gif',
		disabled:false
		}
	},
	{'Cerrar':{
		icon:'/share/images/icons/close_panel.gif',
		disabled:false
		}
	}
];

var menuVirtual = [
        	{'Editar Imagen':{
        	    onclick: function() {
        	    	editImage($(this).parent().attr('id'));
            	},
        		icon:'/share/images/icons/edit_icon.gif',
        		disabled:false
        		}
        	},
        	{'Enlazar con mall real':{
        	    onclick: function() {
        	    	linkRealMall($(this).parent().attr('id'));
            	},
        		icon:'/alfresco/images/icons/LinkRelated_small.gif',
        		disabled:false
        		}
        	},
        	{'Cerrar':{
        		icon:'/share/images/icons/close_panel.gif',
        		disabled:false
        		}
        	}
        ];

var varTicket;

$( document ).ready(function() {
	bindMenu();
	getTicket();
});

function bindMenu(){
	$('.mallImage').off('contextmenu');
	$('.mallImage').contextMenu(menu,{theme:'vista'});
}

function bindMenuVirtual(){
	$('.mallImage').off('contextmenu');
	$('.mallImage').contextMenu(menuVirtual,{theme:'vista'});
}

function vinculateMall(id, sapId){
	$.ajax({
		url:'/share/page/dashlets/linkMallSAP.json',
		type: "get",
		dataType: "json", 
		data : {
			virtualMall	: id,
			realMall	: sapId 
		},
		success:   function(data) {
			if(data.estatus="1"){
				popupSuccess(data.message);
				selectionMall('3');
			}else{
				popupAlert("El mall no puede ser vinculado ya que existen proyectos y objetos creados dentro de él");
			}
		}
	});
}

function linkRealMall(virtualMallId){
	$.ajax({
		url: '/share/page/dashlets/vinculateMall?id=' + virtualMallId,
		type: "GET",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			popupBoxDialog(data);
		},

	});
}

function getTicket(){
	
	$.ajax({
		url: '/share/page/dashlets/getTicket',
		type: "GET",
		dataType: "json",  
		async: false,  		


		success:   function(data) {

			varTicket = data.ticket;

		},

	});

}

function editImage(divNo) {
	
	$('#' + divNo).append('<input id="hiddenImport' + divNo + '" type="file" name="file" style="display:none;" onchange="uploadImage(' + divNo + ');" />');
	$('#hiddenImport' + divNo).trigger('click');
}

function uploadImage(divNo) {
	
	var filename = $('#hiddenImport' + divNo).val();
	
	if (filename !== null && filename !== undefined && filename !== '') {
		var cut = filename.lastIndexOf("\\");
		var end  =  filename.length;
		var res = filename.substring(cut+1,end);
		var validDoc = isValidImage(res);
	}
	if (validDoc == true) {
		$("#loading").ajaxStart(function(){
			$("#hiddenImport" + divNo).show();
		})
		.ajaxComplete(function(){
			$("#hiddenImport" + divNo).hide();
		});
		$.ajaxFileUpload
		({
			url:"/alfresco/service/arauco/uploadMallImage?alf_ticket=" + varTicket + "&mallId=" + divNo,
			secureuri:false,
			type: "POST",
			fileElementId:'hiddenImport' + divNo,
			dataType: 'JSON',
			async : false,
			success: function (data) {
			},
			error: function (data, status, e) {
			}
		});
	} else {
		popupAlert("Tipo de documento inv\u00e1lido");
	}
}

function isValidImage(filename){
	var archiveType = filename;
	var allowedExtension = new Array(".png", ".jpeg", ".jpg", ".bmp");
	var extension = (archiveType.substring(archiveType.lastIndexOf("."))).toLowerCase(); 
	var allowed = false;
	for (var i = 0; i < allowedExtension.length; i++) 
	{ 
		if (allowedExtension[i] == extension) {
			allowed = true;
			break;
		}
	}
	return allowed;
}