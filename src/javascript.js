const links = document.querySelectorAll("a")
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(e) {

  })
}

const nav = document.querySelector("nav")
var oldScroll = window.scrollY
window.onscroll = function() {
  if (oldScroll > window.scrollY) {
    nav.style.top = "0"
  } else {
    nav.style.top = "-80px"
  }
  oldScroll = window.scrollY
}


const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        } else {
                entry.target.classList.remove('scroll-animation')
              }
    })
},
   { threshold: 0.3
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  }
