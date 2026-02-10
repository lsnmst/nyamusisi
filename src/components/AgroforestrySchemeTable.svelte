<script>
    import { lang } from "../lib/lang";

    const headers = {
        fr: ["Strate agroforestière", "Plantes", "Fonctions principales"],
        en: ["Agroforestry layer", "Plants", "Main functions"],
    };

    const rows = [
        {
            layer: {
                fr: "Strate supérieure",
                en: "Upper layer",
            },
            subtitle: {
                fr: "(arbres de haut jet – ombrage et structure)",
                en: "(tall trees – shade and structure)",
            },
            plants: [
                "Gliricidia sepium",
                "Maesopsis eminii",
                "Ficus spp.",
                "Strombosia scheffleri",
            ],
            functions: {
                fr: [
                    "Ombrage pour le café et le cacao",
                    "Amélioration de la fertilité des sols",
                    "Protection contre l’érosion",
                    "Bois de service et bois énergie",
                ],
                en: [
                    "Shade for coffee and cocoa",
                    "Soil fertility improvement",
                    "Erosion control",
                    "Timber and fuelwood",
                ],
            },
        },
        {
            layer: { fr: "Strate intermédiaire", en: "Middle layer" },
            subtitle: {
                fr: "(arbres fruitiers et cultures pérennes)",
                en: "(fruit trees and perennial crops)",
            },
            plants: [
                "Theobroma cacao",
                "Coffea arabica / robusta",
                "Musa spp.",
                "Mangifera indica",
                "Psidium guajava",
            ],
            functions: {
                fr: [
                    "Revenus commerciaux réguliers",
                    "Diversification économique",
                    "Production alimentaire et marchande",
                    "Stabilité des systèmes agricoles",
                ],
                en: [
                    "Regular income",
                    "Economic diversification",
                    "Food and market production",
                    "Agricultural system stability",
                ],
            },
        },
        {
            layer: { fr: "Strate inférieure", en: "Lower layer" },
            subtitle: {
                fr: "(cultures vivrières et herbacées)",
                en: "(food crops and herbaceous plants)",
            },
            plants: [
                "Ananas comosus",
                "Manihot esculenta",
                "Zea mays",
                "Ipomoea batatas",
                "Légumes-feuilles locaux",
            ],
            functions: {
                fr: [
                    "Sécurité alimentaire des ménages",
                    "Production rapide et continue",
                    "Alimentation diversifiée et nutritive",
                ],
                en: [
                    "Household food security",
                    "Fast and continuous production",
                    "Diverse and nutritious diet",
                ],
            },
        },
        {
            layer: { fr: "Plantes de service", en: "Service plants" },
            subtitle: {
                fr: "(fertilité, fourrage, protection)",
                en: "(fertility, fodder, protection)",
            },
            plants: [
                "Leucaena leucocephala",
                "Calliandra calothyrsus",
                "Moringa oleifera",
                "Erythrina spp.",
            ],
            functions: {
                fr: [
                    "Fixation de l’azote",
                    "Amélioration durable des sols",
                    "Fourrage pour l’élevage intégré",
                    "Feuilles nutritives pour les familles",
                ],
                en: [
                    "Nitrogen fixation",
                    "Long-term soil improvement",
                    "Fodder for integrated livestock",
                    "Nutritious leaves for households",
                ],
            },
        },
    ];
</script>

<div class="agro-layout">
    <!-- IMAGE -->
    <div class="scheme">
        <img
            src={`${import.meta.env.BASE_URL}image/agrofo.png`}
            alt="Agroforestry scheme"
        />
    </div>

    <!-- TABLE -->
    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>{headers[$lang][0]}</th>
                    <th>{headers[$lang][1]}</th>
                    <th>{headers[$lang][2]}</th>
                </tr>
            </thead>

            <tbody>
                {#each rows as r}
                    <tr>
                        <td class="layer">
                            <strong>{r.layer[$lang]}</strong><br />
                            <span class="subtitle">{r.subtitle[$lang]}</span>
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
                                {#each r.functions[$lang] as f}
                                    <li>{f}</li>
                                {/each}
                            </ul>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
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
        vertical-align: middle;
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
