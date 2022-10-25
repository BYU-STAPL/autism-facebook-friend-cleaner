console.log("Getting name elements")
const friendRows = document.getElementsByClassName("x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k x1qughib xdj266r x11i5rnm xat24cr x1mh8g0r xeuugli xexx8yu x18d9i69 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1sxyh0 xurb0ha x1gg8mnh") as HTMLCollectionOf<HTMLLinkElement>;
console.log("Starting loop through names");
for (const friendRow of friendRows) {
    const imageMask = friendRow.getElementsByTagName("mask").item(0)
    if (imageMask != null) {
        console.log("Mask id: " + imageMask.id);
    }
    if (imageMask != null && imageMask.id === "jsc_c_5b") {
        console.log("Changing a name");
        friendRow.style.backgroundColor = "red";
    }
    // friendRow.innerHTML = friendRow.innerHTML + " IS YOUR FRIEND";
}
console.log("Finished changing names");
