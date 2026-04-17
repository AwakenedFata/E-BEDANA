<script>
  import { fade } from 'svelte/transition';
  import { BookOpen, Clock, Activity } from 'lucide-svelte';

  const tabs = [
    { id: 'pengertian', title: 'Pengertian', icon: BookOpen },
    { id: 'sejarah', title: 'Sejarah', icon: Clock },
    { id: 'fungsi', title: 'Fungsi & Jenis', icon: Activity }
  ];

  let activeTab = 'pengertian';
</script>

<section id="materi" class="py-20 relative bg-black overflow-hidden">
  <!-- Decorative -->
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

  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-white tracking-wide">Materi Pembelajaran</h2>
      <div class="w-24 h-1 bg-bedana-gold mx-auto mt-4 rounded-full"></div>
    </div>

    <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(218,165,32,0.15)] border border-white/20 overflow-hidden">
      <!-- Tabs Header -->
      <div class="flex flex-col sm:flex-row border-b border-white/10 bg-black/40">
        {#each tabs as tab}
          <button 
            on:click={() => activeTab = tab.id}
            class="flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-all duration-300 relative
              {activeTab === tab.id ? 'text-bedana-gold bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}"
          >
            <svelte:component this={tab.icon} size={18} />
            {tab.title}
            {#if activeTab === tab.id}
              <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-bedana-gold shadow-[0_0_10px_rgba(218,165,32,0.8)]"></div>
            {/if}
          </button>
        {/each}
      </div>

      <!-- Tab Content Area -->
      <div class="p-8 relative grid grid-cols-1 grid-rows-1 items-start min-h-[350px]">
        
        {#if activeTab === 'pengertian'}
          <div in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }} class="col-start-1 row-start-1">
            <h3 class="text-2xl font-bold text-white mb-6">Pengertian Tari Bedana</h3>
            
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="flex-1 prose max-w-none text-gray-300 space-y-4 text-justify font-light">
                <p class="text-lg leading-relaxed">
                  Tari Bedana merupakan salah satu tarian tradisional khas daerah <span class="font-bold text-bedana-gold">Lampung</span> yang sangat lekat dengan identitas masyarakatnya.
                </p>
                <p class="text-lg leading-relaxed">
                  Tarian ini melambangkan rasa gembira, sukacita, dan ungkapan rasa syukur masyarakat Lampung. Seringkali tarian ini merepresentasikan keramahan dan suka cita para pemuda-pemudi di Lampung.
                </p>
              </div>
              <div class="w-48 h-48 bg-gradient-to-br from-bedana-gold/20 to-bedana-red/20 rounded-full flex items-center justify-center border-4 border-bedana-gold shadow-[0_0_20px_rgba(218,165,32,0.4)] overflow-hidden shrink-0">
                <img src="/dancer1.png" alt="Penari Bedana" class="w-36 h-36 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        {/if}

        {#if activeTab === 'sejarah'}
          <div in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }} class="col-start-1 row-start-1">
            <h3 class="text-2xl font-bold text-white mb-6">Sejarah Tari Bedana</h3>
            
            <div class="relative border-l-2 border-bedana-gold pl-6 ml-4 space-y-8">
              <div class="relative">
                <div class="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-bedana-red ring-4 ring-black/80 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                <h4 class="font-bold text-lg text-white mb-2">Awal Mula</h4>
                <p class="text-gray-300 leading-relaxed text-justify font-light">
                  Pada awalnya, Tari Bedana dibawakan khusus untuk acara-acara keagamaan dan berbagai upacara adat sakral masyarakat Lampung yang berkaitan dengan penyebaran ajaran Islam.
                </p>
              </div>
              <div class="relative">
                <div class="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-bedana-gold ring-4 ring-black/80 shadow-[0_0_10px_rgba(218,165,32,0.8)]"></div>
                <h4 class="font-bold text-lg text-white mb-2">Perkembangan Masa Kini</h4>
                <p class="text-gray-300 leading-relaxed text-justify font-light">
                  Seiring berjalannya waktu, fungsi tarian ini mulai meluas. Kini Tari Bedana sering ditampilkan dalam festival budaya, perayaan hari besar, hiburan masyarakat, serta pertunjukan seni umum sebagai wujud usaha memelihara kelestarian kesenian daerah.
                </p>
              </div>
            </div>
          </div>
        {/if}

        {#if activeTab === 'fungsi'}
          <div in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }} class="col-start-1 row-start-1">
            <h3 class="text-2xl font-bold text-white mb-6">Fungsi & Jenis Tari Bedana</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner hover:shadow-[0_0_15px_rgba(218,165,32,0.2)] transition-shadow">
                <div class="w-12 h-12 bg-bedana-red/20 border border-bedana-red/30 rounded-xl flex items-center justify-center mb-4">
                  <Activity class="text-bedana-red w-6 h-6" />
                </div>
                <h4 class="font-bold text-xl text-white mb-3">Fungsi Utama</h4>
                <ul class="text-gray-300 space-y-3 font-light">
                  <li class="flex items-center gap-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-bedana-gold shadow-[0_0_5px_rgba(218,165,32,0.8)]"></span>
                    <span>Fungsi Sosial</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-bedana-gold shadow-[0_0_5px_rgba(218,165,32,0.8)]"></span>
                    <span>Sarana Pendidikan (Edukasi)</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-bedana-gold shadow-[0_0_5px_rgba(218,165,32,0.8)]"></span>
                    <span>Keperluan Seremonial/Adat</span>
                  </li>
                  <li class="flex items-center gap-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-bedana-gold shadow-[0_0_5px_rgba(218,165,32,0.8)]"></span>
                    <span>Nilai Estetika (Pertunjukan)</span>
                  </li>
                </ul>
              </div>

              <div class="bg-black/30 border border-white/10 p-6 rounded-2xl">
                <h4 class="font-bold text-xl text-bedana-gold mb-4">Jenis Variasi</h4>
                <p class="text-gray-300 mb-4 pb-4 border-b border-white/10 font-light">
                  Tari Bedana dapat dibagi menjadi dua jenis utama dalam perkembangannya:
                </p>
                
                <div class="space-y-4">
                  <div class="flex flex-col">
                    <span class="font-bold text-bedana-red">Bedana Tradisional</span>
                    <span class="text-sm text-gray-400">Membawakan pakem asli secara utuh</span>
                  </div>
                  <div class="flex flex-col">
                    <span class="font-bold text-bedana-gold">Bedana Kreasi Baru</span>
                    <span class="text-sm text-gray-400">Modifikasi gerakan namun tetap memegang nilai filososfis dasar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/if}

      </div>
    </div>
  </div>
</section>
