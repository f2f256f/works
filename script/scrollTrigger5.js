document.addEventListener('DOMContentLoaded', function () {
  var section1 = document.getElementById('section5');

  function handleScroll() {
    var rect = section1.getBoundingClientRect();
    var triggerPoint = window.innerHeight * 0.7;

    if (rect.top < triggerPoint) {
      section1.classList.add('triggered');
    } else {
      section1.classList.remove('triggered');
    }
  }
  window.addEventListener('scroll', handleScroll);

  handleScroll();
});
