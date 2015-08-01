//var userTicket=getTicket();
var userTicket =  null;
var principalFolder = "Borradores";
$(document).ready(function() {

	userTicket=$("#userTicket").val();
	var newDate = new Date();
	newDate.setDate(newDate.getDate()+1);
	getTotalTask();
	getTotalCompletedTask();
	getTotalOverdueTasks(getDateISO(new Date()));
	getTotalTasksToExpire(getDateISO(new Date()),getDateISO(newDate));
	$("#search_wait").html('<div id="int_dialog">Cargando...</div>');	
	$("#search_wait").dialog({
		modal:true,
		width: "240px", 
		hide: "fade",
		closeOnEscape: false,
		autoOpen: false,
		minHeight: "40px",
		maxHeight: "40px",
		resizable: false,
		open: function(event, ui) {
			$(".ui-dialog-titlebar").hide();
		}
	});

	$('#inbox').bind('click',function(){
		//waitingDialog(); 
		getTask();
		//closeWaitingDialog();
		$('#sent').removeClass("taskMenuLineSelected");
		$('#expired').removeClass("taskMenuLineSelected");
		$('#toExpired').removeClass("taskMenuLineSelected");
		$('#pending').removeClass("taskMenuLineSelected");
		$( this ).addClass("taskMenuLineSelected");
	});
	$('#sent').bind('click',function(){
		//waitingDialog(); 
		getCompletedTask();
		//closeWaitingDialog();
		$('#inbox').removeClass("taskMenuLineSelected");
		$('#expired').removeClass("taskMenuLineSelected");
		$('#toExpired').removeClass("taskMenuLineSelected");
		$('#pending').removeClass("taskMenuLineSelected");
		$( this ).addClass("taskMenuLineSelected");
	});
	$('#expired').bind('click',function(){
		//waitingDialog();
		getOverdueTasks(getDateISO(new Date()));
		//closeWaitingDialog();
		$('#inbox').removeClass("taskMenuLineSelected");
		$('#sent').removeClass("taskMenuLineSelected");
		$('#toExpired').removeClass("taskMenuLineSelected");
		$('#pending').removeClass("taskMenuLineSelected");
		$( this ).addClass("taskMenuLineSelected");
	});

	$('#toExpired').bind('click',function(){
		var tomorrow=new Date();
		tomorrow.setDate(tomorrow.getDate()+1);
		//waitingDialog();
		getTasksToExpire(getDateISO(new Date()),getDateISO(tomorrow));
		//closeWaitingDialog();
		$('#inbox').removeClass("taskMenuLineSelected");
		$('#sent').removeClass("taskMenuLineSelected");
		$('#expired').removeClass("taskMenuLineSelected");
		$('#pending').removeClass("taskMenuLineSelected");
		$( this ).addClass("taskMenuLineSelected");
	});

	$('#pending').bind('click',function(){
		//waitingDialog();
		getRequestTask();
		//closeWaitingDialog();
		$('#inbox').removeClass("taskMenuLineSelected");
		$('#sent').removeClass("taskMenuLineSelected");
		$('#expired').removeClass("taskMenuLineSelected");
		$('#toExpired').removeClass("taskMenuLineSelected");
		$( this ).addClass("taskMenuLineSelected");
	});
});


function createNewWorkFlow(){
	var data='';
	if($('#status').val()!=="1"){
		data='<div id="noWorkFlow">';
		data+='<img style="float:left;" src="/alfresco/images/warning-icon.png"/>';
		data+='<p>Usted no está autorizado para realizar esta acción</p>';
		data+='</div>';
		bootbox.dialog(data, [{
			"label" : "Salir"
		}])	
	}else{
		data = '<br/><br/>';
		data += '<label>Descripción del flujo de trabajo:</label>';
		data += '<input id="newWorkFlowDescription" type="text" value="" />';
		data += '<br/><br/>';
		data += '<input id="btnNewWorkFlowAction" type="button" class="btn btn-primary" value="Crear nuevo workflow" onClick="createPublishWorkFlow();" />';

		bootbox.dialog(data, [{
			"label" : "Salir"
		}])	
	}

}

function createNewWorkFlowAdhoc(){
	var userArray = new Array();
	var index=0;
	var data='';
	var user='';
	var userId='';
	var txUser='';
	data = '<br/><br/>';
	data += '<label>Descripción del flujo de trabajo:</label>';
	data += '<input id="newWorkFlowDescriptionAdhoc" type="text" value="" />'
		data +='<div id="personDiv">';	
	data +='<label>Usuarios: </label>';	
	data +='<select  class="autocomplete" id="personList" name="personList">';
	data +='</select>';
	data +='<button id="addUser"><img src="/alfresco/css/images/add_user.png"/></button>';
	data +='</div>'; 
	data +='<div id="selectedPerson">';	
	data +='<label id="userLabel" style="display:none"></label>';
	data +='<table id="userTable"></table>';
	data +='</div>'; 
	data += '<br/><br/>';
	data += '<input id="btnNewWorkFlowAdhoc" type="button" class="btn btn-primary" value="Crear workflow adhoc" />';

	bootbox.dialog(data, [{
		"label" : "Salir"
	}])	


	getPersons('personList');
	$( ".autocomplete" ).combobox();
	orderCombobox();
	$('#addUser').bind('click',function(){
		user=$('#personList').val().split('-')[0];
		userId=$('#personList').val().split('-')[1];
		txUser=$('#personList option:selected').text();
		if(user!=0){
			if(userArray.length==0){
				userArray.push(user);
				index=userArray.indexOf(user);
				$('#userTable').append('<tr id="'+userId+'"><td><img id="'+userId+'_img" name="'+index+'" src="/alfresco/css/images/delete-icon.png" style="padding-right:10px"></td><td style="padding-right:10px">'+user+'</td><td> ('+txUser+')</td></tr>');
				$('#'+userId+'_img').bind('click',function(){
					userArray.splice(this.getAttribute('name'));
					$('#'+this.id.split('_img').join('')).remove();
				});


			}else{
				if(userArray.indexOf(user)==-1){
					userArray.push(user);
					index=userArray.indexOf(user);
					$('#userTable').append('<tr id="'+userId+'"><td><img id="'+userId+'_img" name="'+index+'" src="/alfresco/css/images/delete-icon.png"  style="padding-right:10px"></td><td style="padding-right:10px">'+user+'</td><td> ('+txUser+')</td></tr>');
					$('#'+userId+'_img').bind('click',function(){
						userArray.splice(this.getAttribute('name'));
						$('#'+this.id.split('_img').join('')).remove();
					});
				}else{
					popupSuccess('Ya ha seleccionado al usuario');

				}
			}
		}else{
			popupAlert('Debe seleccionar un usuario');
		}

	});

	$('#btnNewWorkFlowAdhoc').bind('click',function(){
		if(userArray.length>0){
			createAdhocWorkFlow(userArray);
		}else{
			popupAlert('Debe seleccionar un usuario');

		}

	});
}

function createAdhocWorkFlow(userArray){
	var userStr='';
	for(var i=0 ; i<userArray.length;i++){
		if(i!=userArray.length-1){
			userStr+=userArray[i]+';';
		}else{
			userStr+=userArray[i];
		}
	}

	//var serializedArray = $.serialize(userArray);
	$.ajax({
		url:'/share/proxy/alfresco/difrol/newAdhoc',
		type: "GET",
		dataType: "json",  
		async: false,  
		data: { 
			users : userStr,
			description : $('#newWorkFlowDescriptionAdhoc').val(),
			priority : "2"
		},                
		success:   function(data) {
			if(data.estado=="1"){
				popupSuccess('Nuevo flujo de trabajo creado satisfactoriamente. Revise su bandeja de entrada!');
			}else{
				popupAlert('Se produjo un problema al crear el flujo.');
			}
		}
	});
	bootbox.hideAll();
}
/*
function createAdhocWorkFlow(userArray){
	$.ajax({
		url:'/share/proxy/alfresco/difrol/newAdhoc?users='+userArray+'&description=' + $('#newWorkFlowDescriptionAdhoc').val() + '&priority=2',
		type: "GET",
		dataType: "json",  
		async: false,  		
		success:   function(data) {
			if(data.estado=="1"){
				alert("Nuevo flujo de trabajo creado satisfactoriamente. Revise su bandeja de entrada!");
			}else{
				alert("Se produjo un problema al crear el flujo.");
			}
		}
	});
	bootbox.hideAll();
}
 */
function createPublishWorkFlow(){

	var ticket;
	$.ajax({
		url:'/share/proxy/alfresco/difrol/newAssignTaskWorkflow?description=' + $('#newWorkFlowDescription').val() + '&priority=2',
		type: "GET",
		dataType: "json",  
		async: false,  		
		success:   function(data) {
			if(data.estado=="1"){
				popupSuccess('Nuevo flujo de trabajo creado satisfactoriamente. Revise su bandeja de entrada!');
			}else{
				popupAlert('Se produjo un problema al crear el flujo.');
			}
		}
	});

	bootbox.hideAll()
}

function waitingDialog() {
	$("#search_wait").dialog('open');
}
function closeWaitingDialog() {
	$(".ui-dialog-titlebar").hide();
	$("#search_wait").dialog('close');
}

function showTask(idTableTask,imgClose,imgOpen){
	$('#'+imgOpen).hide();
	$('#'+imgClose).show();
	$('#'+idTableTask).show();
}

function hideTask(idTableTask,imgClose,imgOpen){
	$('#'+idTableTask).hide();
	$('#'+imgClose).hide();
	$('#'+imgOpen).show();
}

function pairOdd(number){
	if(number % 2 ==0){
		return 0;
	}else{
		return 1;
	}
}

function getTask(){

	var user = getUserName();

	$.ajax({
		url: '/share/proxy/alfresco/api/task-instances?authority=' + user + '&properties=bpm_priority,bpm_status,bpm_dueDate,bpm_description&exclude=wcmwf:*&skipCount=0&maxItems=50',
		type: "GET",
		dataType: "JSON", 
		async: false,
		success:function(data){
			var total=data.data.length;
			var html='';
			var url='';
			var idImgOpen='';
			var idImgClose='';
			if(total>0){
				html=html+'<div id="inboxTask" style="width:97%;margin:0 auto;">';
				html=html+'<table id="workFlowTableInbox" class="table table-striped table-bordered" cellspacing="0" cellpadding="0" border="0" aria-describedby="example_info">';
				html=html+'<thead class="workflowHeader">'
				html=html+'<th>Descripción</th>';
				html=html+'<th>Tipo de tarea</th>';
				html=html+'<th>Iniciado por...</th>';
				html=html+'<th>Fecha Creación</th>';
				html=html+'<th>Acciones</th>';
				html=html+'</tr>';
				html=html+'</thead>';
				html=html+'<tbody>';
				for(var i=0;i<total;i++){
					url=getDiagram(data.data[i].workflowInstance.id);
					idImgOpen='open_'+i;
					idImgClose='close_'+i;
					if(i % 2 == 0){
						html=html+'<tr>';						
					}else{
						html=html+'<tr>';
					}					
					html=html+'<td><a style="font-style: italic; text-decoration:underline;" href="/share/page/task-edit?taskId='+data.data[i].id+'">' + data.data[i].description + '</a></td>';
					html=html+'<td>'+data.data[i].title+'</td>';
					html=html+'<td>'+data.data[i].workflowInstance.initiator.firstName+'</td>';
					html=html+'<td data-order="'+ getHideTaskFormat(data.data[i].workflowInstance.startDate)+'">'+getDateTaskFormat(data.data[i].workflowInstance.startDate)+'</td>';
					//Actions icons 
					html=html+'<td><a href="/share/page/task-details?taskId='+data.data[i].id+'"><img src="/alfresco/css/images/taskView.png" /></a>';
					html=html+'&nbsp';
					html=html+'&nbsp';
					html=html+'<a href="/share/page/workflow-details?workflowId='+data.data[i].workflowInstance.id+'&taskId='+data.data[i].id+'"><img src="/alfresco/css/images/flowView.png" /></a>';
					html=html+'</td>';
					//
					html=html+'</tr>';				
				}
				html=html+'</tbody>';	
				html=html+'</table>';
				html=html+'</div>';
			}else{
				html=html+'<div id="noResult">';
				html=html+'<label>No hay tareas en la bandeja de entrada</label>';
				html=html+'</div>';
			}
//			$.fn.dataTable.moment('DD/MM/YYYY');
			$('#workFlowContainer').html(html);
			$('#workFlowTableInbox').dataTable({
				"aoColumns": [null,
				              null,
				              null,
				              {"sSortDataType": "dom-data-order", "sType": "numeric"},
				              null]
			});
			//$('#workFlowTableInbox_length').hide();
//			$('#workFlowTableInbox_filter').hide();
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error:'+ xhr.status +" "+ thrownError);
		}  
	})

}

$.fn.dataTableExt.afnSortData['dom-data-order'] = function  ( oSettings, iColumn )
{
    return $.map( oSettings.oApi._fnGetTrNodes(oSettings), function (tr, i) {
        return $('td:eq('+iColumn+')', tr).attr('data-order');
    } );
}

function getTotalTask(){
	var user = getUserName();

	$.ajax({
		url: '/share/proxy/alfresco/api/task-instances?authority=' + user + '&properties=bpm_priority,bpm_status,bpm_dueDate,bpm_description&exclude=wcmwf:*&skipCount=0&maxItems=50',
		type: "GET",
		dataType: "JSON", 
		async: false,
		success:function(data){
			var total=data.data.length;
			$('#inbox').append(' ('+total+')');

		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error: ' + xhr.status +" "+ thrownError);
		}  
	})

}

function getUserName(){
	var userName;
	$.ajax({
		url:'/alfresco/service/arauco/getUserName?alf_ticket='+userTicket,
		type: "GET",
		dataType: "json",  
		async: false,  		
		success:   function(data) {
			userName=data.user;
		}
	});
	return userName;
}

function getCompletedTask(){

	var user = getUserName();

	$.ajax({
		url: '/share/proxy/alfresco/api/task-instances?authority='+ user + '&properties=bpm_priority,bpm_status,bpm_dueDate,bpm_description&exclude=wcmwf:*&skipCount=0&maxItems=50&pooledTasks=false&state=COMPLETED',
		type: "GET",
		dataType: "JSON", 
		async: false,
		success:function(data){
			var total=data.data.length;
			var html='';
			var idImgOpen='';
			var idImgClose='';
			if(total>0){
				html=html+'<div id="inboxTask" style="width:97%;margin:0 auto;">';
				html=html+'<table id="workFlowTableInbox" class="table table-striped table-bordered" cellspacing="0" cellpadding="0" border="0" aria-describedby="example_info">';
				html=html+'<thead class="workflowHeader">'
				html=html+'<th>Descripción</th>';
				html=html+'<th>Tipo de tarea</th>';
				html=html+'<th>Iniciado por...</th>';
				html=html+'<th>Fecha Creación</th>';
				html=html+'<th>Acciones</th>';
				html=html+'</tr>';
				html=html+'</thead>';
				html=html+'<tbody>';
				for(var i=0;i<total;i++){
					url=getDiagram(data.data[i].workflowInstance.id);
					idImgOpen='open_'+i;
					idImgClose='close_'+i;

					if(i % 2 ==0){
						html=html+'<tr>';
					}else{
						html=html+'<tr>';
					}
					html=html+'<td><a style="font-style: italic; text-decoration:underline;" href="/share/page/workflow-details?taskId='+data.data[i].id+'">' + data.data[i].description + '</a></td>';
					html=html+'<td>'+data.data[i].title+'</td>';
					html=html+'<td>'+data.data[i].workflowInstance.initiator.firstName+'</td>';
					html=html+'<td data-order="'+ getHideTaskFormat(data.data[i].workflowInstance.startDate)+'">'+getDateTaskFormat(data.data[i].workflowInstance.startDate)+'</td>';
					//Actions icons
					html=html+'<td><a href="/share/page/task-details?taskId='+data.data[i].id+'"><img src="/alfresco/css/images/taskView.png" /></a>';
					html=html+'&nbsp';
					html=html+'&nbsp';
					html=html+'<a href="/share/page/workflow-details?workflowId='+data.data[i].workflowInstance.id+'&taskId='+data.data[i].id+'"><img src="/alfresco/css/images/flowView.png" /></a>';
					html=html+'</td>';
					//
					html=html+'</tr>';
				}
				html=html+'</tbody>';
				html=html+'</table>';
				html=html+'</div>';
			}else{
				html=html+'<div id="noResult">';
				html=html+'<label>No se encontraron tareas completadas</label>';
				html=html+'</div>';
			}
			$('#workFlowContainer').html(html);
			$('#workFlowTableInbox').dataTable({
				"aoColumns": [null,
				              null,
				              null,
				              {"sSortDataType": "dom-data-order", "sType": "numeric"},
				              null]
			});
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error: '+ xhr.status +" "+ thrownError);
		}  
	})

}

function getTotalCompletedTask(){

	var user = getUserName();

	$.ajax({
		url: '/share/proxy/alfresco/api/task-instances?authority='+ user + '&properties=bpm_priority,bpm_status,bpm_dueDate,bpm_description&exclude=wcmwf:*&skipCount=0&maxItems=50&pooledTasks=false&state=COMPLETED',
		type: "GET",
		dataType: "JSON", 
		async: false,
		success:function(data){
			var total=data.data.length;
			$('#sent').append(' ('+total+')');

		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error: '+ xhr.status +" "+ thrownError);
		}  
	})

}


function getOverdueTasks(date){

	var user = getUserName();

	$.ajax({
		url: '/share/proxy/alfresco/api/task-instances?authority=' + user +'&properties=bpm_priority,bpm_status,bpm_dueDate,bpm_description&exclude=wcmwf:*&skipCount=0&maxItems=50&dueBefore='+date,
		type: "GET",
		dataType: "JSON", 
		async: false,
		success:function(data){
			var total=data.data.length;
			var html='';
			var url='';
			if(total>0){
				html=html+'<div id="inboxTask" style="width:97%;margin:0 auto;">';
				html=html+'<table id="workFlowTableInbox" class="table table-striped table-bordered" cellspacing="0" cellpadding="0" border="0" aria-describedby="example_info">';
				html=html+'<thead class="workflowHeader">'
				html=html+'<th>Descripción</th>';
				html=html+'<th>Tipo de tarea</th>';
				html=html+'<th>Iniciado por...</th>';
				html=html+'<th>Fecha Creación</th>';
				html=html+'<th>Acciones</th>';
				html=html+'</tr>';
				html=html+'</thead>';
				html=html+'<tbody>';
				for(var i=0;i<total;i++){
					url=getDiagram(data.data[i].workflowInstance.id);
					idImgOpen='open_'+i;
					idImgClose='close_'+i;

					if(i % 2 ==0){
						html=html+'<tr>';
					}else{
						html=html+'<tr>';
					}
					html=html+'<td><a style="font-style: italic; text-decoration:underline;" href="/share/page/task-edit?taskId='+data.data[i].id+'">' + data.data[i].description + '</a></td>';
					html=html+'<td>'+data.data[i].title+'</td>';
					html=html+'<td>'+data.data[i].workflowInstance.initiator.firstName+'</td>';
					html=html+'<td data-order="'+ getHideTaskFormat(data.data[i].workflowInstance.startDate)+'">'+getDateTaskFormat(data.data[i].workflowInstance.startDate)+'</td>';
					//Actions icons
					html=html+'<td><a href="/share/page/task-details?taskId='+data.data[i].id+'"><img src="/alfresco/css/images/taskView.png" /></a>';
					html=html+'&nbsp';
					html=html+'&nbsp';
					html=html+'<a href="/share/page/workflow-details?workflowId='+data.data[i].workflowInstance.id+'&taskId='+data.data[i].id+'"><img src="/alfresco/css/images/flowView.png" /></a>';
					html=html+'</td>';
					//
					html=html+'</tr>';
				}
				html=html+'</tbody>';
				html=html+'</table>';
				html=html+'</div>';
			}else{
				html=html+'<div id="noResult">';
				html=html+'<label>No se encontraron tareas atrasadas</label>';
				html=html+'</div>';
			}
			$('#workFlowContainer').html(html);
			$('#workFlowTableInbox').dataTable({
				"aoColumns": [null,
				              null,
				              null,
				              {"sSortDataType": "dom-data-order", "sType": "numeric"},
				              null]
			});
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error: '+ xhr.status +" "+ thrownError);
		}  
	})

}

function getTotalOverdueTasks(date){

	var user = getUserName();

	$.ajax({
		url: '/share/proxy/alfresco/api/task-instances?authority=' + user +'&properties=bpm_priority,bpm_status,bpm_dueDate,bpm_description&exclude=wcmwf:*&skipCount=0&maxItems=50&dueBefore='+date,
		type: "GET",
		dataType: "JSON", 
		async: false,
		success:function(data){
			var total=data.data.length;
			$('#expired').append(' ('+total+')');
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error: '+ xhr.status +" "+ thrownError);
		}  
	})

}



function getTasksToExpire(today, tomorrow){

	var user = getUserName();


	$.ajax({
		url: '/share/proxy/alfresco/api/task-instances?authority='+ user+ '&properties=bpm_priority,bpm_status,bpm_dueDate,bpm_description&exclude=wcmwf:*&skipCount=0&maxItems=50&dueAfter='+today+'&dueBefore='+tomorrow,
		type: "GET",
		dataType: "JSON", 
		async: false,
		success:function(data){
			var total=data.data.length;
			var html='';
			var url='';
			if(total>0){
				html=html+'<div id="inboxTask" style="width:97%;margin:0 auto;">';
				html=html+'<table id="workFlowTableInbox" class="table table-striped table-bordered" cellspacing="0" cellpadding="0" border="0" aria-describedby="example_info">';
				html=html+'<thead class="workflowHeader">'
				html=html+'<th>Descripción</th>';
				html=html+'<th>Tipo de tarea</th>';
				html=html+'<th>Iniciado por...</th>';
				html=html+'<th>Fecha Creación</th>';
				html=html+'<th>Acciones</th>';
				html=html+'</tr>';
				html=html+'</thead>';
				html=html+'<tbody>';
				for(var i=0;i<total;i++){
					url=getDiagram(data.data[i].workflowInstance.id);
					idImgOpen='open_'+i;
					idImgClose='close_'+i;

					if(i % 2 ==0){
						html=html+'<tr>';
					}else{
						html=html+'<tr>';
					}
					html=html+'<td><a style="font-style: italic; text-decoration:underline;" href="/share/page/task-edit?taskId='+data.data[i].id+'">' + data.data[i].description + '</a></td>';
					html=html+'<td>'+data.data[i].title+'</td>';
					html=html+'<td>'+data.data[i].workflowInstance.initiator.firstName+'</td>';
					html=html+'<td data-order="'+ getHideTaskFormat(data.data[i].workflowInstance.startDate)+'">'+getDateTaskFormat(data.data[i].workflowInstance.startDate)+'</td>';
					//Actions icons
					html=html+'<td><a href="/share/page/task-details?taskId='+data.data[i].id+'"><img src="/alfresco/css/images/taskView.png" /></a>';
					html=html+'&nbsp';
					html=html+'&nbsp';
					html=html+'<a href="/share/page/workflow-details?workflowId='+data.data[i].workflowInstance.id+'&taskId='+data.data[i].id+'"><img src="/alfresco/css/images/flowView.png" /></a>';
					html=html+'</td>';
					//
					html=html+'</tr>';
				}
				html=html+'</tbody>';
				html=html+'</table>';
				html=html+'</div>';
			}else{
				html=html+'<div id="noResult">';
				html=html+'<label id="textNoResult">No se encontraron tareas por vencer</label>';
				html=html+'</div>';
			}
			$('#workFlowContainer').html(html);
			$('#workFlowTableInbox').dataTable({
				"aoColumns": [null,
				              null,
				              null,
				              {"sSortDataType": "dom-data-order", "sType": "numeric"},
				              null]
			});
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error: '+ xhr.status +" "+ thrownError);
		}  
	})

}

function getTotalTasksToExpire(today, tomorrow){

	var user = getUserName();


	$.ajax({
		url: '/share/proxy/alfresco/api/task-instances?authority='+ user+ '&properties=bpm_priority,bpm_status,bpm_dueDate,bpm_description&exclude=wcmwf:*&skipCount=0&maxItems=50&dueAfter='+today+'&dueBefore='+tomorrow,
		type: "GET",
		dataType: "JSON", 
		async: false,
		success:function(data){
			var total=data.data.length;
			$('#toExpired').append(' ('+total+')');
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error: '+ xhr.status +" "+ thrownError);
		}  
	})

}



function getRequestTask(){
	var user = getUserName();

	$.ajax({
		url: '/share/proxy/alfresco/difrol/task-instances?authority=' + user + '&properties=bpm_priority,bpm_status,bpm_dueDate,bpm_description&exclude=wcmwf:*&skipCount=0&maxItems=50',
		type: "GET",
		dataType: "JSON", 
		async: false,
		success:function(data){
			var total=data.data.length;
			var html='';
			var url='';
			var idImgOpen='';
			var idImgClose='';
			if(total>0){
				html=html+'<div id="inboxTask" style="width:97%;margin:0 auto;">';
				html=html+'<table id="workFlowTableInbox" class="table table-striped table-bordered" cellspacing="0" cellpadding="0" border="0" aria-describedby="example_info">';
				html=html+'<thead class="workflowHeader">'
				html=html+'<th>Descripción</th>';
				html=html+'<th>Tipo de tarea</th>';
				html=html+'<th>Iniciado por...</th>';
				html=html+'<th>Fecha Creación</th>';
				html=html+'<th>Acciones</th>';
				html=html+'</tr>';
				html=html+'</thead>';
				html=html+'<tbody>';
				for(var i=0;i<total;i++){
					url=getDiagram(data.data[i].workflowInstance.id);
					idImgOpen='open_'+i;
					idImgClose='close_'+i;

					if(i % 2 ==0){
						html=html+'<tr>';
					}else{
						html=html+'<tr>';
					}
					html=html+'<td><a style="font-style: italic; text-decoration:underline;" href="/share/page/task-edit?taskId='+data.data[i].id+'">' + data.data[i].description + '</a></td>';
					html=html+'<td>'+data.data[i].title+'</td>';
					html=html+'<td>'+data.data[i].workflowInstance.initiator.firstName+'</td>';
					html=html+'<td data-order="'+ getHideTaskFormat(data.data[i].workflowInstance.startDate)+'">'+getDateTaskFormat(data.data[i].workflowInstance.startDate)+'</td>';
					//Actions icons
					html=html+'<td><a href="/share/page/task-details?taskId='+data.data[i].id+'"><img src="/alfresco/css/images/taskView.png" /></a>';
					html=html+'&nbsp';
					html=html+'&nbsp';
					html=html+'<a href="/share/page/workflow-details?workflowId='+data.data[i].workflowInstance.id+'&taskId='+data.data[i].id+'"><img src="/alfresco/css/images/flowView.png" /></a>';
					html=html+'</td>';
					//
					html=html+'</tr>';
				}
				html=html+'</tbody>';
				html=html+'</table>';
				html=html+'</div>';
			}else{
				html=html+'<div id="noResult">';
				html=html+'<label>No hay tareas en la bandeja de entrada</label>';
				html=html+'</div>';
			}
			$('#workFlowContainer').html(html);
			$('#workFlowTableInbox').dataTable({
				"aoColumns": [null,
				              null,
				              null,
				              {"sSortDataType": "dom-data-order", "sType": "numeric"},
				              null]
			});
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error: '+ xhr.status +" "+ thrownError);
		}  
	})

}


function getDiagram(id){
	var url=null;
	if(id!==null && id!==undefined && id!==''){
		url= '/share/proxy/alfresco/api/workflow-instances/'+id+'/diagram';
	}
	return url;
}

function getDateTaskFormat(date){
	var newDate=null;
	if(date!==null && date!==undefined && date!==''){
		var dateParts=date.split('T');
		var tempDateParts=dateParts[0].split('-');
		var year=tempDateParts[0];
		var month=tempDateParts[1];
		var day=tempDateParts[2];
		newDate=day+'/'+month+'/'+year;
	}

	return newDate;
}

function getHideTaskFormat(date){
	var newDate=null;
	if(date!==null && date!==undefined && date!==''){
		var dateParts=date.split('T');
		var tempDateParts=dateParts[0].split('-');
		var year=tempDateParts[0];
		var month=tempDateParts[1];
		var day=tempDateParts[2];
		newDate=year+month+day;
	}

	return newDate;
}

function getDateISO(date){
	return date.toISOString();
}

function getSpanishMonth(month){
	switch (month){
	case "01":
		month="Enero";
		break 
	case "02": 
		month="Febrero";
		break 
	case "03": 
		month="Marzo";
		break 
	case "04": 
		month="Abril";
		break 
	case "05": 
		month="Mayo";
		break 
	case "06": 
		month="Junio";
		break 
	case "07": 
		month="Julio";
		break 
	case "08": 
		month="Agosto";
		break 
	case "09": 
		month="Septiembre";
		break 
	case "10": 
		month="Octubre";
		break 
	case "11": 
		month="Noviembre";
		break 
	case "12": 
		month="Diciembre";
		break 
	default: 
		month=null;
	}
	return month;
}

function loadTask(idTask){

	//$('#workFlowContainer').html('<iframe id="taskData" src="/share/page/task-details?taskId='+idTask+'" frameborder="0"></iframe>');

	$.ajax({
		url: '/share/page/task-details?taskId='+idTask,
		type: "GET",
		dataType: "HTML", 
		async: false,
		success:function(data){
			var html=data;
			$('#workflowTask').hide();
			$('#workFlowContainer').html(html);
			$('#workFlowContainer #alf-hd').remove();
			$('#workFlowContainer #alf-ft').remove();
			$('#workflowTask').show();

		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error: '+ xhr.status +" "+ thrownError);
		}  
	})

}

function getTicket(){
	var ticket;
	$.ajax({
		url:'/alfresco/service/arauco/getUserTicket',
		type: "GET",
		dataType: "json",  
		async: false,  		
		success:   function(data) {
			ticket=data.data.ticket;
		}
	});
	return ticket;
}

function getPersons(id){
	$.ajax({
		url:'/alfresco/service/arauco/getPersons?alf_ticket='+userTicket,
		type: "GET",
		dataType: "json",  
		async: false,  		
		success:   function(data) {
			var index=0;
			if(data.length>0){
				$("#"+id).html('');
				$("#"+id).append('<option value="0"></option>');
				var total=data.length;
				if(total>0){
					for( var i=0;i<total;i++){
						if(data[i].userName!='' && data[i].userName!=null && data[i].userName!=undefined){
							$("#"+id).append('<option value="'+data[i].userName+'-'+'user_'+i+'">'+data[i].firstName+' '+data[i].lastName+'</option>');
						}
					}
				}else{
					select.options[0] = new Option("","0");
				}	
			}
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Error en la Llamada al Servicio: '+ xhr.status +" "+ thrownError);
		} 
	});

}

function orderCombobox(){
	$("select").each(function() {
		$(this).html($("option", $(this)).sort(function(a, b) {
			return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
		}));
	});
}

function validateTicket(ticket){	
	$.ajax({
		url: 'alfresco/service/api/login/ticket/'+varTicket,
		type: "GET",
		dataType: "xml", 
		async: true,
		success:function(xml){
			var found=false;
			$(xml).find('ticket').each(function(){
				found=true;
				return $(this).text();
			});
			if(found==false){

			}
		},
		error:function (){
			popupAlert('Error validando el ticket de seguridad');

		}  
	})

}


