//simple jquery snippet that open all files with the pdf extension at 75% zoom. Update the extensions/appendage on lines 4-5 to customise//
$(document).ready(function(){
    var _href = $("a[href$='.pdf']").attr("href");
    $("a[href$='.pdf']").attr("href", _href + '#zoom=75');
})