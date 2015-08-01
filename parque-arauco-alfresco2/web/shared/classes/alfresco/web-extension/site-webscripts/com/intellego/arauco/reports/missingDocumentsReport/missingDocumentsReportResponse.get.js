var area= args.area ? args.area : null;
var stage= args.stage ? args.stage : null;
var mall= args.mall ? args.mall : null;
var project= args.project ? args.project : null;
var responsible= args.responsible ? args.responsible : null;
var typeProject= args.typeProject ? args.typeProject : null;

var url = "/arauco/missingDocumentsReport?area=" + area + "&mall=" + mall + "&project=" + project + "&responsible=" + responsible + "&stage=" + stage + "&typeProject=" + typeProject;

var connector = remote.connect("alfresco");
var data = connector.call(url);
model.resultSet = data;
