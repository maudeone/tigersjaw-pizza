let footer = () => {
    let footer = document.createElement('footer');
    let footerText = document.createElement('p');
    footerText.innerHTML = 'Copyright © maudeOne. All rights reserved. Sike, suck a chode.';
    footer.appendChild(footerText);
    
    let body = document.querySelector('body');
    body.appendChild(footer);
};
export default footer;