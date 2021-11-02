import nav from './nav';
import footer from './footer';

let home = () => {
    let content = document.getElementById('content');
    content.classList.add('home');

    if (!document.querySelector('nav')) {
        let navbar = nav();
        content.appendChild(navbar);
    }
    let home = document.getElementById('home');
    home.classList.add('active');

    if (!document.querySelector('footer')) {
        footer();
    }
}
export default home