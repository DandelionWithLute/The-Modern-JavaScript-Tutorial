// WeakRef – is an object, that contains a weak reference to another object,
//  called target or referent.
function cleanupCallback(heldValue) {
  // cleanup callback code
}

const registry = new FinalizationRegistry(cleanupCallback);

let user = { name: "John" };

const registry2 = new FinalizationRegistry((heldValue) => {
  console.log(`${heldValue} has been collected by the garbage collector.`);
});
 
// Example №1: using WeakRef for caching

function fetchImg() {
    // abstract function for downloading images...
}

function weakRefCache(fetchImg) { // (1)
    const imgCache = new Map(); // (2)

    return (imgName) => { // (3)
        const cachedImg = imgCache.get(imgName); // (4)

        if (cachedImg?.deref()) { // (5)
            return cachedImg?.deref();
        }

        const newImg = fetchImg(imgName); // (6)
        imgCache.set(imgName, new WeakRef(newImg)); // (7)

        return newImg;
    };
}

const getCachedImg = weakRefCache(fetchImg);