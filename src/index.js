var spans = document.getElementsByTagName('span'),
    tcc = require('to-capital-case'),
    prettyMs = require('pretty-ms'),
    message = tcc('milliseconds translates to'),
    ms = 1337000000;

//update the DOM:
spans[0].innerText = ms;
spans[1].innerText = ' : ';
spans[2].innerText = tcc(message);
spans[3].innerText = prettyMs(ms);