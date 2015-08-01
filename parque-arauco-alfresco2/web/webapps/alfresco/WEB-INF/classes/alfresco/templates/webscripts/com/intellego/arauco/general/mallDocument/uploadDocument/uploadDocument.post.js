var filename = null;
var fileContent = null;

var path = "Company Home/" +
		"Sites/" +
		"arauco/" +
		"documentLibrary/" +
		"Upload Test/";

		
var target = roothome.childByNamePath(path);
if (target == null) {
	//TODO add response
}
for each (field in formdata.fields) {
	if (field.name == "file" && field.isFile) {
		filename=field.filename;
	    fileContent=field.content;
	}
}

var upload = target.createNode(filename, "cm:content");

upload.properties.content.write(fileContent);
upload.properties.content.setEncoding("UTF-8");
upload.properties.content.guessMimetype(filename);

upload.properties["cm:name"] = filename;

upload.save();

function asdf() {
	
	//generalData
	var section;
	var sectionID; //num
	var subsection;
	var subsectionID; //num
	var serie;
	var serieID; //num
	var documentType;
	var documentTypeID; //num
	var documentDate; //date
	var mall;
	var mallID; //num
	var country;
	var countryID; //num
	var mallIDSAP; //txt
	
	//projectData
	var project;
	
	//documentNumberData
	var documentNumber; //num
	
	//itoData
	var itoParquearauconame;
	
	//sucData
	var storeName;
	var sucNumer;
	var idSUCSAP;
	
	//commercialData
	var tradingNameParquearauco;
	
	//receiptData
	var whoReceivesname;
	var whoReceivesnamePosition;

	//centerManagerData
	var centerManagerName;

	//constructionData
	var constructionCompanyName;
	var constructionCompanyRut;
	
	//entryData
	var admissionDate; //date
	
	//amountData
	var amount; //num
	
	//bankData
	var bank;
	
	//minorWorkData
	var numberEntry; //num
	var omName;
	var professionalNameResponsible;
	var draftsmanNameParquearauco;
	var municipalCertificatenumber; //num
	
	//specialistData
	var specialist;
	var specialistRut;
	
	//roleData
	var role;
	
	//workData
	var siteManagerNameOP;
	var construction;
	
	//workDetailData
	var workPlanStructure;
	var startWorkdate; //date
	
	//architectureChiefData
	var chiefArchitectNameParquearauco;
	
	//folioData
	var folio; //num
	
	//detailData
	var detail;
	
	//actData
	var actNumber; //num
	var requestNumber; //num
	
	//permissionData
	var permissionNumber; //num
	
	//fojasData
	var fojas;
	var year; //num
	
	//planeData
	var planName;
	var specialty;
	
	//addressData
	var address;
	
	//modificationData
	var modificationDetail;
	
	//monthData
	var month; //num
	
	//loadDateData
	var inputAgreedDate; //date
	
	//societyData
	var society;
	
	//operatorData
	var operator;
	
	//jobsData
	var workDescription;
	
	//phisicalAreaData
	var m2;
	var m2Suc;
	var m2Terrace;
	var m2Winery;
	
	//levelData
	var level;
	
	//fileData
	var stateListing;
	var sucType;
	
	//architectureCompanyData
	var companyNamearchitecture;
	var companyRut;
	
	//architectData
	var architectName;
	
	//awardedCompanyData
	var nameCompanyAwarded;
	var companyAwardedRut;
	var professionalResponsiblesNameCompanyAwarded;
	var OCNumber; //num
	
	//reportData
	var answerDeliveryReportNumber;
	
	//fileAssociatedData
	var listingBudgetAssociated;

	//correspondenceData
	var origin;
	var destination;
	var subject;
	
	//deliveryData
	var numberOfdelivery; //num
	
	//supplierData
	var supplierRut;
	
	//vigencyData
	var startDate; //date
	var endDate; //date
	
	//reviserData
	var reviewerName;
	
	//amountSucData
	var sucQuantity; //num
	
	//parkingData
	var abl;
	var parkingQuantity; //num
	
	//ownerData
	var ownerName;
	
	//documentTypeDetailData
	var detailDocumentType;
	
	//tenderingData
	var tenderNumber; //num
	var tenderBeginDate; //date
	var tenderEndDate; //date
	
	if (args.year == null || args.year == undefined) {
		status.code = 404;
		status.message = "No se ha especificado el a�o.";
		logger.log("****************** No se ha especificado el a�o ******************");
		status.redirect = true;
	} else {
		year = args.year;
	}
}