import $ from 'jquery';

export function loadLoader() {
    $(document).ready(function () {
        $('.show-menu').sideNav({
            menuWidth: 250, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, // Choose whether you can drag to open on touch screens,
            onOpen: function (el) {
            }, // A function to be called when sideNav is opened
            onClose: function (el) {
            }, // A function to be called when sideNav is closed
        });
    });
}