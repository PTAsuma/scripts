document.body.onkeydown = function() {
    if (event.keyCode == 67) {
        var coords2 = document.getElementById('coords').innerHTML
        var coords = coords2.replace(/ /g,'')
        var chati = document.getElementById('chat').value
        var x = coords.substring(coords.indexOf(":") + 1, coords.indexOf("Y"))
        var y = coords.substring(coords.lastIndexOf(":") + 1, coords.length)
        if (chati.includes('[' && ']')) {
            document.getElementById('chat').value = document.getElementById('chat').value.replace(/\[\d+ \d+\]/, `[${x} ${y}]`);

        } else {
            document.getElementById('chat').value += ` [${x} ${y}]`
        }
    }
}
