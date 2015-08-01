$(".detailslink").click(function(){
	// obteniendo el workflowid
	var workflowid = $(this).attr('id');
	// mostrar popup de promover
	showWorkflowTasksPopup(workflowid);
});

function showWorkflowTasksPopup(workflowid) {
	// limpiando popup
//	$('.bootbox').remove();
//	$('.modal-backdrop').remove();
//	$('#documentWorkflowsDialog').remove();
	
	// llamada ajax al popup de promover version
	$.ajax({
		url:'/share/page/dashlets/showWorkflowTasksPopup?workflowid='+workflowid,
		type: "get",
		dataType: "html",
		async: true,
		success: function(data) {
//			$('#documentWorkflowsDialog').remove();
//			$('#workflowTasksDialog').remove();
			popupDefault(data);
		}
	});
}
