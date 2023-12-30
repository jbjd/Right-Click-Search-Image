chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "SearchImage",
        title: "Search Image",
        contexts: ["image"],
    });
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (!info.srcUrl) {
        return;
    }
    var url = "https://lens.google.com/uploadbyurl?url=" + encodeURIComponent(info.srcUrl)

    chrome.tabs.create({ url: url });
});
