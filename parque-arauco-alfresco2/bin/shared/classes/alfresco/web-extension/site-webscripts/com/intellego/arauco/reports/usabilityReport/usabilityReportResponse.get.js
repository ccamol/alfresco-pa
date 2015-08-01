var area= args.area ? args.area : null;
var mall= args.mall ? args.mall : null;
var project= args.project ? args.project : null;
var top= args.top ? args.top : null;


var url = "/arauco/versionTo15Report?area=" + area + "&mall=" + mall + "&project=" + project + "&top=" + top;

var connector = remote.connect("alfresco");
var data = connector.call(url);
model.resultSet = data;
