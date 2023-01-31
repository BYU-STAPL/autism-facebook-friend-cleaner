const scrollToBottom = () => {
  const s = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/div[2]/div";

  const sidebar = document.evaluate(s, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  console.log("got sidebar");

  let elements;
  const interval = setInterval(() => {
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
  const link = userElement.getElementsByTagName("a")[0].href;
  const username = link.substring(25);
  const s = "/a/div[1]/div[2]/div[1]/div/div/div[2]/span/div/div/span/div/span";
  const mutualFriendsElement = document.evaluate(s, userElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  let numFriends: number | null = null;
  if (mutualFriendsElement !== null) {
    const friendsString = (mutualFriendsElement as HTMLSpanElement).innerHTML;
    numFriends = parseInt(friendsString.substring(0, friendsString.length - 15));
  }

  return [username, numFriends];
}


const addScrollButton = ()  => {
  var button = document.createElement("Button");
  button.innerHTML = "Scroll To Bottom of Friends List";
  button.setAttribute("style", "bottom:0;right:0;position:absolute;z-index: 9999");
  button.onclick = scrollToBottom;
  document.body.appendChild(button);
}


const addDropDown = ()  => {
  const s = "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div/div[1]/div[2]";
  const sidebarTitle = document.evaluate(s, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLElement;

  var dropDown = document.createElement("select");
  sidebarTitle.after(dropDown);
  var newOption = document.createElement("option")
  newOption.text="All Friends";
  newOption.value="1";
  dropDown.add(newOption);
  var newOption1 = document.createElement("option")
  newOption1.text="Probably Real Friends";
  newOption1.value="1";
  dropDown.add(newOption1);
  var newOption2 = document.createElement("option")
  newOption2.text="Probably Fake Friends";
  newOption2.value="1";
  dropDown.add(newOption2);

}

addScrollButton();
addDropDown();

