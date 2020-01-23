$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: 0
        }
        console.log(newBurger)

    $ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(function() {
                console.log("created a new burger");
                location.reload();
            });
    });

    $(".change-devoured").on("click", function(event) {
        event.preventDefaily();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("Devoured!");
                location.reload();
            }
        );
    });
});