<script>
    const rows = [
        {
            layer: "Strate supérieure",
            subtitle: "(arbres de haut jet – ombrage et structure)",
            plants: [
                "Gliricidia sepium",
                "Maesopsis eminii",
                "Ficus spp.",
                "Strombosia scheffleri",
            ],
            functions: [
                "Ombrage pour le café et le cacao",
                "Amélioration de la fertilité des sols",
                "Protection contre l’érosion",
                "Bois de service et bois énergie",
            ],
        },
        {
            layer: "Strate intermédiaire",
            subtitle: "(arbres fruitiers et cultures pérennes)",
            plants: [
                "Theobroma cacao",
                "Coffea arabica / robusta",
                "Musa spp.",
                "Mangifera indica",
                "Psidium guajava",
            ],
            functions: [
                "Revenus commerciaux réguliers",
                "Diversification économique",
                "Production alimentaire et marchande",
                "Stabilité des systèmes agricoles",
            ],
        },
        {
            layer: "Strate inférieure",
            subtitle: "(cultures vivrières et herbacées)",
            plants: [
                "Ananas comosus",
                "Manihot esculenta",
                "Zea mays",
                "Ipomoea batatas",
                "Légumes-feuilles locaux",
            ],
            functions: [
                "Sécurité alimentaire des ménages",
                "Production rapide et continue",
                "Alimentation diversifiée et nutritive",
            ],
        },
        {
            layer: "Plantes de service",
            subtitle: "(fertilité, fourrage, protection)",
            plants: [
                "Leucaena leucocephala",
                "Calliandra calothyrsus",
                "Moringa oleifera",
                "Erythrina spp.",
            ],
            functions: [
                "Fixation de l’azote",
                "Amélioration durable des sols",
                "Fourrage pour l’élevage intégré",
                "Feuilles nutritives pour les familles",
            ],
        },
    ];
</script>

<div class="agro-layout">
    ```
    <!-- IMAGE -->
    <div class="scheme">
        <img
            src={`${import.meta.env.BASE_URL}image/agrofo.png`}
            alt="Schéma agroforestier"
        />
    </div>

    <!-- TABLE -->
    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Strate agroforestière</th>
                    <th>Plantes</th>
                    <th>Fonctions principales</th>
                </tr>
            </thead>

            <tbody>
                {#each rows as r}
                    <tr>
                        <td class="layer">
                            <strong>{r.layer}</strong><br />
                            <span class="subtitle">{r.subtitle}</span>
                        </td>

                        <td class="scientific">
                            <ul>
                                {#each r.plants as p}
                                    <li>{p}</li>
                                {/each}
                            </ul>
                        </td>

                        <td>
                            <ul>
                                {#each r.functions as f}
                                    <li>{f}</li>
                                {/each}
                            </ul>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
    ```
</div>

<style>
    .agro-layout {
        display: flex;
        gap: 3rem;
        align-items: flex-start;
    }

    /* IMAGE */
    .scheme {
        width: 55%;
        position: sticky;
        top: 6rem;
    }

    .scheme img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }

    /* TABLE */
    .table-wrapper {
        width: 45%;
        overflow-x: auto;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        font-size: 0.95rem;
        color: #0085ca !important;
    }

    th {
        text-align: left;
        padding: 12px;
        font-family: "Lora", serif;
        border-bottom: 1px solid #0085ca;
    }

    td {
        vertical-align: top;
        padding: 14px 12px;
        font-family: "Lora", serif;
        font-size: 0.95em;
        line-height: 1.25;
    }

    .scientific {
        font-style: italic;
    }

    .layer strong {
        font-family: "Ga Maamli", sans-serif !important;
    }
    thead th {
        font-family: "Ga Maamli", sans-serif !important;
        text-align: center;
    }

    .subtitle {
        font-family: "Lora", serif;
        color: #0085ca !important;
        font-size: 0.85em;
        line-height: 1;
    }

    ul {
        margin: 0;
        padding-left: 18px;
    }

    li {
        list-style-type: none;
    }

    /* MOBILE */
    @media (max-width: 768px) {
        .agro-layout {
            flex-direction: column;
        }

        .scheme {
            position: relative;
            top: auto;
            width: 100%;
        }

        .table-wrapper {
            width: 100%;
        }

        table {
            font-size: 0.9rem;
        }
    }
</style>
