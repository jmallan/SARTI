$(document).ready( function() {
    $( "#datepicker" ).datepicker({showAnim : "clip" , dateFormat : "'day' d 'of' MM 'in the year' yy", autoSize : true, minDate : "today", maxDate : "+2M"});
});