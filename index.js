const links = document.querySelectorAll("a");
const text = document.querySelectorAll("body > h1, body > p");
let i = 0;

function transitionLinks()
{
    setTimeout(function()
    {
        links[i].style.opacity = "1";
        links[i].style.transform = "none";
        i++;
        if (i < links.length) transitionLinks();
    }, 30);
}

function transitionText()
{
    setTimeout(function()
    {
        text[i].style.opacity = "1";
        i++;
        if (i < text.length) transitionText();
    }, 80);
}

transitionText();
setTimeout(function ()
{
    i = 0;
    transitionLinks();
}, 500);