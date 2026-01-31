<script>
  import ThreeScene from "./components/ThreeScene.svelte";
  import "./app.css";
</script>

<div class="layout">
  <div class="header">
    <p>
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
      <p>
        [TEST] La déforestation de Nyamusisi n’est ni soudaine ni accidentelle.
        Elle résulte d’un processus long, cumulatif, inscrit dans les
        transformations régionales. La réserve a progressivement perdu ses
        fonctions écologiques (régulation hydrique, habitat de la faune,
        protection des sols) sous l’effet de pressions multiples.
      </p>
    </section>

    <section>
      <h1></h1>
      <p></p>
    </section>
  </div>

  <div class="three-wrapper">
    <ThreeScene />
  </div>
</div>

<style>
  :global(html, body, #app) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .layout {
    height: 100%;
  }

  .story {
    width: 100%;
    overflow-y: auto;
  }

  .three-wrapper {
    width: 100%;
    height: 100%;
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
