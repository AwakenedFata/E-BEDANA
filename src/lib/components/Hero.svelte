<script>
  import { onMount } from 'svelte';
  import { navigate } from '../stores/router.js';

  let heroReady = false;
  let ornamentReady = false;

  onMount(() => {
    // Staggered animations
    setTimeout(() => { heroReady = true; }, 300);
    setTimeout(() => { ornamentReady = true; }, 800);
  });
</script>

<section class="relative w-full h-screen overflow-hidden flex items-center justify-center">
  
  <!-- Background Video (looping, muted, autoplay) -->
  <video
    class="absolute inset-0 w-full h-full object-cover"
    src="/e-bedana-bg.mp4"
    autoplay
    loop
    muted
    playsinline
  ></video>

  <!-- Gold Gradient Overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-bedana-red/40 to-bedana-gold/60 z-10"></div>

  <!-- Extra darkening for text readability -->
  <div class="absolute inset-0 bg-black/30 z-10"></div>

  <!-- Ornament Top-Left -->
  <div
    class="absolute top-0 left-0 z-20 w-48 sm:w-64 md:w-80 pointer-events-none transition-all duration-[1500ms] ease-out scale-y-[-1]
      {ornamentReady ? 'opacity-30 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-16 -translate-y-16'}"
  >
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>

  <!-- Ornament Top-Right (rotated 180) -->
  <div
    class="absolute top-0 right-0 z-20 w-48 sm:w-64 md:w-80 pointer-events-none transition-all duration-[1500ms] ease-out rotate-180
      {ornamentReady ? 'opacity-30 translate-x-0 translate-y-0' : 'opacity-0 translate-x-16 -translate-y-16'}"
  >
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>

  <!-- Ornament Bottom-Left -->
  <div
    class="absolute bottom-0 left-0 z-20 w-48 sm:w-64 md:w-80 pointer-events-none transition-all duration-[1500ms] ease-out
      {ornamentReady ? 'opacity-30 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-16 translate-y-16'}"
  >
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>

  <!-- Ornament Bottom-Right (mirrored) -->
  <div
    class="absolute bottom-0 right-0 z-20 w-48 sm:w-64 md:w-80 pointer-events-none transition-all duration-[1500ms] ease-out
      {ornamentReady ? 'opacity-30 translate-x-0 translate-y-0 scale-x-[-1]' : 'opacity-0 translate-x-16 translate-y-16 scale-x-[-1]'}"
  >
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>

  <!-- Content -->
  <div class="relative z-30 text-center px-6 max-w-3xl mx-auto">
    <!-- Headline -->
    <h1
      class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-widest mb-6 transition-all duration-[1200ms] ease-out
        {heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
      style="text-shadow: 0 4px 30px rgba(0,0,0,0.5);"
    >
      SELAMAT DATANG
    </h1>

    <!-- Decorative line -->
    <div
      class="mx-auto mb-6 h-0.5 bg-bedana-gold rounded-full transition-all duration-[1400ms] ease-out delay-200
        {heroReady ? 'opacity-100 w-32 sm:w-48' : 'opacity-0 w-0'}"
    ></div>

    <!-- Subheadline -->
    <p
      class="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed transition-all duration-[1200ms] ease-out delay-300
        {heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
      style="text-shadow: 0 2px 15px rgba(0,0,0,0.4);"
    >
      Mengenal lebih dekat dengan salah satu budaya yang ada di Lampung
    </p>

    <!-- CTA Button -->
    <div
      class="mt-10 transition-all duration-[1200ms] ease-out delay-500
        {heroReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <button
        on:click={() => {
          const el = document.getElementById('main-menu');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        class="relative overflow-hidden inline-flex items-center justify-center border-2 border-bedana-gold font-bold px-10 py-4 rounded-full transition-all duration-300 group hover:shadow-[0_0_20px_rgba(218,165,32,0.6)] text-lg tracking-wide"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-bedana-gold to-yellow-500 w-0 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
        <span class="relative z-10 text-bedana-gold group-hover:text-black transition-colors duration-300">Mulai Belajar</span>
      </button>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div
    class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 transition-all duration-1000 delay-[1500ms]
      {heroReady ? 'opacity-60' : 'opacity-0'}"
  >
    <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
      <div class="w-1 h-3 bg-white/80 rounded-full animate-bounce"></div>
    </div>
  </div>
</section>
