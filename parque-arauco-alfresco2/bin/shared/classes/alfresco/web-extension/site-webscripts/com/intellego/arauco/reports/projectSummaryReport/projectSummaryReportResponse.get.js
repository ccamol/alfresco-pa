var dateFrom= args.dateFrom ? args.dateFrom : null;
var dateTo= args.dateTo ? args.dateTo : null;


var url = "/arauco/projectSummaryReport?dateFrom=" + dateFrom + "&dateTo=" + dateTo;

var connector = remote.connect("alfresco");
var data = connector.call(url);
model.resultSet = data;
