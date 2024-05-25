// document.body inside <head></head> returns null
alert(document.documentElement.parentNode);
alert(document.documentElement.parentElement);

{/* <table>
  <tr> <td>Apple</td> <td>Banana</td> </tr>
  <tr> <td>Orange</td> <td>Mango</td> </tr>
</table> */}
// Table row table data



// Task2
// The sibling question
// If elem – is an arbitrary DOM element node…
// Is it true that elem.lastChild.nextSibling is always null?
// Is it true that elem.children[0].previousSibling is always null ?
// Yes, true. The element elem.lastChild is always the last one, it has no nextSibling.
// No, wrong, because elem.children[0] is the first child among elements.
//  But there may exist non-element nodes before it. So previousSibling may be a text node.