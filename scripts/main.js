const links = document.querySelectorAll("a");
const text = document.querySelectorAll("body > h1, body > p");
let i = 0;

function transitionLinks()
{
    setTimeout(function()
    {
        links[i].style.transition = "300ms ease";
        links[i].style.opacity = "1";
        links[i].style.transform = "perspective(1000px)";
        i++;
        if (i < links.length) transitionLinks();
    }, 40);
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

setTimeout(function ()
{
    i = 0;
    transitionText();
}, 200);
setTimeout(function ()
{
    i = 0;
    transitionLinks();
}, 600);

VanillaTilt.init(links,
    {
        max: 5,
        speed: 500,
        scale: 1.07,
        glare: true,
        "max-glare": .2,
        gyroscope: false
    });