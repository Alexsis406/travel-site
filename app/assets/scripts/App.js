
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

let mobileMenu = new MobileMenu();
// var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonials"), "60%");
