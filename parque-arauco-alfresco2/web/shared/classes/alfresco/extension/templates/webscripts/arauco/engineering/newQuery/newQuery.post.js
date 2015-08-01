<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var name= bodyContent.name ? bodyContent.name : null;
var site= bodyContent.site ? bodyContent.site : null;

var result=null;
if(site!=null){
	result = ClassificationService.searchFolder(name, site);
}
//logger.log("newQuery recive del java:" +result.status);

model.response=result;







