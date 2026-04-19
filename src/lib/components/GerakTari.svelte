<script>
  import { fade, slide } from 'svelte/transition';
  import { Play, ChevronRight, X, ArrowLeft } from 'lucide-svelte';
  import { navigate } from "../stores/router.js";

  // Dance movement data
  const movements = [
    {
      id: 'tahtim',
      name: 'Tahtim',
      description: '(atau Tahto/Ngesit): Gerakan kaki melangkah maju secara berurutan.',
      videoUrl: '/Tahmtim/tahtim.mp4'
    },
    {
      id: 'khesek-gantung',
      name: 'Khesek Gantung',
      description: 'Gerakan kaki melangkah maju, lalu mengayunkan kaki kanan ke samping.',
      videoUrl: '/Kesek Gantung/kesekgantung.mp4'
    },
    {
      id: 'khesek-injing',
      name: 'Khesek Injing',
      description: 'Gerakan kaki melangkah dan kemudian mengehentakkan kaki dengan posisi jinjit.',
      videoUrl: '/Kesek Injing/kesekinjing.mp4'
    },
    {
      id: 'jimpang',
      name: 'Jimpang',
      description: 'Gerakan maju dan mundur dengan langkah yang berbeda.',
      videoUrl: '/Jimpang/jimpang.mp4'
    },
    {
      id: 'humbak-moloh',
      name: 'Humbak Moloh',
      description: 'Gerakan kaki menyamping secara berurutan.',
      videos: [
        { label: 'Versi Laki-laki', url: '/Umbak Muloh/Versi cowok/umbakmulohcowok.mp4' },
        { label: 'Versi Perempuan', url: '/Umbak Muloh/Versi Cewek/umbakmulohcewek.mp4' }
      ]
    },
    {
      id: 'ayun',
      name: 'Ayun',
      description: 'Gerakan melangkah maju berulang kali.',
      videoUrl: '/Ayun/ayun.mp4'
    },
    {
      id: 'ayun-gantung',
      name: 'Ayun Gantung',
      description: 'Gerakan mengayunkan kaki dan kemudian merendahkan badan.',
      videoUrl: '/Ayun Gantung/ayungantung.mp4'
    },
    {
      id: 'belitut',
      name: 'Belitut',
      description: 'Gerakan menyilangkan kaki ke depan dan belakang.',
      videoUrl: '/Blitut/blitut.mp4'
    },
    {
      id: 'gelek',
      name: 'Gelek',
      description: 'Gerakan yang juga sering terlihat pada penari pria.',
      videoUrl: '/Gelek/gelek.mp4'
    }
  ];

  let selectedMovement = null;
  let activeSubVideoIndex = 0;

  function selectMovement(movement) {
    selectedMovement = movement;
    activeSubVideoIndex = 0;
  }

  function clearSelection() {
    selectedMovement = null;
  }
</script>

<section id="geraktari" class="py-20 relative bg-black overflow-hidden">
  <!-- Decorative Background overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-bedana-red/40 to-bedana-gold/60 z-0 pointer-events-none"></div>
  <div class="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div>

  <!-- Tombol Back -->
  <button 
    on:click={() => navigate('home', 'main-menu')}
    class="absolute top-6 left-6 sm:top-8 sm:left-8 z-30 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-bedana-gold hover:text-black hover:border-bedana-gold transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group cursor-pointer"
  >
    <ArrowLeft size={18} class="group-hover:-translate-x-1 transition-transform" />
    <span class="font-medium text-sm hidden sm:inline">Menu Utama</span>
  </button>

  <!-- Ornament Top-Left -->
  <div class="absolute top-0 left-0 z-10 w-48 sm:w-64 md:w-80 pointer-events-none opacity-30 scale-y-[-1]">
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>
  <!-- Ornament Top-Right -->
  <div class="absolute top-0 right-0 z-10 w-48 sm:w-64 md:w-80 pointer-events-none opacity-30 rotate-180">
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>
  <!-- Ornament Bottom-Left -->
  <div class="absolute bottom-0 left-0 z-10 w-48 sm:w-64 md:w-80 pointer-events-none opacity-30">
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>
  <!-- Ornament Bottom-Right -->
  <div class="absolute bottom-0 right-0 z-10 w-48 sm:w-64 md:w-80 pointer-events-none opacity-30 scale-x-[-1]">
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <!-- Section Header -->
    <div class="text-center mb-14">
      <h2 class="text-3xl font-bold text-white tracking-wide">Ragam Gerak Tari Bedana</h2>
      <div class="w-24 h-1 bg-bedana-gold mx-auto mt-4 rounded-full"></div>
      <p class="text-gray-300 mt-5 max-w-2xl mx-auto font-light leading-relaxed">
        Tari Bedana memiliki pola lantai sederhana, sering ditarikan berpasangan, dan memiliki fungsi sebagai hiburan, pendidikan serta sebagai media komunikasi dalam kebudayaan Masyarakat Lampung.
      </p>
      <p class="text-bedana-gold mt-3 text-sm italic font-medium">Klik salah satu gerakan di bawah untuk melihat contoh videonya</p>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
      
      <!-- Movement List (Sidebar/Grid) -->
      <div class="lg:w-5/12 xl:w-4/12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {#each movements as movement, i}
            <button
              on:click={() => selectMovement(movement)}
              class="group w-full text-left px-5 py-4 rounded-xl border transition-all duration-500 backdrop-blur-md
                {selectedMovement?.id === movement.id 
                  ? 'bg-bedana-red border-bedana-red text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-[1.02]' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:border-bedana-gold/50 hover:shadow-[0_0_15px_rgba(218,165,32,0.3)] hover:bg-white/10 hover:text-white'}"
            >
              <div class="flex items-center gap-4">
                <!-- Number badge -->
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors duration-300
                  {selectedMovement?.id === movement.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-bedana-gold/20 text-bedana-gold border border-bedana-gold/30 group-hover:bg-bedana-gold/30'}"
                >
                  {i + 1}
                </div>

                <div class="flex-1 min-w-0">
                  <span class="font-medium text-base block truncate tracking-wide">{movement.name}</span>
                </div>

                <ChevronRight 
                  size={18} 
                  class="shrink-0 transition-transform duration-300 
                    {selectedMovement?.id === movement.id ? 'translate-x-0 opacity-100 text-white' : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-bedana-gold'}" 
                />
              </div>
            </button>
          {/each}
        </div>
      </div>

      <!-- Detail Panel -->
      <div class="lg:w-7/12 xl:w-8/12">
        {#if selectedMovement}
          <div 
            class="bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(218,165,32,0.15)] border border-white/20 overflow-hidden"
            in:fade={{ duration: 300 }}
          >
            <!-- Video -->
            <div class="aspect-video bg-black relative border-b border-bedana-gold/30 flex items-center justify-center">
              {#if selectedMovement.videos}
                {#key selectedMovement.videos[activeSubVideoIndex].url}
                  <video
                    class="w-full h-full object-contain"
                    src={selectedMovement.videos[activeSubVideoIndex].url}
                    controls
                    autoplay
                    preload="metadata"
                  >
                    <track kind="captions">
                  </video>
                {/key}
              {:else if selectedMovement.videoUrl}
                {#key selectedMovement.videoUrl}
                  <video
                    class="w-full h-full object-contain"
                    src={selectedMovement.videoUrl}
                    controls
                    autoplay
                    preload="metadata"
                  >
                    <track kind="captions">
                  </video>
                {/key}
              {:else}
                <div class="text-center p-6 flex flex-col items-center justify-center h-full">
                  <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <img src="/dancer2.png" alt="Not Available" class="w-8 h-8 opacity-50 mix-blend-screen grayscale" />
                  </div>
                  <p class="text-gray-400 font-light">Video rekaman untuk gerakan ini belum tersedia.</p>
                </div>
              {/if}
            </div>

            <!-- Multiple videos switcher -->
            {#if selectedMovement?.videos}
              <div class="flex items-center justify-center gap-3 bg-black/40 py-4 border-b border-white/5">
                {#each selectedMovement.videos as vid, i}
                  <button 
                    on:click={() => activeSubVideoIndex = i}
                    class="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
                      {activeSubVideoIndex === i 
                        ? 'bg-bedana-gold text-black border-bedana-gold shadow-[0_0_15px_rgba(218,165,32,0.5)] scale-105' 
                        : 'bg-white/10 text-gray-400 border-white/20 hover:bg-white/20 hover:text-white'}"
                  >
                    {vid.label}
                  </button>
                {/each}
              </div>
            {/if}

            <!-- Content -->
            <div class="p-6 sm:p-8">
              <div class="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span class="text-xs font-bold uppercase tracking-widest text-bedana-gold">Gerakan Tari</span>
                  <h3 class="text-2xl font-bold text-white mt-1">{selectedMovement.name}</h3>
                </div>
                <button 
                  on:click={clearSelection}
                  class="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-bedana-red hover:text-bedana-red text-gray-400 flex items-center justify-center transition-all duration-300 shrink-0"
                  title="Tutup"
                >
                  <X size={16} />
                </button>
              </div>
              <p class="text-gray-300 leading-relaxed text-justify font-light">{selectedMovement.description}</p>
            </div>
          </div>
        {:else}
          <!-- Empty State -->
          <div 
            class="bg-white/5 backdrop-blur-md rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center py-20 px-8 min-h-[400px]"
            in:fade={{ duration: 200 }}
          >
            <div class="w-24 h-24 mb-6 rounded-full bg-bedana-gold/10 border border-bedana-gold/20 flex items-center justify-center shadow-[0_0_20px_rgba(218,165,32,0.2)]">
              <img src="/dancer2.png" alt="Penari" class="w-16 h-16 object-contain opacity-80 mix-blend-screen" />
            </div>
            <h3 class="text-xl font-bold text-gray-300 mb-2 tracking-wide">Pilih Gerakan</h3>
            <p class="text-gray-400 text-center max-w-xs font-light">Klik salah satu gerakan di menu untuk melihat penjelasan dan contoh video detailnya.</p>
          </div>
        {/if}
      </div>

    </div>

    <!-- Full Video Section -->
    <div class="mt-20">
      <div class="text-center mb-10">
        <h3 class="text-2xl font-bold text-white tracking-wide">Video Utuh Tari Bedana</h3>
        <div class="w-16 h-1 bg-bedana-gold mx-auto mt-3 rounded-full"></div>
        <p class="text-gray-300 mt-3 max-w-lg mx-auto font-light">Saksikan penampilan lengkap Tari Bedana dari awal hingga akhir</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="relative bg-black rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(218,165,32,0.3)] aspect-video border-2 border-bedana-gold/40">
          <iframe
            class="w-full h-full relative z-10"
            src="https://www.youtube.com/embed/-M2a8EqsYB0?rel=0"
            title="Video Utuh Tari Bedana"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
