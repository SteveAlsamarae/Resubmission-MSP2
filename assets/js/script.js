function saveName() {
    localStorage.setItem("username", document.getElementById("uname").value);
    localStorage.setItem("show", true);
  }

  port_questions = [
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