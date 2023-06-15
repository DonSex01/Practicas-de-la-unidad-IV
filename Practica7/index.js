fetch('https://epic.gsfc.nasa.gov/api/natural')
  .then(function(response) {
    return response.json()  
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })