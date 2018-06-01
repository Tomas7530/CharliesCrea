function addButtonTissu(rang) {
    for (var i = 1; i <= rang; i++) {
        $('#option-select').append("<div class=\"one-third column br option\"><label for=\"tissu\">Tissu <num class=\"number\">" + i + "</num></label><div id=\"tissu" + i + "\" class=\"image-select\"><img src=\"images/tissus/0.png\" id=\"choix" + i + "\" class=\"image-button\" rang=\"" + i + "\"/></div></div>");
    }
}

function createTissu() {
    var tissus = [];

    for (var i = 0; i < 12; i++) {
        var imageTissu = new Image();

        imageTissu.index = i;
        imageTissu.value = "<img src=\"images/tissus/" + i + ".png\" class=\"image-button\" value=\"" + i + "\"/>";

        tissus.push(imageTissu);
        $('#option').append(imageTissu.value);
    }
}