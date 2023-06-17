document.addEventListener("DOMContentLoaded", function() {
    const truthBtn = document.getElementById("truthBtn");
    const dareBtn = document.getElementById("dareBtn");
    const result = document.getElementById("result");
    const players = [];
    let currentPlayerIndex = 0;
  
    truthBtn.addEventListener("click", function() {
      executeAction("Truth");
    });
  
    dareBtn.addEventListener("click", function() {
      executeAction("Dare");
    });
  
    function executeAction(type) {
      const player1 = document.getElementById("player1").value;
      const player2 = document.getElementById("player2").value;
  
      if (player1 && player2) {
        if (players.length === 0) {
          players.push(player1, player2);
        }
  
        const truthList = [
          "Er det sant at du vill knule noen?",
          "Er det sant at du har knulet noen?",
          "Er det sant at du har hatt sex med en jente?",
          "Er det sant at du er horny?",
          "Er det sant at du ser på porn og runker?",
          "Har du kuma og viss hvor mange ganger cirka?"
          // Add more truth questions as desired
        ];
  
        const dareList = [
          "Set den andre spillern i håndjern for 2-4 min og gjør hva du vill med han/hun.",
          "Strip for den andre i 30 sec.",
          "Se en porno video og gjør det de gjør i videon med den andre.",
          "Sug den andres dikk i 10 sec(kan blånektes).",
          "Runk hverandre eller den andre for 5-15 sec.",
          "Twerk på eller foran dikken til den anre.",
          "Ta av deg 2 klesplag for 2-4 runder.",
          "Ta på en kondom(må ikke) deretter knuller du den andre for mellom 10sec-2min.",
          "Se på en porno video og knull den andre til videon er over.",
          "Ta av deg 6 klesplagg og gjør en sexy dans/twerk for 5-20sec.",
          "Ta av deg alt til boksern eller helt naken for 4 runder.",
          "Ta et håndjern på deg og en annen(valgfritt sted) og prøv og ha sex.",
          "Gjør den mest sexy dansen du kan(det er lov å søke).",
          "Søk på et eller annet med sex å gjøre eller bare ordet sex, gå inn på bilder og gjør en av de 3 første stillingene.",
          "Lek familie og gjør sexuele ting familier gjør(ikke kyssing hvis det ikke er ønsket).",
          "Spill eller gjør en challange, den som taper må suge den andre i 5-10sec(kan nektes).",
          "Gjør den andre så horny som du greier innen 10-50sec.",
          "Gjør alt det den andre sier for 20sec-5min(kan nekte noen ting).",
          "Hvis du ikke har kondom så må du sleike den andre sin penis eller suge for 5-15sec.",
          "Ta på en kondom og hver klar for å gjøre noe sexuelt.",
          "Twerk(rumpa) foran den andre og gni rumpa de på dikken til den andre(hvis ønsket)."
          // Add more dare tasks as desired
        ];
  
        function getRandomElement(list) {
          const randomIndex = Math.floor(Math.random() * list.length);
          return list[randomIndex];
        }
  
        const currentPlayer = players[currentPlayerIndex];
        let selectedAction;
  
        if (type === "Truth") {
          selectedAction = getRandomElement(truthList);
        } else if (type === "Dare") {
          selectedAction = getRandomElement(dareList);
        }
  
        result.textContent = `${currentPlayer}, your ${type} is: ${selectedAction}`;
        result.classList.add("big-text"); // Add the CSS class "big-text" to the result element
  
        currentPlayerIndex++;
        if (currentPlayerIndex >= players.length) {
          currentPlayerIndex = 0;
        }
      } else {
        alert("Please enter player names.");
      }
    }
  });
  