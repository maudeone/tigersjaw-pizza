let contact = () => {
    let content = document.getElementById('content');
    content.classList.add('contact');
  
    let contactBtn = document.getElementById('contact');
    contactBtn.classList.add('active');
  
    let container = document.createElement('div');
    container.classList.add('container');
  
    let headline = document.createElement('h1');
    headline.innerHTML = 'Contact Info';
    let tagline = document.createElement('p');
    tagline.innerHTML = 'Our team of elite memers would love to hear from you. Give us a call or send us an email.'
  
    let phone = document.createElement('p');
    phone.innerHTML = 'Phone: (248) 434-5508';
    let email = document.createElement('p');
    email.innerHTML = 'Email: tigersjawpizza@aol.com';
  
    container.appendChild(headline);
    container.appendChild(tagline);
    container.appendChild(phone);
    container.appendChild(email);
  
    let body = document.querySelector('body');
    let footer = document.querySelector('footer');
    body.insertBefore(container, footer);
  }
  
  export default contact;