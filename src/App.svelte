<script>
  import { currentPage } from './lib/stores/router.js';

  // Home page components
  import Navbar from './lib/components/Navbar.svelte';
  import Hero from './lib/components/Hero.svelte';
  import MainMenu from './lib/components/MainMenu.svelte';
  import VideoPreview from './lib/components/VideoPreview.svelte';
  import Footer from './lib/components/Footer.svelte';

  // Sub pages
  import ProfilPage from './lib/pages/ProfilPage.svelte';
  import MateriPage from './lib/pages/MateriPage.svelte';
  import GerakTariPage from './lib/pages/GerakTariPage.svelte';
  import EvaluasiPage from './lib/pages/EvaluasiPage.svelte';
</script>

{#if $currentPage === 'home'}
  <main class="min-h-screen font-sans selection:bg-bedana-gold selection:text-black">
    <Navbar />
    <Hero />
    <MainMenu />
    <VideoPreview />
    <Footer />
  </main>
{:else if $currentPage === 'profil'}
  <ProfilPage />
{:else if $currentPage === 'materi'}
  <MateriPage />
{:else if $currentPage === 'geraktari'}
  <GerakTariPage />
{:else if $currentPage === 'evaluasi'}
  <EvaluasiPage />
{/if}
