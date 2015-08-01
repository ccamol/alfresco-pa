var nodeType=null;
var id=null;
$(document).ready(function() {

	id = getUrlVars()["id"].replace(".","");
	nodeType = getUrlVars()["nodeType"];
	loadCheckList();
});

function editComment(uuid, documentId){
	$.ajax({
		url:'/share/page/dashlets/editComment',
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			$('#editCommentDialog').remove();
			$( "div" ).remove( "#editCommentDialog" );
			popupMedium(data);
			$('#commentUuid').val(uuid);
			$('#commentDocumentType').val(documentId);
		}
	});
}

function addComment(){
	var commentUuid=$('#commentUuid').val();
	var commentDocumentId=$('#commentDocumentType').val();
	var comment=$('#checkListComment').val();
	
	$.ajax({
		url:'/share/page/dashlets/saveComment.json',
		type: "get",
		dataType: "json",  
		async: false,  	
		data : {
			nodeType : nodeType,
			nodeId : id,
			documentId : commentDocumentId,
			uuid : commentUuid,
			comment : comment
		},
		success:   function(data) {
			loadCheckList();
		}
	});
}


function loadCheckList(){
	$.ajax({
		url:'/share/page/dashlets/checkList',
		type: "get",
		dataType: "html",
		data: {
			nodeType : nodeType,
			nodeId : id
		},
		success:   function(data) {
			$('#checkStageMall').html(data);
		}
	});
}

