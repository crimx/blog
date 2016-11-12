/*!
 * SCRIPT
 */

/* global $ */

$(document).ready(function () {
  var $window = $(window)
  var mainContentTop = $('.main-content').offset().top

/* ------------------------------------ *\
   MENU ICON SHOWS & HIDES
\* ------------------------------------ */
  var $menuIcon = $('.menu-icon')

  var isMenuSemiShow = false

  $window.scroll(function () {
    // main content shows
    if ($window.scrollTop() >= mainContentTop) {
      if (!isMenuSemiShow) {
        isMenuSemiShow = true
        $menuIcon.addClass('menu-icon--show menu-icon--semi-show')
        window.setTimeout(function () {
          $menuIcon.removeClass('menu-icon--show')
        }, 500)
      }
    } else { // cover shows
      if (isMenuSemiShow) {
        $menuIcon.removeClass('menu-icon--semi-show')
        isMenuSemiShow = false
      }
    }
  })

/* ------------------------------------ *\
   MENU SHOWS & HIDES
\* ------------------------------------ */
  var $siteMenu = $('.site-menu')
  var $siteMenuMask = $('.site-menu-mask')

  // disables scrolling when menu shows up
  $siteMenu.on('touchmove doubleTap', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
  })

  $siteMenuMask.on('touchmove', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
  })
  .on('tap', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
    if (evt.target === evt.currentTarget) {
      $siteMenuMask.removeClass('site-menu-mask--show')
      $siteMenu.removeClass('site-menu--show')
    }
  })

  $menuIcon.on('tap swipeRight', function (evt) {
    evt.preventDefault()
    evt.stopPropagation()
    $siteMenuMask.addClass('site-menu-mask--show')
    $siteMenu.addClass('site-menu--show')
  })
})
