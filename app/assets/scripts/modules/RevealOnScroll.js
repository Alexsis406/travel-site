import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {

  constructor(els, offset) {

    // The order is matter! take note that offsetPercentage
    // needs to be declared before createWaypoints.

    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWayPoints();

  }

  hideInitially () {

      this.itemsToReveal.addClass("reveal-item");

  }

  createWayPoints () {

        this.itemsToReveal.each(function (){

    let that = this;
    let currentItem = this;

    new Waypoint({
      element: currentItem,
      handler: function (direction){

        $(currentItem).addClass("reveal-item--is-visible");

      },
      offset: that.offsetPercentage
      //the precentage of the viewport which is visible
      // before the items would appear on screen.

    });

  });

};

};

export default RevealOnScroll
