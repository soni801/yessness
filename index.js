const links = document.querySelectorAll("a");

let i = 0;
function setVisible()
{
    setTimeout(function()
    {
        links[i].style.opacity = "1";
        links[i].style.transform = "none";
        i++;
        if (i < links.length) setVisible();
    }, 30);
}

setVisible();