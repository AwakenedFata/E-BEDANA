<script>
  import { fade, slide } from 'svelte/transition';
  import { Play, ChevronRight, X } from 'lucide-svelte';

  // Dance movement data
  const movements = [
    {
      id: 'tahtim',
      name: 'Tahtim',
      description: 'Gerakan pembuka Tari Bedana yang dilakukan sebagai penghormatan. Penari berdiri tegak dengan kedua tangan diangkat sejajar bahu, lalu diturunkan perlahan sebagai tanda dimulainya tarian. Gerakan ini melambangkan rasa hormat kepada penonton dan sesama penari.',
      videoId: 'yQv1WvC11z0',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 'khesek-injing',
      name: 'Khesek Injing',
      description: 'Gerakan langkah kaki kecil-kecil dengan posisi berjinjit. Kaki bergerak maju mundur secara bergantian dengan ritme yang cepat dan ringan. Gerakan ini menggambarkan kelincahan dan kegembiraan pemuda-pemudi Lampung.',
      videoId: 'yQv1WvC11z0',
      color: 'from-amber-500 to-amber-700'
    },
    {
      id: 'khesek-gantung',
      name: 'Khesek Gantung',
      description: 'Variasi dari Khesek Injing dengan salah satu kaki diangkat atau digantung saat melakukan langkah. Gerakan ini memerlukan keseimbangan yang baik dan menunjukkan keterampilan penari dalam mengendalikan tubuh.',
      videoId: 'yQv1WvC11z0',
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 'jimpang',
      name: 'Jimpang',
      description: 'Gerakan menyilangkan kaki ke samping kiri dan kanan secara bergantian. Tubuh sedikit condong mengikuti arah langkah kaki. Gerakan ini melambangkan keluwesan dan keindahan gerak dalam kehidupan masyarakat Lampung.',
      videoId: 'yQv1WvC11z0',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      id: 'humbak-moloh',
      name: 'Humbak Moloh',
      description: 'Gerakan yang menyerupai ombak atau gelombang. Tangan dan badan bergerak mengalir seperti air yang bergelombang. Gerakan ini terinspirasi dari alam Lampung yang dekat dengan laut dan melambangkan keharmonisan dengan alam.',
      videoId: 'yQv1WvC11z0',
      color: 'from-teal-500 to-teal-700'
    },
    {
      id: 'ayun',
      name: 'Ayun',
      description: 'Gerakan mengayunkan tangan dan kaki secara berirama. Kedua tangan diayun ke depan dan belakang sementara kaki melangkah mengikuti irama musik pengiring. Gerakan ini menggambarkan keselarasan dan keseimbangan hidup.',
      videoId: 'yQv1WvC11z0',
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      id: 'ayun-gantung',
      name: 'Ayun Gantung',
      description: 'Pengembangan dari gerakan Ayun dengan menambahkan elemen kaki yang diangkat (digantung) saat mengayun. Kombinasi ayunan tangan dan kaki yang terangkat menciptakan dinamika gerak yang lebih kompleks dan menarik.',
      videoId: 'yQv1WvC11z0',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      id: 'belitut',
      name: 'Belitut',
      description: 'Gerakan memutar atau berputar di tempat dengan langkah kaki yang teratur. Penari berputar dengan anggun sambil menjaga posisi tangan tetap indah. Gerakan ini melambangkan perputaran waktu dan siklus kehidupan.',
      videoId: 'yQv1WvC11z0',
      color: 'from-violet-500 to-violet-700'
    },
    {
      id: 'gelek',
      name: 'Gelek',
      description: 'Gerakan penutup yang menandai berakhirnya tarian. Penari melakukan gerakan terakhir dengan penuh penghayatan, kembali ke posisi awal sebagai tanda penghormatan. Gerakan ini menyimbolkan rasa syukur atas selesainya pertunjukan.',
      videoId: 'yQv1WvC11z0',
      color: 'from-rose-500 to-rose-700'
    }
  ];

  let selectedMovement = null;

  function selectMovement(movement) {
    selectedMovement = movement;
  }

  function clearSelection() {
    selectedMovement = null;
  }
</script>

<section id="geraktari" class="py-20 relative bg-black overflow-hidden">
  <!-- Decorative Background overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-bedana-red/40 to-bedana-gold/60 z-0 pointer-events-none"></div>
  <div class="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div>

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
      <p class="text-gray-300 mt-4 max-w-xl mx-auto font-light">Klik salah satu gerakan untuk melihat penjelasan dan contoh video</p>
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
            <div class="aspect-video bg-black relative border-b border-bedana-gold/30">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/{selectedMovement.videoId}?rel=0"
                title="Video {selectedMovement.name}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

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
            src="https://www.youtube.com/embed/yQv1WvC11z0?rel=0"
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
