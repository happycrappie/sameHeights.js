It's all from [Ben Howdle's website](http://benhowdle.im/easy-peasy-equal-heights.html). I just wanted to have it saved on a GitHub repo. Thanks, Ben!

# Making elements the same height

Sometimes you might have a need to grab a few elements, and then make them the same height. In an ideal world, you’d use CSS, but this isn’t an ideal world, so we must use JavaScript!

So drop this code in and you can achieve equal heights, really easily:

```javascript
    function sameHeights(selector) {
        var selector = selector || '[data-key="sameHeights"]',
            query = document.querySelectorAll(selector),
            elements = query.length,
            max = 0;
        if (elements) {
            while (elements--) {
                var element = query[elements];
                if (element.clientHeight > max) {
                    max = element.clientHeight;
                }
            }
            elements = query.length;
            while (elements--) {
                var element = query[elements];
                element.style.height = max + 'px';
            }
        }
    }
```

Stick this code anywhere on the page (or in a JavaScript file) to include it. To actually run it you can use the following markup:

```html
<div class="sameHeights">
    <div data-key="sameHeights"></div>
    <div data-key="sameHeights"></div>
    <div data-key="sameHeights"></div>
    <div data-key="sameHeights"></div>
    <div data-key="sameHeights"></div>
</div>
```

(the only important part is actually putting data-key=”sameHeights” on the elements you want the same height)

Then to initialise the code, drop this in below where you included the above JavaScript:

```javascript
    if ('addEventListener' in window) {
        window.addEventListener('resize', function(){
            sameHeights();
        });
        window.addEventListener('load', function(){
            sameHeights();
        });
    }
```

There we have it, the JavaScript will make all your elements equal heights!

You may have noticed we also initialise the plugin on window resizing as well, which means this’ll slot nicely into your responsive designs…

## What if I want multiple sets on a page?

Say you have the following HTML:

```html
<div class="sameHeights">
    <div data-key="sameHeights"></div>
    <div data-key="sameHeights"></div>
    <div data-key="sameHeights"></div>
    <div data-key="sameHeights"></div>
    <div data-key="sameHeights"></div>
</div>

<div class="otherSameHeights">
    <div data-key="otherSameHeights"></div>
    <div data-key="otherSameHeights"></div>
    <div data-key="otherSameHeights"></div>
    <div data-key="otherSameHeights"></div>
    <div data-key="otherSameHeights"></div>
</div>
```

to make the JavaScript work on both these groups independently, simply drop in this JS:

```javascript
    if ('addEventListener' in window) {
        // first group
        window.addEventListener('resize', function(){
            sameHeights('[data-key="sameHeights"]');
        });
        window.addEventListener('load', function(){
            sameHeights('[data-key="sameHeights"]');
        });

        // second group
        window.addEventListener('resize', function(){
            sameHeights('[data-key="otherSameHeights"]');
        });
        window.addEventListener('load', function(){
            sameHeights('[data-key="otherSameHeights"]');
        });
    }
```

and there we have it, multiple groups acted on and an equalised.

## What about the browsers, will somebody please think of the browsers?

This works in IE9 and above. If it’s below IE9, then the plugin just doesn’t run, it won’t error or anything awful like that.