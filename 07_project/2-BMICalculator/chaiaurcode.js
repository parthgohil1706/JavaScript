const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `PLease give a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `PLease give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    // results.innerHTML = `<span>${BMI}</span>`
    // show result with category
    let category = '';

    if (BMI < 18.6) {
      category = 'Underweight';
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      category = 'Normal weight';
    } else {
      category = 'Overweight';
    }

    results.innerHTML = `<span>Your BMI is ${BMI} (${category})</span>`;
  }
});
