const main = () => {
    const btnShow = document.querySelector('#show');
    const placeData = document.querySelector('#Data');
    btnShow.addEventListener('click', getAPI);

    function getAPI(){
        const inputCountry = document.querySelector('#inputGroupSelect04');
        fetch('https://covid19.mathdro.id/api/countries/' + inputCountry.value)
         .then(response => response.json())
         .then (data => {
            let output = '';
            console.log(data);
               output += 
               `
               <h1 class="text-center text-secondary">${inputCountry.value}</h1>

        <div class="card-deck">
            <div class="card border-danger">
              <div class="card-body text-danger">
                <h5 class="card-title">Positive (Positif)</h5>
                <p class="card-text h2">${data.confirmed.value}</div>
              <div class="card-footer">
                <small class="text-muted">Last updated ${data.lastUpdate}</small>
              </div>
            </div>

            <div class="card border-success">
              <div class="card-body text-success">
                <h5 class="card-title">Recovered (Sembuh)</h5>
                <p class="card-text h2">${data.recovered.value}</div>
              <div class="card-footer">
                <small class="text-muted">Last updated ${data.lastUpdate}</small>
              </div>
            </div>

            <div class="card border-secondary">
              <div class="card-body text-secondary">
                <h5 class="card-title">Deaths (Meninggal)</h5>
                <p class="card-text h2">${data.deaths.value}</div>
              <div class="card-footer">
                <small class="text-muted">Last updated ${data.lastUpdate}</small>
              </div>
            </div>
          </div>
        </div>
        <br>
               `
           
            placeData.innerHTML = output;
         })
    } //getAPI
} //main

export default main;