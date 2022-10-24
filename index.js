const inputField = document.getElementById('input-field')
const search = document.getElementById('search')
const cityName = document.getElementById('name')
const degree = document.getElementById('degree')
const situation = document.getElementById('situation')
const iconImage = document.getElementById('icon')

search.addEventListener('click', () => {
  text = inputField.value
  fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=' +
      text +
      '&APPID=44c5a2a5a405a153007a3af3d24ffce5'
  )
    .then((res) => res.json())
    .then((data) => {
      try {
        iconData = data.weather[0].icon
        iconImage.src =
          'https://openweathermap.org/img/wn/' + iconData + '@2x.png'
        cityName.innerText = data.name
        degree.innerText = Math.round(data.main.temp - 273.15)
        situation.innerText = data.weather[0].main
        inputField.value = ''
      } catch (error) {
        alert('Enter a valid city')
      }
    })
})
