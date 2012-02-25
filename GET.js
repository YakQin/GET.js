/*
  GET.js v0.1
  Copyright (c) 2012, Mickaël Raybaud-Roig
  All rights reserved.
  Licensed under the BSD 3-clause license, see the COPYING file for details.
//*/

function parseQuery(url) {
    "use strict";
    var query = url.split("?", 2)[1],
        result = {},
        params = query.split("&"),
        i = 0;

    for (i = 0; i < params.length; i++) {
        var param = params[i].split("=", 2);
        result[param[0].toLowerCase()] = param[1];
    }

    return result;
}

(function (url) {
    "use strict";
    window.$_GET = parseQuery(url);
})(document.location.search);
