$(function() {
    $(".submit-btn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burgerTxt").val(),
            devoured: 0
        }

        console.log(newBurger);

          $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(function() {
            location.reload()
          });
      });

    $(".change-devoured").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function() {
                //console.log("changed devoured to", newDevour);
                location.reload();
            });
        });
})

