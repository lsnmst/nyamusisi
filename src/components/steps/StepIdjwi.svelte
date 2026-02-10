<script>
    import { lang } from "../../lib/lang";
    import FR from "./StepIdjwi.fr.svelte";
    import EN from "./StepIdjwi.en.svelte";
</script>

{#if $lang === "fr"}
    <FR />
{:else}
    <EN />
{/if}
