const programData = {
  "B.Tech": { fullForm: "Bachelor of Technology", duration: "4 years", career: "Engineer, Developer, etc." },
  "B.Design": { fullForm: "Bachelor of Design", duration: "3 years", career: "Designer, UI/UX, etc." },
  "BCA": { fullForm: "Bachelor of Computer Applications", duration: "3 years", career: "Software Developer, Analyst" }
};

const branchData = {
  "B.Tech": ["CSE", "ECE", "EEE"],
  "B.Design": ["Graphic", "Interior"]
};

const subjectsData = {
  "B.Tech": {
    "1": {
      "CSE": {
        "Engineering Mathematics-1": [
          { name: "Chapter 1: Differential calculus-1 Notes", file: "emath1.pdf", playlist: "https://youtube.com/playlist?list=PLU6SqdYcYsfLlRGC9VM7bYVhXhxULZydQ&si=Punc5WUetAUVAPkE" },
          { name: "Chapter 2: Differential calculus-2 Notes", file: "emath2", playlist: "https://youtube.com/playlist?list=PLU6SqdYcYsfLlRGC9VM7bYVhXhxULZydQ&si=grPK3__RZWpf-m6L" },
          { name: "Chapter 3: Differential Equation-1  Notes", file: "emath3.pdf", playlist: "https://youtube.com/playlist?list=PLU6SqdYcYsfIuZVt20v-eNZBfFLENrM1F&si=lpxTlXkY3mqa82zg" },
          { name: "Chapter 4: Differential Equation-2  Notes", file: "emath5.pdf", playlist: "https://youtube.com/playlist?list=PLU6SqdYcYsfIuZVt20v-eNZBfFLENrM1F&si=lpxTlXkY3mqa82zg" },
          { name: "Chapter 5: Partial Differential Equations Notes ", file: "emath5.pdf", playlist: "https://youtube.com/playlist?list=PLU6SqdYcYsfJljvy7Goi78EGwjPDQEnSw&si=TN0bwY3gxgQT5PVB" },
          
        ],
        "Engineering Physics": [
          { name: "Chapter 1: Wave Optics ", file: "", playlist: "" },
          { name: "Chapter 2: Laser & Optical Fiber  ", file: "", playlist: "" },
          { name: "Chapter 3: Quantum Mechanics ", file: "", playlist: "" },
          { name: "Chapter 4: Physics Of Advance Meterial ", file: "", playlist: "" },
          { name: "Chapter 5: Introduction To Electromegnetism ", file: "", playlist: "" },
          
        ]
      },
      "ECE": {
        "Physics": [
          { name: "Chapter 1: Wave Optics ", file: "", playlist: "" },
          { name: "Chapter 2: Laser & Optical Fiber  ", file: "", playlist: "" },
          { name: "Chapter 3: Quantum Mechanics ", file: "", playlist: "" },
          { name: "Chapter 4: Physics Of Advance Meterial ", file: "", playlist: "" },
          { name: "Chapter 5: Introduction To Electromegnetism ", file: "", playlist: "" },
          
         
        ],
        
        "Engineering Mathematics": [
          { name: "Chapter 1: Differential calculus-1 Notes", file: "emath1.pdf", playlist: "https://youtube.com/playlist?list=PLU6SqdYcYsfLlRGC9VM7bYVhXhxULZydQ&si=Punc5WUetAUVAPkE" },
          { name: "Chapter 2: Differential calculus-2 Notes", file: "emath2", playlist: "https://youtube.com/playlist?list=PLU6SqdYcYsfLlRGC9VM7bYVhXhxULZydQ&si=grPK3__RZWpf-m6L" },
          { name: "Chapter 3: Differential Equation-1  Notes", file: "emath3.pdf", playlist: "https://youtube.com/playlist?list=PLU6SqdYcYsfIuZVt20v-eNZBfFLENrM1F&si=lpxTlXkY3mqa82zg" },
          { name: "Chapter 4: Differential Equation-2  Notes", file: "emath5.pdf", playlist: "https://youtube.com/playlist?list=PLU6SqdYcYsfIuZVt20v-eNZBfFLENrM1F&si=lpxTlXkY3mqa82zg" },
          { name: "Chapter 5: Partial Differential Equations Notes ", file: "emath5.pdf", playlist: "https://youtube.com/playlist?list=PLU6SqdYcYsfJljvy7Goi78EGwjPDQEnSw&si=TN0bwY3gxgQT5PVB" },
          
        ],
      }
      
    },
    "2":{
      "CSE":{
        "python":[
          {name:"chapter 1: intro python"}
        ]
      }
    }
  },
  "B.Design": {
    "1": {
      "Graphic": {
        "History of Art & Design – I": [
          { name: "Chapter 1: Introduction", file: "hart1.pdf", playlist: "https://youtu.be/VxG4MgN7P7k?si=kJAEDsgtuAurU0Oq" },
          {name:"chapter 2:  History of Traditional Textiles:", file:"hart2.pdf", playlist:""},
          {name:"chapter 3: Impact of Indian Textiles:  ", file:"", playlist:""},
          {name:"chapter 4: History of Eastern Art  ", file:"", playlist:""},
          {name:"chapter 5:  History of Art in different region  ", file:"", playlist:""},


        ],
        "Professional Practice": [
          { name: "Chapter 1: Introduction", file: "", playlist: "" },
          {name:"chapter 2:  Communication Strategies", file:"", playlist:""},
          {name:"chapter 3: Verbal & Non Verbal Communication  ", file:"", playlist:""},
          {name:"chapter 4:  Presentation Principles ", file:"", playlist:""},
          {name:"chapter 5: Professional Ethics", file:"", playlist:""},


        ],
      },
      "Interior":{
        "Professional Practice": [
          { name: "Chapter 1: Introduction", file: "", playlist: "" },
          {name:"chapter 2:  Communication Strategies", file:"", playlist:""},
          {name:"chapter 3: Verbal & Non Verbal Communication  ", file:"", playlist:""},
          {name:"chapter 4:  Presentation Principles ", file:"", playlist:""},
          {name:"chapter 5: Professional Ethics", file:"", playlist:""},
        ],
        "History of Art & Design": [
          { name: "Chapter 1: Introduction", file: "hart1.pdf", playlist: "https://youtu.be/VxG4MgN7P7k?si=kJAEDsgtuAurU0Oq" },
          {name:"chapter 2:  History of Traditional Textiles:", file:"hart2.pdf", playlist:""},
          {name:"chapter 3: Impact of Indian Textiles:  ", file:"", playlist:""},
          {name:"chapter 4: History of Eastern Art  ", file:"", playlist:""},
          {name:"chapter 5:  History of Art in different region  ", file:"", playlist:""},


        ],
      }
    }
  },
  "BCA": {
    "1": {
      "General": {
        "Fundamentals": [
          { name: "Chapter 1: Computer Basics", file: "#", playlist: "#" }
        ]
      }
    }
  }
};

function updateProgram() {
  const program = document.getElementById("program").value;
  const yearDropdown = document.getElementById("year");
  const branchDropdown = document.getElementById("branch");
  const infoBox = document.getElementById("programInfo");

  // Reset dropdowns
  yearDropdown.innerHTML = '<option value="" disabled selected>Select Year</option>';
  document.getElementById("subject").innerHTML = '<option value="" disabled selected>Select Subject</option>';
  document.getElementById("notesDisplay").innerHTML = "";
  document.getElementById("playlistDisplay").innerHTML = "";

  // Set Info
  if (programData[program]) {
    infoBox.innerHTML = `<strong>${programData[program].fullForm}</strong><br>Duration: ${programData[program].duration}<br>Career: ${programData[program].career}`;
  }

  // Update Year
  let totalYears = program === "B.Tech" ? 4 : 3;
  for (let i = 1; i <= totalYears; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = `${i} Year`;
    yearDropdown.appendChild(option);
  }

  // Update Branch Visibility
  if (branchData[program]) {
    branchDropdown.style.display = "inline-block";
    branchDropdown.innerHTML = '<option value="" disabled selected>Select Branch</option>';
    branchData[program].forEach(branch => {
      const option = document.createElement("option");
      option.value = branch;
      option.textContent = branch;
      branchDropdown.appendChild(option);
    });
  } else {
    branchDropdown.style.display = "none";
    branchDropdown.innerHTML = "";
  }
}

function updateSubjects() {
  const program = document.getElementById("program").value;
  const year = document.getElementById("year").value;
  const branch = document.getElementById("branch").value || "General";
  const subjectDropdown = document.getElementById("subject");

  subjectDropdown.innerHTML = '<option value="" disabled selected>Select Subject</option>';
  document.getElementById("notesDisplay").innerHTML = "";
  document.getElementById("playlistDisplay").innerHTML = "";

  const subjectList = subjectsData?.[program]?.[year]?.[branch];
  if (subjectList) {
    for (let subject in subjectList) {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject;
      subjectDropdown.appendChild(option);
    }
  }
}

function updateNotes() {
  const program = document.getElementById("program").value;
  const year = document.getElementById("year").value;
  const branch = document.getElementById("branch").value || "General";
  const subject = document.getElementById("subject").value;

  const notesDisplay = document.getElementById("notesDisplay");
  const playlistDisplay = document.getElementById("playlistDisplay");

  notesDisplay.innerHTML = "";
  playlistDisplay.innerHTML = "";

  const items = subjectsData?.[program]?.[year]?.[branch]?.[subject];
  if (items) {
    items.forEach(item => {
      notesDisplay.innerHTML += `<div class='pdf-box'><a href="${item.file}" target="_blank">${item.name}</a></div>`;
      playlistDisplay.innerHTML += `<div class='playlist-box'><a href="${item.playlist}" target="_blank">${item.name} Playlist</a></div>`;
    });
  }
}
