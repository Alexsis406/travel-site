import $ from 'jquery';

class MobileMenu {
  constructor () {

    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");

    this.events();

  }

  events() {

    this.menuIcon.click(this.toggleTheMenu.bind(this));


    // console.log(this);

  }

  toggleTheMenu() {

    // console.log("I'm a man of many many many BLOP!");
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    console.log(this);

  }

}

export default MobileMenu;

// We interapt this broadcast to inject some sense in all of this:
// so:
//
// var obj = {num:2};
//
// var addToThis = function(a, b, c) {
//
//   return this.num + a + b + c;
//
// };
//
// console.log (addToThis.call(obj, 3, 3, 4)); //functionname.call(obj, functionargument)
