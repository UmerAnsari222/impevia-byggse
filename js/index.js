let buttonList = document.querySelector(".base-radio-buttons__list");
let buttonListItem = document.querySelector(".base-radio-buttons__list");

let checkBox = document.querySelector("#auth-form-agree");

let selectedQuestionOne = null;

let isCheck = false;
let isAuthAgree = false;
let selectedDropdownItemJar = document.querySelectorAll(
  ".base-select__option-jar-at-click"
);

let questions = [
  {
    id: 0,
    name: "T.ex. snickare eller elektriker",
    type: "radio",
    suggestions: [
      "Akustikisolering",
      "Andra bygginstallationer",
      "Arborist",
      "Arkitekt",
      "Badrum",
      "Byggföretag",
      "Byggkonsult",
      "Dränering och fuktskydd",
      "Elektriker",
      "Fotografering",
      "Gasarbeten",
      "Golvarbeten",
      "Grävarbeten",
      "Inredare",
      "Landskapsarkitekt",
      "Markarbete",
      "Microcement",
      "Muddring",
      "Mur- och putsarbeten",
      "Målning",
      "Möbelrenovering",
      "Möbelsnickare",
      "Plåtslagare",
      "Poolbyggnation",
      "Rivning",
      "Rörmokare",
      "Sanering",
      "Snickare",
      "Snickeriarbeten",
      "Sotare",
      "Spackling",
      "Ställningsarbeten",
      "Takarbete",
      "Trädgårdsarbeten",
      "Ventilation",
    ],
  },

  {
    id: 1,
    name: "Postnummer",
    type: "textarea",
    suggestions: [],
  },
];

// let onskatStartdatumOption = [
//   "Snarast möjligt",
//   "Inom 1 månad",
//   "Inom 3 månader",
//   "Inom 6 månader",
//   "Inom 12 månader",
//   "Ingen betydelse",
// ];

let onskatStartdatumOption = [
  "Badrumsrenovering",
  "Köksrenovering",
  "Tvättstuga",
  "Toalett",
  "Totalrenovering",
  "Tillbyggnad",
  "Annat",
];

// let JagArOption = ["Privatperson", "Företag", "Bostadsrättsförening"];
let JagArOption = [
  "Lägenhet",
  "Villa",
  "Radhus",
  "Fritidshus",
  "Affärslokal",
  "BRF",
  "Annat",
];

let onskarOption = [
  "Snarast",
  "Inom 3 månader",
  "Inom 6 månader",
  "Inom 12 månader",
];

let palatsOption = [
  "Botkyrka",
  "Danderyd",
  "Ekerö",
  "Haninge",
  "Huddinge",
  "Järfälla",
  "Lidingö",
  "Nacka",
  "Norrtälje",
  "Nykvarn",
  "Nynäshamn",
  "Salem",
  "Sigtuna",
  "Sollentuna",
  "Solna",
  "Stockholm  Stad",
  "Sundbyberg",
  "Södertälje",
  "Tyresö",
  "Tyresö",
  "Täby",
  "Upplands-Bro",
  "Upplands Väsby",
  "Vallentuna",
  "Vaxholm",
  "Värmdö",
  "Österåker",
];

let questionIndex = 0;

// function createQuestionOneAndSuggestion(questionIndex) {
//   let question = questions[questionIndex];
//   //   console.log(question);
//   if (question.suggestions.length >= 0) {
//     for (let index = 0; index < question.suggestions.length; index++) {
//       const element = question.suggestions[index];
//       let label = document.createElement("label");

//       label.classList.add("base-radio-buttons__item");

//       let input = document.createElement("input");
//       input.setAttribute("type", "radio");
//       input.setAttribute("value", element);

//       let span = document.createElement("span");
//       span.textContent = element;
//       span.classList.add("base-radio-buttons__item-content");

//       label.insertAdjacentElement("afterbegin", input);
//       label.insertAdjacentElement("beforeend", span);

//       buttonList.insertAdjacentElement("afterbegin", label);
//     }
//   }
// }

// document.getElementById("postnummer").addEventListener("input", (e) => {
//   console.log(document.getElementById("postnummer").value);
//   if (document.getElementById("postnummer").value == "17563") {
//     console.log("Hello world");
//     document.getElementById("skicka-button").removeAttribute("disabled");
//   } else {
//     document
//       .getElementById("skicka-button")
//       .setAttribute("disabled", "disabled");
//   }
// });

// createQuestionOneAndSuggestion(questionIndex);

// buttonListItem.childNodes.forEach((element, index) => {
//   element.addEventListener("click", (e) => {
//     if (selectedQuestionOne !== null) {
//       // console.log("Insiad IF");
//       //   selected.classList.remove("_checked");
//       selectedQuestionOne.classList.remove("_checked");
//       element.classList.add("_checked");
//       selectedQuestionOne = element;
//       document.getElementById("skicka-button").removeAttribute("disabled");
//     } else {
//       // console.log("ELSE");
//       //   selected.classList?.remove("_checked");
//       element.classList.add("_checked");
//       selectedQuestionOne = element;
//       document.getElementById("skicka-button").removeAttribute("disabled");
//     }
//   });
// });

document.getElementById("next-stage-button").addEventListener("click", () => {
  console.log("Hello World");
  document.querySelector("#beskriv-section").style.display = "none";
  document.querySelector(".auth-registration-page").style.display = "block";
});

// document.getElementById("skicka-button").addEventListener("click", () => {});

// document.getElementById("projektets").addEventListener("input", () => {
//   checkAll();
// });

checkBox.addEventListener("click", (event) => {
  event.preventDefault();
  if (checkBox.classList.contains("_checked") && isAuthAgree) {
    console.log("IF ERROR");
    checkBox.classList.remove("_checked");
    isAuthAgree = false;
    checkAllPageAuth();
  } else {
    console.log("ELSE ERROR");
    checkBox.classList.add("_checked");
    isAuthAgree = true;
    checkAllPageAuth();
  }
  // checkBox.classList.add("_checked");
});

document.getElementById("beskrivning").addEventListener("input", () => {
  checkAll();
});

// document.getElementById("epost").addEventListener("input", () => {
//   checkAll();
// });

document.getElementById("namn").addEventListener("input", () => {
  checkAllPageAuth();
});

document.getElementById("efternamn").addEventListener("input", () => {
  checkAllPageAuth();
});

document.getElementById("mejl").addEventListener("input", () => {
  checkAllPageAuth();
});

document.getElementById("telefon").addEventListener("input", () => {
  checkAllPageAuth();
});

// document.getElementById("beskrivning").value.trim() != "" &&

// document.querySelector("#onskat-button").addEventListener("click", () => {
//   console.log("#onskat-button clicked");
//   document.querySelector("#onskat-select").classList.toggle("_open");
//   isCheck = true;
//   let baseSelect = document.querySelector(".base-select__dropdown-wrap");
//   if (baseSelect.style.display == "none") {
//     document.querySelector(".base-select__dropdown").innerHTML = "";

//     onskatStartdatumOption.forEach((option) => {
//       let div = document.createElement("div");
//       div.setAttribute("class", "base-select__option");
//       div.classList.add("class", "base-select__option-onskat-click");
//       div.innerText = option;
//       document
//         .querySelector(".base-select__dropdown")
//         .insertAdjacentElement("beforeend", div);
//     });

//     baseSelect.style.display = "block";

//     selectedDropdownItemJar = document.querySelectorAll(
//       ".base-select__option-onskat-click"
//     );
//     selectOnskat(selectedDropdownItemJar);
//   } else {
//     document.querySelector(".base-select__dropdown").innerHTML = "";
//     baseSelect.style.display = "none";
//   }
// });

document.querySelector("#Jag-ar-button").addEventListener("click", () => {
  document.querySelector("#Jag-ar-select").classList.toggle("_open");
  isCheck = true;
  let baseSelect = document.querySelector("#Jag-ar-select-item");
  if (baseSelect.style.display == "none") {
    document.querySelector("#Jag-ar-select-dropdown").innerHTML = "";

    JagArOption.forEach((option) => {
      let div = document.createElement("div");
      div.setAttribute("class", "base-select__option");
      div.classList.add("class", "base-select__option-jar-at-click");
      div.innerText = option;
      document
        .querySelector("#Jag-ar-select-dropdown")
        .insertAdjacentElement("beforeend", div);
    });
    baseSelect.style.display = "block";
    selectedDropdownItemJar = document.querySelectorAll(
      ".base-select__option-jar-at-click"
    );
    selectJar(selectedDropdownItemJar);
  } else {
    document.querySelector("#Jag-ar-select-dropdown").innerHTML = "";
    baseSelect.style.display = "none";
  }
});

document.querySelector("#plats-button").addEventListener("click", () => {
  document.querySelector("#plats-select").classList.toggle("_open");
  isCheck = true;
  let baseSelect = document.querySelector("#plats-select-item");
  if (baseSelect.style.display == "none") {
    document.querySelector("#plats-select-dropdown").innerHTML = "";

    palatsOption.forEach((option) => {
      let div = document.createElement("div");
      div.setAttribute("class", "base-select__option");
      div.classList.add("class", "base-select__option-plats-click");
      div.innerText = option;
      document
        .querySelector("#plats-select-dropdown")
        .insertAdjacentElement("beforeend", div);
    });
    baseSelect.style.display = "block";
    selectedDropdownItemJar = document.querySelectorAll(
      ".base-select__option-plats-click"
    );
    selectPlats(selectedDropdownItemJar);
  } else {
    document.querySelector("#plats-select-dropdown").innerHTML = "";
    baseSelect.style.display = "none";
  }
});

document.querySelector("#onskar-button").addEventListener("click", () => {
  document.querySelector("#onskar-select").classList.toggle("_open");
  isCheck = true;
  let baseSelect = document.querySelector("#onskar-select-item");
  if (baseSelect.style.display == "none") {
    document.querySelector("#onskar-select-dropdown").innerHTML = "";

    onskarOption.forEach((option) => {
      let div = document.createElement("div");
      div.setAttribute("class", "base-select__option");
      div.classList.add("class", "base-select__option-onskar-click");
      div.innerText = option;
      document
        .querySelector("#onskar-select-dropdown")
        .insertAdjacentElement("beforeend", div);
    });
    baseSelect.style.display = "block";
    selectedDropdownItemJar = document.querySelectorAll(
      ".base-select__option-onskar-click"
    );
    selectOnskar(selectedDropdownItemJar);
  } else {
    document.querySelector("#onskar-select-dropdown").innerHTML = "";
    baseSelect.style.display = "none";
  }
});

function selectPlats(list) {
  list.forEach((select) => {
    select.addEventListener("click", () => {
      document.querySelector("#base-select__value__plats").innerText =
        select.textContent;
      document.querySelector("#plats-select").classList.remove("_open");
      let baseSelect = document.querySelector("#plats-select-item");
      baseSelect.style.display = "none";
      checkAll();
    });
  });
}

function selectOnskar(list) {
  list.forEach((select) => {
    select.addEventListener("click", () => {
      document.querySelector("#base-select__value__onskar").innerText =
        select.textContent;
      document.querySelector("#onskar-select").classList.remove("_open");
      let baseSelect = document.querySelector("#onskar-select-item");
      baseSelect.style.display = "none";
      checkAll();
    });
  });
}

function selectJar(list) {
  list.forEach((select) => {
    select.addEventListener("click", () => {
      document.querySelector("#base-select__value__jar").innerText =
        select.textContent;
      document.querySelector("#Jag-ar-select").classList.remove("_open");
      let baseSelect = document.querySelector("#Jag-ar-select-item");
      baseSelect.style.display = "none";
      checkAll();
    });
  });
}

function selectOnskat(list) {
  list.forEach((select) => {
    select.addEventListener("click", () => {
      document.querySelector("#base-select__value__onskat").innerText =
        select.textContent;
      document.querySelector("#onskat-select").classList.remove("_open");
      let baseSelect = document.querySelector(".base-select__dropdown-wrap");
      baseSelect.style.display = "none";
      checkAll();
    });
  });
}

document.getElementById("select-file").addEventListener("input", () => {
  // console.log(document.getElementById("select-file").files[0]);
  // file-preview__file-img
  var src = URL.createObjectURL(
    document.getElementById("select-file").files[0]
  );
  console.log(src);

  let id = Math.floor(Math.random() * 10000);

  let html = ` <div class="files-drop-upload__file" id="${id}">
  <div class="file-preview files-drop-upload__file-img">
    <img
      src="${src}"
      class="file-preview__file-img"
    />
  </div>
  <button onClick="handleClick(${id})" class="files-drop-upload__file-delete">
    <?xml version="1.0" ?><svg
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z"
      />
    </svg>
    <span>Ta bort</span>
  </button>
</div>`;

  document.querySelector(".files-drop-upload__files").innerHTML += html;

  checkAll();
});

function handleClick(params) {
  document.getElementById(params).remove();
  checkAll();
}

function checkAll() {
  console.log(
    document.querySelector(".files-drop-upload__files").childNodes.length
  );
  console.log(document.querySelector(".files-drop-upload__files").childNodes);
  if (
    document.getElementById("beskrivning").value.trim() != "" &&
    document.getElementById("base-select__value__onskar").textContent.trim() !=
      "" &&
    document.getElementById("base-select__value__plats").textContent.trim() !=
      "" &&
    document.getElementById("base-select__value__jar").textContent.trim() !=
      "" &&
    document.querySelector(".files-drop-upload__files").childNodes.length > 1
  ) {
    console.log(true);
    document.getElementById("next-stage-button").removeAttribute("disabled");

    return true;
  } else {
    document
      .getElementById("next-stage-button")
      .setAttribute("disabled", "disabled");
    return false;
  }
}

function checkAllPageAuth() {
  if (
    document.getElementById("telefon").value.trim() != "" &&
    document.getElementById("mejl").value.trim() != "" &&
    document.getElementById("efternamn").value.trim() != "" &&
    checkBox.classList.contains("_checked") != "" &&
    document.getElementById("namn").value.trim() != ""
  ) {
    console.log(true);
    console.log(document.getElementById("#auth-button"));
    document.querySelector("#auth-button").removeAttribute("disabled");
    return true;
  } else {
    document.querySelector("#auth-button").setAttribute("disabled", "disabled");
    return false;
  }
}
