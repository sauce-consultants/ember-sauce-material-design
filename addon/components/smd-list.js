import Ember from 'ember';
import layout from '../templates/components/smd-list';

export default Ember.Component.extend({
  layout,
  classNames: ['smd-list'],
  tagName: 'div',
  hasSubheadings: false,
  // Methods
  didRender: function() {
    this._super(...arguments);
    if (this.get('hasSubheadings')) {
      this.initStickySubheadings();
    }
  },
  initStickySubheadings: function() {
    var $list = this.$(),
      $scroll = $list.find('.smd-list__scroll'),
      currentScrollTop = 0,
      lastScrollTop = 0;

    // When the first header is given a fixed position,
    // the inline content that follows with shift up.
    var $firstSubheader = $list.find('.smd-subheader').first();
    var $stickyHeader = $firstSubheader.clone(false);

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

    var listPaddingTop = 48;

    $scroll.scroll(function() {
      var currentScrollTop = Ember.$(this).scrollTop(),
        $currentSubheader = $list.find('.smd-subheader--sticky'),
        $nextSubheader,
        $prevSubheader;


      if (currentScrollTop > lastScrollTop) {
        $nextSubheader = $currentSubheader.nextUntil('.smd-subheader').next('.smd-subheader');
        if ($nextSubheader.length) {
          var diff = $nextSubheader.offset().top - $list.offset().top,
            subHeight = $currentSubheader.outerHeight();

          if ($list.offset().top > $nextSubheader.offset().top) {
            $currentSubheader.removeClass('smd-subheader--sticky');
            $nextSubheader.addClass('smd-subheader--sticky');
            $currentSubheader.css('top', '');
          } else if (diff < subHeight) {
            // This is where we make the next subheader push the current
            // subheader off screen
            var top = diff - subHeight;
            $currentSubheader.css('top', top);
          }
        }
      } else {
        $prevSubheader = $currentSubheader.prevUntil('.smd-subheader').prev('.smd-subheader');
        $nextSubheader = $currentSubheader.nextUntil('.smd-subheader').next('.smd-subheader');
        var $lastItem = $currentSubheader.next(),
          subHeight = parseInt($currentSubheader.outerHeight()),
          lastItemOffset = $lastItem.offset().top - subHeight,
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

      lastScrollTop = currentScrollTop;
    });
  },
});
