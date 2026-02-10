<script>
    import { onMount, afterUpdate } from "svelte";
    import { lang } from "../lib/lang";

    import StepRDC from "./steps/StepRDC.svelte";
    import StepSudKivu from "./steps/StepSudKivutest.svelte";
    import StepIdjwi from "./steps/StepIdjwi.svelte";
    import StepNyamusisi from "./steps/StepNyamusisi.svelte";

    const steps = [
        { id: "cd", component: StepRDC },
        { id: "sk", component: StepSudKivu },
        { id: "idjwi", component: StepIdjwi },
        { id: "res", component: StepNyamusisi },
    ];

    let step = 0;
    let sections = [];

    function updateStep() {
        const middle = window.scrollY + window.innerHeight * 0.5;
        let current = 0;

        sections.forEach((sec, i) => {
            const rect = sec.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const bottom = top + rect.height;

            if (middle >= top && middle <= bottom) current = i;
        });

        step = current;
    }

    onMount(() => {
        sections = Array.from(document.querySelectorAll(".story-step"));
        updateStep();
        window.addEventListener("scroll", updateStep, { passive: true });
    });

    afterUpdate(() => {
        sections = Array.from(document.querySelectorAll(".story-step"));
        updateStep();
    });
</script>

<div class="layout">
    <div class="storya">
        {#each steps as s, i (s.id)}
            <section class="story-step">
                <img
                    class="mobile-map"
                    src={`${import.meta.env.BASE_URL}image/${s.id}.png`}
                    alt={s.id}
                />
                <svelte:component this={s.component} />
            </section>
        {/each}
    </div>

    <div class="visuale">
        {#each steps as s, i (s.id)}
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

    .visuale {
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

    .storya {
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

        .visuale {
            display: none;
        }

        .storya {
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
