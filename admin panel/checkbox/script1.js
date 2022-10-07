
if(document.querySelector(".district")){

    const wrapper1 = document.querySelector(".wrapper");

    selectBtn1 = wrapper1.querySelector(".select-btn"),
    searchInp = wrapper1.querySelector("input"),
    options = wrapper1.querySelector(".options");
console.log(wrapper1);

    let districts = ["Ahmedabad", "Vadodara", "Anand", "Chhota Udaipur", "Dahod", "Kheda", "Mahisagar",
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




}
if(document.querySelector(".taluka")){
    const wrapper1 = document.querySelector(".wrapper2"),
    selectBtn1 = wrapper1.querySelector(".select-btn2"),
    searchInp = wrapper1.querySelector(".input-2"),
    options = wrapper1.querySelector(".options2");
    console.log(wrapper1);


let talukas = ["Ahme", "Vadodara", "Anand", "Chhota Udaipur", "Dahod", "Kheda", "Mahisagar",
    "Panchmahal", "Gandhinagar", "Aravalli", "Banaskantha", "Mehsana", "Sabarkantha", "Rajkot", "Amrelli",
    "Bhavnagar", "Botad", "Devbhoomi Dwarka", "Gir Somnath", "Jamnagar", "Junagadh", "Morbi", "Porbandar",
    "Surendranagar", "Kachchh", "Surat", "Bharuch", "Dang", "Narmada", "Navsari", "Tapi", "Valsad"
]


function addtaluka(selectedtaluka) {
    options.innerHTML = "";
    talukas.forEach(taluka => {
        let isSelected = taluka == selectedtaluka ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${taluka}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addtaluka();

function updateName(selectedLi) {
    searchInp.value = "";
    addtaluka(selectedLi.innerText);
    wrapper1.classList.remove("active");
    selectBtn1.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = talukas.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn1.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Station not found</p>`;
});

selectBtn1.addEventListener("click", () => wrapper1.classList.toggle("active"));
}

if(document.querySelector(".police-station")){
    const wrapper1 = document.querySelector(".wrapper3"),
    selectBtn1 = wrapper1.querySelector(".select-btn3"),
    searchInp = wrapper1.querySelector(".input-3"),
    options = wrapper1.querySelector(".options3");
    console.log(wrapper1);


let policestations = ["Ahmedabad", "Vadodara", "Anand", "Chhota Udaipur", "Dahod", "Kheda", "Mahisagar",
    "Panchmahal", "Gandhinagar", "Aravalli", "Banaskantha", "Mehsana", "Sabarkantha", "Rajkot", "Amrelli",
    "Bhavnagar", "Botad", "Devbhoomi Dwarka", "Gir Somnath", "Jamnagar", "Junagadh", "Morbi", "Porbandar",
    "Surendranagar", "Kachchh", "Surat", "Bharuch", "Dang", "Narmada", "Navsari", "Tapi", "Valsad"
]


function addps(selectedps) {
    options.innerHTML = "";
    policestations.forEach(ps => {
        let isSelected = ps == selectedps ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${ps}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addps();

function updateName(selectedLi) {
    searchInp.value = "";
    addps(selectedLi.innerText);
    wrapper1.classList.remove("active");
    selectBtn1.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = policestations.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn1.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Station not found</p>`;
});

selectBtn1.addEventListener("click", () => wrapper1.classList.toggle("active"));

}




