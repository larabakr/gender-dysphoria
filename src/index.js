document.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG" && event.target.id != 'iq') window.location.href = event.target.src;
});

function showQuigley() {
  document.getElementById('Quigley').style.display = "block"
}

document.getElementById('iq').onclick = () => {

  alert('https://www.sciencedirect.com/science/article/abs/pii/S0165178105001551?via%3Dihub' + '\n' + 'https://nyaspubs.onlinelibrary.wiley.com/doi/abs/10.1111/j.2164-0947.1967.tb02279.x'
  )

  window.open('https://nyaspubs.onlinelibrary.wiley.com/doi/abs/10.1111/j.2164-0947.1967.tb02279.x')
};