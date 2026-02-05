<script>
    import { onMount } from "svelte";

    const steps = [
        { id: "riserva", text: "Réserve Naturelle d'Idjwi-Nyamusisi" },
        {
            id: "champs",
            text: "Villages et habitations",
        },
        {
            id: "agro",
            text: "Champs agricoles, élevage intégré et agroforesterie",
        },
        {
            id: "altitude",
            text: "Zone de conservation en haute altitude",
        },
        { id: "savana", text: "Savane à vocation écologique" },
        { id: "tourisme", text: "Accueil écotouristique" },
    ];

    let step = 0;

    // SCROLL = cervello del sistema
    onMount(() => {
        const sections = Array.from(document.querySelectorAll(".story-step"));

        const updateStep = () => {
            const middle = window.scrollY + window.innerHeight / 2;

            let current = 0;
            sections.forEach((sec, i) => {
                const rect = sec.getBoundingClientRect();
                const top = rect.top + window.scrollY;
                const bottom = top + rect.height;

                if (middle >= top && middle <= bottom) current = i;
            });

            step = current;
        };

        window.addEventListener("scroll", updateStep, { passive: true });
        updateStep();
    });
</script>

<div class="layout">
    <!-- VISUAL -->
    <div class="visual">
        {#each steps as s, i}
            <img
                src={`${import.meta.env.BASE_URL}svg/${s.id}.svg`}
                class="layer {i === step ? 'visible' : ''}"
                alt={s.id}
            />
        {/each}
    </div>

    <!-- TEXT -->
    <div class="story">
        {#each steps as s, i}
            <section class="story-step">
                <h2>{s.text}</h2>
            </section>
        {/each}
    </div>
</div>

<style>
    .layout {
        display: flex;
        width: 100%;
    }

    /* VISUALE */
    .visual {
        position: sticky;
        top: 0;
        width: 70%;
        height: 100vh;
        background: #f3faeb;
    }

    /* ogni svg è uno step */
    .layer {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 80%;
        object-fit: contain;
        opacity: 0;
        transition: opacity 0.6s ease;
    }

    .layer.visible {
        opacity: 1;
    }

    /* TESTO */
    .story {
        width: 30%;
    }

    .story h2 {
        font-size: 1.2em;
    }

    .story-step {
        height: 90vh;
        padding: 3rem;
    }
</style>
