let about = () => {
    let body = document.querySelector('body');
    let content = document.getElementById('content');
    content.classList.add('about');

    let about = document.getElementById('about');
    about.classList.add('active');

    let container = document.createElement('div');
    container.classList.add('container');
    let headline = document.createElement('h1');
    let tagline = document.createElement('p');
    tagline.classList.add('text');

    headline.innerHTML = 'The story of Tigers Jaw Pizza in New Jeru';
    tagline.innerHTML = 'There is no real story here; I created this fictional pizzaria based on the reissue cover album photo of Tigers Jaw by Tigers Jaw.';

    container.appendChild(headline);
    container.appendChild(tagline);
    let footer = document.querySelector('footer');
    body.insertBefore(container, footer);
}
export default about;