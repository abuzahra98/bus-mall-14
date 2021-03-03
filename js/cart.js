/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById( 'cart' );
table.addEventListener( 'click', removeItemFromCart );
let cart;

function loadCart() {
  const cartItems = JSON.parse( localStorage.getItem( 'cart' ) ) || [];
  cart = new Cart( cartItems );
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { }

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
let clear = document.getElementsByTagName( 'tbody' )[0];
clear.innerHTML = '';
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  console.log( cart.items );
  for ( let i = 0; i < cart.items.length; i++ ) {
    let tablerow = document.createElement( 'tr' );
    tablerow.appendChild( deletedItem );
    tablerow.appendChild( quantity );
    tablerow.appendChild( itemElement );

    let removeItem = document.createElement( 'a' );
    removeItem.textContent = 'Remove Item';
    removeItem.setAttribute( 'href', '#' );
    removeItem.setAttribute( 'abbr', cart.items[i].product );

    let quantity = document.createElement( 'td' );
    let itemElement = document.createElement( 'td' );
    let deletedItem = document.createElement( 'td' );
    deletedItem.appendChild( removeItem );

    quantity.textContent = cart.items[i].product;
    itemElement.textContent = cart.items[i].product;
    tablebody.appendChild( tr );
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
