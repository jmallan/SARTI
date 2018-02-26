$(document).ready( function() {
    $( "#dialog-confirm" ).hide();
    $( "#dialog" ).dialog();
    $("#opener").on( "click",  elimina);
});

function elimina()  {
    $( "#dialog-confirm" ).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Delete all items": function() {
                $( this ).dialog( "close" );
            },
            Cancel: function() {
                $( this ).dialog( "close" );
            }
        }
    });
}