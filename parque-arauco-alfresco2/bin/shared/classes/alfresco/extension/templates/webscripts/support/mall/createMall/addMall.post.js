<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var mallName= bodyContent.name ? bodyContent.name : null;
var idCountry= bodyContent.country ? bodyContent.country : null;

var country = CountrySrv.getById(idCountry);
var mallType = MallTypeSrv.getById(3);

var mall = new Mall();
var query="@cm\\:title:defaultimage";
resultSet= search.luceneSearch(query);
if(resultSet.length>0){
	mall.imageUuid=resultSet[0].properties["sys:node-uuid"];
	mall.nameImage=resultSet[0].name;
}
mall.name=mallName;
mall.country = country.result;
mall.mallType= mallType.result;

MallSrv.add(mall);