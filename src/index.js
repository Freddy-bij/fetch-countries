const btnCountries = document.querySelector('#fetch-countries');
const contriesContainer = document.querySelector('#contries-container')
const input = document.querySelector('#input-reseach');

let countriesArray =[];


btnCountries.addEventListener('click',fetchRandomCountrie)
   async function fetchRandomCountrie() {
    
      try{
         const response = await fetch('https://restcountries.com/v3.1/all')
         const data = await response.json();
         console.log(data)
         countriesArray = data;
         infoCountries(countriesArray)

      }catch{
         console.log(error);
       
      }
     
   }
   function infoCountries(countries){
      contriesContainer.innerHTML='';
      countries.forEach(country => {
     const divElt = document.createElement('div');
     divElt.style.background='gray';
     divElt.innerHTML =` 
      <img src='${country.flags.png}' alt='${country.flags.alt}'>
     <p>${country.name.common}</p>
    <p>${country.population}</p>
       <p>${country.region}</p>
        <p>${country.capital}</p>
     `
     contriesContainer.append(divElt,)
    });
   }
   input.addEventListener('keyup',(e)=>{
      const term = e.target.value.toLowerCase();
      
   const filteredCountries = countriesArray.filter(country => country.name.common.toLowerCase().includes(term));
   infoCountries(filteredCountries);
   })

