//learned reddit api from: https://www.youtube.com/watch?v=VITzIZB-bXU
//on page load it loads reddit results from r/avengers
$(document).ready(function() {
  let subreddit = `https://www.reddit.com/r/Avengers/top.json?&limit=100`;

  function displayReddit() {
    return fetch(subreddit)
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }

  //Print results and status message here
  let print = document.getElementById("status");
  $.ajax({
    dataType: "json",
    url: subreddit,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function() {
      displayReddit().then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
          // Check for image
          let image = post.preview
            ? post.preview.images[0].source.url
            : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
          output += `
              <div id="reddit-card" class="card mb-2">
              <a href="${
                post.url
              }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncateString(post.selftext, 100)}</p>
                <a href="https://www.reddit.com${post.permalink}" target="_blank
                " class="btn">Read More</a>
                <hr>
                <span class="badge badge-secondary">Subreddit: ${
                  post.subreddit
                }</span> 
                <span class="badge badge-dark">Score: ${post.score}</span>
              </div>
            </div>
              `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
        print.style.display = "none";
      });
    },
    error: function() {
      document.getElementById("results").innerHTML = "error";
    }
  });
});

//Toggle reddit search form
$("#toggle-search").click(function() {
  $("#search").toggle("fast", function() {});
});

//Search form DOM
const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

//on submit of form
searchForm.addEventListener("submit", e => {
  // Sort
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  // Limit Search Results
  const limit = document.getElementById("limit").value;
  //Value
  const searchTerm = searchInput.value;

  // Validation
  //empty string
  if (searchTerm === "") {
    let errormsg = document.getElementById("error-msg");
    errormsg.style.color = "red";
    errormsg.innerHTML = "Search Term cannot be empty";
    searchInput.style.border = "thin solid red";
  }

  if (searchTerm !== "") {
    errormsg.style.display = "none";
  }

  //Search function
  function searchReddit(searchTerm, limit, sortBy) {
    return fetch(
      `https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${limit}`
    )
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }

  // Search Reddit
  searchReddit(searchTerm, limit, sortBy).then(results => {
    let output = '<div class="card-columns">';
    console.log(results);
    results.forEach(post => {
      // Check for image
      let image = post.preview
        ? post.preview.images[0].source.url
        : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
      output += `
      <div id="reddit-card" class="card mb-2">
      <a href="${
        post.url
      }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${truncateString(post.selftext, 100)}</p>
        <a href="https://www.reddit.com${post.permalink}" target="_blank
        " class="btn btn-danger">Read More</a>
        <hr>
        <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span> 
        <span class="badge badge-dark">Score: ${post.score}</span>
      </div>
    </div>
      `;
    });
    output += "</div>";
    document.getElementById("results").innerHTML = output;
  });

  e.preventDefault();
});

// Truncate string to limit amount of characters in post
function truncateString(myString, limit) {
  const shortened = myString.indexOf(" ", limit);
  if (shortened == -1) return myString;
  return myString.substring(0, shortened);
}
//Onclick Searches
//Tried to do this with a switch statement and an else if but it wouldn't work
let thor = document.getElementById("thor");
let capm = document.getElementById("capm");
let rocket = document.getElementById("rocket");
let cap = document.getElementById("cap");
let hulk = document.getElementById("hulk");
let blackwidow = document.getElementById("blackwidow");
let ironman = document.getElementById("ironman");
let ant = document.getElementById("ant");
let war = document.getElementById("war");

//Thor onclick search
thor.addEventListener("click", function() {
  let subreddit = `https://www.reddit.com/r/Avengers/search.json?q=thor&sort=top&limit=100`;

  function displayReddit() {
    return fetch(subreddit)
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }
  let print = document.getElementById("status");
  print.style.display = "block";
  $.ajax({
    dataType: "json",
    url: subreddit,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function() {
      displayReddit().then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
          // Check for image
          let image = post.preview
            ? post.preview.images[0].source.url
            : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
          output += `
              <div id="reddit-card" class="card mb-2">
              <a href="${
                post.url
              }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncateString(post.selftext, 100)}</p>
                <a href="https://www.reddit.com${post.permalink}" target="_blank
                " class="btn btn-danger">Read More</a>
                <hr>
                <span class="badge badge-secondary">Subreddit: ${
                  post.subreddit
                }</span> 
                <span class="badge badge-dark">Score: ${post.score}</span>
              </div>
            </div>
              `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
        print.style.display = "none";
      });
    },
    error: function() {
      print.innerHTML = "error";
    }
  });

  //Scroll to seach results
  $("html,body").animate(
    {
      scrollTop: $("#toggle-search").offset().top
    },
    "slow"
  );
});

//Captain Marvel onclick search
capm.addEventListener("click", function() {
  let subreddit = `https://www.reddit.com/search.json?q=captain%20marvel&sort=top&limit=100`;

  function displayReddit() {
    return fetch(subreddit)
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }
  let print = document.getElementById("status");
  print.style.display = "block";
  $.ajax({
    dataType: "json",
    url: subreddit,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function() {
      displayReddit().then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
          // Check for image
          let image = post.preview
            ? post.preview.images[0].source.url
            : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
          output += `
              <div id="reddit-card" class="card mb-2">
              <a href="${
                post.url
              }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncateString(post.selftext, 100)}</p>
                <a href="https://www.reddit.com${post.permalink}" target="_blank
                " class="btn btn-danger">Read More</a>
                <hr>
                <span class="badge badge-secondary">Subreddit: ${
                  post.subreddit
                }</span> 
                <span class="badge badge-dark">Score: ${post.score}</span>
              </div>
            </div>
              `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
        print.style.display = "none";
      });
    },
    error: function() {
      print.innerHTML = "error";
    }
  });

  //Scroll to seach results
  $("html,body").animate(
    {
      scrollTop: $("#toggle-search").offset().top
    },
    "slow"
  );
});

//Rocket Raccoon onclick search
rocket.addEventListener("click", function() {
  let subreddit = `https://www.reddit.com/search.json?q=rocket%20raccoon&sort=top&limit=100`;

  function displayReddit() {
    return fetch(subreddit)
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }
  let print = document.getElementById("status");
  print.style.display = "block";
  $.ajax({
    dataType: "json",
    url: subreddit,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function() {
      displayReddit().then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
          // Check for image
          let image = post.preview
            ? post.preview.images[0].source.url
            : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
          output += `
              <div id="reddit-card" class="card mb-2">
              <a href="${
                post.url
              }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncateString(post.selftext, 100)}</p>
                <a href="https://www.reddit.com${post.permalink}" target="_blank
                " class="btn btn-danger">Read More</a>
                <hr>
                <span class="badge badge-secondary">Subreddit: ${
                  post.subreddit
                }</span> 
                <span class="badge badge-dark">Score: ${post.score}</span>
              </div>
            </div>
              `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
        print.style.display = "none";
      });
    },
    error: function() {
      print.innerHTML = "error";
    }
  });

  //Scroll to seach results
  $("html,body").animate(
    {
      scrollTop: $("#toggle-search").offset().top
    },
    "slow"
  );
});

//Captain America onclick search
cap.addEventListener("click", function() {
  let subreddit = `https://www.reddit.com/search.json?q=captain%20america&sort=top&limit=100`;

  function displayReddit() {
    return fetch(subreddit)
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }
  let print = document.getElementById("status");
  print.style.display = "block";
  $.ajax({
    dataType: "json",
    url: subreddit,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function() {
      displayReddit().then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
          // Check for image
          let image = post.preview
            ? post.preview.images[0].source.url
            : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
          output += `
              <div id="reddit-card" class="card mb-2">
              <a href="${
                post.url
              }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncateString(post.selftext, 100)}</p>
                <a href="https://www.reddit.com${post.permalink}" target="_blank
                " class="btn btn-danger">Read More</a>
                <hr>
                <span class="badge badge-secondary">Subreddit: ${
                  post.subreddit
                }</span> 
                <span class="badge badge-dark">Score: ${post.score}</span>
              </div>
            </div>
              `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
        print.style.display = "none";
      });
    },
    error: function() {
      print.innerHTML = "error";
    }
  });

  //Scroll to seach results
  $("html,body").animate(
    {
      scrollTop: $("#toggle-search").offset().top
    },
    "slow"
  );
});

//Hulk onclick search
hulk.addEventListener("click", function() {
  let subreddit = `https://www.reddit.com/r/Avengers/search.json?q=hulk%20avenger&sort=top&limit=100`;

  function displayReddit() {
    return fetch(subreddit)
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }
  let print = document.getElementById("status");
  print.style.display = "block";
  $.ajax({
    dataType: "json",
    url: subreddit,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function() {
      displayReddit().then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
          // Check for image
          let image = post.preview
            ? post.preview.images[0].source.url
            : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
          output += `
              <div id="reddit-card" class="card mb-2">
              <a href="${
                post.url
              }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncateString(post.selftext, 100)}</p>
                <a href="https://www.reddit.com${post.permalink}" target="_blank
                " class="btn btn-danger">Read More</a>
                <hr>
                <span class="badge badge-secondary">Subreddit: ${
                  post.subreddit
                }</span> 
                <span class="badge badge-dark">Score: ${post.score}</span>
              </div>
            </div>
              `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
        print.style.display = "none";
      });
    },
    error: function() {
      print.innerHTML = "error";
    }
  });

  //Scroll to seach results
  $("html,body").animate(
    {
      scrollTop: $("#toggle-search").offset().top
    },
    "slow"
  );
});

//Black Widow onclick search
blackwidow.addEventListener("click", function() {
  let subreddit = `https://www.reddit.com/search.json?q=black%20widow%20natasha%20romanoff&sort=top&limit=100`;

  function displayReddit() {
    return fetch(subreddit)
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }
  let print = document.getElementById("status");
  print.style.display = "block";
  $.ajax({
    dataType: "json",
    url: subreddit,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function() {
      displayReddit().then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
          // Check for image
          let image = post.preview
            ? post.preview.images[0].source.url
            : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
          output += `
              <div id="reddit-card" class="card mb-2">
              <a href="${
                post.url
              }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncateString(post.selftext, 100)}</p>
                <a href="https://www.reddit.com${post.permalink}" target="_blank
                " class="btn btn-danger">Read More</a>
                <hr>
                <span class="badge badge-secondary">Subreddit: ${
                  post.subreddit
                }</span> 
                <span class="badge badge-dark">Score: ${post.score}</span>
              </div>
            </div>
              `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
        print.style.display = "none";
      });
    },
    error: function() {
      print.innerHTML = "error";
    }
  });

  //Scroll to seach results
  $("html,body").animate(
    {
      scrollTop: $("#toggle-search").offset().top
    },
    "slow"
  );
});

//Iron Man onclick search
ironman.addEventListener("click", function() {
  let subreddit = `https://www.reddit.com/search.json?q=iron%20man%20avenger&sort=top&limit=100`;

  function displayReddit() {
    return fetch(subreddit)
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }
  let print = document.getElementById("status");
  print.style.display = "block";
  $.ajax({
    dataType: "json",
    url: subreddit,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function() {
      displayReddit().then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
          // Check for image
          let image = post.preview
            ? post.preview.images[0].source.url
            : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
          output += `
              <div id="reddit-card" class="card mb-2">
              <a href="${
                post.url
              }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncateString(post.selftext, 100)}</p>
                <a href="https://www.reddit.com${post.permalink}" target="_blank
                " class="btn btn-danger">Read More</a>
                <hr>
                <span class="badge badge-secondary">Subreddit: ${
                  post.subreddit
                }</span> 
                <span class="badge badge-dark">Score: ${post.score}</span>
              </div>
            </div>
              `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
        print.style.display = "none";
      });
    },
    error: function() {
      print.innerHTML = "error";
    }
  });

  //Scroll to seach results
  $("html,body").animate(
    {
      scrollTop: $("#toggle-search").offset().top
    },
    "slow"
  );
});

//Ant-Man onclick search
ant.addEventListener("click", function() {
  let subreddit = `https://www.reddit.com/search.json?q=ant-man&sort=top&limit=100`;

  function displayReddit() {
    return fetch(subreddit)
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }
  let print = document.getElementById("status");
  print.style.display = "block";
  $.ajax({
    dataType: "json",
    url: subreddit,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function() {
      displayReddit().then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
          // Check for image
          let image = post.preview
            ? post.preview.images[0].source.url
            : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
          output += `
              <div id="reddit-card" class="card mb-2">
              <a href="${
                post.url
              }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncateString(post.selftext, 100)}</p>
                <a href="https://www.reddit.com${post.permalink}" target="_blank
                " class="btn btn-danger">Read More</a>
                <hr>
                <span class="badge badge-secondary">Subreddit: ${
                  post.subreddit
                }</span> 
                <span class="badge badge-dark">Score: ${post.score}</span>
              </div>
            </div>
              `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
        print.style.display = "none";
      });
    },
    error: function() {
      print.innerHTML = "error";
    }
  });

  //Scroll to seach results
  $("html,body").animate(
    {
      scrollTop: $("#toggle-search").offset().top
    },
    "slow"
  );
});

//War Machine onclick search
war.addEventListener("click", function() {
  let subreddit = `https://www.reddit.com/search.json?q=war%20machine%20avengers&sort=relevance&limit=100`;

  function displayReddit() {
    return fetch(subreddit)
      .then(res => res.json())
      .then(data => {
        return data.data.children.map(data => data.data);
      })
      .catch(err => console.log(err));
  }
  let print = document.getElementById("status");
  print.style.display = "block";
  $.ajax({
    dataType: "json",
    url: subreddit,
    type: "GET",
    beforeSend: function() {
      print.innerHTML = "...Loading";
    },
    complete: function() {
      print.innerHTML = "Success";
    },
    success: function() {
      displayReddit().then(results => {
        let output = '<div class="card-columns">';
        console.log(results);
        results.forEach(post => {
          // Check for image
          let image = post.preview
            ? post.preview.images[0].source.url
            : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
          output += `
              <div id="reddit-card" class="card mb-2">
              <a href="${
                post.url
              }"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${truncateString(post.selftext, 100)}</p>
                <a href="https://www.reddit.com${post.permalink}" target="_blank
                " class="btn btn-danger">Read More</a>
                <hr>
                <span class="badge badge-secondary">Subreddit: ${
                  post.subreddit
                }</span> 
                <span class="badge badge-dark">Score: ${post.score}</span>
              </div>
            </div>
              `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
        print.style.display = "none";
      });
    },
    error: function() {
      print.innerHTML = "error";
    }
  });

  //Scroll to seach results
  $("html,body").animate(
    {
      scrollTop: $("#toggle-search").offset().top
    },
    "slow"
  );
});

//Page top button
$("#top").click(function() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    500
  );
});
