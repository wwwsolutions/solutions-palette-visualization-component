class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.ham');
    this.header = document.querySelector('.header');
    this.menuContent = document.querySelector('.header__menu-content');
    this.events();
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.header.classList.toggle('header--is-expanded');
    this.menuContent.classList.toggle('header__menu-content--is-visible');
    this.menuIcon.classList.toggle('active');
  }
}

export default MobileMenu;