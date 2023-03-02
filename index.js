const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// SHOW SIDEBAR
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// CHANGE THEME
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// **********************FILL ORDERS IN TABLE****************
Projects.forEach((project) => {
  const tr = document.createElement("tr");
  const trContent = `
                        <td>${project.projectName}</td>
                        <td>${project.projectNumber}</td>
                        <td>${project.paymentStatus}</td>
                        <td class="${
                          project.delivery === "Pending" ? "danger" : "success"
                        }">${project.delivery}</td>
                        <td class="primary">Details</td>
                        `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});

// ******************************PRELOADER***********************

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})