//toggle heroes
$("#toggle-heroes").click(function() {
  $("#avengers").fadeToggle("slow", "linear");
  $(".toggle-msg").fadeToggle("fast", "linear");
});

//Gets character data
$(document).ready(function() {
  //Ironman
  let iman =
    "https://www.superheroapi.com/api.php/102230910987729/search/iron%20man";
  $.ajax({
    dataType: "json",
    url: iman,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function(data) {
      let print = document.getElementById("ironman");
      for (let i = 0; i < data.results.length; i++) {
        var hero = data.results[i];
        print.innerHTML = `<img class="card-img-top" src="${
          hero.image.url
        }" alt="Card image cap">
                     <div class="card-body">
                     <h5 class="card-title">${hero.name}</h5>
                     <p class="card-text">"${hero.biography["full-name"]}"</p>
                     <p class="card-text">${hero.work.occupation}</p>
                     </div>`;
      }
    },
    error: function() {
      print.innerHTML = "error";
    }
  });
  //Captain America
  let cap =
    "https://www.superheroapi.com/api.php/102230910987729/search/captain%20america";
  $.ajax({
    dataType: "json",
    url: cap,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {},
    success: function(data) {
      let print = document.getElementById("cap");
      for (let i = 0; i < data.results.length; i++) {
        var hero = data.results[i];
        print.innerHTML = `
               <img class="card-img-top" src="${
                 hero.image.url
               }" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text">"${hero.biography["full-name"]}"</p>
                  <p class="card-text">${hero.work.occupation}</p>
                
                 
             
              </div>`;
      }
    },
    error: function() {
      print.innerHTML = "error";
    }
  });
  //Black Widow
  let bw =
    "https://www.superheroapi.com/api.php/102230910987729/search/black%20widow/";
  $.ajax({
    dataType: "json",
    url: bw,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {},
    success: function(data) {
      let print = document.getElementById("blackwidow");
      for (let i = 0; i < data.results.length; i++) {
        var hero = data.results[0];
        print.innerHTML = `
               <img class="card-img-top" src="${
                 hero.image.url
               }" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text">"${hero.biography["full-name"]}"</p>
                  <p class="card-text">${hero.work.occupation}</p>
                
                 
             
              </div>`;
      }
    },
    error: function() {
      print.innerHTML = "error";
    }
  });
  //Thor
  let thor =
    "https://www.superheroapi.com/api.php/102230910987729/search/thor/";
  $.ajax({
    dataType: "json",
    url: thor,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {},
    success: function(data) {
      let print = document.getElementById("thor");
      for (let i = 0; i < data.results.length; i++) {
        var hero = data.results[1];
        print.innerHTML = `
               <img class="card-img-top" src="${
                 hero.image.url
               }" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text">"${hero.biography["full-name"]}"</p>
                  <p class="card-text">${hero.work.occupation}</p>
                
                 
             
              </div>`;
      }
    },
    error: function() {
      print.innerHTML = "error";
    }
  });
  //Hulk
  let hulk =
    "https://www.superheroapi.com/api.php/102230910987729/search/hulk/";
  $.ajax({
    dataType: "json",
    url: hulk,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {},
    success: function(data) {
      let print = document.getElementById("hulk");
      for (let i = 0; i < data.results.length; i++) {
        var hero = data.results[0];
        print.innerHTML = `
               <img class="card-img-top" src="${
                 hero.image.url
               }" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text">"${hero.biography["full-name"]}"</p>
                  <p class="card-text">${hero.work.occupation}</p>
                
                 
             
              </div>`;
      }
    },
    error: function() {
      print.innerHTML = "error";
    }
  });
  //Ant-Man
  let ant =
    "https://www.superheroapi.com/api.php/102230910987729/search/ant-man/";
  $.ajax({
    dataType: "json",
    url: ant,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {},
    success: function(data) {
      let print = document.getElementById("ant");
      for (let i = 0; i < data.results.length; i++) {
        var hero = data.results[1];
        print.innerHTML = `
               <img class="card-img-top" src="${
                 hero.image.url
               }" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text">"${hero.biography["full-name"]}"</p>
                  <p class="card-text">${hero.work.occupation}</p>
                
                 
             
              </div>`;
      }
    },
    error: function() {
      print.innerHTML = "error";
    }
  });
  //Captain Marvel
  let capm =
    "https://www.superheroapi.com/api.php/102230910987729/search/captain%20marvel/";
  $.ajax({
    dataType: "json",
    url: capm,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {},
    success: function(data) {
      let print = document.getElementById("capm");
      for (let i = 0; i < data.results.length; i++) {
        var hero = data.results[1];
        print.innerHTML = `
               <img class="card-img-top" src="${
                 hero.image.url
               }" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text">"${hero.biography["full-name"]}"</p>
                  <p class="card-text">${hero.work.occupation}</p>
                
                 
             
              </div>`;
      }
    },
    error: function() {
      print.innerHTML = "error";
    }
  });
  //Rocket Raccoon
  let rocket =
    "https://www.superheroapi.com/api.php/102230910987729/search/rocket%20raccoon/";
  $.ajax({
    dataType: "json",
    url: rocket,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {},
    success: function(data) {
      let print = document.getElementById("rocket");
      for (let i = 0; i < data.results.length; i++) {
        var hero = data.results[0];
        print.innerHTML = `
               <img class="card-img-top" src="${
                 hero.image.url
               }" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text">"${hero.biography["full-name"]}"</p>
                  <p class="card-text">${hero.work.occupation}</p>
                
                 
             
              </div>`;
      }
    },
    error: function() {
      print.innerHTML = "error";
    }
  });
  //War Machine
  let war =
    "https://www.superheroapi.com/api.php/102230910987729/search/war%20machine/";
  $.ajax({
    dataType: "json",
    url: war,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {},
    success: function(data) {
      let print = document.getElementById("war");
      for (let i = 0; i < data.results.length; i++) {
        var hero = data.results[0];
        print.innerHTML = `
               <img class="card-img-top" src="${
                 hero.image.url
               }" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${hero.name}</h5>
                  <p class="card-text">"${hero.biography["full-name"]}"</p>
                  <p class="card-text">${hero.work.occupation}</p>
                
                 
             
              </div>`;
      }
    },
    error: function() {
      print.innerHTML = "error";
    }
  });
});

function truncateString(myString, limit) {
  const shortened = myString.indexOf(" ", limit);
  if (shortened == -1) return myString;
  return myString.substring(0, shortened);
}
