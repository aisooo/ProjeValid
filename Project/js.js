const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  async function getResponse() {
    let response = await fetch(
      "http://aiger555.pythonanywhere.com/api/v1/rating/"
    );
    let content = await response.json();
    content = content.splice(0, 10);

    console.log(content);

    let key;
    for (key in content) {
      content[key];
    }
  }
  getResponse();
});
