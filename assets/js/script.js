function saveName() {
  localStorage.setItem("username", document.getElementById("uname").value);
  localStorage.setItem("show", true);
}
sport_questions = [
  {
    Q: "In 1999, Jason McAteer left Liverpool to join which club?",
    C: [
      "Bolton Wanderers",
      "Blackburn Rovers",
      "Tranmere Rovers",
      "Ronaldo Cameron",
    ],
    A: "B",
  },
  {
    Q: "Lionel Messi holds the record for most goals in a calendar year but how many did he score?",
    C: ["81", "91", "101", "77"],
    A: "B",
  },
  {
    Q: "Wayne Rooney scored a hat trick on his Manchester United debut against which club?",
    C: ["Fenerbahce", "Galatasaray", "Besiktas", "Argentina"],
    A: "A",
  },
  {
    Q: "Tony Adams captained an English title winning side in how many decades?",
    C: ["1", "2", "3", "4"],
    A: "C",
  },
  {
    Q: "Paul Van Himst is a celebrated footballer of which nationality?",
    C: ["Germany", "Belgium", "Netherland", "Sweden"],
    A: "B",
  },
];

let selected_option = "";
let last_option_selected = "";


function highlight(selected_choice) {
  if (selected_option == "") {
    selected_option = selected_choice;
    document.getElementById(selected_choice).style.background =
      "rgb(48, 172, 221)";
  } else {
    document.getElementById(selected_option).style.background =
      "rgb(66, 142, 172)";
    selected_option = selected_choice;
    document.getElementById(selected_choice).style.background =
      "rgb(48, 172, 221)";
  }
  document.getElementById(selected_choice).style.borderRadius = "1rem";
  last_option_selected = selected_option;
}


function load_result() {
  document.getElementById("upper").style.display = "none";
  document.getElementById("score_Track").style.display = "none";
  document.getElementById("lower").style.fontSize = "2.85rem";
  document.getElementById("lower").style.display = "block";

  document.getElementById("final_score").innerHTML =
    localStorage.getItem("username") + ", you have scored : " + score;
  document.getElementById("final_score_result").style.fontSize = "4rem";
  document.getElementById("final_score_result").innerHTML = score;
}

const questions_length = sport_questions.length;
var question_index = 0;
let score = 0;


function calculate_score() {
  if (selected_option.slice(-1) == sport_questions[question_index]["A"]) {
    score += 1;
    document.getElementById("score_Track").innerHTML = "Score: " + score;
  }
}

function checkifselected() {
  if (last_option_selected == "") {
    alert("Please select some option");
    return false;
  } else {
    return true;
  }
}


function load_next_question() {
  if (checkifselected()) {
    calculate_score();

    if (question_index >= sport_questions.length - 1) {
      load_result();
    } else {
      question_index += 1;
      document.getElementById("question").innerHTML =
        sport_questions[question_index]["Q"];
      var choices = sport_questions[question_index]["C"];
      let lis = ["A", "B", "C", "D"];

      choices.map((choice, index) => {
        document.getElementById(`multiple_choices_${lis[index]}`).innerHTML =
          choice;
      });
      document.getElementById(selected_option).style.background =
        "rgb(66, 142, 172)";
      last_option_selected = "";
    }
  }
}

function Re_Play() {
  location.reload();
}


if (question_index == 0 && localStorage.getItem("show")) {
  document.getElementById("question").innerHTML =
    sport_questions[question_index]["Q"];

  var choices = sport_questions[question_index]["C"];
  let lis = ["A", "B", "C", "D"];

  choices.map((choice, index) => {
    document.getElementById(`multiple_choices_${lis[index]}`).innerHTML =
      choice;
  });
  document.getElementById("score_Track").innerHTML = "Score: " + score;
}
