Let menu = document.querySelector('#menu-icon');
Let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    navbar.classlist.toggle('open')
}