<script>
  import ThreeScene from "./components/ThreeScene.svelte";
  import Agro from "./components/Agro.svelte";
  import Keymapsteps from "./components/Keymapsteps.svelte";
  import "./app.css";

  let showModel = false;
  let mapStep = 0;
</script>

<div class="layout">
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="pre-keymap-trigger" on:mouseenter={() => (mapStep = 0)}>
    <div class="header">
      <p style="color:#5d5769;padding:0">
        Rapport narratif rédigé par le Comité de Gestion de la Réserve Naturelle
        d'Idjwi-Nyamusisi
      </p>
    </div>

    <div class="story">
      <section>
        <div class="title">
          <h1>De réserve défunte à paysage vivant</h1>
          <h2>
            Restauration et gestion communautaire de la Réserve forestière de
            Nyamusisi
          </h2>
        </div>
        <p
          style="color:#5d5769;padding-left:1em;padding-right:1em;font-size:0.95; border-bottom:1px solid #0085ca; margin-block-start: 0em;margin-block-end: 0em;"
        >
          La présente publication du rapport narratif a pour objectif de
          favoriser l’établissement de partenariats régionaux et internationaux,
          ainsi que de mobiliser des ressources financières en vue de la mise en
          œuvre du Plan Opérationnel Triennal du Comité de Gestion de la Réserve
          Naturelle d’Idjwi-Nyamusisi. Le plan opérationnel triennal a été
          élaboré et approuvé avec le soutien technique et financier de la GIZ,
          en collaboration avec les autorités publiques (Ministère de
          l'Environnement, ICCN, PNKB), les autorités traditionnelles, les
          associations, les villages, les organisations de la société civile,
          les populations autochtones et les groupes sociaux vulnérables.
        </p>
      </section>
    </div>
  </div>

  <div class="map-wrapper" style="margin-top: 1em; margin-bottom:3em">
    <Keymapsteps />
  </div>

  <div class="story">
    <section>
      <div class="title">
        <h1>Comment une réserve devient «défunte»</h1>
        <h2>L'histoire de la Réserve forestière de Nyamusisi</h2>
      </div>
      <p>
        La déforestation de la Réserve Forestière de Nyamusisi n’est ni soudaine
        ni accidentelle. Elle résulte d’un processus long, cumulatif, inscrit
        dans les transformations régionales. La réserve a progressivement perdu
        ses fonctions écologiques (régulation hydrique, habitat de la faune,
        protection des sols) sous l’effet de pressions multiples. À la pression
        démographique due à l'afflux de réfugiés causé par les conflits armés
        dans la région viennent s'ajouter des raisons communes à d'autres études
        de cas en RDC et dans le continent : l'insécurité foncière, la demande
        croissante de terres agricoles en raison de la crise alimentaire et
        l'augmentation de la demande en énergie bois, l'absence de gouvernance
        appropriée de la réserve.
      </p>
    </section>
  </div>

  <div>
    <Agro />
  </div>

  {#if showModel}
    <div class="overlay">
      <ThreeScene on:close={() => (showModel = false)} />
    </div>
  {:else}
    <div class="three-wrapper">
      <div class="model-preview">
        <p>
          La réserve naturelle d’Idjwi-Nyamusisi se distingue par un profil
          altimétrique marqué, composé de collines ondulantes et de reliefs
          montagneux. Cette topographie structure une mosaïque d’écosystèmes,
          favorisant une forte biodiversité et des services écosystémiques
          essentiels.
        </p>
        <img
          src={`${import.meta.env.BASE_URL}image/model.png`}
          height="500px"
          alt="Aperçu du modèle"
        />
        <button on:click={() => (showModel = true)}>
          Découvrez le modèle interactif
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  :global(html, body, #app) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .pre-keymap-trigger {
    width: 100%;
    position: relative;
  }

  .layout {
    height: 100%;
  }

  .layout p {
    padding: 2em;
  }

  .story {
    width: 100%;
    overflow-y: auto;
  }

  .three-wrapper {
    width: 100%;
    height: 100%;
    margin-top: 5em;
  }

  .header {
    border-bottom: 1px solid #0085ca;
  }

  .header p {
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;
    font-size: 0.8em;
  }

  .title {
    display: flex;
    border-bottom: 1px solid #0085ca;
    padding: 1em;
  }

  .map-wrapper {
    height: 60vh; /* o 80vh, l’altezza che vuoi dare alla storymap */
    min-height: 500px;
    width: 100%;
  }

  .model-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
  .model-preview img {
    max-width: 100%;
    height: auto;
  }
  .model-preview button {
    padding: 0.6em 1.2em;
    border-radius: 20px;
    background: #0085ca;
    color: white;
    border: none;
    cursor: pointer;
    font-family: "Ga Maamli", sans-serif !important;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #f3faeb;
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .title {
      display: inline;
    }
    .title h1,
    h2,
    p {
      padding: 10px;
    }
  }
</style>
