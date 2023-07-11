// testimonials script

const testRounds = document.querySelectorAll('.test_round');
const testTexts = document.querySelectorAll('.test_text');
const testNames = document.querySelectorAll('.test_name');
const testImages = document.querySelectorAll('.test_img');

testRounds.forEach((round, index) => {
  round.addEventListener('click', () => {
    
    testTexts.forEach(text => {
      text.classList.remove('active');
    });
    testTexts[index].classList.add('active');

    testNames.forEach(name => {
      name.classList.remove('active');
    });
    testNames[index].classList.add('active');

    testImages.forEach(image => {
      image.classList.remove('active');
    });
    testImages[index].classList.add('active');

    testRounds.forEach(round => {
      round.classList.remove('active');
    });
    testRounds[index].classList.add('active');

  });
});


// testimonials script

