<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var name= bodyContent.name ? bodyContent.name : null;
var description= bodyContent.description ? bodyContent.description : null;
var categoryType= bodyContent.categoryType ? bodyContent.categoryType : null;

var category = new Category();

category.setName(name);
category.setDescription(description);
category.setCategoryType(categoryType);

var result = CategoriesSrv.add(category);
model.resultSet  = result;