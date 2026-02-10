<script>
  import LangSwitch from "./components/LangSwitch.svelte";

  import ThreeScene from "./components/ThreeScene.svelte";
  import Agro from "./components/Agro.svelte";
  import Plan from "./components/Plan.svelte";
  import Step from "./components/Step.svelte";
  import AgroforestrySchemeTable from "./components/AgroforestrySchemeTable.svelte";
  import "./app.css";

  let showModel = false;
  let mapStep = 0;

  import { lang } from "./lib/lang";
  import fr from "./content/fr";
  import en from "./content/en";

  $: content = $lang === "fr" ? fr : en;
</script>

<LangSwitch />

<div class="layout">
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="pre-keymap-trigger" on:mouseenter={() => (mapStep = 0)}>
    <div class="header">
      <p style="color:#5d5769;padding:0">
        {content.header.text}
      </p>
    </div>

    <div class="story">
      <section>
        <div class="title">
          <h1>{content.intro.title}</h1>
          <h2>{content.intro.subtitle}</h2>
        </div>
        <p
          style="color:#5d5769;padding-left:1em;padding-right:1em;font-size:0.95; border-bottom:1px solid #0085ca; margin-block-start: 0em;margin-block-end: 0em;"
        >
          {content.intro.text}
        </p>
      </section>
    </div>
  </div>

  <div>
    <Step />
  </div>

  <!--   
  <div
    class="map-wrapper"
    style="margin-top: 1em; margin-bottom:1em; padding-bottom:3em"
  >
    <Keymapsteps />
  </div>
 -->

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>{content.history.title}</h1>
        <h2>{content.history.subtitle}</h2>
      </div>
      <p>
        {content.history.text}
      </p>
    </section>
  </div>

  <div>
    <Agro />
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>{content.singes.title}</h1>
        <h2>{content.singes.subtitle}</h2>
      </div>
      <p>
        {@html content.singes.text}
      </p>
      <img
        src={`${import.meta.env.BASE_URL}image/singe.jpg`}
        height="500px"
        alt="Image capturée par une caméra piège PEX sur le site de Bulolero, Réserve
        Naturelle d’Idjwi-Nyamusisi © Réserve Naturelle d’Idjwi-Nyamusisi"
      />
      <p
        style="font-size:x-small; margin-block-start: 0em;margin-block-end: 0em;"
      >
        {@html content.singes.caption}
      </p>
    </section>
  </div>

  {#if showModel}
    <div class="overlay">
      <ThreeScene on:close={() => (showModel = false)} />
    </div>
  {:else}
    <div class="three-wrapper">
      <div class="model-preview">
        <p>
          {content.three.text}
        </p>
        <button id="maquette" on:click={() => (showModel = true)}>
          {content.three.button}
        </button>
        <img
          src={`${import.meta.env.BASE_URL}image/model.png`}
          height="500px"
          alt="Aperçu du modèle"
        />
      </div>
      <div class="box">
        <p><i>{content.three.boxtitle}</i></p>
        <h3>
          {@html content.three.projects}
        </h3>
      </div>
    </div>
  {/if}

  <div class="story" style="margin-top: 30em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>{@html content.communa.title}</h1>
        <h2>{@html content.communa.subtitle}</h2>
      </div>
      <p>
        {@html content.communa.text}
      </p>
      <img
        src={`${import.meta.env.BASE_URL}svg/ghs.svg`}
        class=""
        alt="GHS"
        height="650"
      />
      <div class="box">
        <p><i>{@html content.communa.boxtitle}</i></p>
        <h3>
          {@html content.communa.project}
        </h3>
      </div>
    </section>
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>{@html content.zone.title}</h1>
        <h2>
          {@html content.zone.subtitle}
        </h2>
      </div>
      <p>
        {@html content.zone.text}
      </p>
      <div class="box">
        <p><i>{@html content.zone.boxtitle}</i></p>
        <h3>
          {@html content.zone.projects}
        </h3>
      </div>
    </section>
  </div>

  <div style="margin-top: 5em;">
    <h2 style="font-size: 1.5em;text-align:start;padding-left: 1em;">
      {@html content.zone.step}
    </h2>
    <Plan />
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>{@html content.agroforesterie.title}</h1>
        <h2>
          {@html content.agroforesterie.subtitle}
        </h2>
      </div>
      <p>
        {@html content.agroforesterie.text}
      </p>
    </section>
  </div>

  <div style="margin-top:10em">
    <AgroforestrySchemeTable />
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>{@html content.femmes.title}</h1>
        <h2>{@html content.femmes.subtitle}</h2>
      </div>
      <p>
        {@html content.femmes.text}
      </p>

      <div class="box">
        <p><i>{@html content.femmes.boxtitle}</i></p>
        <h3>
          {@html content.femmes.projects}
        </h3>
      </div>
    </section>
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>{@html content.eco.title}</h1>
        <h2>
          {@html content.eco.subtitle}
        </h2>
      </div>
      <p>
        {@html content.eco.text}
      </p>
      <div class="video-container">
        <video
          src={`${import.meta.env.BASE_URL}video/hopeland.mp4`}
          controls
          playsinline
          loop
          muted
        ></video>
      </div>
      <p
        style="font-size:small; text-align:center; margin-block-start: 0em;margin-block-end: 0em;"
      >
        {@html content.eco.caption}
      </p>
      <div class="box">
        <p><i>{@html content.eco.boxtitle}</i></p>
        <h3>
          {@html content.eco.projects}
        </h3>
      </div>
    </section>
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>{@html content.gestion.title}</h1>
        <h2>{@html content.gestion.subtitle}</h2>
      </div>
      <p>
        {@html content.gestion.text}
      </p>
      <div class="box">
        <p><i>{@html content.gestion.boxtitle}</i></p>
        <h3>
          {@html content.gestion.projects}
        </h3>
      </div>
    </section>
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>
          {@html content.foot.title}
        </h1>
      </div>
      <div>
        <img
          src={`${import.meta.env.BASE_URL}svg/logo.svg`}
          height="100px"
          style="margin-top:2em;"
          alt="Logo Réserve Naturelle d’Idjwi-Nyamusisi"
        />
        <p>
          ⾕ Bugarula, Idjwi, Sud-Kivu, RDC <br />⾕ 34 av. Hypodrome, Q.
          Nyalukemba, V. Bukavu, Sud-Kivu, RDC<br />☏ +243 999 193 998, +243 976
          022 521<br />✉
          <a href="mailto:rnaidir@reservenaturelleidjwi.org"
            >rnaidir@reservenaturelleidjwi.org</a
          >,
          <a href="mailto:infosrnaia@gmail.com">infosrnaia@gmail.com</a><br />☞
          <a href="https://reservenaturelleidjwi.org/"
            >reservenaturelleidjwi.org</a
          >
        </p>
        <p>
          {@html content.foot.text}
        </p>
      </div>
    </section>
  </div>
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
    height: 60vh; /* 80vh */
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

  #maquette {
    background: #f3faeb00;
    color: #0085ca;
    border: 1px solid #0085ca;
  }
  #maquette:hover {
    background: #0085ca;
    color: #f3faeb;
  }

  .box {
    border-radius: 20px;
    background: #0085ca;
    color: #f3faeb;
    margin: 2em;
    padding: 1em;
  }
  .box h3 {
    font-family: "Lora", serif !important;
    font-weight: 500;
    font-size: 1em;
  }
  .box p {
    color: #f3faeb;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #f3faeb;
  }

  .video-container {
    width: 100%;
    max-width: 400px;
    margin: 2em auto;
    aspect-ratio: 9 / 16;
    overflow: hidden;
    border-radius: 12px;
    background: #000;
  }

  .video-container video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(75%);
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
