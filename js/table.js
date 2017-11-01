function ladd(key, val) {
    var v = ""
    for (variable of val) {
        v = v + variable + "<boundary>"
    }
    localStorage[key] = v
}

function lremove(key) {
    localStorage.removeItem(key)
    location.reload()
}

function removeAll() {
    localStorage.clear()
    location.reload()
}

function displayTable() {
    main()
    if (localStorage.length == 0) {
        $('section')[0].innerHTML = "Empty! Come and add some."
        return
    }
    var str = '<table border=1 ><colgroup></colgroup><tr><th>Time</th><th>Title</th><th>Author</th><th>Email</th><th colspan=2>Operation</th></tr>'
    for (var i in localStorage) {
        var temp = localStorage[i].split('<boundary>')
        str += '<tr><td>' + getTime(i) + '</td><td>' + temp[0] + '</td><td>' + temp[1] + '</td><td>' + temp[2] + '</td><td class="normal tdbutton" onclick="location.href=\'add.html?' + i + '\'">Edit</td><td class="delete tdbutton" onclick="lremove(\'' + i + '\')">Delete</td></tr>'
    }
    str += '</table>'
    str += '<button onclick="removeAll()">Clear All</button>'
    $('section')[0].innerHTML = str

    Menu()
}

function displayList() {
    main()
    if (localStorage.length == 0) {
        $('section')[0].innerHTML = "Empty! Come and add some."
        return
    }
    var str = '<ul>'
    for (var i in localStorage) {
        var temp = localStorage[i].split('<boundary>')
        str = '<li class="list"><a href="content.html?' + i + '"><h3>' + temp[0] + '</h3><span>' + getTime(i) + '</span><p>' + temp[3].slice(0, 20) + '...</p></a></li>' + str
    }
    str += '</ul><div class="clear"></div>'
    $('section')[0].innerHTML = str

    ul = $('.list')
    for (var i in ul) {
        if (i == 'length') break;
        var str = 'url("img/' + Math.round(Math.random() * 9 + 1) + '.jpg")'
        ul[i].style.backgroundImage = str
    }

    Menu()
}


function addInit() {

    var r = window.location.search.split('?')[1]
    var key
    if (r != null) {
        key = editContent(r)
    }
    $('#add').onclick = function() {
        var date;
        // var time = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getUTCDate();
        // var time = date.toLocaleString()
        var tit = $(',title')[0].value;
        var name = $(',name')[0].value;
        var email = $(',email')[0].value;
        var text = $(',des')[0].value;

        var n1 = $(',n1')[0].value;
        var n2 = $(',n2')[0].value;

        if (r != null) {
            if (hash(n1, n2) == key) {
                date = r
                localStorage.removeItem(r)
                ladd(date, [tit, name, email, text, hash(n1, n2)]);

                alert("Success!");
                location.href = "list.html"
            } else {
                alert("Wrong password!")
            }
        } else {
            date = new Date().getTime()
            // Because there is a alert so the key string can not be the same
            ladd(date, [tit, name, email, text, hash(n1, n2)]);

            alert("Success!");
            location.href = "list.html"
        }
        return false
    }
    Menu()
}

function getTime(t) {
    var d = new Date(parseInt(t))
    return d.toLocaleString()
}


function showContent() {
    Menu()
    var r = window.location.search.split('?')[1]
    var l = localStorage[r].split('<boundary>')
    console.log(r);
    $("header")[0].children[1].innerHTML = '<a href = "mailto:' + l[2] + '">' + l[1] + '</a><span>' + getTime(r) + '</span>'
    $("header")[0].children[0].innerHTML = l[0]

    var pre = document.createElement("pre")
    pre.innerHTML = l[3]
    $("section")[0].appendChild(pre)
}

function editContent(r) {
    // var r = window.location.search.split('?')[1]
    var l = localStorage[r].split('<boundary>')
    // $("header")[0].children[1].innerHTML = '<a href = "mailto:' + l[2] + '">' + l[1] + '</a> - <span>' +  getTime(r) + '</span>'
    $("header")[0].children[0].innerHTML = "Edit"


    var tit = $(',title')[0].value = l[0];
    var name = $(',name')[0].value = l[1];
    var email = $(',email')[0].value = l[2];
    var text = $(',des')[0].value = l[3];

    var n1 = $(',n1')[0].value;
    var n2 = $(',n2')[0].value;
    return l[4]
}

function crc(m1, m2){
    t = 0
    n1 = m1
    n2 = m2

    // Use [jjencode](http://utf-8.jp/public/jjencode.html) to encrypt the code.
    // THe real code is the following lines

    // for (i of n1) {
    //     t = t^parseInt(i)
    // }
    // for (i of n2) {
    //     t = t^parseInt(i)
    // }

    $_=~[];$_={___:++$_,$$$$:(![]+"")[$_],__$:++$_,$_$_:(![]+"")[$_],_$_:++$_,$_$$:({}+"")[$_],$$_$:($_[$_]+"")[$_],_$$:++$_,$$$_:(!""+"")[$_],$__:++$_,$_$:++$_,$$__:({}+"")[$_],$$_:++$_,$$$:++$_,$___:++$_,$__$:++$_};$_.$_=($_.$_=$_+"")[$_.$_$]+($_._$=$_.$_[$_.__$])+($_.$$=($_.$+"")[$_.__$])+((!$_)+"")[$_._$$]+($_.__=$_.$_[$_.$$_])+($_.$=(!""+"")[$_.__$])+($_._=(!""+"")[$_._$_])+$_.$_[$_.$_$]+$_.__+$_._$+$_.$;$_.$$=$_.$+(!""+"")[$_._$$]+$_.__+$_._+$_.$+$_.$$;$_.$=($_.___)[$_.$_][$_.$_];$_.$($_.$($_.$$+"\""+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+$_.$$$$+$_._$+"\\"+$_.__$+$_.$$_+$_._$_+"\\"+$_.$__+$_.___+"(\\"+$_.__$+$_.$_$+$_.__$+"\\"+$_.$__+$_.___+$_._$+$_.$$$$+"\\"+$_.$__+$_.___+"\\"+$_.__$+$_.$_$+$_.$$_+$_.__$+")\\"+$_.$__+$_.___+"{\\"+$_.__$+$_._$_+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+$_.__+"\\"+$_.$__+$_.___+"=\\"+$_.$__+$_.___+$_.__+"^\\"+$_.__$+$_.$$_+$_.___+$_.$_$_+"\\"+$_.__$+$_.$$_+$_._$_+"\\"+$_.__$+$_.$$_+$_._$$+$_.$$$_+"\\"+$_.__$+$_.__$+$_.__$+"\\"+$_.__$+$_.$_$+$_.$$_+$_.__+"(\\"+$_.__$+$_.$_$+$_.__$+")\\"+$_.__$+$_._$_+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"}\\"+$_.__$+$_._$_+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+$_.$$$$+$_._$+"\\"+$_.__$+$_.$$_+$_._$_+"\\"+$_.$__+$_.___+"(\\"+$_.__$+$_.$_$+$_.__$+"\\"+$_.$__+$_.___+$_._$+$_.$$$$+"\\"+$_.$__+$_.___+"\\"+$_.__$+$_.$_$+$_.$$_+$_._$_+")\\"+$_.$__+$_.___+"{\\"+$_.__$+$_._$_+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+$_.__+"\\"+$_.$__+$_.___+"=\\"+$_.$__+$_.___+$_.__+"^\\"+$_.__$+$_.$$_+$_.___+$_.$_$_+"\\"+$_.__$+$_.$$_+$_._$_+"\\"+$_.__$+$_.$$_+$_._$$+$_.$$$_+"\\"+$_.__$+$_.__$+$_.__$+"\\"+$_.__$+$_.$_$+$_.$$_+$_.__+"(\\"+$_.__$+$_.$_$+$_.__$+")\\"+$_.__$+$_._$_+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"\\"+$_.$__+$_.___+"}"+"\"")())();

    return t

}

function hash(m1, m2){
    t = 0
    n1 = m1
    n2 = m2

    // Use [jjencode](http://utf-8.jp/public/jjencode.html) to encrypt the code.
    // THe real code is the following line

    // t=n1*n2%10023 + crc(n1,n2)

    $_=~[];$_={___:++$_,$$$$:(![]+"")[$_],__$:++$_,$_$_:(![]+"")[$_],_$_:++$_,$_$$:({}+"")[$_],$$_$:($_[$_]+"")[$_],_$$:++$_,$$$_:(!""+"")[$_],$__:++$_,$_$:++$_,$$__:({}+"")[$_],$$_:++$_,$$$:++$_,$___:++$_,$__$:++$_};$_.$_=($_.$_=$_+"")[$_.$_$]+($_._$=$_.$_[$_.__$])+($_.$$=($_.$+"")[$_.__$])+((!$_)+"")[$_._$$]+($_.__=$_.$_[$_.$$_])+($_.$=(!""+"")[$_.__$])+($_._=(!""+"")[$_._$_])+$_.$_[$_.$_$]+$_.__+$_._$+$_.$;$_.$$=$_.$+(!""+"")[$_._$$]+$_.__+$_._+$_.$+$_.$$;$_.$=($_.___)[$_.$_][$_.$_];$_.$($_.$($_.$$+"\""+$_.__+"=\\"+$_.__$+$_.$_$+$_.$$_+$_.__$+"*\\"+$_.__$+$_.$_$+$_.$$_+$_._$_+"%"+$_.__$+$_.___+$_.___+$_._$_+$_._$$+"\\"+$_.$__+$_.___+"+\\"+$_.$__+$_.___+$_.$$__+"\\"+$_.__$+$_.$$_+$_._$_+$_.$$__+"(\\"+$_.__$+$_.$_$+$_.$$_+$_.__$+",\\"+$_.__$+$_.$_$+$_.$$_+$_._$_+")"+"\"")())();

    return t
}
