"use strict";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GREETINGS") {
    const message = `Hi ${
      sender.tab ? "Con" : "Pop"
    }, my name is Bac. I am from Background. It's great to hear from you.`;

    console.log(request.payload.message);

    sendResponse({
      message,
    });
  }
});
