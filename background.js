// Define the context menu item ID
const CONTEXT_MENU_ID = "repeat-text-context-menu";

// Create the context menu item
chrome.contextMenus.create({
  id: CONTEXT_MENU_ID,
  title: "Repeat Text",
  contexts: ["selection"],
});

// Add an event listener for the context menu item
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === CONTEXT_MENU_ID) {
    const selectedText = info.selectionText;
    console.log(selectedText);
  }
});








