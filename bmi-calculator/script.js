document.addEventListener('DOMContentLoaded', () => {
  const weightInput = document.getElementById('weight')
  const heightInput = document.getElementById('height')
  const calculateBtn = document.getElementById('calculate-btn')
  const bmiAdvice = document.getElementById('bmi-advice')
  const bmiAmount = document.getElementById('bmi')

  function calculateBMI() {
    const weight = parseFloat(weightInput.value)
    const height = parseFloat(heightInput.value)

    if (weight && height) {
      const bmi = weight / (height * height)
      let advice = ''

      if (bmi >= 30.0) {
        advice = 'Obesity: Please consult a doctor for a proper health plan'
      } else if (bmi >= 25.0 && bmi <= 29.99) {
        advice = 'Overweight: You need to exercise'
      } else if (bmi >= 18.5 && bmi <= 24.99) {
        advice = 'Ideal: Good job for taking care of your health'
      } else if (bmi < 18.5) {
        advice = 'Underweight: You need to eat more or consult a doctor'
      }
      bmiAmount.textContent = 'Your bmi is : ' + bmi.toFixed(2)
      bmiAdvice.textContent = advice
    } else {
      bmiAdvice.textContent =
        'Please provide valid inputs for weight and height.'
    }
  }

  calculateBtn.addEventListener('click', (event) => {
    event.preventDefault()
    calculateBMI()
  })
})
