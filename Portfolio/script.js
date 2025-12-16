document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      nav.classList.toggle('open');
    });
  }

  // simple contact form demo handler
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name = form.elements['name'].value || 'Friend';
      alert('Thanks, ' + name + '! Your message was received (demo).');
      form.reset();
    });
  }
});
