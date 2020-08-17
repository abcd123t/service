(function(a) {
  a.fn.placeholder = function(d) {
    var b = jQuery.extend({
        onFocus: "focused",
        onChange: !1,
        onBlur: !1,
        placeholderSupport: "placeholder" in document.createElement("input")
      }, d),
      c = function() {
        return !("" == a.trim(a(this).val()) || a(this).val() == a(this).attr("placeholder"))
      };
    this.each(function() {
      b.onBlur && a(this).addClass(b.onBlur);
      !b.placeholderSupport && !c.call(this) && a(this).val(a(this).attr("placeholder"));
      b.onChange && c.call(this) && a(this).addClass(b.onChange);
      a(this).bind("focus", function() {
        !b.placeholderSupport &&
          a(this).val() == a(this).attr("placeholder") && a(this).val("");
        b.onFocus && a(this).addClass(b.onFocus);
        b.onBlur && a(this).removeClass(b.onBlur)
      }).bind("blur", function() {
        !b.placeholderSupport && !c.call(this) && a(this).val(a(this).attr("placeholder"));
        b.onFocus && a(this).removeClass(b.onFocus);
        b.onBlur && a(this).addClass(b.onBlur);
        b.onChange && c.call(this) ? a(this).addClass(b.onChange) : a(this).removeClass(b.onChange)
      })
    });
    return this
  }
})(jQuery);