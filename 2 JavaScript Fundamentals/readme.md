alert("")

If src is set, the script content is ignored.
<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>

Browser console
When you use a developer console to run code, please note that it doesn’t use strict by default.

Ensure that “use strict” is at the top
alert("some code");
// "use strict" below is ignored--it must be at the top
"use strict";
// strict mode is not activated

Once we enter strict mode, there’s no going back.

There are subtle differences between let and var, but they do not matter to us yet. We’ll cover them in detail in the chapter The old "var".
https://javascript.info/variables

subtle美/ ˈsʌt(ə)l / adj.不易察觉的

NaN not a number

unary a.一元的
negation n.反面、对立面

binary a. 二元的
subtract səbˈtrækt0 v.从一数中减去

Comparisons
https://javascript.info/comparison