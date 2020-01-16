
let form = document.getElementsByName('applyform')[0];
form.addEventListener('submit', check);

function check(e){
  e.preventDefault();
  let ip1 = document.querySelector(".tb1");
  let ip2 = document.querySelector(".tb2");
  let ab = document.querySelector("#ab");
  console.log(ip1.value);
  console.log(ip2.value);
  event.preventDefault();
  if (ip1.value === ip2.value) {
    ab.classList.add("nodisp");
    form.submit();
  } else {
    ab.classList.add("disp");
    ab.innerHTML = "passwords do not match";
  }
}

