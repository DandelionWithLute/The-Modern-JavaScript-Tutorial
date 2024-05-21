// Most things I don't really know before.
console.log("https://javascript.info/modules-dynamic-imports");

// First, we can’t dynamically generate any parameters of import.
// import ... from getModuleName(); // Error, only from "string" is allowed

// Second, we can’t import conditionally or at run-time:
//
// if(...) {
//   import ...; // Error, not allowed!
// }
// {
//   import ...; // Error, we can't put import in any block
// }

let modulePath = prompt("Which module to load?");
// import(modulePath)
//   .then(obj => <module object>)
//   .catch(err => <loading error, e.g. if no such module>)

let { hi, bye } = await import("./say.js");
//
hi();
bye();

// <!doctype html>
// <script>
//   async function load() {
//     let say = await import('./say.js');
//     say.hi(); // Hello!
//     say.bye(); // Bye!
//     say.default(); // Module loaded (export default)!
//   }
// </script>
// <button onclick="load()">Click me</button>

// Please note:
// Dynamic imports work in regular scripts, they don’t require script type="module".

// Although import() looks like a function call,
//  it’s a special syntax that just happens to use parentheses (similar to super()).

// So we can’t copy import to a variable or use call/apply with it. It’s not a function.
