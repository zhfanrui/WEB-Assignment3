function slides(i) {
    $("header")[0].style.backgroundImage = "url(img/slides/" + i + ".jpg)"
    next = (i + 1) % 5 + 1
    setTimeout("slides(" + next + ")", 5000);
}

setTimeout("slides(1)", 2000);
