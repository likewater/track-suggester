$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();


    var readyToLearn = $("input:radio[name=commit]:checked").val();

    if (readyToLearn === "no"){
    $("#moreInfo").show();
  }
  });
});
