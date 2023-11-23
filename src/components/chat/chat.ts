import React, { Component, ReactNode } from "react";

interface ChatwootSettings {
  hideMessageBubble: boolean;
  position: "left" | "right";
  locale: string;
  type: "standard" | "expanded_bubble";
}

interface ChatwootSDKSettings {
  websiteToken: string;
  baseUrl: string;
}

class ChatwootWidget extends Component {
  componentDidMount(): void {
    // Add Chatwoot Settings
    (window as any).chatwootSettings = {
      hideMessageBubble: false,
      position: "right", // This can be left or right
      locale: "en", // Language to be set
      type: "standard", // [standard, expanded_bubble]
    } as ChatwootSettings;

    (function (d: Document, t: string) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t) as HTMLScriptElement; // Explicit type assertion here
      var s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode!.insertBefore(g, s);
      g.onload = function () {
        (window as any).chatwootSDK.run({
          websiteToken: "fuT7PUpFqqyruZSL15oMiea9",
          baseUrl: BASE_URL,
        } as ChatwootSDKSettings);
      };
    })(document, "script");
  }

  render(): ReactNode {
    return null;
  }
}

export default ChatwootWidget;
