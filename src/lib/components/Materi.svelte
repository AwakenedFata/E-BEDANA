<script>
  import { fade } from "svelte/transition";
  import { BookOpen, Clock, Activity, Star, ArrowLeft } from "lucide-svelte";
  import { navigate } from "../stores/router.js";

  const tabs = [
    { id: "pengertian", title: "Pengertian", icon: BookOpen },
    { id: "sejarah", title: "Sejarah", icon: Clock },
    { id: "nilai", title: "Nilai-Nilai", icon: Star },
    { id: "fungsi", title: "Fungsi & Jenis", icon: Activity },
  ];

  let activeTab = "pengertian";
</script>

<section id="materi" class="py-20 relative bg-black overflow-hidden">
  <!-- Decorative -->
  <div
    class="absolute inset-0 bg-gradient-to-b from-black/70 via-bedana-red/40 to-bedana-gold/60 z-0 pointer-events-none"
  ></div>
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
  <div
    class="absolute top-0 left-0 z-10 w-48 sm:w-64 md:w-80 pointer-events-none opacity-30 scale-y-[-1]"
  >
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>
  <!-- Ornament Top-Right -->
  <div
    class="absolute top-0 right-0 z-10 w-48 sm:w-64 md:w-80 pointer-events-none opacity-30 rotate-180"
  >
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>
  <!-- Ornament Bottom-Left -->
  <div
    class="absolute bottom-0 left-0 z-10 w-48 sm:w-64 md:w-80 pointer-events-none opacity-30"
  >
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>
  <!-- Ornament Bottom-Right -->
  <div
    class="absolute bottom-0 right-0 z-10 w-48 sm:w-64 md:w-80 pointer-events-none opacity-30 scale-x-[-1]"
  >
    <img src="/ornament1.png" alt="" aria-hidden="true" class="w-full h-auto" />
  </div>

  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-white tracking-wide">
        Materi Pembelajaran
      </h2>
      <div class="w-24 h-1 bg-bedana-gold mx-auto mt-4 rounded-full"></div>
    </div>

    <div
      class="bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(218,165,32,0.15)] border border-white/20 overflow-hidden"
    >
      <!-- Tabs Header -->
      <div
        class="flex flex-col sm:flex-row border-b border-white/10 bg-black/40"
      >
        {#each tabs as tab}
          <button
            on:click={() => (activeTab = tab.id)}
            class="flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium transition-all duration-300 relative
              {activeTab === tab.id
              ? 'text-bedana-gold bg-white/5'
              : 'text-gray-400 hover:text-white hover:bg-white/5'}"
          >
            <svelte:component this={tab.icon} size={18} />
            {tab.title}
            {#if activeTab === tab.id}
              <div
                class="absolute bottom-0 left-0 right-0 h-0.5 bg-bedana-gold shadow-[0_0_10px_rgba(218,165,32,0.8)]"
              ></div>
            {/if}
          </button>
        {/each}
      </div>

      <!-- Tab Content Area -->
      <div
        class="p-8 relative grid grid-cols-1 grid-rows-1 items-start min-h-[350px]"
      >
        {#if activeTab === "pengertian"}
          <div
            in:fade={{ duration: 300, delay: 150 }}
            out:fade={{ duration: 150 }}
            class="col-start-1 row-start-1"
          >
            <h3 class="text-2xl font-bold text-white mb-6">
              Pengertian Tari Bedana
            </h3>

            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div
                class="flex-1 prose max-w-none text-gray-300 space-y-4 text-justify font-light"
              >
                <p class="text-lg leading-relaxed">
                  Tari Bedana adalah tarian tradisional yang berasal dari <span
                    class="font-bold text-bedana-gold">Lampung</span
                  >, tepatnya dari suku Lampung Pepadun. Tari ini biasanya
                  ditampilkan sebagai bentuk ungkapan kebahagiaan dan rasa
                  syukur, serta menjadi bagian penting dari upacara adat
                  masyarakat Lampung.
                </p>
                <p class="text-lg leading-relaxed">
                  Tari ini bernapaskan ajaran Islam dan berfungsi sebagai tari
                  pergaulan atau hiburan, yang merupakan simbol persahabatan dan
                  keramahtamahan masyarakat Lampung dalam kehidupan sehari-hari.
                  Tari Bedana memiliki gerakan yang dinamis, lincah, dan penuh
                  semangat, mencerminkan karakter masyarakat Lampung yang
                  terbuka dan penuh semangat kebersamaan.
                </p>
              </div>
              <div
                class="w-48 h-48 bg-gradient-to-br from-bedana-gold/20 to-bedana-red/20 rounded-full flex items-center justify-center border-4 border-bedana-gold shadow-[0_0_20px_rgba(218,165,32,0.4)] overflow-hidden shrink-0"
              >
                <img
                  src="/dancer1.png"
                  alt="Penari Bedana"
                  class="w-36 h-36 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        {/if}

        {#if activeTab === "sejarah"}
          <div
            in:fade={{ duration: 300, delay: 150 }}
            out:fade={{ duration: 150 }}
            class="col-start-1 row-start-1"
          >
            <h3 class="text-2xl font-bold text-white mb-6">
              Sejarah Tari Bedana
            </h3>

            <div
              class="relative border-l-2 border-bedana-gold pl-6 ml-4 space-y-8"
            >
              <div class="relative">
                <div
                  class="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-bedana-red ring-4 ring-black/80 shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                ></div>
                <h4 class="font-bold text-lg text-white mb-2">Asal Usul</h4>
                <p
                  class="text-gray-300 leading-relaxed text-justify font-light"
                >
                  Awalnya, Tari Bedana hanya ditampilkan dalam acara keagamaan
                  atau adat istiadat tertentu, seperti perayaan anak laki-laki
                  yang baru saja khatam Al-Qur'an dan sambutan tamu agung dalam
                  lingkungan adat.
                </p>
              </div>
              <div class="relative">
                <div
                  class="absolute -left-[1.65rem] top-1 w-4 h-4 rounded-full bg-bedana-gold ring-4 ring-black/80 shadow-[0_0_10px_rgba(218,165,32,0.8)]"
                ></div>
                <h4 class="font-bold text-lg text-white mb-2">
                  Perkembangan Zaman
                </h4>
                <p
                  class="text-gray-300 leading-relaxed text-justify font-light mb-3"
                >
                  Seiring perkembangan zaman, tari ini mulai ditampilkan dalam
                  berbagai acara formal dan non-formal seperti:
                </p>
                <ul
                  class="list-disc list-inside text-gray-300 font-light space-y-1 mb-3"
                >
                  <li>Upacara adat,</li>
                  <li>Festival budaya,</li>
                  <li>Acara penyambutan tamu,</li>
                  <li>Pentas seni di sekolah maupun daerah.</li>
                </ul>
                <p
                  class="text-gray-300 leading-relaxed text-justify font-light"
                >
                  Tari Bedana awalnya bersifat tari tunggal atau berpasangan,
                  tetapi kini lebih sering ditampilkan secara berkelompok oleh
                  para penari pria atau wanita dengan pakaian adat Lampung.
                </p>
              </div>
            </div>
          </div>
        {/if}

        {#if activeTab === "nilai"}
          <div
            in:fade={{ duration: 300, delay: 150 }}
            out:fade={{ duration: 150 }}
            class="col-start-1 row-start-1"
          >
            <h3 class="text-2xl font-bold text-white mb-4">
              Nilai-Nilai dalam Tari Bedana
            </h3>
            <p
              class="text-gray-300 leading-relaxed text-justify font-light mb-6"
            >
              Tari Bedana tidak hanya sekadar pertunjukan seni, tetapi juga
              mengandung berbagai nilai budaya dan moral, antara lain:
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                class="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-inner group hover:bg-white/10 transition-colors"
              >
                <h4 class="font-bold text-bedana-gold mb-2 text-lg">
                  Religius
                </h4>
                <p class="text-gray-300 font-light text-sm">
                  Mengandung makna spiritual, karena awalnya digunakan dalam
                  acara keagamaan.
                </p>
              </div>
              <div
                class="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-inner group hover:bg-white/10 transition-colors"
              >
                <h4 class="font-bold text-bedana-gold mb-2 text-lg">
                  Kebersamaan
                </h4>
                <p class="text-gray-300 font-light text-sm">
                  Ditampilkan secara berkelompok, mencerminkan nilai gotong
                  royong dan persatuan.
                </p>
              </div>
              <div
                class="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-inner group hover:bg-white/10 transition-colors"
              >
                <h4 class="font-bold text-bedana-gold mb-2 text-lg">
                  Etika & Kesopanan
                </h4>
                <p class="text-gray-300 font-light text-sm">
                  Gerak tari mencerminkan kelembutan, tata krama, dan kesopanan
                  dalam budaya Lampung.
                </p>
              </div>
              <div
                class="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-inner group hover:bg-white/10 transition-colors"
              >
                <h4 class="font-bold text-bedana-gold mb-2 text-lg">
                  Identitas Budaya
                </h4>
                <p class="text-gray-300 font-light text-sm">
                  Menjadi simbol kebanggaan dan identitas masyarakat Lampung.
                </p>
              </div>
            </div>
          </div>
        {/if}

        {#if activeTab === "fungsi"}
          <div
            in:fade={{ duration: 300, delay: 150 }}
            out:fade={{ duration: 150 }}
            class="col-start-1 row-start-1"
          >
            <h3 class="text-2xl font-bold text-white mb-6">
              Jenis & Fungsi Tari Bedana
            </h3>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div
                class="bg-black/30 border border-white/10 p-6 rounded-2xl h-fit"
              >
                <h4 class="font-bold text-xl text-bedana-gold mb-4">
                  Jenis Tari Bedana
                </h4>
                <p class="text-gray-300 mb-4 font-light text-sm">
                  Secara umum, Tari Bedana dapat dibedakan menjadi dua jenis
                  berdasarkan waktu dan tujuan pertunjukannya:
                </p>

                <div class="space-y-4">
                  <div class="flex flex-col border-l-2 border-bedana-red pl-4">
                    <span class="font-bold text-white"
                      >Tari Bedana Tradisional</span
                    >
                    <span class="text-sm text-gray-400 font-light mt-1"
                      >Ditampilkan dalam upacara adat atau keagamaan. Gerakan
                      lebih sakral dan formal. Biasanya oleh anak-anak atau
                      remaja laki-laki.</span
                    >
                  </div>
                  <div class="flex flex-col border-l-2 border-bedana-gold pl-4">
                    <span class="font-bold text-white"
                      >Tari Bedana Kreasi Baru</span
                    >
                    <span class="text-sm text-gray-400 font-light mt-1"
                      >Sudah mengalami pengembangan oleh seniman tari. Gerakan
                      lebih variatif dan bisa dipadukan dengan musik modern.
                      Ditampilkan dalam festival atau pentas seni.</span
                    >
                  </div>
                </div>
              </div>

              <div
                class="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner h-fit"
              >
                <div class="flex items-center gap-3 mb-4">
                  <div
                    class="w-10 h-10 bg-bedana-red/20 border border-bedana-red/30 rounded-xl flex items-center justify-center"
                  >
                    <Activity class="text-bedana-red w-5 h-5" />
                  </div>
                  <h4 class="font-bold text-xl text-white">
                    Fungsi Tari Bedana
                  </h4>
                </div>

                <p class="text-gray-400 text-sm mb-4 font-light italic">
                  Tari Bedana memiliki berbagai fungsi, baik dalam konteks
                  sosial maupun budaya:
                </p>

                <ul class="text-gray-300 space-y-3 font-light text-sm mb-6">
                  <li>
                    <span class="font-bold text-bedana-gold"
                      >Fungsi Sosial:</span
                    > Sebagai sarana interaksi dan hiburan masyarakat.
                  </li>
                  <li>
                    <span class="font-bold text-bedana-gold"
                      >Fungsi Pendidikan:</span
                    > Mendidik generasi muda mengenal budaya dan nilai adat.
                  </li>
                  <li>
                    <span class="font-bold text-bedana-gold"
                      >Fungsi Upacara:</span
                    > Digunakan dalam perayaan khatam Al-Qur'an atau penyambutan
                    tamu.
                  </li>
                  <li>
                    <span class="font-bold text-bedana-gold"
                      >Fungsi Estetis:</span
                    > Menampilkan keindahan gerakan dan busana adat Lampung.
                  </li>
                  <li>
                    <span class="font-bold text-bedana-gold"
                      >Fungsi Identitas:</span
                    > Menjadi simbol budaya khas Lampung di tingkat nasional maupun
                    internasional.
                  </li>
                </ul>
              </div>
            </div>

            <!-- Closing Statement -->
            <div
              class="mt-6 p-5 bg-gradient-to-r from-bedana-red/20 to-bedana-gold/20 rounded-xl border border-white/10 text-center"
            >
              <p class="text-gray-300 text-sm font-light leading-relaxed">
                Tari Bedana merupakan warisan budaya yang sangat penting untuk
                dijaga dan dilestarikan. Melalui tarian ini, generasi muda dapat
                belajar tentang keindahan seni tari tradisional, nilai-nilai
                kehidupan, dan pentingnya menjaga budaya daerah sebagai bagian
                dari kekayaan budaya bangsa.
              </p>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
