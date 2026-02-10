<script>
    import { lang } from "../../lib/lang";
    import FR from "./StepNyamusisi.fr.svelte";
    import EN from "./StepNyamusisi.en.svelte";
</script>

{#if $lang === "fr"}
    <FR />
{:else}
    <EN />
{/if}
