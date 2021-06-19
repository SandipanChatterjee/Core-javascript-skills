let posts = [];
const container = document.querySelector("#container");
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      fetchPosts();
    }
  });
}, options);

observer.observe(document.querySelector("#footer"));

function fetchPosts() {
  console.log("fetchPosts##");
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((res) => {
      posts = [...res];
      for (let post of posts) {
        document.getElementById("container").innerHTML += `
                  <section class="section">
                      <h2>${post.title}</h2>
                      <p>${post.body}</p>
                  </section>
              `;
      }
    });
}

// fetchPosts();
