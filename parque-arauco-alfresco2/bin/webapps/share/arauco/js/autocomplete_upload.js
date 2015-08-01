var cont=0; //Variable Global para ID de autocomplete
	(function( $ ) {

	$( ".ui-autocomplete-input" ).live( "autocompleteopen", function() {
		var autocomplete = $( this ).data( "autocomplete" ),
			menu = autocomplete.menu;

		if ( !autocomplete.options.selectFirst ) {
			return;
		}

		menu.activate( $.Event({ type: "mouseenter" }), menu.element.children().first() );
	});

	}( jQuery ));
		
	
	
	
	/*
	 *Esta funcion es para crear un input y por debajo se encuentra el combobox
	 *  
	 *  */
	(function( $ ) {
		$.widget( "ui.combobox", {
			_create: function() {
				var input,
					self = this,
					select = this.element.hide(),
					selected = select.children( ":selected" ),
					value = selected.val() ? selected.text() : "",
					wrapper = this.wrapper = $( "<span>" )
						//.addClass( "ui-combobox" )
						.insertAfter( select );	
						
						
						
				input = $( "<input type='text'class='input-medium'>" )
					.appendTo( wrapper )
					.val( value )
					//.addClass( "ui-state-default ui-combobox-input" )
					.attr('id', 'autocomplete'+cont) //se agrega atributo
					.autocomplete({
						selectFirst: true, //Selecciona el primero en la lista
						delay: 0,
						minLength: 0,
						source: function( request, response ) {
							var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
							response( select.children( "option" ).map(function() {
								var text = $( this ).text();
								if ( this.value && ( !request.term || matcher.test(text) ) )
									return {
										label: text.replace(
											new RegExp(
												"(?![^&;]+;)(?!<[^<>]*)(" +
												$.ui.autocomplete.escapeRegex(request.term) +
												")(?![^<>]*>)(?![^&;]+;)", "gi"
											), "<strong>$1</strong>" ),
										value: text,
										option: this
									};
							}) );
						},
						select: function( event, ui ) {
							ui.item.option.selected = true; 

							self._trigger( "selected", event, {
								item: ui.item.option
							});
							var itemSS = ui.item.option.value;
							var itemSS2= ui.item.value;
							
							
							console.log(ui.item);
							console.log(ui.item.option.parentNode.name)
							console.log(ui.item.option.parentElement);
                            
							var doc= ui.item.option.parentNode.name;
							 
							//  $("#txDocumentArea option").each(function(){
							//	$('#txDocumentArea option:selected').removeAttr('selected');
							//	$(this).removeAttr("selected");
							//}); 
							
							
							if(doc=="idDepartament")
							{
							 $("#idDepartament option").each(function(){
								
								if($(this).text()==itemSS2){
								$(this).attr("selected","selected");
								$("#idDepartament").change();
								$("#autocomplete1").val('Seleccionar');
								$("#autocomplete2").val('');
								}else
								{
								$(this).removeAttr("selected");
								}
							}); 
							}

							if(doc=="idSubDepartament")
							{
							
							$("#idSubDepartament option").each(function(){
								if($(this).text()==itemSS2){
								$(this).attr("selected","selected");
								$("#idSubDepartament").change();
								$("#autocomplete2").val('Seleccionar');
								}else
								{
								$(this).removeAttr("selected");
								}
							});
							}
							
							
							if(doc=="idDocumentType")
							{
							$("#idDocumentType option").each(function(){
								if($(this).text()==itemSS2){
								$(this).attr("selected","selected");
								$("#idDocumentType").change();
								}else
								{
								$(this).removeAttr("selected");
								}
							});
							}
							
							if(doc=="idMatter")
							{
							$("#idMatter option").each(function(){
								if($(this).text()==itemSS2){
								$(this).attr("selected","selected");
								$("#idMatter").change();
								}else
								{
								$(this).removeAttr("selected");
								}
							});
							}
							
							if(doc=="idConfidential")
							{
							$("#idConfidential option").each(function(){
								if($(this).text()==itemSS2){
								$(this).attr("selected","selected");
								$("#idConfidential").change();
								}else
								{
								$(this).removeAttr("selected");
								}
							});
							}
							
							if(doc=="idPublished")
							{
							$("#idPublished option").each(function(){
								if($(this).text()==itemSS2){
								$(this).attr("selected","selected");
								$("#idPublished").change();
								}else
								{
								$(this).removeAttr("selected");
								}
							});
							}
							
							if(doc=="idOrigin")
							{
							$("#idOrigin option").each(function(){
								if($(this).text()==itemSS2){
								$(this).attr("selected","selected");
								$("#idOrigin").change();
								}else
								{
								$(this).removeAttr("selected");
								}
							});
							}
							
							if(doc=="idDestination")
							{
							$("#idDestination option").each(function(){
								if($(this).text()==itemSS2){
								$(this).attr("selected","selected");
								$("#idDestination").change();
								}else
								{
								$(this).removeAttr("selected");
								}
							});
							}
							
							if(doc=="idCountry")
							{
							$("#idCountry option").each(function(){
								if($(this).text()==itemSS2){
								$(this).attr("selected","selected");
								$("#idCountry").change();
								}else
								{
								$(this).removeAttr("selected");
								}
							});
							}
							
							
							
							//getSubcategoryList(itemSS);
							//alert(itemSS);
						},
						change: 
						function( event, ui ) {
							//valor = ui.item.label
							/*var valor = ui.item.value;
							alert(valor);*/					
							if ( !ui.item ) {
								var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( $(this).val() ) + "$", "i" ),
									valid = false;
								select.children( "option" ).each(function() {
									if ( $( this ).text().match( matcher ) ) {
										this.selected = valid = true;
										return false;
									}
								});
								if ( !valid ) {
									// remove invalid value, as it didn't match anything
									$( this ).val( "" );
									select.val( "" );
									input.data( "autocomplete" ).term = "";
									return false;
								}
							}
						}
					})
					//.addClass( "ui-widget ui-widget-content ui-corner-left" );
					cont=cont+1;

				input.data( "autocomplete" )._renderItem = function( ul, item ) {
					return $( "<li></li>" )
						.data( "item.autocomplete", item )
						.append( "<a>" + item.label + "</a>" )
						.appendTo( ul );
				};
				
				

				$( "<a>" )
				 this.button = $('<button class="selectButton" type="button"><i class="icon-chevron-down"</i></button>')
				 	.appendTo( wrapper )
					.attr( "tabIndex", -1 )
					.attr( "title", "Show All Items" )
					.insertAfter(input)
					.button({
						icons: {
							primary: "ui-icon-triangle-1-s"
						},
						text: false
					})
					.removeClass( "ui-corner-all" )
					//.addClass( "ui-corner-right ui-combobox-toggle" )
					.click(function() {
						// close if already visible
						if ( input.autocomplete( "widget" ).is( ":visible" ) ) {
							input.autocomplete( "close" );
							return;
						}

						// work around a bug (likely same cause as #5265)
						$( this ).blur();

						// pass empty string as value to search for, displaying all results
						input.autocomplete( "search", "" );
						input.focus();
					});
			},

			destroy: function() {
				this.wrapper.remove();
				this.element.show();
				$.Widget.prototype.destroy.call( this );
			}
		});
	})( jQuery );

	
	$(function() {
		
		$( "select" ).combobox();
//		$('#autocomplete0').val("Seleccionar");
//		$('#autocomplete3').val("Seleccionar");
//		$('#autocomplete4').val("Seleccionar");
//		$('#autocomplete5').val("Seleccionar");
//		$('#autocomplete6').val("Seleccionar");
//		$('#autocomplete7').val("Seleccionar");
//		$('#autocomplete8').val("Seleccionar");
		
		$( "#toggle" ).click(function() {
			$( "select"  ).toggle();
		});
	});