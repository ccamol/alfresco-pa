package com.intellego.pa.email.services;

import java.io.Serializable;
import java.util.Map;

/**
 * 
 * @author Cristhofer Valenzuela
 *
 */
public interface EmailService {
	
	/**
	 * Metodo para enviar mail's
	 * 
	 * @param template Debe ser de tipo file con un ftl como plantilla para el email
	 * @param parameters Debe contener los siguientes parametros obligatorios
	 * <ul>
	 * <li><code>subject</code>: Asunto del email</li>
	 * <li><code>from</code>: Mail destinatario</li>
	 * <li><code>many</code>: Multiples destinatarios</li>, Debe ser un String separado por ","
	 * <li><code>to</code>: Mail de origen</li>
	 * <li><code>templateName</code>: Nombre de la plantilla</li>
	 * <li><code>uuid</code>: uuid de la plantilla</li>
	 * </ul>
	 */
	Boolean sendEmail(Map<String, Serializable> parameters);
}
