//Three seperate functions, each using the same submit button

//Preference function
$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    var preference = $("input:radio[name=preference]:checked").val();
    if (preference === "coding"){
      $("#javaTrack").show();
    } else if (preference === "designing"){
      $("#designTrack").show();
    }
  });
});
//Coding chops function
$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    var coding = $("input:radio[name=coding]:checked").val();
    if (coding === "codingBackground3"){
      $("#railsTrack").show();
    } else if (coding ==="codingBackground4"){
      $("#railsTrack").show();
    }
  });
});
//readyToLearn function
$(document).ready(function() {
  $("form#questions").submit(function() {
    event.preventDefault();
    var readyToLearn = $("input:radio[name=commit]:checked").val();
    if (readyToLearn === "yes"){
      $("#nextSteps").show();
    } else if (readyToLearn === "no"){
      $("#moreInfo").show();
    }
  });
});
