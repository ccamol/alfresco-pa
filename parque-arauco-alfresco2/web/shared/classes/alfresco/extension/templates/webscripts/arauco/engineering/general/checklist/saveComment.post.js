<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var nodeType= bodyContent.nodeType ? bodyContent.nodeType : null;
var nodeId= bodyContent.nodeId ? bodyContent.nodeId : null;
var documentId= bodyContent.documentId ? bodyContent.documentId : null;
var uuid= bodyContent.uuid ? bodyContent.uuid : null;
var comment= bodyContent.comment ? bodyContent.comment : null;

var response=null;

var filter = new CheckListCommentFilter();

filter.nodeType.exact(nodeType, EQUALS_TO);
filter.nodeId.exact(nodeId, EQUALS_TO);
filter.idDocument.exact(documentId, EQUALS_TO);

var commentObject = CheckListCommentService.getListByFilter(filter);

if(commentObject.status>-1 && commentObject.result!=null && commentObject.result.size()>0){
	var newComment = commentObject.result.get(0);
	newComment.uuid=uuid;
	newComment.comment=comment;
	response = CheckListCommentService.addOrUpdate(newComment);
}else{
	var newComment = new CheckListComment();
	newComment.nodeType=nodeType;
	newComment.nodeId=nodeId;
	newComment.idDocument=documentId;
	newComment.uuid=uuid;
	newComment.comment=comment;
	response = CheckListCommentService.add(newComment);
}

model.response=response;
