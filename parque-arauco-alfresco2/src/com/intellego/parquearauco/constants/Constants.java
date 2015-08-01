package com.intellego.parquearauco.constants;

import org.alfresco.service.namespace.QName;

public class Constants {

	public static final String MODEL = "http://www.parquearauco.cl/content/1.0"; 
	public static final String MODEL_LIST = "http://www.parquearauco.com/content/list1.0"; 
	public static final String COMMENT = "http://www.info2000.cl/models/comment"; 
	public static final String ALFRESCO = "http://www.alfresco.org/model/content/1.0";	

	// Types
	public static final QName TYPE_PA_DOCUMENT=QName.createQName(MODEL,"paDocument");

	// Assocs
	public static final QName ASSOC_SWF_PREVIEW=QName.createQName(MODEL,"swfAssoc");

	// Properties
	public static final QName PROP_SECTION=QName.createQName(MODEL,"section");
	public static final QName PROP_SECTIONID=QName.createQName(MODEL,"sectionID");
	public static final QName PROP_SUBSECTION=QName.createQName(MODEL,"subsection");
	public static final QName PROP_SUBSECTIONID=QName.createQName(MODEL,"subsectionID");
	public static final QName PROP_SERIE=QName.createQName(MODEL,"serie");
	public static final QName PROP_SERIEID=QName.createQName(MODEL,"serieID");
	public static final QName PROP_DOCUMENTTYPE=QName.createQName(MODEL,"documentType");
	public static final QName PROP_DOCUMENTTYPEID=QName.createQName(MODEL,"documentTypeID");
	public static final QName PROP_DOCUMENTDATE=QName.createQName(MODEL,"documentDate");
	public static final QName PROP_MALL=QName.createQName(MODEL,"mall");
	public static final QName PROP_MALLID=QName.createQName(MODEL,"mallID");
	public static final QName PROP_MALLTYPE=QName.createQName(MODEL,"mallType");
	public static final QName PROP_MALLTYPEID=QName.createQName(MODEL,"mallTypeID");
	public static final QName PROP_COUNTRY=QName.createQName(MODEL,"country");
	public static final QName PROP_COUNTRYID=QName.createQName(MODEL,"countryID");
	public static final QName PROP_MALLSAPID=QName.createQName(MODEL,"mallIDSAP");
	public static final QName PROP_PROJECT=QName.createQName(MODEL,"project");
	public static final QName PROP_PROJECTID=QName.createQName(MODEL,"projectID");
	public static final QName PROP_STORENAME=QName.createQName(MODEL,"storeName");
	public static final QName PROP_STORENAMEID=QName.createQName(MODEL,"storeNameID");
	public static final QName PROP_SUCNUMBER=QName.createQName(MODEL,"sucNumber");
	public static final QName PROP_SUCNUMBERID=QName.createQName(MODEL,"sucNumberID");
	public static final QName PROP_IDSUCSAP=QName.createQName(MODEL,"idSUCSAP");


	// LIST MODEL CONSTANTS

	public static final QName PROP_LIST_DESCRIPTION=QName.createQName(MODEL_LIST,"description");
	public static final QName PROP_LIST_ID=QName.createQName(MODEL_LIST,"id");

	//ASSOC preview comment
	public static final QName ASSOC_PDFASSOC=QName.createQName(COMMENT, "pdfAssoc");
	public static final QName ASSOC_PREVIEWASSOC=QName.createQName(COMMENT, "previewAssoc");
	
	//METADATA ALFRESCO	
	public static final QName ALFRESCO_CREATED = QName.createQName(ALFRESCO, "created");
}
