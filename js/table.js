function ladd(key, val) {
    localStorage[key] = val
}

function lremove(key) {
    localStorage.removeItem(key)
    location.reload()
}

function removeAll(){
    localStorage.clear()
    location.reload()
}

function displayTable() {
    var str = '<table border=1 ><tr><th>Time</th><th>Title</th><th>Author</th><th>Email</th><th colspan=2>Operation</th></tr>'
    for (var i in localStorage) {
        var temp = localStorage[i].split(',')
        str += '<tr><td>' + i + '</td><td>' + temp[0] + '</td><td>' + temp[1] + '</td><td>' + temp[2] + '</td><td class="normal tdbutton">Edit</td><td class="delete tdbutton" onclick="lremove(\''+i+'\')">Delete</td></tr>'
    }
    str += '</table>'
    str += '<button onclick="removeAll()">Clear All</button>'
    $('section')[0].innerHTML = str

    Menu()
}

function displayList() {
    var str = '<ul>'
    for (var i in localStorage) {
        var temp = localStorage[i].split(',')
        str = '<li class="list"><a href="#"><h3>'+temp[0]+'</h3><span>'+i+'</span><p>'+temp[3].slice(0,20)+'...</p></a></li>' + str
    }
    str += '</ul><div class="clear"></div>'
    $('section')[0].innerHTML = str

    ul = $('.list')
    for (var i in ul) {
        if(i=='length') break;
        var str = 'url("img/'+Math.round(Math.random()*9+1)+'.jpg")'
        ul[i].style.backgroundImage = str
    }

    Menu()
}


function addInit() {
    $('button')[0].onclick = function(){
        var date = new Date()
        // var time = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getUTCDate();
        var time = date.toLocaleString()
        var tit = $(',title')[0].value;
        var name = $(',name')[0].value;
        var email = $(',email')[0].value;
        var text = $(',des')[0].value;

        var n1 = $(',n1')[0].value;
        var n2 = $(',n2')[0].value;
        // Because there is a alert so the key string can not be the same
        ladd(time, [tit, name, email, text, hash(n1,n2)]);
        alert("Success!");
        return false
    }
    Menu()
}

function crc(n1, n2){
    var t = 0
    for (i of n1) {
        t = t^parseInt(i)
    }
    for (i of n2) {
        t = t^parseInt(i)
    }
    return t
}

function hash(n1, n2){
    var t = n1*n2%1023 + crc(n1,n2)
}
