$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    var preference = $("input:radio[name=preference]:checked").val();
    var readyToLearn = $("input:radio[name=commit]:checked").val();

    if (preference === "designing"){
    $("#designTrack").show();
  }



    if (readyToLearn === "no"){
    $("#moreInfo").show();
  }
  });
});
