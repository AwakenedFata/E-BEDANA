<script>
  import {
    BookOpen,
    UserCircle,
    PlayCircle,
    ClipboardCheck,
  } from "lucide-svelte";
  import { navigate } from "../stores/router.js";

  const menuItems = [
    {
      id: "profil",
      title: "Profil",
      description:
        "Berisi informasi profil penyusun dan dosen pembimbing media pembelajaran.",
      icon: UserCircle,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      id: "materi",
      title: "Materi",
      description:
        "Mengenal pengertian, sejarah, fungsi, nilai dan jenis Tari Bedana.",
      icon: BookOpen,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      id: "geraktari",
      title: "Gerak Tari",
      description: "Tutorial ragam gerak dan Video utuh Tari Bedana.",
      icon: PlayCircle,
      color: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      id: "evaluasi",
      title: "Evaluasi",
      description:
        "Uji pemahamanmu tentang Tari Bedana melalui kuis interaktif.",
      icon: ClipboardCheck,
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
  ];
</script>

<section id="main-menu" class="py-20 relative bg-black overflow-hidden">
  <!-- Subtle top border ornament -->
  <div
    class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bedana-gold via-bedana-red to-bedana-black z-20"
  ></div>

  <!-- Background Overlay (Matching Hero) -->
  <div
    class="absolute inset-0 bg-gradient-to-b from-black/70 via-bedana-red/40 to-bedana-gold/60 z-0 pointer-events-none"
  ></div>
  <div class="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div>

  <!-- Ornament Bottom-Left -->
  <div
    class="absolute bottom-0 left-0 z-10 w-48 sm:w-64 md:w-80 pointer-events-none opacity-30"
  >
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>

  <!-- Ornament Bottom-Right (mirrored) -->
  <div
    class="absolute bottom-0 right-0 z-10 w-48 sm:w-64 md:w-80 pointer-events-none opacity-30 scale-x-[-1]"
  >
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-white tracking-wide">
        Menu Pembelajaran
      </h2>
      <div class="w-24 h-1 bg-bedana-gold mx-auto mt-4 rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each menuItems as item}
        <button
          on:click={() => navigate(item.id)}
          class="group block relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-[0_0_25px_rgba(218,165,32,0.6)] transition-all duration-500 transform hover:scale-105 hover:bg-white/20 hover:border-bedana-gold text-left overflow-hidden"
        >
          <!-- Decorative corner -->
          <div
            class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-bedana-gold/20 to-transparent rounded-tr-2xl"
          ></div>

          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 {item.color} border group-hover:scale-110 transition-transform duration-500 shadow-inner"
          >
            <svelte:component this={item.icon} size={28} strokeWidth={2} />
          </div>

          <h3
            class="text-xl font-bold text-white mb-2 group-hover:text-bedana-gold transition-colors"
          >
            {item.title}
          </h3>
          <p class="text-gray-300 text-sm leading-relaxed">
            {item.description}
          </p>

          <div
            class="mt-6 flex items-center text-bedana-gold font-medium text-sm"
          >
            <span>Buka Materi</span>
            <svg
              class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>
