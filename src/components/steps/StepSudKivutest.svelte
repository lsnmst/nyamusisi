<script>
    import { lang } from "../../lib/lang";
    import FR from "./StepSudKivu.fr.svelte";
    import EN from "./StepSudKivu.en.svelte";
</script>

{#if $lang === "fr"}
    <FR />
{:else}
    <EN />
{/if}
