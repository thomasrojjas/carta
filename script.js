function updateCountdown() {
    const targetDate = new Date("Jan 18, 2026 13:00:00").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    const countdownElement = document.getElementById("countdown");
    const celebrationZone = document.getElementById("celebration-zone");
    const card = document.querySelector('.card');

    if (diff <= 0) {
        if (!celebrationZone.dataset.started) {
            celebrationZone.dataset.started = 'true';
            document.title = "¡Feliz Cumpleaños! 🎂";
            
            // CAMBIO DE IMAGEN Y MENSAJE
            card.innerHTML = `
                <div style="text-align: center;">
                    <img src="cartaAbierta.png" alt="Carta Abierta" class="birthday-photo" style="width:160px;">
                    <h1 style="color: #d63384; margin-bottom: 15px;">¡Feliz Cumpleaños Mi Princesaaaaa!</h1>
                </div>
                <div class="message-text">
                    <p>Mi bebe bella, feliz cumpleaños cada dia más ANCIANAAAA!!!! ❤️</p>
                    
                    <p>Quiero que sepas que te amo mucho cosita bella, estoy muy orgulloso de ti y todo lo que has conseguido (media que
                    porrona me salio, pero que sepas que son caidas que todos hemos vivido, se lo inteligente que eres y el mucho esfuerzo
                    que le pones a estudiar, tienes que seguir ese camino, confia en que tarde o temprano obtendras los resultados por los
                    cuales tanto te has esforzado).</p>
                    
                    <p>Siempre seras mi bebe pequeña aunque cada dia crezcas mas y mas. Gracias por ser esa personita especial en mi vida.
                    Gracias por siempre estar. Se que no fue un año del todo bueno para ambos como pareja. ESO ME DA MUCHA PENITAAAAAA
                    pero quiero que sepas y confies en que ya todo podra ser como lo soñamos, juntitos hasta viejitos con una hermosa
                    familia que criaremos, EL MONTONAL DE CITAS ROMANTICAS QUE TENDREMOS EN EUROPA, y por supuesto ese maravilloso
                    matrimonio que viviremos tal y cual como lo hemos charlado mientras estas acostada hediondita en mi pecho.</p>
                    
                    <p>Espero te haya gustado esta sorpresita media nerd Y QUE LA LEAS MIENTRAS COMES LAS FRUTILLAS CON CHOCOLATE QUE TE REGALEEEEE
                    TE AMOOOOOO MUUUUUUU🐮🐮🐮🐮🐮🐮CHOOOOOOOOOO</p>
                    
                    <p style="text-align: center; font-weight: bold; color: #ff4d6d; font-size: 1.3rem; margin-top: 20px;">
                        MI PRINCESA HERMOSA TE ULTRA AMOOOOO 
                        (no juzgues mi codigo de front, recuerda que el front es el diseño de la pagina en simples palabras, intente que quedara ASTETIK pero     
                        el diseño a los teas no se nos da mucho.
                        NO OLVIDES BAÑARTE!!!!)
                    </p>
                    <div style="text-align: center; font-size: 40px; margin-top: 10px;">❤️</div>
                </div>
            `;
            
            // Quitamos el corazón flotante inicial si existe
            const heart = document.querySelector('.heart_love');
            if(heart) heart.remove();

            startCelebration();
        }
    } else {
        // ... (Cálculo del tiempo que ya tienes)
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Nueva carta en: ${days}d ${hours}h ${mins}m ${secs}s`;
    }
}

// Efecto de Pétalos al Clic
document.addEventListener('click', (e) => {
    const petals = ["🌸", "💮", "🌺", "💖"];
    for (let i = 0; i < 6; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = e.clientX + "px";
        petal.style.top = e.clientY + "px";
        document.body.appendChild(petal);

        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 4;
        const xV = Math.cos(angle) * velocity * 20;
        const yV = Math.sin(angle) * velocity * 20;

        petal.animate([
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${xV}px, ${yV}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 1000,
            easing: 'ease-out',
            fill: 'forwards'
        });

        setTimeout(() => petal.remove(), 2000);
    }
});

function startCelebration() {
    const celebrationZone = document.getElementById("celebration-zone");
    const elements = ["❤️", "✨", "🌸", "🎀", "💙"];

    setInterval(() => {
        const element = document.createElement("div");
        element.classList.add("animated-element");
        element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
        element.style.left = Math.random() * 100 + "vw";
        element.style.bottom = "-50px";
        celebrationZone.appendChild(element);
        element.addEventListener('animationend', () => element.remove());
    }, 400);
}

setInterval(updateCountdown, 1000);

updateCountdown();

