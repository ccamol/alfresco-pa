package com.intellego.pa.impl;

//import java.io.Serializable;
//import java.util.List;
//import java.util.Map;
//import java.util.Properties;
//import java.util.Map.Entry;
//import org.alfresco.service.ServiceRegistry;
//import org.alfresco.service.cmr.dictionary.PropertyDefinition;
//import org.alfresco.service.cmr.repository.ContentService;
//import org.alfresco.service.cmr.repository.NodeRef;
//import org.alfresco.service.cmr.repository.NodeService;
//import org.alfresco.service.cmr.repository.StoreRef;
//import org.alfresco.service.cmr.search.ResultSet;
//import org.alfresco.service.cmr.search.SearchService;
//import org.alfresco.service.namespace.QName;
//import org.hibernate.HibernateException;
//import com.intellego.pa.hibernate.entities.PaMall;
//import com.intellego.pa.hibernate.entities.PaMallType;
//import com.intellego.pa.hibernate.entities.PaProject;
//import com.intellego.pa.hibernate.entities.PaProjectStatus;
//import com.intellego.pa.hibernate.entities.PaProjectType;
//import com.intellego.pa.hibernate.utils.HibernateUtil;
//import com.intellego.pa.interfaces.PaServiceInterface;
//import com.intellego.pa.utils.objects.ProyectObject;

//public class PaServiceImpl implements PaServiceInterface{
//
//
//
//	private final HibernateUtil hibernateUtil = HibernateUtil.getInstance();
//
//	private ServiceRegistry serviceRegistry;
//	ContentService contentService = null;
//	SearchService searchService = null;
//	NodeService nodeService = null;
//	private QName PROP_METADATE=null;
//	private QName ASPECT_TRUE=null;
//	private  Properties propertiesData;
//
//	public void init(ServiceRegistry serviceRegistry,Properties properties ){
//		this.serviceRegistry=serviceRegistry;
//		this.propertiesData=properties;
//		contentService = this.serviceRegistry.getContentService();
//		searchService = this.serviceRegistry.getSearchService();
//		nodeService = this.serviceRegistry.getNodeService();
//	}
//
//	@Override
//	public List<Object> getMalls(String idMall, Integer type) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//
//
//
//
//	@Override
//	public Object createSuc(String idProyect, Object sucObject) {
//		// TODO Auto-generated method stub
//		return null;
//	}	
//
//	public String AddMetadata(String[] uuid, String metadata[], String idAspect){
//		NodeRef node = null;
//		String[] key=null;
//		String uri = null;
//		String uriAspect=null;
//		String aspect=null;
//		ResultSet resultAspect=null;
//		int posit=0;
//		StoreRef store = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
//		String query = "@paList\\:documentTypeAspectsList:\"id\"";
//		try {
//			for (String uuidDocument : uuid) {
//				node = new NodeRef("workspace://SpacesStore/" + uuidDocument);
//				for (String metadateValue : metadata) {
//					if(!metadateValue.equals("")){
//						key =  metadateValue.split(":");
//						System.out.println("el valor de metadate es: " +metadateValue);
//						uri= propertiesData.getProperty("uri."+key[0]).trim();
//					}
//					resultAspect = serviceRegistry.getSearchService().query(store, SearchService.LANGUAGE_LUCENE, query);
//					for (NodeRef nodeAspect : resultAspect.getNodeRefs()){
//						Map<QName, Serializable> metadateAspect = nodeService.getProperties(nodeAspect);	
//						for (Entry<QName, Serializable> prop : metadateAspect.entrySet()) {
//							if (prop.getValue().equals(true)) {
//								System.out.println("===============Aspects=================");
//								aspect=prop.getKey().toPrefixString();
//								uriAspect = prop.getKey().getNamespaceURI();
//								System.out.println("el uri es: "+uriAspect);
//								System.out.println("el aspecto es: "+ aspect);
//								ASPECT_TRUE=QName.createQName(uri, aspect);
//								nodeService.addAspect(node, ASPECT_TRUE, null);
//							}
//							System.out.println("=======================================");
//						}
//					}
//				
//					
//					PROP_METADATE=QName.createQName(uri,key[1]);
//					nodeService.setProperty(node, PROP_METADATE,key[2]);
//					query = "@paList\\:id:\""+idAspect+"\"";
//					System.out.println("query es: "+ query);
//				}
//			}
//
//		} catch (Exception e) {
//			// TODO: handle exception
//			e.printStackTrace();
//		}
//		return "hola";
//	}
//
//	@Override
//	public Object createMall(PaMall mallObject) {
//		boolean result = false;
//		try{
//			hibernateUtil.save(mallObject);
//			result = true;
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		return result;
//	}
//
//	@Override
//	public List<Object> getProjects(String idMall) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Object createMallType(PaMallType mallType) {
//		boolean result = false;
//		try{
//			hibernateUtil.save(mallType);
//			result = true;
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		return result;
//	}
//
//	@Override
//	public Object createProjectType(PaProjectType projectType) {
//		boolean result = false;
//		try{
//			hibernateUtil.save(projectType);
//			result = true;
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		return result;
//	}
//
//	@Override
//	public Object createProjectStatus(PaProjectStatus projectStatus) {
//		boolean result = false;
//		try{
//			hibernateUtil.save(projectStatus);
//			result = true;
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		return result;
//	}
//
//	@Override
//	public List<Object> getProject(String idProject) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public List<Object> getMallTypes(String idMallType) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public List<Object> getProjectType(String projectType) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public List<Object> getProjectStatus(String projectStatus) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public Object createProyect(String idMall, PaProject proyectObject) {
//		boolean result = false;
//		try{
//			proyectObject.setIdMall(idMall);
//			hibernateUtil.save(proyectObject);
//			result = true;
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		return result;
//	}
//}
