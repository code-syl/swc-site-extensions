// ==UserScript==
// @name         COMMCENT QoL Changes
// @namespace    https://commcent.swc-empire.com/
// @version      1.0
// @description  Adds quality of life changes to the Galactic Empire's COMMCENT forum. Changes include but are not limited to color changes, font changes, and layout changes. This script is not affiliated with the Galactic Empire, LucasArts, or SWCombine. Use at your own risk.
// @author       code-syl
// @match        https://commcent.swc-empire.com/*
// @icon         https://commcent.swc-empire.com/favicon.ico
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    "use strict";

    // For better readability on the forum
    const textColorChangesStyles = `
            a *, a {
                color: #c9c9c9 !important;
            }
            
            div.postbody div div.content {
                color: #ffffff;
            }

            div.postbody div div.signature {
                color: #c9c9c9;
            }
    `;

    let textColorChangesStyleSheet = document.createElement("style");
    textColorChangesStyleSheet.innerText = textColorChangesStyles;
    textColorChangesStyleSheet.setAttribute("author", "Alani Myrtel");
    textColorChangesStyleSheet.setAttribute(
        "description",
        "text color changes"
    );

    document.head.appendChild(textColorChangesStyleSheet);
})();
