<script type="text/javascript" src="/share/js/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="/share/js/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css" href="/share/css/jquery-ui-1.8.custom.css" />
<link href="/share/css/popup.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="/share/css/bootstrap.min.css">
<script type="text/javascript" src="/share/js/bootbox.min.js"></script>
<script type="text/javascript" src="/share/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/share/js/jquery.min.js"></script>

<#if form.mode == "edit" && ((form.data['prop_bpm_status']?? && form.data['prop_bpm_status'] != 'Completed') || form.data['prop_bpm_status']?? == false)>
<script type="text/javascript">//<![CDATA[
var principalFolder='Informes';
var site='fondo-documental-cij';
var publishFolder="CIJ";
$(document).ready(function() {
 	$("#${fieldHtmlId}-buttons").hide();
	
	$("#taskDone-button").bind("click",function(){
		var uuidStr=$("#uuidLabel").text();
		uuidStr=uuidStr.substring(0,uuidStr.lastIndexOf(";"));
		if(uuidStr!==""){
			if(!checkPublished(uuidStr)){ 
				return false;
			}else{
				publishDocuments(uuidStr);
				$("#${fieldHtmlId}-Next").click();
			}
		}
	});
	
	new Alfresco.Transitions("${fieldHtmlId}").setOptions(
   {
   	
      currentValue: "${field.value?js_string}"
   }).setMessages(
      ${messages}
   );
 
})

function publishDocuments(uuidStr){
	 $.ajax({
         type: "GET",
         url: '/alfresco/service/DifrolCIJ/publishDocuments?publishFolder='+publishFolder+'&site='+site+'&principalFolder='+principalFolder+'&uuidStr='+uuidStr+'&alf_ticket=' + ticket,
		 type: "get",
		 dataType: "json",  
		 async: false,
		 success: function (data){
			 if(data.status=="1"){
			  alert("Se han publicado los documentos seleccionados.");
			 }else{
			 	alert("Ocurrió un problema en el flujo de trabajo");
			 }
		 }
     });
}

function checkPublished(uuidStr){
	var status=false;
	 $.ajax({
         type: "GET",
         url: '/alfresco/service/DifrolCIJ/checkPublished?uuidStr='+uuidStr+'&alf_ticket=' + ticket,
		 type: "get",
		 dataType: "json",  
		 async: false,
		 success: function (data){
			 if(data.status=="-1"){
			 	alert(data.message);
			 }else if (data.status=="-2"){
			 	alert(data.message);
			 }else if (data.status=="1"){
			 	status=true;
			 }
		 }
     });
     return status;
}
//]]>
</script>

<span class="yui-button yui-push-button" id="taskDone">
<span class="first-child">
<button id="taskDone-button" class="yui-button yui-push-button" type="button">Tarea hecha</button>
</span>
</span>

<div class="form-field suggested-actions" id="${fieldHtmlId}">
   <div id="${fieldHtmlId}-buttons">
   </div>
</div>
</#if>