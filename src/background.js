// functions
const discardTab = (tab) => {
    let id = tab.id;
    console.log(`Discarding tab${id}`);
    browser.tabs.discard(id);
};
const discardAllOtherTab = () => {
    browser.tabs
        .query({
            active: false,
            discarded: false,
            highlighted: false,
            pinned: false,
        })
        .then(
            (tabs) => {
                for (let tab of tabs) {
                    discardTab(tab);
                }
            },
            (e) => console.log(`Error: ${e}`)
        );
};

// create context menus
browser.contextMenus.create({
    title: "Discard Tab",
    contexts: ["tab"],
    id: "discard-current-tab",
});
browser.contextMenus.create({
    title: "Discard All Inactive Background Tab",
    contexts: ["tab"],
    id: "discard-all-other-tab",
});

// handle context menu clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "discard-current-tab":
            discardTab(tab);
            break;
        case "discard-all-other-tab":
            discardAllOtherTab();
            break;
    }
});

// handle shortcuts
browser.commands.onCommand.addListener((command, tab) => {
    switch (command) {
        case "discard-current-tab":
            discardTab(tab);
            break;
        case "discard-all-other-tab":
            discardAllOtherTab();
            break;
    }
});
