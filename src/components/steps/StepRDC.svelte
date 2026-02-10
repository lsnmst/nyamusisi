<script>
    import { lang } from "../../lib/lang";
    import FR from "./StepRDC.fr.svelte";
    import EN from "./StepRDC.en.svelte";
</script>

{#if $lang === "fr"}
    <FR />
{:else}
    <EN />
{/if}
