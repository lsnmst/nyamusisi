<script>
    import { lang, setLang } from "../lib/lang";
</script>

<div class="lang-switch">
    <button class:active={$lang === "fr"} on:click={() => setLang("fr")}>
        FR
    </button>

    <button class:active={$lang === "en"} on:click={() => setLang("en")}>
        EN
    </button>
</div>

<style>
    .lang-switch {
        position: fixed;
        top: 5px;
        right: 18px;
        z-index: 9999;
        display: flex;
        gap: 6px;
    }

    button {
        border: 1px solid #0085ca;
        background: #f3faeb;
        color: #0085ca;
        padding: 4px 8px;
        font-size: 0.8rem;
        cursor: pointer;
        font-family: "Lora", serif;
    }

    button.active {
        background: #0085ca;
        color: #f3faeb;
    }
</style>
