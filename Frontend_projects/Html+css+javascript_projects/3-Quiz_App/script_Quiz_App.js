/* Kötelező sor, hogy betöltse az oldal a js kódot. */
document.addEventListener("DOMContentLoaded", () => {
  let outputUserresult = 0; // Eredmények tárolása
  console.log("Oldal betöltése sikeres!");

  function checkAnswer() {
    outputUserresult = 0;
    console.log("Eredmények visszaállítása sikeres!");

    // Először minden radio háttérszínét visszaállítjuk
    const allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
      radio.parentElement.style.background = "";
    });

    // Kérdések és helyes válaszok tömbben
    const answers = [
      { name: "question1", correct: "had started" },
      { name: "question2", correct: "were" },
      { name: "question3", correct: "was going" },
      { name: "question4", correct: "were having" },
      { name: "question5", correct: "go" }
    ];

    // Ellenőrizzük, hogy minden kérdés ki van-e töltve
    for (const ans of answers) {
      const checked = document.querySelector(`input[name="${ans.name}"]:checked`);
      if (!checked) {
        showToast("Please answer all questions!");
        return;
      }
    }

    // Végigmegyünk minden kérdésen, színezzük a válaszokat
    answers.forEach(ans => {
      const radios = document.querySelectorAll(`input[name="${ans.name}"]`);
      radios.forEach(radio => {
        if (radio.value === ans.correct) {
          radio.parentElement.style.background = "#c8f7c5"; // zöld, ha helyes
        } else if (radio.checked) {
          radio.parentElement.style.background = "#f7c5c5"; // piros, ha rossz és ezt választotta
        }
      });

      const checked = document.querySelector(`input[name="${ans.name}"]:checked`);
      if (checked && checked.value === ans.correct) outputUserresult++;
    });

    displayResult(outputUserresult);
    console.log("Your correct answer is: " + outputUserresult);
  }

  // Funkció a választás kijelzésére
  function displayResult(outputUserresult) {
    let resultElem = document.getElementById("outputUserresult");
    if (resultElem) {
      resultElem.innerText = `Your correct answers: ${outputUserresult}`;
    }
  }

  // Egyszerű push up (toast) üzenet
  function showToast(message) {
    let toast = document.createElement("div");
    toast.innerText = message;
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#333";
    toast.style.color = "#fff";
    toast.style.padding = "12px 24px";
    toast.style.borderRadius = "8px";
    toast.style.fontSize = "16px";
    toast.style.zIndex = "9999";
    toast.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = "opacity 0.5s";
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 500);
    }, 1800);
  }

  // Tűzijáték animáció
  function displayFirework() {
    // Egyszerű tűzijáték animáció canvas-szal
    let firework = document.createElement("canvas");
    firework.id = "firework-canvas";
    firework.width = window.innerWidth;
    firework.height = window.innerHeight;
    firework.style.position = "fixed";
    firework.style.top = "0";
    firework.style.left = "0";
    firework.style.pointerEvents = "none";
    firework.style.zIndex = "10000";
    document.body.appendChild(firework);

    const ctx = firework.getContext("2d");
    let particles = [];

    function randomColor() {
      return `hsl(${Math.random() * 360}, 100%, 60%)`;
    }

    function createFirework(x, y) {
      // Több tűzijáték-pont, különböző helyekre és színekre
      for (let j = 0; j < 5; j++) {
        const centerX = x + Math.cos((2 * Math.PI * j) / 5) * 200;
        const centerY = y + Math.sin((2 * Math.PI * j) / 5) * 120;
        for (let i = 0; i < 30; i++) {
          const angle = (Math.PI * 2 * i) / 30;
          const speed = Math.random() * 4 + 2;
          particles.push({
            x: centerX,
            y: centerY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            alpha: 1,
            color: randomColor(),
          });
        }
      }
    }

    createFirework(firework.width / 2, firework.height / 2);

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, firework.width, firework.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // gravitáció
        p.alpha -= 0.012;
        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      particles = particles.filter((p) => p.alpha > 0);
      frame++;
      if (particles.length > 0 && frame < 120) {
        requestAnimationFrame(animate);
      } else {
        firework.remove();
      }
    }
    animate();
  }

  // Gomb eseménykezelő
  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) {
    submitBtn.onclick = () => {
      checkAnswer();
      // Csak akkor jelenjen meg a tűzijáték, ha mind az 5 válasz helyes!
      if (outputUserresult === 5) {
        displayFirework();
      }
    };
  }
});
