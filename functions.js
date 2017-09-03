
$(document).ready(function () {
/*  var toggled = false;
  $("#change-view").click(function() {
    toggled = !toggled;
    $("#lnk").attr("href", toggled ? "style-grid.css" : "style-list.css");

    if($("#change-view").find('i').text() == 'view_list'){
        $("#change-view").find('i').text('view_comfy');
    } else {
        $(this).find('i').text('view_list');
    }

  }); */

  $("#change-view").click(function() {
    $(".container").toggleClass("grid");
    $(".box").toggleClass("grid");
    $(".info-wrapper").toggleClass("grid");
    $(".info-wrapper .title").toggleClass("grid");
    $(".info-wrapper .quote").toggleClass("grid");
    $(".info-wrapper .author").toggleClass("grid");
    $(".cover").toggleClass("grid");
    $(".extra-wrapper").toggleClass("grid");
    $(".likes").toggleClass("grid");
    if($("#change-view").find('i').text() == 'view_list'){
        $("#change-view").find('i').text('view_comfy');
    } else {
        $(this).find('i').text('view_list');
    }
  });
});
