//toggle mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.getElementById('menu');
var media1 = window.innerWidth;
var media2 = window.matchMedia('(min-width: 640px');

 //hide menu if window loads in mobile size
function hideMenu() {
    var url = location.href.split('/');
    loc = url[url.length -1];
    if (media1 < 640 && loc == 'index.html') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}
hideMenu();
 //menu toggle for mobile
function toggleMenu() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
        toggle.querySelector('a').innerHTML = '<i class="fas fa-times">';
    } else {
        menu.style.display = 'none';
        toggle.querySelector('a').innerHTML = '<i class="fas fa-caret-square-down"></i>';
    }
} 
toggle.addEventListener('click', toggleMenu, false)

 //show menu by default above 640px width
function mediaMenuWide(e) {
    if (e.matches) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
        toggle.querySelector('a').innerHTML = '<i class="fas fa-caret-square-down"></i>';
    }
}
media2.addListener(mediaMenuWide);

//puts current year in copyright
var x = new Date();
var y = x.getFullYear();
const copyrightYear = document.getElementById('copyright');
copyrightYear.innerHTML = `© ${y}`;

//highlight current page in navbar
function navHighlight(elem, home, active) {
    var url = location.href.split('/');         //splits CURRENT url at /
        loc = url[url.length -1];               //loc = last split part of url
        link = document.querySelectorAll(elem); //selects all menu link elements on page
    for (var i = 0; i < link.length; i++) {     //loops through all links on page
        var path = link[i].href.split('/');     //assigns split link url in loop to path
            page = path[path.length -1];        //page = last split part of link url
        if (page == loc || page == home && loc == '') { //if loop finds current page OR page is home and there is no /link.html
            link[i].className += ' ' + active; //adds 'active' (.current) class to 
                                                            //to current page menu item
            //document.body.className += ' ' + page.substr(0, page.lastIndexOf('.'));                                           
            }
        }
    }
navHighlight('.menu a', 'index.html', 'current'); /* menu link selector, home page, highlight class */