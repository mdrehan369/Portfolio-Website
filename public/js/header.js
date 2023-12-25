
function showNav() {
    let nav = document.getElementsByTagName('nav');
let header = document.getElementsByTagName('header');

    if(header[0].style.height >= '11%') {
        header[0].style.height = '10%';
        nav[0].style.display = 'none';
    }else{
        header[0].style.height = '70%';
        nav[0].style.display = 'flex';
        nav[0].style.flexDirection = 'column';
        nav[0].style.alignItems = 'center';
        nav[0].style.backgroundColor = 'rgb(230, 230, 230)';
    }
}
