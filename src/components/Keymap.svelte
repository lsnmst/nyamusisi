<script>
    import { onMount, tick, afterUpdate } from "svelte";
    import L from "leaflet";
    import "leaflet/dist/leaflet.css";

    export let step = 0;
    let mapContainer;
    let map;

    const steps = [
        {
            bounds: [
                [-13.5, 12],
                [5.5, 31],
            ],
            zoom: 5,
        },
        {
            bounds: [
                [-4.5, 27.5],
                [-1.5, 29.8],
            ],
            zoom: 8,
        },
        {
            bounds: [
                [-2.3, 28.9],
                [-1.9, 29.2],
            ],
            zoom: 10,
        },
        {
            bounds: [
                [-2.2, 29.0],
                [-2.1, 29.1],
            ],
            zoom: 12,
        },
    ];

    let prevStep = step;

    afterUpdate(() => {
        if (map && step !== prevStep) {
            goTo(step);
            prevStep = step;
        }
    });

    onMount(async () => {
        await tick();

        map = L.map(mapContainer, {
            zoomControl: false,
            scrollWheelZoom: false,
            dragging: false,
        });

        L.tileLayer(
            "https://alessandromusetta.com/geo/tiles/keymapidjwi/{z}/{x}/{y}.png",
            {
                maxZoom: 13,
            },
        ).addTo(map);

        await new Promise((resolve) => {
            const check = () => {
                const rect = mapContainer.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) resolve();
                else requestAnimationFrame(check);
            };
            check();
        });

        map.invalidateSize();
        setTimeout(() => goTo(step), 50);
    });

    function goTo(i) {
        const s = steps[i];
        map.fitBounds(s.bounds, {
            animate: true,
            duration: 1.6,
            easeLinearity: 0.25,
            maxZoom: s.zoom,
        });
    }
</script>

<div bind:this={mapContainer} class="keymap-container"></div>

<style>
    .keymap-container {
        width: 100%;
        height: 100%;
        min-height: 400px;
        background-color: #f3faeb;
    }
</style>
