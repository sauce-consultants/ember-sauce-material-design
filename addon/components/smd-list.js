import Ember from 'ember';
import layout from '../templates/components/smd-list';

const {
  Component,
  computed: {
    bool
  },
} = Ember;

export default Component.extend({
  // Attributes
  layout,
  classNames: ['smd-list'],
  classNameBindings: [
    'scrollable:smd-list--scrollable',
    'sticky:smd-list--sticky',
  ],
  tagName: 'div',
  scrollable: false,
  sticky: false,
  lastScrollTop: 0,
  // Component
  isScrollable: bool('scrollable'),
  // Methods
  didInsertElement: function() {
    if (this.get('sticky')) {
      this.initScrollEvent();
    }
  },
  initScrollEvent: function() {

    var $list = this.$(),
      $scroll = $list.find('.smd-list__scroll');

    this.createSubHeaderClone($list);

    $scroll.scroll(() => {
      this.onScroll($scroll);
    });
  },
  onScroll: function($list) {

    var
      lastScrollTop = this.get('lastScrollTop'),
      currentScrollTop = $list.scrollTop(),
      $currentSubheader = $list.find('.smd-subheader--sticky'),
      $nextSubheader,
      $prevSubheader,
      diff,
      subHeight,
      top;

    if (currentScrollTop > lastScrollTop) {
      $nextSubheader = $currentSubheader.nextUntil('.smd-subheader').next('.smd-subheader');
      if ($nextSubheader.length) {
        diff = $nextSubheader.offset().top - $list.offset().top;
        subHeight = $currentSubheader.outerHeight();

        if ($list.offset().top > $nextSubheader.offset().top) {
          $currentSubheader.removeClass('smd-subheader--sticky');
          $nextSubheader.addClass('smd-subheader--sticky');
          $currentSubheader.css('top', '');
        } else if (diff < subHeight) {
          // This is where we make the next subheader push the current
          // subheader off screen
          top = diff - subHeight;
          $currentSubheader.css('top', top);
        }
      }
    } else {
      $prevSubheader = $currentSubheader.prevUntil('.smd-subheader').prev('.smd-subheader');
      $nextSubheader = $currentSubheader.nextUntil('.smd-subheader').next('.smd-subheader');

      subHeight = parseInt($currentSubheader.outerHeight());

      var $lastItem = $currentSubheader.next(),
        lastItemOffset = 0;

      if ($lastItem.length) {
        lastItemOffset = $lastItem.offset().top - subHeight;
      }

      diff = $list.offset().top - lastItemOffset;

      if ($prevSubheader.length) {
        if ($list.offset().top < lastItemOffset) {
          $currentSubheader.removeClass('smd-subheader--sticky');
          $prevSubheader.addClass('smd-subheader--sticky');
          $currentSubheader.css('top', '');
        }
      }
      // This is where we make the previous subheader push the current
      // subheader back on the list
      if ($nextSubheader.length) {
        if ($list.offset().top < $nextSubheader.offset().top) {
          diff = $nextSubheader.offset().top - $list.offset().top;
          if (diff >= 0 && diff < subHeight) {
            top = (subHeight - diff) * -1;
            $currentSubheader.css('top', top);
          } else if (diff > subHeight) {
            $currentSubheader.css('top', '');
          }
        }
      }
    }

    this.set('lastScrollTop', currentScrollTop);
  },
  createSubHeaderClone: function($list) {
    // When the first header is given a fixed position,
    // the inline content that follows with shift up.
    let $firstSubheader = $list.find('.smd-subheader').first(),
      $stickyHeader = $firstSubheader.clone(false);

    // To over come this: clone it, make it invisible,
    // remove id tags from it and its children, attach it before the original
    $stickyHeader
      .css({
        'visibility': 'hidden'
      })
      .removeAttr("id")
      .find("*")
      .removeAttr("id")
      .end();

    $firstSubheader.before($stickyHeader).addClass('smd-subheader--sticky');
  },
});
