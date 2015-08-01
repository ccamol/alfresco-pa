<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var userName= bodyContent.userName ? bodyContent.userName : null;
var identificationNumber= bodyContent.identificationNumber ? bodyContent.identificationNumber : null;
var mail= bodyContent.mail ? bodyContent.mail : null;
var password= bodyContent.password ? bodyContent.password : null;
var countryId= bodyContent.countryId ? bodyContent.countryId : null;
var mallId= bodyContent.mallId ? bodyContent.mallId : null;
var additionalInfo= bodyContent.additionalInfo ? bodyContent.additionalInfo : null;
var id= bodyContent.id ? bodyContent.id : null;

var CONTAINS = 8;
var EQUALS_TO = 0;

var applicantFilter = ApplicantFilter();
var applicantObject = null;
var applicant = new Applicant();

var applicantResult = null;
var valUsername = null;
var valPassword = null;
var valEmail = null;
var validate = 0;

applicantFilter.name.exact(userName, CONTAINS);
var result = ApplicantSrv.getListByFilter(applicantFilter).result;
if(userName !== null && identificationNumber !== null && mail !== null && mallId !== null){
	if(result.size() !== 0){
		model.resultSet = 0;
		if(id !== null){
			applicant = new Applicant();
			
			applicantResult = ApplicantSrv.getById(id).result;
			valUsername = applicantResult.name;
			valEmail = applicantResult.mail;
			applicant.id = id;
			if(valUsername != userName){
				validate = 1;
			}else{
				validate = 0;
			}
			applicant.name = userName;
			applicant.mail = mail;
			applicant.identificationNumber = identificationNumber;
			applicant.country = CountrySrv.getById(countryId).result;
			applicant.mall = MallSrv.getById(mallId).result;
			applicant.additionalInfo = additionalInfo;
			resultSet = ApplicantSrv.addOrUpdate(applicant);
			model.resultSet = resultSet.status;
			
			model.validate = validate;
		}
	}else{
		if(id == null){
			applicant = new Applicant();
			applicant.name = userName;
			applicant.mail = mail;
			applicant.identificationNumber = identificationNumber;
			applicant.country = CountrySrv.getById(countryId).result;
			applicant.mall = MallSrv.getById(mallId).result;
			applicant.additionalInfo = additionalInfo;
			resultSet = ApplicantSrv.add(applicant);
			model.resultSet = resultSet.status;
			
			model.validate = validate;
			
		}else{
			applicant = new Applicant();
//			logger.log("id applicant     --- " + id);
			applicantResult = ApplicantSrv.getById(id).result;
			valUsername = applicantResult.name;
			valEmail = applicantResult.mail;
			applicant.id = id;
			if(valUsername != userName){
				validate = 1;
			}else{
				validate = 0;
			}
			applicant.name = userName;
			applicant.mail = mail;
			applicant.identificationNumber = identificationNumber;
			applicant.country = CountrySrv.getById(countryId).result;
			applicant.mall = MallSrv.getById(mallId).result;
			applicant.additionalInfo = additionalInfo;
			resultSet = ApplicantSrv.addOrUpdate(applicant);
			model.resultSet = resultSet.status;
			
			model.validate = validate;
		}
		
	}
}else{
	model.resultSet = -1;
}

model.validate = validate;

