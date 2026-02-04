<script>
    const steps = [
        {
            year: 2003,
            text: "Occupation des zones agricoles",
        },
        { year: 2007, text: "" },
        { year: 2011, text: "" },
        { year: 2015, text: "" },
        { year: 2019, text: "" },
    ];

    let step = 0;

    function handleMouseEnter(i) {
        step = i;
    }
</script>

<div class="agro-layout">
    <!-- MAPPA -->
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
                alt="Anno {s.year}"
            />
        {/each}
    </div>

    <!-- STORY -->
    <div class="stor">
        {#each steps as s, i}
            <section on:mouseover={() => handleMouseEnter(i)}>
                <p
                    style="font-family: 'Ga Maamli', sans-serif !important;color: #0085ca;"
                >
                    {s.text}
                </p>
                <p>{s.year}</p>
            </section>
        {/each}
    </div>
</div>

<style>
    .agro-layout {
        display: flex;
        width: 100%;
        height: 100vh;
    }

    /* MAPPA */
    .map {
        position: sticky;
        top: 0;
        width: 80%;
        height: 100vh;
        background: #f3faeb;
        overflow: hidden;
    }

    .layer {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.5s ease;
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
        height: 100vh;
        overflow-y: auto;
        scroll-snap-type: y mandatory;
    }

    .stor section {
        height: 80vh;
        padding: 2rem;
        border-bottom: 1px solid #ddd;
        scroll-snap-align: start;
        cursor: pointer;
    }
</style>
