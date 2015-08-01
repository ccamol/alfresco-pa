<div id="editCommentDialog">
<div class="modal-header">
    <a data-dismiss="modal" class="close"></a>
    <h3>Editar comentario</h3>
 </div>

<div class="modal-body">
	<div class="col-lg-10">
 		<input type="hidden" name="commentUuid" id="commentUuid" maxlength="255" value=""></input>
 		<input type="hidden" name="commentDocumentType" id="commentDocumentType" maxlength="255" value=""></input>
 		</p>
	    <p>Comentario:
 		<input type="text" name="checkListComment" id="checkListComment" maxlength="255" value=""></input>
 		</p>
    </div>	
</div>

<div class="modal-footerpopup">
    <a href="#" data-dismiss="modal" class="btn btn-success" onclick="addComment();">Guardar</a>
</div>
</div>
