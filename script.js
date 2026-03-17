// TAB SWITCH
function showTab(id) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// THEME
function toggleTheme() {
  document.body.classList.toggle("light");
}

// SEARCH FILTER
function filterUsers() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.querySelectorAll("#userList li");

  items.forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(input) ? "" : "none";
  });
}

// MODAL
function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// ADD USER + LOCAL STORAGE
function addUser() {
  let name = document.getElementById("newUser").value;
  if (!name) return;

  let li = document.createElement("li");
  li.textContent = name;
  document.getElementById("userList").appendChild(li);

  saveUsers();
  closeModal();
}

// SAVE
function saveUsers() {
  let users = [];
  document.querySelectorAll("#userList li").forEach(li => {
    users.push(li.textContent);
  });
  localStorage.setItem("users", JSON.stringify(users));
}

// LOAD
window.onload = () => {
  let data = JSON.parse(localStorage.getItem("users")) || [];
  let list = document.getElementById("userList");

  data.forEach(name => {
    let li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
};

// CHART
const ctx = document.getElementById("chart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [{
      label: "Sales",
      data: [10, 20, 15, 30],
      borderColor: "#0ea5e9"
    }]
  }
});