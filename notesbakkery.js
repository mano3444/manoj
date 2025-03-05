const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acc => {
    acc.addEventListener('click', function () {
        const level = this.getAttribute('data-level');
        const parentPanel = this.parentElement; // Get the parent panel of current accordion

        // Check and close only other accordions within the same level and parent panel
        accordions.forEach(otherAcc => {
            if (
                otherAcc !== this &&
                otherAcc.getAttribute('data-level') === level &&
                otherAcc.parentElement === parentPanel // Ensures only accordions in the same section are affected
            ) {
                otherAcc.classList.remove('active');
                otherAcc.nextElementSibling.style.display = "none";
            }
        });

        // Toggle current accordion
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// --------------------------------------------------------syllabus and  notes page js ----------------------------------------------------------------------------
const searchBox = document.getElementById("searchBox");
const resultList = document.getElementById("resultList");

// 🎓 Universities Data List
const universities = [
    { name: "Agriculture University Jodhpur", id: "uni1" },
    { name: "Agriculture University Kota", id: "uni2" },
    { name: "Dr. Sarvepalli Radhakrishnan Rajasthan Ayurved University", id: "uni3" },
    { name: "Govind Guru Janjatiya University", id: "uni4" },
    { name: "Jagadguru Ramanandacharya Rajasthan Sanskrit University", id: "uni5" },
    { name: "Jai Narayan Vyas University", id: "uni6" },
    { name: "Maharaja Ganga Singh University", id: "uni7" },
    { name: "Maharaja Surajmal Brij University", id: "uni8" },
    { name: "Maharana Pratap University Of Agriculture & Technology", id: "uni9" },
    { name: "Maharshi Dayanand Saraswati University", id: "uni10" },
    { name: "Mohanlal Sukhadia University", id: "uni11" },
    { name: "National Law University", id: "uni12" },
    { name: "Pt. Deendayal Upadhyay Shekhawati University", id: "uni13" },
    { name: "Raj Rishi Bharathari Matsya University", id: "uni14" },
    { name: "Rajasthan Technical University", id: "uni15" },
    { name: "Rajasthan ILD Skill University", id: "uni16" },
    { name: "Rajasthan University Of Health Science", id: "uni17" },
    { name: "Rajasthan University Of Veterinary & Animal Science", id: "uni18" },
    { name: "Sardar Patel University Of Police, Security & Criminal Justice", id: "uni19" },
    { name: "Sri Karan Narendra Agriculture University", id: "uni20" },
    { name: "Swami Keshwanand Rajasthan Agricultural University", id: "uni21" },
    { name: "University Of Kota", id: "uni22" },
    { name: "University Of Rajasthan", id: "uni23" },
    { name: "Vardhman Mahaveer Open University", id: "uni24" },
    { name: "Haridev Joshi University Of Journalism & Mass Communication", id: "uni25" },
    { name: "Bikaner Technical University", id: "uni26" },
    { name: "Dr. Bhimrao Ambedkar Law University", id: "uni27" },
];

function updateSearchResults() {
    const query = searchBox.value.toLowerCase().trim();
    resultList.innerHTML = "";

    if (query === "") {
        resultList.style.display = "none"; 
        return;
    } else {
        resultList.style.display = "block"; 
    }

    const filtered = universities.filter(uni => uni.name.toLowerCase().includes(query));

    if (filtered.length === 0) {
        resultList.innerHTML = "<div class='result-item'>No results found</div>";
        return;
    }

    filtered.forEach(uni => {
        const div = document.createElement("div");
        div.classList.add("result-item");
        
        // 🟡 सर्च की गई क्वेरी को हाइलाइट करने के लिए `<mark>` टैग यूज किया
        const regex = new RegExp(`(${query})`, "gi");
        div.innerHTML = uni.name.replace(regex, "<mark>$1</mark>");

        div.onclick = function () {
            highlightAndScroll(uni.id);
            resultList.style.display = "none";
            searchBox.value = uni.name;
        };

        resultList.appendChild(div);
    });

    resultList.style.maxHeight = "250px";
    resultList.style.overflowY = "auto";
}

// **🔹 अब कोई भी इनपुट बदलने पर सर्च अपडेट होगा**
searchBox.addEventListener("input", updateSearchResults);

// **🔹 Accordion Code**
let openAccordion = null;

function toggleAccordion(index) {
    let acc = document.getElementById(`acc${index}`);
    let programContainer = acc.querySelector(".University-list");

    if (openAccordion && openAccordion !== acc) {
        openAccordion.style.display = "none";  
    }

    acc.style.display = acc.style.display === "block" ? "none" : "block"; 
    openAccordion = acc.style.display === "block" ? acc : null;

    if (programContainer) {
        programContainer.style.display = "block"; 
    }
}

// **📜 Highlight & Scroll Effect**
function highlightAndScroll(id) {
    let element = document.getElementById(id);

    if (!element) {
        console.warn("Element not found: ", id);
        return;
    }

    // **🔹 Scroll fix** - अब एलिमेंट सही से center में आएगा
    element.scrollIntoView({ behavior: "smooth", block: "center" });

    // 🔥 Highlight effect 2 सेकंड तक दिखेगा
    element.classList.add("highlight");
    setTimeout(() => element.classList.remove("highlight"), 2000);
}

// **🔍 Hide result list when clicking outside**
document.addEventListener("click", function (event) {
    if (!searchBox.contains(event.target) && !resultList.contains(event.target)) {
        resultList.style.display = "none";
    }
});

// ----------------------------------------------------------alll university of rajasthan --------------------
