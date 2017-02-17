$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    var preference = $("input:radio[name=preference]:checked").val();
    var coding = $("input:radio[name=coding]:checked").val();
    var skill = $("input:radio[name=skill]:checked").val();
    var personality = $("input:checkbox[name=personality]:checked").val();
    var readyToLearn = $("input:radio[name=commit]:checked").val();

    if (preference === "designing"){
      $("#designTrack").show();
    } else if (preference === "coding"){
      $("#javaTrack").show();
    } else if (readyToLearn === "yes"){
      $("#nextStep").show();
    } else if (readyToLearn === "no"){
      $("#moreInfo").show();
    }





  });
});
