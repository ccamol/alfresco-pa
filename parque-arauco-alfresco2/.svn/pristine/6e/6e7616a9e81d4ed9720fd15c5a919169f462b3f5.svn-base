var virtualSUC= args.virtualSUC ? args.virtualSUC : null;
var realSUC= args.realSUC ? args.realSUC : null;


//logger.log("AL 1: " + virtualSUC + " - " + realSUC);
var url = "/arauco/linkSUCSAP?virtualSUC=" + virtualSUC + "&realSUC=" + realSUC;

//logger.log("AL 2:");
var connector = remote.connect("alfresco");
var data = connector.call(url);

model.data=data;