<script>
    import Keymap from "./Keymap.svelte";
    let step = 0;
</script>

<div class="keymapsteps-layout">
    <div class="keymapsteps-story">
        <section on:mouseenter={() => (step = 0)}>
            <p style="padding: 20px;">
                La Réserve Forestière de Nyamusisi est située à l’est de la
                République démocratique du Congo, dans la province du Sud-Kivu,
                au cœur du lac Kivu. À l’échelle régionale, le Sud-Kivu est
                l’une des provinces les plus fragilisées par des décennies de
                conflits armés, de déplacements forcés de populations et de
                crises humanitaires récurrentes. Dans ce contexte, l’île d’Idjwi
                constitue une singularité territoriale. Relativement épargnée
                par les violences armées directes, elle est souvent qualifiée
                par ses habitants et par les acteurs institutionnels comme une «
                île de paix » au sein d’un environnement régional instable.
                Aucun obstacle lié à la sécurité ne se présente pour la mise en
                œuvre de projets à vocation locale sur l’île d’Idjwi, où des
                initiatives de coopération internationale, tant à petite qu’à
                grande échelle, ont déjà été menées avec succès.
            </p>
            <!-- <br /><br />RDC -->
        </section>
        <section on:mouseenter={() => (step = 1)}>Province du Sud-Kivu</section>
        <section on:mouseenter={() => (step = 2)}>
            Île d'Idjwi<br /><br />
            <p
                style="font-size:x-small; text-align:left; margin-block-start: 0em;margin-block-end: 0em;"
            >
                Diego Tirira, Creative Commons Attribution-Share Alike 2.0
                Generic
            </p>
            <img
                src={`${import.meta.env.BASE_URL}image/CD_Idjwi.jpg`}
                height="400px"
                alt="Idjwi"
            />
        </section>
        <section on:mouseenter={() => (step = 3)}>
            Réserve Forestière de Nyamusisi<br /><br />
            <p
                style="font-size:x-small; text-align:left; margin-block-start: 0em;margin-block-end: 0em;"
            >
                © Réserve Naturelle d’Idjwi-Nyamusisi
            </p>
            <img
                src={`${import.meta.env.BASE_URL}image/Idjwi_reserve.jpg`}
                height="400px"
                alt="Idjwi-reserve"
            />
        </section>
    </div>
    <div class="keymapsteps-map"><Keymap {step} /></div>
</div>

<style>
    .keymapsteps-layout {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 90%;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        margin-top: 5em;
    }
    .keymapsteps-layout::-webkit-scrollbar {
        display: none;
    }
    .keymapsteps-story {
        width: 100%;
        max-width: 40%;
        overflow: visible;
        font-family: "Ga Maamli", sans-serif !important;
        color: #0085ca;
    }

    .keymapsteps-map {
        width: 60%;
        position: sticky;
        top: 0;
        height: 100%;
    }
    .keymapsteps-story section {
        height: 60vh;
        padding: 10px;
    }

    @media (max-width: 768px) {
        .keymapsteps-layout {
            flex-direction: column; /* testo sopra mappa su mobile */
        }

        .keymapsteps-story {
            width: 100%;
            max-width: 100%;
            order: 1;
        }

        .keymapsteps-map {
            order: 2;
            height: 50vh;
        }
    }
</style>
