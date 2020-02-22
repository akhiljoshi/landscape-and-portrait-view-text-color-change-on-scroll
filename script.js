
// alert("ok")
window.onscroll = () => {
  const name = document.querySelector('#name');
  if(this.scrollY <= 100)
  	name.className = 'name-0';
  else if(this.scrollY <= 200)
   name.className = 'name-1';
  else if(this.scrollY <= 300)
   name.className = 'name-2';
  else if(this.scrollY <= 400)
   name.className = 'name-3';
  else if(this.scrollY <= 500)
   name.className = 'name-4';
  else if(this.scrollY <= 600)
   name.className = 'name-5';
  else if(this.scrollY <= 700)
   name.className = 'name-6';
  else
   name.className = 'name-7';
};
$(window).scroll(function() {
  if ($(this).scrollTop()<400){
      $('#name').hide(300);
   }
  else{
    $('#name').show(200);
   }
});

