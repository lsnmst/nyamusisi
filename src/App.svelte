<script>
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import "./app.css";

  let container;
  let loading = true;

  onMount(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf3faeb);

    const camera = new THREE.PerspectiveCamera(31, 1, 0.01, 1e12);
    camera.position.set(0, 1, 1);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dir = new THREE.DirectionalLight(0xffffff, 0.6);
    dir.position.set(50, 50, 50);
    scene.add(dir);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.enablePan = false;

    const loader = new GLTFLoader();
    loader.load(
      `${import.meta.env.BASE_URL}data/point.glb`,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        model.traverse((o) => {
          if (o.isMesh) {
            o.material = new THREE.MeshStandardMaterial({
              vertexColors: !!o.geometry.attributes.color,
              color: 0xffffff,
            });
          }
        });

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        model.position.sub(center);

        camera.near = maxDim / 10000;
        camera.far = maxDim * 10000;
        camera.updateProjectionMatrix();
        camera.position.set(maxDim * 0.8, maxDim * 0.8, maxDim * 0.6);
        camera.lookAt(0, 0, 0);

        controls.minDistance = maxDim * 0.03;
        controls.maxDistance = maxDim * 3;
        controls.update();

        loading = false;
      },
      (xhr) => {
        if (xhr.total) {
          console.log(
            `GLB ${((xhr.loaded / xhr.total) * 100).toFixed(0)}% loaded`,
          );
        }
      },
      (err) => {
        console.error("GLB load error", err);
        loading = false;
      },
    );

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", resize);
    resize();

    renderer.setAnimationLoop(() => {
      controls.update();
      renderer.render(scene, camera);
    });
  });
</script>

<div class="viewer-container">
  {#if loading}
    <div class="loading-overlay">
      <div class="spinner"></div>
      <p>Loading</p>
    </div>
  {/if}

  <div bind:this={container} class="viewer"></div>
</div>

<style>
  :global(html, body, #app) {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .viewer-container {
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  .viewer {
    width: 100%;
    height: 100%;
  }

  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f3faeb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    font-family: "Ga Maamli", sans-serif !important;
    color: #0085ca;
  }

  .spinner {
    width: 30px;
    height: 30px;
    border: 4px solid #0085ca;
    border-top-color: rgb(255, 255, 255);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .viewer-container {
      width: 100vw;
      height: 100svh;
    }

    .viewer {
      width: 100%;
      height: 100%;
    }

    .loading-overlay {
      text-align: center;
    }

    .loading-overlay p {
      font-size: 0.85rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .spinner {
      width: 24px;
      height: 24px;
      border-width: 3px;
      margin-bottom: 0.75rem;
    }
  }
</style>
