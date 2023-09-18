let waga = document.querySelectorAll('kg');
let wzrost = document.querySelectorAll('cm');

const bmi = waga/(wzrost * wzrost);

if (bmi< 18,5) {
    display.  ='Niedowaga'
} else(bmi > 18,5; bmi < 24,9) {
    display.innerHtml = 'Norma'
} else (bmi > 24,9; bmi < 29,9){
    = 'Nadwaga'
} else( bmi > 30; bmi < 34,9) {
    = 'Otyłość 1st.'
} else (bmi > 35; bmi < 39,9){
    ='Otyłość 2st.'
} else(bmi > 39,9) {
= 'Otyłość 3st.'
}