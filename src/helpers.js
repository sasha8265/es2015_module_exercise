/** Choose random item */

function choice(items) {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
}


/** remove the first matching item from items, if item exists, and returns it. 
 * Otherwise returns undefined. */

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0,i), ...items.slice(i+1)]
        }
    }
}