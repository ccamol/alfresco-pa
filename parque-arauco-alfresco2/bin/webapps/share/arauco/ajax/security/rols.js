$(document).ready(function() {

	var js = document.createElement("script");

	js.type = "text/javascript";
	js.src = "/share/arauco/js/jstree.min.js";

	document.body.appendChild(js);

	selectionOutlet();

	folderTree();
 
});


function setEvent(){

	$('#folderTree').on('deselect_node.jstree', function (e, data) {
		var i;
	    var funcionalityid;
	    var rolId = $('#selectRol option:selected').val();
	    	funcionalityid = data.node.id;
    		$.ajax({
    			url:'/share/page/dashlets/updateFunctionalityRol.json',
    			type: "get",
    			dataType: "json",  
    			async: false,  		
    			data : {
    				funcionalityid : funcionalityid,
    				rolId : rolId,
    				value : false
    			},
    			success:   function(data) {
    				if(data.status<0){
    					popupAlert(data.message);
    				}
    			}
    		});
	  });

	
	$('#folderTree').on('select_node.jstree', function (e, data) {
		var i;
	    var funcionalityid;
	    var rolId = $('#selectRol option:selected').val();
	    	funcionalityid = data.node.id;
    		$.ajax({
    			url:'/share/page/dashlets/updateFunctionalityRol.json',
    			type: "get",
    			dataType: "json",  
    			async: false,  		
    			data : {
    				funcionalityid : funcionalityid,
    				rolId : rolId,
    				value : true
    			},
    			success:   function(data) {
    				if(data.status<0){
    					popupAlert(data.message);
    				}
    			}
    		});
	  });

}


function folderTree(){
	var area = $('#selectArea option:selected').val();
	var rol = $('#selectRol option:selected').val();
	
	if(area==undefined) area=1;
	if(rol==undefined) rol=1;


	
	$.ajax({
		url : '/share/page/dashlets/getFuncionalityTree.json?filter=' + area + "&rol=" + rol,
		type: "GET",
		dataType: "json",
		async : false,
		success: function(data){
			$('#folderTree').jstree('destroy');
			setEvent();
			$('#folderTree').jstree(data);
			$("#folderTree").jstree(true).refresh();
		},	
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error en la Llamada al Servicio: ' + xhr.status +" "+ thrownError);
		} 
	});
}	  


function updateRol(){
	var id = $('#id').val();
	var name = $('#name').val();
	var description = $('#description').val();
	var documentalRol = $('#documentalRol option:selected').val();
	
	$.ajax({
		url:'/share/page/dashlets/updateRol.json',
		type: "get",
		dataType: "json",  
		async: true,  		
		data : {
			id : id,
			name : name,
			description : description,
			documentalRol : documentalRol
		},
		success:   function(data) {
			if(data.status>0){
				popupSuccess('Registro actualizado con �xito');
				selectionOutlet();
			}else{
				popupAlert(data.message);
			}
		}
	});
}

function editRol(id){
	

		
	$.ajax({
		url:'/share/page/dashlets/editRol?filter=' + id,
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			$('#editRolDialog').remove();
			popupMedium(data);
		}
	});
}

function deleteRol(id){
	$.ajax({
		url:'/share/page/dashlets/deleteRol.json',
		type: "get",
		dataType: "json",  
		async: true,  		
		data : {
			id : id
		},
		success:   function(data) {
			if(data.status>0){
				
				popupSuccess('Registro eliminado con &eacute;');
				selectionOutlet();
			}else{
				popupAlert(data.message);
			}
		}
	});
}

function selectionOutlet(){
	
	var filter = $('#seachRol').val();
	
	$.ajax({
		url:'/share/page/dashlets/rolsList?filter=' + escape(filter),
		type: "get",
		dataType: "html",  
		async: true,  		
		success:   function(data) {
			$('#rolList').html(data);
		}
	});
}







