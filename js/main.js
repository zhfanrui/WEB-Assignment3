$ = function(s) {
    if (s.startsWith("#")) {
        return document.getElementById(s.slice(1))
    } else if (s.startsWith(".")) {
        return document.getElementsByClassName(s.slice(1))
    } else if (s.startsWith(",")) {
        return document.getElementsByName(s.slice(1))
    } else {
        return document.getElementsByTagName(s)
    }
}

function backTest() {
    main()
    for (variable of $("section")[0].children) {
        console.log(variable);
        var t = variable.getElementsByTagName("img")[0].src
        variable.style.backgroundImage = t
        console.log(variable.style.backgroundImage);
    }
}

function main() {
    $("#add").onclick = function() {
        window.location.href = 'add.html'
    }
    $("#join").onclick = function() {
        window.location.href = 'login.html'
    }
    Menu()
}

function Menu() {
    var e1 = $('#left')
    var e2 = $('#right')
    // e1.style.height = "0px"
    // e1.style.padding = "0px"
    $("#menu").onclick = function() {
        // if(e1.style.backgroundColor == "rgba(255, 255, 255, 0)" || e1.style.backgroundColor == ""){
        //     e1.style.display = "block"
        //     e2.style.display = "block"
        //     sleep(120)
        //     for (var i = 0; i < 0.3; i+=0.001) {
        //         e1.style.backgroundColor=' rgba(255, 255, 255, '+ i +')'
        //         e2.style.backgroundColor=' rgba(255, 255, 255, '+ i +')'
        //
        //     }
        //     for (variable of e1.children) {
        //         variable.children[0].style.color=' rgba(255, 255, 255, 1)'
        //     }
        //     for (variable of e2.children) {
        //         variable.children[0].style.color=' rgba(255, 255, 255, 1)'
        //     }
        // }
        // else {
        //     e1.style.backgroundColor=' rgba(255, 255, 255, 0)'
        //     e2.style.backgroundColor=' rgba(255, 255, 255, 0)'
        //     for (variable of e1.children) {
        //         variable.children[0].style.color=' rgba(255, 255, 255, 0)'
        //     }
        //     for (variable of e2.children) {
        //         variable.children[0].style.color=' rgba(255, 255, 255, 0)'
        //     }
        //     sleep(120)
        //     e1.style.display = "none"
        //     e2.style.display = "none"
        //     sleep(120)
        // }

        // if(e1.style.height == "0px"){
        //     e1.style.height = "auto"
        //     e1.style.padding = "5px"
        // }
        // else {
        //     e1.style.height = "0px"
        //     e1.style.padding = "0px"
        // }

        if (e1.style.display == "none" || e1.style.display == "") {
            e1.style.display = "block"
            e2.style.display = "block"
        } else {
            e1.style.display = "none"
            e2.style.display = "none"
        }

    }
    drawMenu()
}

function drawMenu() {
    var canvas = $("#menu")
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fillRect(0, 0, 50, 6);
    ctx.fillRect(0, 10, 50, 6);
    ctx.fillRect(0, 20, 50, 6);
}

function sleep(t) {
    var now = new Date();
    var exitTime = now.getTime() + t;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}
