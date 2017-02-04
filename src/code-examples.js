//------------------------------------------------------------------------

var $ = require('jquery');

$('body').append('<h1>Hello!</h1>');

//------------------------------------------------------------------------

var tcc = require('to-capital-case');

document
    .getElementsByTagName('span')[0]
        .innerText = tcc('i want to be capital case!');

//------------------------------------------------------------------------

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

//------------------------------------------------------------------------
