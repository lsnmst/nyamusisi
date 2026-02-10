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
</script>

<LangSwitch />

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
          Naturelle d’Idjwi-Nyamusisi. Le Plan Opérationnel Triennal a été
          élaboré et approuvé avec le soutien technique et financier de la GIZ,
          en collaboration avec les autorités publiques (Ministère de
          l'Environnement, ICCN, PNKB), les autorités traditionnelles, les
          associations, les villages, les organisations de la société civile,
          les populations autochtones et les groupes sociaux vulnérables.
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

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>Les derniers survivants : les singes bleus de Schouteden</h1>
        <h2>Quand la forêt disparaît, la biodiversité se réfugie</h2>
      </div>
      <p>
        Le Plan Opérationnel Triennal identifie clairement les singes bleus de
        Schouteden comme <i>espèce phare</i> de la réserve. Leur survie
        actuelle, concentrée sur des fragments forestiers extrêmement réduits,
        illustre à la fois la gravité de la dégradation et le potentiel de
        restauration. À Nyamusisi, la disparition de la forêt n’a pas entraîné
        la disparition immédiate de toute biodiversité. Certaines espèces, comme
        les singes bleus de Schouteden (<i
          >Cercopithecus mitis schoutedeni
        </i>), ont survécu en se repliant sur des fragments résiduels de forêt,
        parfois inférieurs à un hectare. Ces animaux sont aujourd’hui à la fois
        des survivants et des sentinelles : leur situation reflète l’état
        critique de l’écosystème.
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
        Image capturée par une caméra piège PEX sur le site de Bulolero, Réserve
        Naturelle d’Idjwi-Nyamusisi © Réserve Naturelle d’Idjwi-Nyamusisi
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
          L'habitat refuge des singes bleus a été protégé avec la création de la
          réserve naturelle d'Idjwi-Nyamusisi en 2022. La réserve naturelle est
          située sur les versants orientaux du massif de Nyamusisi, à cheval
          entre les chefferies de Ntambuka et Rubenga, et se distingue par un
          profil altimétrique marqué. Elle abrite une zone de grottes de moins
          d'un hectare où vit une population totale d'environ 100 individus de
          singes bleus.
        </p>
        <button id="maquette" on:click={() => (showModel = true)}>
          Découvrez la maquette interactive de la réserve naturelle
          d'Idjwi-Nyamusisi
        </button>
        <img
          src={`${import.meta.env.BASE_URL}image/model.png`}
          height="500px"
          alt="Aperçu du modèle"
        />
      </div>
      <div class="box">
        <p><i>Projets validés dans l'attente d'un cofinancement</i></p>
        <h3>
          ♦ Création de zones d'observation de la faune<br />
          ♦ Formation de guides écologiques<br />
          ♦ Création de sentiers écologiques<br />
          ♦ Habituer les singes à cohabiter avec les humains<br />
        </h3>
      </div>
    </div>
  {/if}

  <div class="story" style="margin-top: 30em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>La parole aux communautés</h1>
        <h2>Sans consentement communautaire, pas de restauration durable</h2>
      </div>
      <p>
        Contrairement à certaines idées reçues, les communautés vivant dans et
        autour de la réserve ne sont pas opposées à la forêt. Elles sont
        opposées à une conservation imposée, qui ignorerait leurs besoins vitaux
        et leurs droits fonciers. À Nyamusisi, la restauration écologique est
        donc conçue comme un processus de dialogue et de paix sociale. Restaurer
        signifie négocier parcelle par parcelle. Les limites de la réserve
        traversent aujourd’hui des champs cultivés depuis parfois plus de vingt
        ans ; la solution ne peut donc être ni l’expulsion ni le statu quo, mais
        une requalification progressive des usages. Le Plan Opérationnel
        Triennal consacre un pilier entier à l’engagement communautaire,
        reconnaissant que la restauration écologique à Nyamusisi est
        indissociable de la résolution des conflits fonciers et sociaux. Les
        activités d’identification des occupants, d’évaluation des superficies
        occupées et d’analyse des besoins constituent la base de ce processus.
        Reconnaît et identifie les zones de la forêt défunte que la communauté
        considère comme restaurables et les zones non négociables car elles
        assurent leur subsistance.
      </p>
      <img
        src={`${import.meta.env.BASE_URL}svg/ghs.svg`}
        class=""
        alt="GHS"
        height="650"
      />
      <div class="box">
        <p><i>Projets validés dans l'attente d'un cofinancement</i></p>
        <h3>
          ♦ Projet de identification des occupants & médiation foncière
          (restaurer sans déplacer)<br />
          ♦ Reconnaissance des activités alternatives à l'exploitation intensive
          des ressources naturelles et mise en place de mesures incitatives ainsi
          que de compensations (relance des systèmes agroforestiers abandonnés du
          café et du cacao, et de l'élevage intégré)
          <br />
        </h3>
      </div>
    </section>
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>Changer d’approche: Restaurer ≠ exclure</h1>
        <h2>
          La forêt plus conçue comme un espace à vider, mais comme un espace à
          organiser
        </h2>
      </div>
      <p>
        La nouvelle vision de la réserve rompt clairement avec le modèle
        colonial de conservation fondé sur l’exclusion. Pendant des décennies,
        la protection de la nature a été pensée comme une mise à distance de
        l’humain : tracer une limite, déclarer un espace « protégé », puis
        tenter d’en écarter ceux qui y vivent. À Nyamusisi, cette approche s’est
        révélée non seulement irréaliste, mais aussi génératrice de conflits,
        d’occupation informelle et, paradoxalement, de dégradation écologique.
        Dans cette logique, la gestion communautaire n’est pas un outil social
        ajouté à la conservation ; elle en est la condition de possibilité. Les
        habitants deviennent co-gestionnaires parce qu’ils sont déjà acteurs du
        territoire. La restauration écologique dépend alors de la sécurité
        sociale : quand les droits sont reconnus, les conflits diminuent ; quand
        les revenus sont assurés, la pression sur la forêt baisse ; quand la
        communauté bénéficie directement de la biodiversité, elle la protège.
      </p>
      <div class="box">
        <p><i>Projets validés dans l'attente d'un cofinancement</i></p>
        <h3>
          ♦ Restauration forestière (démarcation des zones, inventaire
          floristique, plantation d’arbres endogènes, entretien et sécurisation)<br
          />
          ♦ Protection et biosurveillance (inventaires fauniques, suivi biodiversité)<br
          />
        </h3>
      </div>
    </section>
  </div>

  <div style="margin-top: 5em;">
    <h2 style="font-size: 1.5em;text-align:start;padding-left: 1em;">
      Organisation/zonage de la Réserve Forestière de Nyamusisi
    </h2>
    <Plan />
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>L’agroforesterie comme solution-clé</h1>
        <h2>
          Nourrir les gens tout en nourrissant la forêt. Sécurité alimentaire et
          diversification économique
        </h2>
      </div>
      <p>
        La relance de l’agroforesterie figure parmi les investissements majeurs
        du Plan Opérationnel Triennal. Elle répond simultanément à trois
        objectifs stratégiques : sécurité alimentaire, réduction de la pression
        sur la réserve et amélioration des revenus des ménages riverains. Sur
        Idjwi, chaque amélioration de rendement agricole évite directement un
        nouveau défrichement, car l’expansion spatiale est la seule variable
        d’ajustement disponible pour les ménages. L’agroforesterie ne cherche
        pas à opposer agriculture et conservation, mais à les réconcilier dans
        un même système productif. En associant arbres, cultures vivrières et
        élevage intégré, elle recrée des paysages productifs capables de nourrir
        durablement les ménages tout en reconstituant les fonctions écologiques
        perdues : fertilité des sols, infiltration de l’eau, microclimat et
        stockage de carbone. Le programme s'adresse en priorité aux groupes les
        plus dépendants des ressources naturelles, en particulier les femmes et
        les communautés autochtones, non pas pour des raisons purement
        symboliques, mais parce qu'ils sont au cœur de l'économie réelle du
        territoire. L’agroforesterie sécurise d’abord l’alimentation. Les
        cultures vivrières sont maintenues mais stabilisées par la fertilité
        restaurée des sols, tandis que les arbres apportent des productions
        complémentaires : fruits, produits forestiers non ligneux, fourrage et
        bois domestique. À moyen terme, certaines filières telles que le café,
        le cacao et les produits agroforestiers génèrent des revenus commerciaux
        réguliers. Les familles ne dépendent plus d'une seule récolte
        saisonnière vulnérable aux variations climatiques. Cette diversification
        réduit la vulnérabilité économique et, par conséquent, la nécessité de
        puiser dans les réserves en période de crise.
      </p>
    </section>
  </div>

  <div style="margin-top:10em">
    <AgroforestrySchemeTable />
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>Les femmes au cœur de la restauration</h1>
        <h2>Soigner la terre pour sécuriser les familles</h2>
      </div>
      <p>
        La restauration écologique de la Réserve Forestière de Nyamusisi passe
        d’abord par celles qui vivent quotidiennement du territoire. Les femmes
        assurent l’essentiel de la production alimentaire, de la collecte du
        bois énergie, de l’entretien des parcelles et de l’éducation
        environnementale informelle au sein des familles. Elles sont donc à la
        fois les premières affectées par la dégradation de la forêt et les
        premières capables d’en transformer l’usage. Lorsque la forêt disparaît,
        les distances de collecte augmentent, le temps de travail s’allonge et
        la sécurité alimentaire du ménage diminue. Restaurer la forêt signifie
        donc aussi réduire la pénibilité quotidienne et stabiliser la vie
        domestique. Le Plan Opérationnel Triennal reconnaît explicitement ce
        rôle central et prévoit d’appuyer les femmes comme actrices prioritaires
        de la transition écologique locale.
      </p>

      <div class="box">
        <p><i>Projets validés dans l'attente d'un cofinancement</i></p>
        <h3>
          ♦ Construction de pépinières communautaires gérées par des groupes de
          femmes et de banques de semences<br />
          ♦ Subventions pour l'agroforesterie familiale<br />
          ♦ Mise en œuvre de mesures visant à garantir la participation aux comités
          locaux de gestion<br />
        </h3>
      </div>
    </section>
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>Forêt, singes et écotourisme</h1>
        <h2>
          Vers l’autonomie de la gestion de la réserve, un modèle économique
          local et durable
        </h2>
      </div>
      <p>
        L’écotourisme communautaire est envisagé comme un levier économique
        complémentaire. Les projets d’infrastructures légères s’appuient sur les
        atouts naturels et culturels de l’île. Les guides, pisteurs,
        gestionnaires de bungalows, transporteurs lacustres et artisans
        bénéficient directement de cette économie. La protection de la
        biodiversité devient ainsi une activité professionnelle. Cette dynamique
        permet d’installer des revenus réguliers et diversifiés pour les ménages
        riverains, réduisant leur dépendance aux activités destructrices et
        renforçant l’acceptation sociale de la réserve. L’expérience proposée
        dépasse l’observation naturaliste. Elle associe paysages, savoirs et
        culture insulaire : pratiques agricoles, usages traditionnels des
        plantes, histoire locale et vie quotidienne participent au récit. La
        synergie entre lac et montagne renforce cette identité : navigation,
        randonnée, observation de la faune et immersion culturelle composent un
        parcours cohérent où nature et société sont indissociables.
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
        Installations hôtelières sur l'île d'Idjwi vues depuis le lac © Ley
        Uwera
      </p>
      <div class="box">
        <p><i>Projets validés dans l'attente d'un cofinancement</i></p>
        <h3>
          ♦ Améliorer les infrastructures de connexion avec les voies lacustres
          et garantir l'accessibilité à la Réserve Naturelle d’Idjwi-Nyamusisi<br
          />
          ♦ Construction de bungalows sur le site de Bulolero<br />
          ♦ Préparation et soutien à la création de paquets touristiques<br />
        </h3>
      </div>
    </section>
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>La forêt vit si la communauté en vit</h1>
        <h2>Gestion communautaire + éducation environnementale</h2>
      </div>
      <p>
        La conservation ne se maintient pas uniquement par la surveillance, mais
        par l’apprentissage. En travaillant avec les écoles et les universités,
        la réserve devient un espace pédagogique vivant où les jeunes
        comprennent concrètement le lien entre environnement, alimentation et
        avenir économique. Protéger la forêt cesse alors d’être une obligation
        extérieure et devient un choix éclairé. L’éducation environnementale
        prépare aussi la gestion communautaire. Une population informée
        participe davantage aux décisions, comprend les règles d’usage et
        contribue à prévenir les conflits. La protection ne repose plus
        uniquement sur l’autorité, mais sur l’adhésion collective. Lorsque la
        communauté comprend la forêt, elle la protège ; lorsque la forêt
        soutient la communauté, elle dure.
      </p>
      <div class="box">
        <p><i>Projets validés dans l'attente d'un cofinancement</i></p>
        <h3>
          ♦ Projet de réseau éducatif autour de la réserve avec les écoles et
          les universités<br />
          ♦ Mise en œuvre d'un programme Sport et environnement<br />
          ♦ Attribution de bourses d'études de la réserve<br />
        </h3>
      </div>
    </section>
  </div>

  <div class="story" style="margin-top: 20em;border-top: 3px double #0085ca">
    <section>
      <div class="title">
        <h1>
          La restauration est déjà en marche. Soutenez la réserve à retrouver
          son paysage vivant. Contactez-nous
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
          La Réserve naturelle d’Idjwi-Nyamusisi a été créée par l’arrêté
          provincial du Sud-Kivu n° 22/131/GP/SK du 20 mai 2022 en tant qu’une
          réserve communautaire d’intérêt local placée sous la gestion des ETD
          Chefferie Ntambuka et Chefferie Rubenga. Pour maximiser une gestion
          efficace conjointe, les deux chefferies ont mis en place une structure
          dénommée « Comité de gestion de la Réserve naturelle d’Idjwi-Nyamusisi
          » en tant qu’une organisation étatique à même de sauvegarder les
          intérêts communautaires de deux chefferies que regorge l’île d’Idjwi
          et rendre ensuite compte au gouvernement provincial du Sud-Kivu et au
          Ministère National de l’Environnement et Développement Durable à
          travers la Coordination Provinciale de l’Environnement et
          Développement Durable du Sud-Kivu. Le Comité de gestion dispose d’une
          ONG enregistrée sous le numéro F92/52.340. Dos « CGRI Asbl »
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
