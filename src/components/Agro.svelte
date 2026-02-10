<script>
    import { onMount } from "svelte";
    import { lang } from "../lib/lang";

    const steps = [
        {
            year: 2003,
            fr: "Extension des surfaces agricoles (2003–2019)",
            en: "Expansion of agricultural land (2003–2019)",
        },
        {
            year: 2007,
            fr: "Progression des cultures vivrières",
            en: "Expansion of subsistence crops",
        },
        {
            year: 2011,
            fr: "Réduction du couvert forestier",
            en: "Forest cover reduction",
        },
        {
            year: 2015,
            fr: "Fragmentation des habitats naturels",
            en: "Fragmentation of natural habitats",
        },
        {
            year: 2019,
            fr: "Pression agricole maximale observée",
            en: "Peak agricultural pressure observed",
        },
    ];

    let step = 0;

    onMount(() => {
        const sections = Array.from(document.querySelectorAll(".stor section"));

        const updateStep = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const middle = scrollY + viewportHeight / 2;

            let currentStep = 0;
            sections.forEach((sec, i) => {
                const rect = sec.getBoundingClientRect();
                const top = rect.top + scrollY;
                const bottom = top + rect.height;
                if (middle >= top && middle <= bottom) currentStep = i;
            });

            step = currentStep;
        };

        window.addEventListener("scroll", updateStep, { passive: true });
        updateStep();
    });

    function handleMouseEnter(i) {
        step = i;
    }
</script>

<div class="agro-layout">
    <!-- MAP -->
    <div class="map">
        <img
            src={`${import.meta.env.BASE_URL}svg/layerbase.svg`}
            class="layer base"
            alt="Layer base"
        />

        {#each steps as s, i}
            <img
                src={`${import.meta.env.BASE_URL}svg/${s.year}.svg`}
                class="layer {i === step ? 'visible' : ''}"
                alt="Year {s.year}"
            />
        {/each}
    </div>

    <!-- STORY -->
    <div class="stor">
        {#each steps as s, i}
            <section on:mouseover={() => handleMouseEnter(i)}>
                <p class="text">
                    {$lang === "fr" ? s.fr : s.en}
                </p>

                <p class="year">{s.year}</p>
            </section>
        {/each}
    </div>
</div>

<style>
    .agro-layout {
        display: flex;
        width: 100%;
    }

    /* MAP */
    .map {
        position: sticky;
        top: 0;
        width: 80%;
        height: 100vh;
        background: #f3faeb;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .layer {
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
        inset: 0;
        transition: opacity 0.5s ease;
        opacity: 0;
        z-index: 2;
        pointer-events: none;
    }

    .layer.visible {
        opacity: 1;
    }

    .layer.base {
        opacity: 1;
        z-index: 0;
    }

    /* STORY */
    .stor {
        width: 20%;
    }

    .stor section {
        height: 80vh;
        padding: 2rem;
        border-bottom: 1px solid #ddd;
        cursor: pointer;
    }

    .text {
        font-family: "Ga Maamli", sans-serif !important;
        color: #0085ca;
    }

    .year {
        font-family: "Lora", serif;
        color: #0085ca;
    }
</style>
