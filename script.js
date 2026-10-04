let savat = [];

function savatga(nom, narx) {
    savat.push({ nom, narx });
    yangila();
}

function yangila() {
    const royxat = document.getElementById("royxat");
    royxat.innerHTML = "";
    let jami = 0;

    savat.forEach(function (m) {
        const li = document.createElement("li");
        li.textContent = m.nom + " - " + m.narx.toLocaleString() + " so'm";
        royxat.appendChild(li);
        jami += m.narx;
    });

    document.getElementById("jami").textContent = jami.toLocaleString();
    document.getElementById("savat-soni").textContent = savat.length;
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}