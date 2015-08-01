package com.intellego.parquearauco.artifacts.dictionary;


import java.util.ArrayList;
import java.util.List;

import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.dictionary.ConstraintDefinition;
import org.alfresco.service.cmr.dictionary.DictionaryService;
import org.alfresco.service.cmr.dictionary.PropertyDefinition;
import org.alfresco.service.namespace.NamespaceService;
import org.alfresco.service.namespace.QName;

/**
 * Artefacto que retorna la informacion relacionada con una propiedad de un modelo de datos
 * @author  Jacinto Obispo
 * @since  1.0
 * @see Proyecto: Gestion documental Grupo Siglo
 */
public class CheckProperties{

	private DictionaryService dictionaryService; 
	private NamespaceService namespaceService; 
	
	/**
	 * @param serviceRegistry Requerido y utilizado para el acceso al servicio DictionaryService 
	 */
	public void init(ServiceRegistry serviceRegistry){
		
		this.setDictionaryService(serviceRegistry.getDictionaryService());
		this.setNamespaceService(serviceRegistry.getNamespaceService());
		
	}
	
	/**
	 * @param property QNAME de la propiedad que se desea inspeccionar
	 * @return true si la propiedad existe, false si la propiedad no existe
	 */
	public boolean exists(QName property){
		
		boolean exists=false;
		
		PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
		
		if(propertyDefinition!=null) exists=true;
		
		return exists;
	}
	
	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return true si la propiedad existe, false si la propiedad no existe
	 */
	public boolean exists(String property){
		
		boolean exists=false;
		QName propertyQName = null;
		
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null) exists=true;
			}
		}

		System.out.println("Exists: " + exists);
		return exists;
	}

	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return Tipo de la propiedad
	 */
	public String getType(String property){
		
		String type=new String("");
		QName propertyQName = null;
		
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null){
					type=propertyDefinition.getDataType().getName().getLocalName();
				}
			}
		}

		return type;
	}
	
	public String getType(QName property){
		
		String type=new String("");
		
		if(this.exists(property)){
			PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
			if(propertyDefinition!=null){
				type=propertyDefinition.getDataType().getName().getLocalName();
			}
		}
		
		return type;
	}

	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return Descripcion de la propiedad
	 */
	public String getDescription(String property){
		
		String type=new String("");
		QName propertyQName = null;
		
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null){
					type=propertyDefinition.getDescription();
				}
			}
		}

		return type;
	}
	
	public String getDescription(QName property){
		
		String type=new String("");
		
		if(this.exists(property)){
			PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
			if(propertyDefinition!=null){
				type=propertyDefinition.getDescription();
			}
		}
		
		return type;
	}

	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return Titulo de la propiedad
	 */
	public String getTitle(String property){
		
		String type=new String("");
		QName propertyQName = null;
		
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null){
					type=propertyDefinition.getTitle();
				}
			}
		}

		return type;
	}
	
	public String getTitle(QName property){
		
		String type=new String("");
		
		if(this.exists(property)){
			PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
			if(propertyDefinition!=null){
				type=propertyDefinition.getTitle();
			}
		}
		
		return type;
	}

	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return Lista con los diferentes constraints asociados a la propiedad
	 */
	public List<Constraint> getConstraints(String property){
		
		List<Constraint> constraints=new ArrayList<Constraint>();
		QName propertyQName = null;
		
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null){
					List<ConstraintDefinition> constraintsDefinition=propertyDefinition.getConstraints();
					Constraint item=null;
					for(ConstraintDefinition constraintDefinition : constraintsDefinition){
						item=new Constraint();
						item.setName(constraintDefinition.getName().getLocalName());
						item.setType(constraintDefinition.getConstraint().getType());
						constraints.add(item);
					}
				}
			}
		}

		return constraints;
	}
	
	public List<Constraint> getConstraints(QName property){
		
		List<Constraint> constraints=new ArrayList<Constraint>();
		
		PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
		if(propertyDefinition!=null){
			List<ConstraintDefinition> constraintsDefinition=propertyDefinition.getConstraints();
			Constraint item=null;
			for(ConstraintDefinition constraintDefinition : constraintsDefinition){
				item=new Constraint();
				item.setName(constraintDefinition.getName().getLocalName());
				item.setType(constraintDefinition.getConstraint().getType());
				constraints.add(item);
			}
		}
		return constraints;

	}

	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return Valor por defecto de la propiedad
	 */
	public String getDefaultValue(String property){
		
		String type=new String("");
		QName propertyQName = null;
		
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null){
					type=propertyDefinition.getDefaultValue();
				}
			}
		}

		return type;
	}
	
	public String getDefaultValue(QName property){
		
		String type=new String("");
		
		if(this.exists(property)){
			PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
			if(propertyDefinition!=null){
				type=propertyDefinition.getDefaultValue();
			}
		}
		
		return type;
	}

	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return TRUE si la propiedad esta tokenizada, FALSE si no lo esta
	 */
	public String getTokenisationMode(String property){
		
		String type=new String("");
		QName propertyQName = null;
		
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null){
					type=propertyDefinition.getIndexTokenisationMode().name();
				}
			}
		}

		return type;
	}
	
	public String getTokenisationMode(QName property){
		
		String type=new String("");
		
		if(this.exists(property)){
			PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
			if(propertyDefinition!=null){
				type=propertyDefinition.getIndexTokenisationMode().name();
			}
		}
		
		return type;
	}

	public boolean isMandatory(QName property){
		
		boolean isMandatory=false;
		
		if(this.exists(property)){
			PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
			
			if(propertyDefinition!=null){
				isMandatory=propertyDefinition.isMandatory();
			}else{
				isMandatory=false;
			}
			
		}
		
		return isMandatory;
	}

	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return true si es mandatoria, false si no lo es
	 */
	public boolean isMandatory(String property){
		
		boolean isMandatory=false;
		QName propertyQName = null;
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null){
					isMandatory=propertyDefinition.isMandatory();
				}else{
					isMandatory=false;
				}
			}
		}

		return isMandatory;
	}

	public boolean isIndexed(QName property){
		
		boolean isMandatory=false;
		
		if(this.exists(property)){
			PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
			
			if(propertyDefinition!=null){
				isMandatory=propertyDefinition.isIndexed();
			}else{
				isMandatory=false;
			}
			
		}
		
		return isMandatory;
	}

	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return true si la propiedad es indexada, false si no lo es
	 */
	public boolean isIndexed(String property){
		
		boolean isMandatory=false;
		QName propertyQName = null;
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null){
					isMandatory=propertyDefinition.isIndexed();
				}else{
					isMandatory=false;
				}
			}
		}

		return isMandatory;
	}

	public boolean isIndexedAtomically(QName property){
		
		boolean isMandatory=false;
		
		if(this.exists(property)){
			PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
			
			if(propertyDefinition!=null){
				isMandatory=propertyDefinition.isIndexedAtomically();
			}else{
				isMandatory=false;
			}
			
		}
		
		return isMandatory;
	}

	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return true si la propiedad es indexada atomicamente, false si no lo es
	 */
	public boolean isIndexedAtomically(String property){
		
		boolean isMandatory=false;
		QName propertyQName = null;
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null){
					isMandatory=propertyDefinition.isIndexedAtomically();
				}else{
					isMandatory=false;
				}
			}
		}

		return isMandatory;
	}

	public boolean isMultivalued(QName property){
		
		boolean isMandatory=false;
		
		if(this.exists(property)){
			PropertyDefinition propertyDefinition = dictionaryService.getProperty(property);
			
			if(propertyDefinition!=null){
				isMandatory=propertyDefinition.isMultiValued();
			}else{
				isMandatory=false;
			}
			
		}
		
		return isMandatory;
	}

	/**
	 * @param property Texto con la propiedad que se desea inspeccionar en formato [prefijo]:[nombre propiedad]
	 * @return true si la propiedad es multivalor, false si no lo es
	 */
	public boolean isMultivalued(String property){
		
		boolean isMandatory=false;
		QName propertyQName = null;
		String[] propertyParts = property.split(":");
		
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);
				PropertyDefinition propertyDefinition = dictionaryService.getProperty(propertyQName);
				if(propertyDefinition!=null){
					isMandatory=propertyDefinition.isMultiValued();
				}else{
					isMandatory=false;
				}
			}
		}

		return isMandatory;
	}
	
	public DictionaryService getDictionaryService() {
		return dictionaryService;
	}

	public void setDictionaryService(DictionaryService dictionaryService) {
		this.dictionaryService = dictionaryService;
	}

	public NamespaceService getNamespaceService() {
		return namespaceService;
	}

	public void setNamespaceService(NamespaceService namespaceService) {
		this.namespaceService = namespaceService;
	}
	
	/**
	 * Clase de datos para almacenar el nombre y tipo de un constraint
	 * @author  Jacinto Obispo
	 * @since  1.0
	 * @see Proyecto: Gestion documental Grupo Siglo
	 */
	public class Constraint{
		private String name;
		private String Type;
		
		/**
		 * @see Constructor de la clase
		 */
		Constraint(){
			name=new String();
			Type=new String();
		}
		
		/**
		 * @return Nombre del constraint
		 */
		public String getName() {
			return name;
		}
		/**
		 * @param name Nombre del constraint
		 */
		public void setName(String name) {
			this.name = name;
		}
		/**
		 * @return Nombre del tipo de constraint
		 */
		public String getType() {
			return Type;
		}
		/**
		 * @param type Nombre del tipo de constraint
		 */
		public void setType(String type) {
			Type = type;
		}
	}
	
	

}
