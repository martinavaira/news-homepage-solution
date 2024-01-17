const menuSection = document.getElementById('box-1__menu')
const filterSection = document.getElementById('filter')

function openMenu() {
    menuSection.style.display = 'flex'
    filterSection.style.display = 'flex'
}

function closeMenu() {
    menuSection.style.display = 'none'
    filterSection.style.display = 'none'
}
