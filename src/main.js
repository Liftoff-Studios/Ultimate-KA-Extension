var x = document.cookie.split(";");
var fkey = "";
for (var i = 0; i < x.length; i++) {
    var z = x[i].split("=");
    if (z[0] === " fkey") {
        fkey = z[1];
    }
};

