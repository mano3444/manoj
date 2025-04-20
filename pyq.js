const data = {
    "Bikaner Technical University": {
      "B.Tech": {
        branches: ["CSE", "ECE"],
        years: {
          "CSE": {
            "1st Year": {
              "Maths": {
                "2021-22 PYQ": "https://example.com/algebra.pdf",
                "2022 PYQ ": "https://example.com/calculus.pdf",
                 "2023 PYQ": "https://example.com/calculus.pdf",
                  "2024 PYQ": "https://example.com/calculus.pdf",
                   "2025 PYQ": "https://example.com/calculus.pdf"

              },
              "Physics": {
                "2021-22 pyq": "https://example.com/mechanics.pdf",
                "Optics": "https://example.com/optics.pdf"
              }
            }
          },
          "ECE": {
            "1st Year": {
              "Electronics": {
                "Circuits": "https://example.com/circuits.pdf",
                "Signals": "https://example.com/signals.pdf"
              }
            }
          }
        }
      },
      "BCA": {
        years: {
          "1st Year": {
            "Chemistry": {
              "Organic": "https://example.com/organic.pdf",
              "Inorganic": "https://example.com/inorganic.pdf"
            },
            "Computer Fundamental": {
              "2021-22 PYQ": "https://example.com/animals.pdf",
              "2022-23 PYQ": "https://example.com/cells.pdf"
            }
          }
        }
      }
    },
    "Agriculture University Kota": {
      "B.Tech": {
        branches: ["ME", "CE"],
        years: {
          "ME": {
            "1st Year": {
              "Thermodynamics": {
                "Heat": "https://example.com/heat.pdf",
                "Engines": "https://example.com/engines.pdf"
              }
            }
          },
          "CE": {
            "1st Year": {
              "Structures": {
                "Beams": "https://example.com/beams.pdf",
                "Columns": "https://example.com/columns.pdf"
              }
            }
          }
        }
      },
      "BSc": {
        years: {
          "1st Year": {
            "Botany": {
              "Plants": "https://example.com/plants.pdf",
              "Seeds": "https://example.com/seeds.pdf"
            },
            "Maths": {
              "Matrices": "https://example.com/matrices.pdf",
              "Sets": "https://example.com/sets.pdf"
            }
          }
        }
      }
    }
  };

  const universitySelect = document.getElementById('universitySelect');
  const programSelect = document.getElementById('programSelect');
  const branchSelect = document.getElementById('branchSelect');
  const branchBox = document.getElementById('branchBox');
  const yearSelect = document.getElementById('yearSelect');
  const subjectSelect = document.getElementById('subjectSelect');
  const chaptersContainer = document.getElementById('chaptersContainer');

  function resetSelect(select, label) {
    select.innerHTML = `<option value="">-- ${label} --</option>`;
  }

  function populateUniversities() {
    resetSelect(universitySelect, "Select University");
    Object.keys(data).forEach(univ => {
      const opt = document.createElement('option');
      opt.value = univ;
      opt.textContent = univ;
      universitySelect.appendChild(opt);
    });
  }

  universitySelect.addEventListener('change', () => {
    resetSelect(programSelect, "Select Program");
    resetSelect(branchSelect, "Select Branch");
    resetSelect(yearSelect, "Select Year");
    resetSelect(subjectSelect, "Select Subject");
    chaptersContainer.innerHTML = '';
    branchBox.style.display = 'none';

    const selectedUniversity = universitySelect.value;
    if (data[selectedUniversity]) {
      Object.keys(data[selectedUniversity]).forEach(program => {
        const opt = document.createElement('option');
        opt.value = program;
        opt.textContent = program;
        programSelect.appendChild(opt);
      });
    }
  });

  programSelect.addEventListener('change', () => {
    resetSelect(branchSelect, "Select Branch");
    resetSelect(yearSelect, "Select Year");
    resetSelect(subjectSelect, "Select Subject");
    chaptersContainer.innerHTML = '';
    branchBox.style.display = 'none';

    const university = universitySelect.value;
    const program = programSelect.value;

    if (data[university]?.[program]?.branches) {
      branchBox.style.display = 'flex';
      data[university][program].branches.forEach(branch => {
        const opt = document.createElement('option');
        opt.value = branch;
        opt.textContent = branch;
        branchSelect.appendChild(opt);
      });
    } else {
      branchBox.style.display = 'none';
      populateYears(university, program);
    }
  });

  branchSelect.addEventListener('change', () => {
    resetSelect(yearSelect, "Select Year");
    resetSelect(subjectSelect, "Select Subject");
    chaptersContainer.innerHTML = '';

    const university = universitySelect.value;
    const program = programSelect.value;
    const branch = branchSelect.value;

    if (data[university]?.[program]?.years?.[branch]) {
      Object.keys(data[university][program].years[branch]).forEach(year => {
        const opt = document.createElement('option');
        opt.value = year;
        opt.textContent = year;
        yearSelect.appendChild(opt);
      });
    }
  });

  function populateYears(university, program) {
    resetSelect(yearSelect, "Select Year");
    resetSelect(subjectSelect, "Select Subject");
    chaptersContainer.innerHTML = '';

    if (data[university]?.[program]?.years) {
      Object.keys(data[university][program].years).forEach(year => {
        const opt = document.createElement('option');
        opt.value = year;
        opt.textContent = year;
        yearSelect.appendChild(opt);
      });
    }
  }

  yearSelect.addEventListener('change', () => {
    resetSelect(subjectSelect, "Select Subject");
    chaptersContainer.innerHTML = '';

    const university = universitySelect.value;
    const program = programSelect.value;
    const branch = branchSelect.value;
    const year = yearSelect.value;

    let subjects;

    if (branch && data[university]?.[program]?.years?.[branch]?.[year]) {
      subjects = data[university][program].years[branch][year];
    } else if (data[university]?.[program]?.years?.[year]) {
      subjects = data[university][program].years[year];
    }

    if (subjects) {
      Object.keys(subjects).forEach(subject => {
        const opt = document.createElement('option');
        opt.value = subject;
        opt.textContent = subject;
        subjectSelect.appendChild(opt);
      });
    }
  });

  subjectSelect.addEventListener('change', () => {
    chaptersContainer.innerHTML = '';

    const university = universitySelect.value;
    const program = programSelect.value;
    const branch = branchSelect.value;
    const year = yearSelect.value;
    const subject = subjectSelect.value;

    let chapters;

    if (branch && data[university]?.[program]?.years?.[branch]?.[year]?.[subject]) {
      chapters = data[university][program].years[branch][year][subject];
    } else if (data[university]?.[program]?.years?.[year]?.[subject]) {
      chapters = data[university][program].years[year][subject];
    }

    if (chapters) {
      Object.entries(chapters).forEach(([title, link]) => {
        const box = document.createElement('div');
        box.className = 'chapter-box';
        box.innerHTML = `<strong>${title}</strong><a href="${link}" target="_blank">📄 View PDF</a>`;
        chaptersContainer.appendChild(box);
      });
    }
  });

  populateUniversities();
