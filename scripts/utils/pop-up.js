
export function activePopUp(){
  let sertificates = document.querySelectorAll('.education-img');
  console.log(sertificates);
  let background = document.getElementById('message-block');
  console.log(background);

  sertificates.forEach(img => {
    img.addEventListener('click', function(){
      background.classList.remove('hidden');

      window.addEventListener("scroll", noScroll);

    });
  });

  background.addEventListener('click', function(){
    background.classList.add('hidden');

    window.removeEventListener("scroll", noScroll);

  })
};
