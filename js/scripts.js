$(document).ready(function () {
  $("#count").submit(function (event) {
    event.preventDefault();

    const countTo = parseInt($("#count-to").val());
    const multiple = parseInt($("#multiple").val());

    if (
      countTo !== NaN &&
      multiple !== NaN &&
      countTo > 0 &&
      multiple > 0 &&
      multiple < countTo
    ) {
      for (let i = 0; i <= countTo; i += multiple) {
        $(".result").append("<li>" + i + "</li>");
        $(".form-control").removeClass("wrong");
      }
    } else {
      $(".form-control").addClass("wrong");
    }
  });
});
