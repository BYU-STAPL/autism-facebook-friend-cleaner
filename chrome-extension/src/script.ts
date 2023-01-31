let userInfo: { [name: string]:object } = {}

const scrollToBottom = () => {
    const sidebarXPath = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div";

    const sidebar = document.evaluate(sidebarXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    let elements;
    setInterval(() => {
        // @ts-ignore
        elements = Array.prototype.slice.call(sidebar.querySelectorAll("div"));
        if (elements.length > 0) {
            let lastElement = elements[elements.length - 1];
            lastElement.scrollIntoView();
            console.log("I got this element");
        }
        setTimeout(() => {
            // @ts-ignore
            let newElements = Array.prototype.slice.call(sidebar.querySelectorAll("div"));
            if (newElements.length > elements.length) {
                let lastElement = newElements[newElements.length - 1];
                lastElement.scrollIntoView();
                console.log("I got this element");
            }
        }, 500);
    }, 1000);
}

const getUserInfo: (userElement: HTMLElement) => [string, number | null] = function (
    userElement: HTMLElement
): [string, number | null] {
    const username = userElement.getElementsByTagName("a")[0].href.substring(25);
    const mutualFriendsXPath = "/a/div[1]/div[2]/div[1]/div/div/div[2]/span/div/div/span/div/span";
    const mutualFriendsElement = document.evaluate(mutualFriendsXPath, userElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    let numFriends: number | null = null;
    if (mutualFriendsElement !== null) {
        const friendsString = (mutualFriendsElement as HTMLSpanElement).innerHTML;
        numFriends = parseInt(friendsString.substring(0, friendsString.length - 15));
    }

    return [username, numFriends];
}


const addScrollButton = () => {
    const button = document.createElement("Button");
    button.innerHTML = "Scroll To Bottom of Friends List";
    button.setAttribute("style", "bottom:0;right:0;position:absolute;z-index: 9999");
    button.onclick = scrollToBottom;
    document.body.appendChild(button);
}


const addDropDown = () => {
    const sidebarTitleSelector = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div/div[1]/div[2]";
    const sidebarTitle = document.evaluate(sidebarTitleSelector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLElement;

    const dropDown = document.createElement("select");
    sidebarTitle.after(dropDown);
    const newOption = document.createElement("option");
    newOption.text = "All Friends";
    newOption.value = "1";
    dropDown.add(newOption);
    const newOption1 = document.createElement("option");
    newOption1.text = "Probably Real Friends";
    newOption1.value = "2";
    dropDown.add(newOption1);
    const newOption2 = document.createElement("option");
    newOption2.text = "Probably Fake Friends";
    newOption2.value = "3";
    dropDown.add(newOption2);
}

const populateUserInfo = async () => {
    const userRowsXPath = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div/div[position()>3]";

    const userRows = document.evaluate(userRowsXPath, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    let userRow = null;
    while (userRow = userRows.iterateNext()) {
        let [username, mutualFriends] = getUserInfo(userRow as HTMLElement);
        userInfo[username] = {"numMutualFriends": mutualFriends}
    }

    const usernames: string[] = [];
    for (let username in userInfo) {
        usernames.push(username);
    }

    const response = await fetch('https://stapl.cs.byu.edu/fb_user_info', {method: 'POST', body: {"users": usernames}});
    const data = await response.json();
    if (response.ok) {
        // TODO put info from `data` into `userInfo`
    } else {
        // TODO handle error
    }
}

const scrollToTop = () => {
    // TODO
}

const initialize = () => {
    addDropDown();
    scrollToBottom();
    populateUserInfo().then(_ => true);
    scrollToTop();
}

initialize();
