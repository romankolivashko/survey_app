
$(document).ready(function() {
  $(".btn").click(function() {
    $(".card-showing").hide();
    $(".card-hidden").show();

    const name = $("input#firstLastName").val();
    const singer = $("select#singer").val();
    // const time = $("input#time").val();
    // ("input:radio[name=operator]:checked").val()
    const time = $("input:radio[name=time]:checked").val();
    const dob = $("input#born").val();
    const color = $("input#color").val();

    $(".firstLastName").text(name);
    $(".singer").text(singer);
    $(".time").text(time);
    $(".dob").text(dob);
    $(".color").text(color);

  });
});



