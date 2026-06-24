function blowCandle() {
  document.getElementById("flame").style.opacity = 0;

  setTimeout(() => {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");

   document.getElementById("message").innerHTML = `
    <h2>HEPI BEDDEY MAMA! 🎂❤️</h2>

    <p>
    Semoga diberi umur yang barokah, sehat selalu, dan dilancarkan segala urusannya. Aamiin.
    </p>

    <p>
    Sebenernya gak banyak yang mau kuomongin.
    </p>

    <p>
    Kita emang sering banget beda pendapat, kadang sama-sama keras kepala juga wkwk.
    </p>

    <p>
    Tapi aku harap kedepannya kita bisa lebih ngerti satu sama lain.
    </p>

    <p>
   Kayak yang ibu pernah bilang, kita sama-sama belajar.
    Belajar jadi anak yang lebih baik, belajar jadi orang tua yang lebih baik.
    </p>

    <p>
    Maaf ya mom kalau aku masih sering bikin kesal, susah dibilangi, atau belum bisa jadi anak yang sempurna.
    </p>

    <p>
    Terima kasih udah selalu berusaha buat aku sampai sekarang.
    Mungkin aku gak sering bilang, tapi aku beneran bersyukur punya mama.
    </p>

    <p>
    Semoga mama selalu bahagia, sehat, dan banyak rezekinya.
    </p>

    <p>
    Love you mom ❤️
    </p>

    <p>
    Oh iya...
    </p>

    <p>
    Banyakin uangnya, aku mau laptop sama les 😎👍
    </p>
    `;
    startConfetti();
    document.getElementById("bgm").play();
  }, 2000);
}

/* simple confetti */
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];

  for (let i = 0; i < 100; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";

    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y++, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}S