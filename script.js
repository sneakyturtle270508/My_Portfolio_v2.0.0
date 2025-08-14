/**
 * @Author: William Berge Groensberg
 * @Date:   2025-05-25 00:15:50
 * @Last Modified by:   William Berge Groensberg
 * @Last Modified time: 2025-07-15 22:56:37
 */

// made with chatgpt to make the animations and the menu toggle smooth and easy

// Wait for the document to be fully loaded
$(document).ready(function () {
  // When the element with class 'menu-toggle' is clicked
  $(".menu-toggle").click(function () {
    // Toggle the 'menu-open' class on the menu toggle button
    $(".menu-toggle").toggleClass("menu-open");
    // Toggle the 'active' class on the menu
    $(".menu").toggleClass("active");
  });
  // When any element with class 'link' is clicked
  $(".link").click(function () {
    // Toggle the 'menu-open' class on the menu toggle button
    $(".menu-toggle").toggleClass("menu-open");
    // Toggle the 'active' class on the menu
    $(".menu").toggleClass("active");
  });
  // When the element with class 'videoOne' is clicked
  $(".videoOne").click(function () {
    // Toggle the 'active' class on the overlay for video one
    $(".overlayOne").toggleClass("active");
  });
  // When the element with class 'videoTwo' is clicked
  $(".videoTwo").click(function () {
    // Toggle the 'active' class on the overlay for video two
    $(".overlayTwo").toggleClass("active");
  });
  // When the element with class 'videoThree' is clicked
  $(".videoThree").click(function () {
    // Toggle the 'active' class on the overlay for video three
    $(".overlayThree").toggleClass("active");
  });
  // When the element with class 'videoFour' is clicked
  $(".videoFour").click(function () {
    // Toggle the 'active' class on the overlay for video four
    $(".overlayFour").toggleClass("active");
  });
  $(".videofive").click(function () {
    // Toggle the 'active' class on the overlay for video four
    $(".overlayfive").toggleClass("active");
  });
  // When the element with class 'closeOverlayOne' is clicked
  $(".closeOverlayOne").click(function () {
    // Toggle the 'active' class on the overlay for video one
    $(".overlayOne").toggleClass("active");
  });
  // When the element with class 'closeOverlayTwo' is clicked
  $(".closeOverlayTwo").click(function () {
    // Toggle the 'active' class on the overlay for video two
    $(".overlayTwo").toggleClass("active");
  });
  // When the element with class 'closeOverlayThree' is clicked
  $(".closeOverlayThree").click(function () {
    // Toggle the 'active' class on the overlay for video three
    $(".overlayThree").toggleClass("active");
  });
  // When the element with class 'closeOverlayFour' is clicked
  $(".closeOverlayFour").click(function () {
    // Toggle the 'active' class on the overlay for video four
    $(".overlayFour").toggleClass("active");
  });
   $(".closeOverlayfive").click(function () {
    // Toggle the 'active' class on the overlay for video four
    $(".overlayfive").toggleClass("active");
  });
});
