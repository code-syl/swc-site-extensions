// ==UserScript==
// @name         SWC Events Clipboard
// @namespace    https://www.swcombine.com/
// @version      1.0
// @description  Adds a "Copy" button to the SWC Events page, which adds the event details to the clipboard.
// @author       code-syl
// @match        https://www.swcombine.com/members/events/index.php?mode=*
// @icon         https://www.swcombine.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const styles = `
        .eventmsg:not(:hover) #alani-copy { 
            display: none;
        }

        .eventmsg:hover #alani-copy,
        .eventpriv {
            align-self: center;
        }
        
        .eventpriv img {
            padding-top: 0 !important;
        }`;

    let styleSheet = document.createElement('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    const onCopyClick = (event) => {
        const swcDateTime = event.querySelector('.eventdate').textContent;
        const eventText = event.querySelector('.eventtext').textContent.replace(/<(.|\n)*?>/g, '');

        navigator.clipboard.writeText(swcDateTime + ' ' + eventText)
            .then(() => { console.info('Copied event details to clipboard.'); })
            .catch(error => { console.error('Failed to copy event details to clipboard: ', error); });
    };

    const onLoad = () => {
        const events = document.querySelectorAll('.eventmsg');
        
        events.forEach(event => {
            let button = document.createElement('button');
            button.id = 'alani-copy';
            button.textContent = 'Copy';
            button.style.height = '2rem';
            button.addEventListener('click', () => onCopyClick(event));

            const parentNode = event.querySelector('.eventpriv').parentNode;
            const sp2 = event.querySelector('.eventpriv');
            parentNode.insertBefore(button, sp2);
        });
    };

    window.addEventListener('load', onLoad, false);
    
})();
