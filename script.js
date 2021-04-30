// la méthode .emty vide la div à l'id #texte_2
$(document).ready(function () {
    $("button").click(function () {
        $("#texte_2").empty();
    });
});