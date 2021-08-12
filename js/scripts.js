$(document).ready(function() {
  $(".btn").click(function() {
    $(".card-showing").hide();
    $(".card-hidden").show();

    const name = $("input#firstLasrName").val();
    const singer = $("input#singer").val();
    const time= $("input#time").val();
    const dob = $("input#dob").val();
    const color = $("input#color").val();

  });
});



