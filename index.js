const welcome = document.querySelectorAll("#welcome h1");
const links = document.querySelectorAll("a");
const text = document.querySelectorAll("body > h1, body > p");
let i = 0;

function transitionWelcomeIn()
{
    setTimeout(function()
    {
        welcome[i].style.opacity = "1";
        welcome[i].style.transform = "none";
        i++;
        if (i < text.length) transitionWelcomeIn();
    }, 200);
}

function transitionWelcomeOut()
{
    setTimeout(function()
    {
        welcome[i].style.opacity = "0";
        welcome[i].style.transform = "translate(0, -1rem)";
        i++;
        if (i < text.length) transitionWelcomeOut();
    }, 200);
}

function transitionLinks()
{
    setTimeout(function()
    {
        links[i].style.transition = "300ms ease";
        links[i].style.opacity = "1";
        links[i].style.transform = "perspective(1000px)";
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

transitionWelcomeIn();
setTimeout(function ()
{
    i = 0;
    transitionWelcomeOut();
}, 1500);
setTimeout(function ()
{
    i = 0;
    transitionText();
}, 2400);
setTimeout(function ()
{
    i = 0;
    transitionLinks();
}, 2800);

VanillaTilt.init(links,
    {
        max: 5,
        speed: 500,
        scale: 1.07,
        glare: true,
        "max-glare": .2,
        gyroscope: false
    });