<script>
  import { GraduationCap, BookOpen } from 'lucide-svelte';

  const penyusun = [
    {
      name: 'Jeliya Dama Yanti',
      role: 'Penyusun',
      nim: '2413043004',
      ttl: 'Kembahang, 6 Januari 2007',
      alamat: 'Liwa, Lampung Barat',
      program: 'Mahasiswa Pendidikan Tari Angkatan 2024',
      avatar: null
    },
    {
      name: 'Dwi Renata',
      role: 'Penyusun',
      nim: '2413043040',
      ttl: 'Tanggamus, 15 Agustus 2006',
      alamat: 'Tanggamus',
      program: 'Mahasiswa Pendidikan Tari Angkatan 2024',
      avatar: null
    }
  ];

  const pembimbing = [
    {
      name: 'Amelia Hani Saputri, S.Pd., M.Pd.',
      role: 'Pembimbing',
      nip: '199503112019032017',
      description: 'Dosen Pendidikan Tari FKIP Unila',
      avatar: null
    },
    {
      name: 'Afrizal Yudha Setiawan, S.Pd., M.Pd.',
      role: 'Pembimbing',
      nip: '199304292019031017',
      description: 'Dosen Pendidikan Tari FKIP Unila',
      avatar: null
    }
  ];
</script>

<section id="profil" class="py-20 bg-black relative overflow-hidden">
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

  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-white tracking-wide">Profil Penyusun</h2>
      <div class="w-24 h-1 bg-bedana-gold mx-auto mt-4 rounded-full"></div>
    </div>

    <!-- Penyusun Card -->
    <div class="mb-16">
      <div class="flex items-center gap-2 mb-6">
        <div class="w-9 h-9 rounded-lg bg-bedana-red/20 border border-bedana-red/30 flex items-center justify-center">
          <GraduationCap size={18} class="text-bedana-red" />
        </div>
        <h3 class="text-xl font-bold text-white">Profil Penyusun</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each penyusun as m}
          <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(218,165,32,0.1)] hover:shadow-[0_0_30px_rgba(218,165,32,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
            <div class="h-1.5 bg-gradient-to-r from-bedana-red to-bedana-gold"></div>
            <div class="p-6">
              <!-- Avatar Stack & Name -->
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black/40 shadow-inner flex items-center justify-center border-2 border-bedana-red group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all duration-300 overflow-hidden shrink-0">
                  {#if m.avatar}
                    <img src={m.avatar} alt={m.name} class="w-full h-full object-cover" />
                  {:else}
                    <div class="w-full h-full bg-gradient-to-br from-bedana-red to-bedana-gold flex items-center justify-center">
                      <span class="text-white text-3xl font-bold">{m.name.charAt(0)}</span>
                    </div>
                  {/if}
                </div>
                
                <div class="text-center sm:text-left flex-1 w-full">
                  <span class="inline-block px-3 py-1 bg-bedana-red/20 border border-bedana-red/30 text-bedana-gold text-xs font-semibold rounded-full mb-3">{m.role}</span>
                  <h4 class="text-xl font-bold text-white mb-2">{m.name}</h4>
                  
                  <div class="space-y-1.5 text-sm">
                    <p class="flex shadow-sm"><span class="w-16 text-gray-400 font-semibold shrink-0">NPM</span><span class="text-gray-300">: {m.nim}</span></p>
                    <p class="flex shadow-sm"><span class="w-16 text-gray-400 font-semibold shrink-0">TTL</span><span class="text-gray-300">: {m.ttl}</span></p>
                    <p class="flex shadow-sm"><span class="w-16 text-gray-400 font-semibold shrink-0">Alamat</span><span class="text-gray-300">: {m.alamat}</span></p>
                  </div>
                  
                  <p class="text-sm text-bedana-gold font-medium mt-4 pt-4 border-t border-white/10">{m.program}</p>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Pembimbing Cards -->
    <div>
      <div class="flex items-center gap-2 mb-6">
        <div class="w-9 h-9 rounded-lg bg-bedana-gold/20 border border-bedana-gold/30 flex items-center justify-center">
          <BookOpen size={18} class="text-bedana-gold" />
        </div>
        <h3 class="text-xl font-bold text-white">Dosen Pembimbing</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each pembimbing as dosen}
          <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(218,165,32,0.1)] hover:shadow-[0_0_30px_rgba(218,165,32,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
            <!-- Top accent -->
            <div class="h-1.5 bg-gradient-to-r from-bedana-gold to-bedana-red"></div>
            
            <div class="p-6 text-center">
              <!-- Avatar -->
              <div class="w-24 h-24 rounded-full mx-auto mb-4 bg-black/40 shadow-inner flex items-center justify-center border-2 border-bedana-gold group-hover:shadow-[0_0_15px_rgba(218,165,32,0.5)] transition-all duration-300 overflow-hidden">
                {#if dosen.avatar}
                  <img src={dosen.avatar} alt={dosen.name} class="w-full h-full object-cover" />
                {:else}
                  <div class="w-full h-full bg-gradient-to-br from-bedana-gold to-bedana-red flex items-center justify-center">
                    <span class="text-white text-2xl font-bold">{dosen.name.charAt(0)}</span>
                  </div>
                {/if}
              </div>

              <span class="inline-block px-3 py-1 bg-bedana-gold/20 border border-bedana-gold/30 text-bedana-gold text-xs font-semibold rounded-full mb-3">{dosen.role}</span>
              <h4 class="text-lg font-bold text-white mb-1">{dosen.name}</h4>
              <p class="text-xs text-gray-400 mb-4">NIP: {dosen.nip}</p>
              <p class="text-gray-300 text-sm leading-relaxed font-light">{dosen.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
