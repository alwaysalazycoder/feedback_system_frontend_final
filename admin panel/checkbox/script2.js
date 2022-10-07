const wrapper1 = document.querySelector(".wrapper2"),
    selectBtn1 = wrapper1.querySelector(".select-btn2"),
    searchInp = wrapper1.querySelector("input-2"),
    options = wrapper1.querySelector(".options2");


let districts = ["Ahme", "Vadodara", "Anand", "Chhota Udaipur", "Dahod", "Kheda", "Mahisagar",
    "Panchmahal", "Gandhinagar", "Aravalli", "Banaskantha", "Mehsana", "Sabarkantha", "Rajkot", "Amrelli",
    "Bhavnagar", "Botad", "Devbhoomi Dwarka", "Gir Somnath", "Jamnagar", "Junagadh", "Morbi", "Porbandar",
    "Surendranagar", "Kachchh", "Surat", "Bharuch", "Dang", "Narmada", "Navsari", "Tapi", "Valsad"
]


function adddistrict(selecteddistrict) {
    options.innerHTML = "";
    districts.forEach(district => {
        let isSelected = district == selecteddistrict ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${district}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
adddistrict();

function updateName(selectedLi) {
    searchInp.value = "";
    adddistrict(selectedLi.innerText);
    wrapper1.classList.remove("active");
    selectBtn1.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = districts.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn1.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Station not found</p>`;
});

selectBtn1.addEventListener("click", () => wrapper1.classList.toggle("active"));