<script>
  import { onMount } from "svelte";
  import { Menu, X, Home } from "lucide-svelte";
  import { currentPage, navigate } from "../stores/router.js";

  let isMenuOpen = false;
  let scrolled = false;
  let ornamentReady = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  function goTo(page) {
    navigate(page);
    isMenuOpen = false;
  }

  const navItems = [
    { id: "profil", label: "Profil" },
    { id: "materi", label: "Materi" },
    { id: "geraktari", label: "Gerak Tari" },
    { id: "evaluasi", label: "Evaluasi" },
  ];

  onMount(() => {
    const handleScroll = () => {
      // Faster scroll appearance
      scrolled = window.scrollY > 10;
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Entrance animation delay, sync with hero
    setTimeout(() => {
      ornamentReady = true;
    }, 800);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  // On sub-pages, always show the navbar solid
  $: isSubPage = $currentPage !== "home";
  $: showSolid = scrolled || isSubPage;
</script>

<nav class="fixed top-0 left-0 right-0 z-50">
  <!-- Ornament 5 (Shown before scroll) -->
  <div
    class="absolute top-0 left-0 w-full flex flex-col transition-all duration-700 ease-in-out pointer-events-none
    {showSolid ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}"
  >
    <!-- Gradient line above ornament (tebal h-2 sama dengan yang bawah) -->
    <div
      class="w-full h-2 bg-gradient-to-r from-bedana-gold via-bedana-red to-bedana-black transition-all duration-[1500ms] {ornamentReady
        ? 'opacity-100 scale-x-100'
        : 'opacity-0 scale-x-0'} origin-left"
    ></div>

    <!-- Pattern Image diposisikan bg-top tanpa gap margin agar pas menempel pada garis -->
    <div
      class="w-full h-12 sm:h-16 bg-[url('/ornament5.png')] bg-repeat-x bg-contain bg-top opacity-90 transition-all duration-[1500ms] {ornamentReady
        ? 'opacity-90 translate-y-0'
        : 'opacity-0 -translate-y-8'}"
    ></div>
  </div>

  <!-- Actual Navbar (Shown after scroll) -->
  <div
    class="transition-all duration-700 ease-in-out w-full
    {showSolid
      ? 'bg-gray-50 shadow-md translate-y-0 opacity-100'
      : 'opacity-0 -translate-y-full pointer-events-none'}"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <button
          on:click={() => goTo("home")}
          class="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-transform hover:scale-105 duration-300"
        >
          <img
            src="/logo.png"
            alt="e-bedana"
            class="h-16 w-auto object-contain drop-shadow-sm"
          />
        </button>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-1">
          {#if isSubPage}
            <button
              on:click={() => goTo("home")}
              class="px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-1.5 text-gray-700 hover:text-gray-900 hover:bg-gray-200"
            >
              <Home size={16} />
              Beranda
            </button>
          {/if}

          {#each navItems as item}
            <button
              on:click={() => goTo(item.id)}
              class="px-4 py-2 rounded-lg font-medium transition-all
                {$currentPage === item.id
                ? 'text-bedana-red bg-white shadow-sm ring-1 ring-gray-100'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'}"
            >
              {item.label}
            </button>
          {/each}
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button
            on:click={toggleMenu}
            class="focus:outline-none transition-colors text-gray-800 hover:text-bedana-red"
          >
            {#if isMenuOpen}
              <X class="h-6 w-6" />
            {:else}
              <Menu class="h-6 w-6" />
            {/if}
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div
        class="md:hidden bg-gradient-to-r from-bedana-gold to-amber-500 border-t border-white/20 px-4 pt-2 pb-4 space-y-1 shadow-lg"
      >
        {#if isSubPage}
          <button
            on:click={() => goTo("home")}
            class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white hover:bg-white/20 flex items-center gap-2"
          >
            <Home size={16} /> Beranda
          </button>
        {/if}
        {#each navItems as item}
          <button
            on:click={() => goTo(item.id)}
            class="w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors
              {$currentPage === item.id
              ? 'text-bedana-red bg-white shadow-sm'
              : 'text-white/90 hover:text-white hover:bg-white/20'}"
          >
            {item.label}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</nav>
