window.addEventListener('load', () => {
  console.log('Ironmaker app started successfully!');
}, false);

let dates = []
axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
  .then(function (response) {
    // for(item in response.data.bpi){
    // // dataObj.push(item)
    
    // }
    console.log(response.data.bpi)
    // var dataObj = response.data.bpi
    // return dataObj
    // console.log('dataObj', dataObj)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })




  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: dates,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });


  // const instance = axios.create({
  //   baseURL: 'http://api.coindesk.com/v1/bpi/historical/close.json',
  //   timeout: 1000,
  // });