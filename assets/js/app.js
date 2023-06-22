  const baseEndpoint = `https://api.github.com`; //Esta es la conexcion que tiene con la api de Github
  const usersEndpoint = `${baseEndpoint}/users`;
  //Se corrige el tipo de selector de name y blog por que no estaban como CLASS, si no como otros selectores con un #
  const $n = document.querySelector('.name');
  const $b = document.querySelector('.blog');
  const $l = document.querySelector('.location');


function displayUser(username) {
  //$n.textContent = 'cargando nombre...';
 fetch(`${usersEndpoint}/${username}`) //Se elimno el await
//fetch('https://api.github.com/users/stolinski')
    .then(data => { //Nos asegura que si tenemos datos en lo
      return data.json(); //Regreso los datos a 
      console.log(data);
    })
    .then(dat => { //Imprimimos en el DOM los datos del usuario que busquemos
      console.log("El nombre del pokemon es: ", dat.name, " su numero de la pokedex es ", dat.blog)
        
      // $n.textContent = `${dat.name}`;
      // $b.textContent = `${dat.blog}`;
      // $l.textContent = `${dat.location}`;
      // //return data.json();
    })
.catch(err => {
       handleError(err.name);
      
    })     
    // SE cambian las apostrofes por backtics para que activen las plantillas literales,
    //.catch(handleError (err));
}
 function handleError(err) {
  console.log('OH NO!');
  console.log(err.name);
  $n.textContent = "cualquier cosa";
  //$n.textContent = `Algo salió mal: ${err.name}`; //
   //err.preventDefault(); //prevenir que el navegador se actualice
  }
   
  displayUser('stolinski');


// displayUser('stolinski')
// displayUser('stolinski');