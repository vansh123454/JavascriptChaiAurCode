# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

``` javascript

const buttons = document.querySelectorAll('.button');
// console.log(buttons); // gives the NodeList
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## project 2

``` javascript

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // it will prevent your data to submit to the url or server bcoz we dont have any server

  //height is converted into integer
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // console.log(height);
  // console.log(weight);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2); // after point it will show only two decimals

    // show the result
    if (BMI < 18.6) {
      results.innerHTML = `<span> Under Weight, BMI: ${BMI}</span>`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      results.innerHTML = `<span> Normal Weight, BMI: ${BMI}</span>`;
    } else {
      results.innerHTML = `<span> OverWeight, BMI: ${BMI}</span>`;
    }
  }
});

```

## project 3

``` javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

//runs again and again after one second
setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```