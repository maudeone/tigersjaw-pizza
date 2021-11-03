let menu = () => {
    let content = document.getElementById('content');
    content.classList.add('menu');
  
    let menuBtn = document.getElementById('menu');
    menuBtn.classList.add('active');
  
    let container = document.createElement('div');
    container.classList.add('container');
  
    let headline = document.createElement('h1');
    headline.innerHTML = 'Seasonal Menu';
    container.appendChild(headline);
  
    let menu = document.createElement('ul');
    let items = ['Buona Pizza - el classico 15', 'Meatlovers Deluxe - bacon, ham, sausage, pepperoni 18', 'The Treeway - baby spinach, bell pepper, red onion 17']
  
    for (let i=0; i< items.length; i++) {
      let item = document.createElement('li');
      item.innerHTML = items[i];
      menu.appendChild(item);
    }
  
    container.appendChild(menu);
  
  
    let body = document.querySelector('body');
    let footer = document.querySelector('footer');
    body.insertBefore(container, footer);
  };
  
  export default menu;