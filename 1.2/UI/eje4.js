$(document).ready( function() {
    $( "#tabs" ).tabs()
                .find( ".ui-tabs-nav" )
                .sortable({
                    axis: "y",
                    stop: function() {
                    $("#tabs").tabs( "refresh" );
                    }
                });
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});