// js enable

document.documentElement.classList.add( 'js' );
console.log( document.documentElement );

// burger

let trigger = document.querySelector( '#trigger' );
let menu = document.querySelector( '#menu' );

function triggerEvent() {
  let isExpanded = trigger.getAttribute( 'aria-expanded' ) == "true" ? true : false;

  if ( isExpanded )
    closeMenu();
  else 
    openMenu()
}

function openMenu() {
  trigger.setAttribute( 'aria-expanded', "true" );
  menu.classList.add( 'open' );
}

function closeMenu() {
  trigger.setAttribute( 'aria-expanded', "false" );
  menu.classList.remove( 'open' );
}

trigger.addEventListener( 'click', triggerEvent );