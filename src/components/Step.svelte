<script>
    import { onMount } from "svelte";

    import StepRDC from "./steps/StepRDC.svelte";
    import StepSudKivu from "./steps/StepSudKivu.svelte";
    import StepIdjwi from "./steps/StepIdjwi.svelte";
    import StepNyamusisi from "./steps/StepNyamusisi.svelte";

    const steps = [
        { id: "cd", component: StepRDC },
        { id: "sk", component: StepSudKivu },
        { id: "idwji", component: StepIdjwi },
        { id: "res", component: StepNyamusisi },
    ];

    let step = 0;
    let sections = [];

    onMount(() => {
        sections = Array.from(document.querySelectorAll(".story-step"));

        const updateStep = () => {
            const middle = window.scrollY + window.innerHeight * 0.5;

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
    <div class="story">
        {#each steps as s, i}
            <section class="story-step">
                <!-- MOBILE MAP -->
                <img
                    class="mobile-map"
                    src={`${import.meta.env.BASE_URL}image/${s.id}.png`}
                    alt={s.id}
                />

                <svelte:component this={s.component} />
            </section>
        {/each}
    </div>

    <!-- DESKTOP MAP -->
    <div class="visual">
        {#each steps as s, i}
            <img
                src={`${import.meta.env.BASE_URL}image/${s.id}.png`}
                alt={s.id}
                class="layer {i === step ? 'visible' : ''}"
                draggable="false"
            />
        {/each}
    </div>
</div>

<style>
    .layout {
        display: flex;
        width: 100%;
    }

    .visual {
        position: sticky;
        top: 0;
        width: 45%;
        height: 100vh;
        background: #f3faeb;
    }

    .layer {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: 0;
        transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .layer.visible {
        opacity: 1;
    }

    .story {
        width: 55%;
    }

    .story-step {
        height: 90vh;
        display: flex;
        align-items: center;
        padding: 3rem;
    }

    .mobile-map {
        display: none;
    }

    @media (max-width: 768px) {
        .layout {
            flex-direction: column;
        }

        .visual {
            display: none;
        }

        .story {
            width: 100%;
        }

        .story-step {
            height: auto;
            min-height: 100vh;
            flex-direction: column;
            align-items: stretch;
            padding: 2rem 1.2rem 4rem 1.2rem;
        }

        .mobile-map {
            display: block;
            width: 100%;
            height: 45vh;
            object-fit: contain;
            margin-bottom: 1.5rem;
            background: #f3faeb;
            animation: fadeIn 0.7s ease;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: none;
            }
        }
    }
</style>
