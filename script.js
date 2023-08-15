function changeToogleHover(event) {
  event.preventDefault();
  const lightThem = document.querySelector("#lightThem");
  lightThem.innerHTML = `<img
                  src="photo/toogle-light-hover.png"
                  ;
                  class="img-fluid mx-auto d-block"
                  alt="toggle to the dark them"
                />
              `;
}
function changeTooglelight(event) {
  event.preventDefault();

  const lightThem = document.querySelector("#lightThem");
  lightThem.innerHTML = `<img
                  src="photo/toogle-light.png"
                  ;
                  class="img-fluid mx-auto d-block"
                  alt="toggle to the dark them"
                />
              `;
}

function changeToogleEngHover(event) {
  event.preventDefault();
  const enlishLenguage = document.querySelector("#lightEnglich");
  enlishLenguage.innerHTML = `<img
                  src="photo/eng-hover.png"
                  ;
                  class="img-fluid mx-auto d-block" alt="toggle to the english language"
              /></a>
                `;
}

function changeToogEnglelight(event) {
  event.preventDefault();
  const enlishLenguage = document.querySelector("#lightEnglich");
  enlishLenguage.innerHTML = `<img
                  src="photo/eng.png"
                  ;
                  class="img-fluid mx-auto d-block" alt="toggle to the english language"
              /></a>
                `;
}

const lightThem = document.querySelector("#lightThem");
const enlishLenguage = document.querySelector("#lightEnglich");
lightThem.addEventListener("mouseover", changeToogleHover);
lightThem.addEventListener("mouseout", changeTooglelight);
enlishLenguage.addEventListener("mouseover", changeToogleEngHover);
enlishLenguage.addEventListener("mouseout", changeToogEnglelight);
