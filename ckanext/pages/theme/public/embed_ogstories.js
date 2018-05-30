$(document).ready(function(){
 $('#field-story').change(function(){
   var iframeurl = $(this).val();
   var page_title = $('#field-story option:selected').text();
   $('#field-title').val(page_title);
   $('#field-title').trigger('keyup');
   var embed_markup = '<iframe height="1000px" src="'+iframeurl+'" width="100%">';
   CKEDITOR.instances['field-content-ck'].setData(embed_markup);
 });
});
