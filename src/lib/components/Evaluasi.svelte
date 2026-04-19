<script>
  import { fade } from "svelte/transition";
  import {
    CheckCircle,
    XCircle,
    ArrowRight,
    RotateCcw,
    Trophy,
    PenLine,
    Image,
  } from "lucide-svelte";

  // --- Quiz Sections State ---
  let activeSection = "pilgan"; // 'pilgan' | 'esai' | 'tebak'

  const sections = [
    { id: "pilgan", label: "Pilihan Ganda", icon: CheckCircle },
    { id: "esai", label: "Esai", icon: PenLine },
    { id: "tebak", label: "Tebak Gambar", icon: Image },
  ];

  // =====================
  // MULTIPLE CHOICE STATE
  // =====================
  const mcQuestions = [
    {
      id: 1,
      question: "Tari Bedana berasal dari daerah…",
      options: ["Jawa Barat", "Bali", "Lampung", "Sumatera Barat"],
      correctIndex: 2,
    },
    {
      id: 2,
      question: "Tari Bedana biasanya dipentaskan dalam acara…",
      options: [
        "Upacara perang",
        "Penyambutan tamu dan pergaulan",
        "Upacara kematian",
        "Perlombaan olahraga",
      ],
      correctIndex: 1,
    },
    {
      id: 3,
      question: "Tari Bedana berkembang sebagai pengaruh dari budaya…",
      options: ["India", "Arab/Islam", "Eropa", "Cina"],
      correctIndex: 1,
    },
    {
      id: 4,
      question: "Fungsi utama Tari Bedana adalah sebagai…",
      options: [
        "Hiburan dan pergaulan",
        "Ritual keagamaan saja",
        "Media perang",
        "Pertunjukan modern",
      ],
      correctIndex: 0,
    },
    {
      id: 5,
      question: "Gerakan Tari Bedana didominasi oleh…",
      options: [
        "Gerakan keras dan cepat",
        "Gerakan lemah gemulai dan sederhana",
        "Gerakan akrobatik",
        "Gerakan bebas tanpa pola",
      ],
      correctIndex: 1,
    },
    {
      id: 6,
      question: "Tari Bedana biasanya ditarikan secara…",
      options: [
        "Tunggal",
        "Berpasangan atau berkelompok",
        "Sendiri di panggung",
        "Tanpa penari",
      ],
      correctIndex: 1,
    },
    {
      id: 7,
      question: "Iringan musik Tari Bedana menggunakan alat musik seperti…",
      options: ["Gamelan", "Rebana dan gambus", "Piano", "Drum modern"],
      correctIndex: 1,
    },
    {
      id: 8,
      question: "Kostum penari Tari Bedana mencerminkan budaya…",
      options: [
        "Barat modern",
        "Tradisional Lampung bernuansa Islami",
        "Jepang",
        "India klasik",
      ],
      correctIndex: 1,
    },
    {
      id: 9,
      question: "Salah satu nilai yang terkandung dalam Tari Bedana adalah…",
      options: [
        "Individualisme",
        "Kebersamaan dan silaturahmi",
        "Persaingan",
        "Kemarahan",
      ],
      correctIndex: 1,
    },
    {
      id: 10,
      question: "Pola lantai yang sering digunakan dalam Tari Bedana adalah…",
      options: [
        "Tidak beraturan",
        "Garis lurus dan lingkaran",
        "Zig-zag tajam",
        "Acak",
      ],
      correctIndex: 1,
    },
  ];

  let mcAnswers = new Array(mcQuestions.length).fill(-1);
  let mcSubmitted = false;
  let mcScore = 0;
  let currentQuestion = 0;

  function selectAnswer(questionIndex, optionIndex) {
    if (mcSubmitted || mcAnswers[questionIndex] !== -1) return;

    mcAnswers[questionIndex] = optionIndex;
    mcAnswers = [...mcAnswers];

    if (optionIndex === mcQuestions[questionIndex].correctIndex) {
      mcScore++;
    }

    // Auto set submitted if all answered after a small delay
    if (mcAnswers.filter((a) => a !== -1).length === mcQuestions.length) {
      setTimeout(() => {
        mcSubmitted = true;
      }, 1200);
    }
  }

  function submitMC() {
    mcSubmitted = true;
  }

  function resetMC() {
    mcAnswers = new Array(mcQuestions.length).fill(-1);
    mcSubmitted = false;
    mcScore = 0;
    currentQuestion = 0;
  }

  function nextQuestion() {
    if (currentQuestion < mcQuestions.length - 1) {
      currentQuestion++;
    }
  }

  function prevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
    }
  }

  // Computed
  $: allMCAnswered = mcAnswers.every((a) => a !== -1);
  $: mcPercentage = Math.round((mcScore / mcQuestions.length) * 100);

  // ===========
  // ESSAY STATE
  // ===========
  const essayQuestions = [
    {
      id: 1,
      question: "Jelaskan asal-usul dan latar belakang munculnya Tari Bedana!",
      reference:
        "Tari Bedana berasal dari Lampung dan berkembang sebagai hasil akulturasi budaya lokal dengan budaya Islam yang dibawa oleh pedagang Arab. Tari ini awalnya digunakan sebagai sarana dakwah dan pergaulan masyarakat.",
      placeholder: "Tuliskan jawaban kamu di sini...",
    },
    {
      id: 2,
      question:
        "Sebutkan dan jelaskan fungsi Tari Bedana dalam kehidupan masyarakat Lampung!",
      reference:
        "Sebagai hiburan, sarana pergaulan masyarakat, penyambutan tamu, dan media mempererat silaturahmi.",
      placeholder: "Tuliskan jawaban kamu di sini...",
    },
    {
      id: 3,
      question: "Bagaimana ciri khas gerakan dalam Tari Bedana? Jelaskan!",
      reference:
        "Gerakannya sederhana, lembut, tidak terlalu rumit, dilakukan berulang, dan mencerminkan kesopanan serta kebersamaan.",
      placeholder: "Tuliskan jawaban kamu di sini...",
    },
    {
      id: 4,
      question: "Apa saja unsur-unsur pendukung dalam pertunjukan Tari Bedana?",
      reference:
        "Gerak tari, Musik/iringan (rebana, gambus), Kostum, Pola lantai, dan Properti (jika ada).",
      placeholder: "Tuliskan jawaban kamu di sini...",
    },
    {
      id: 5,
      question:
        "Jelaskan nilai-nilai budaya yang terkandung dalam Tari Bedana!",
      reference:
        "Kebersamaan, Kekompakan, Kesopanan, Nilai religius (Islam), dan Silaturahmi.",
      placeholder: "Tuliskan jawaban kamu di sini...",
    },
  ];

  let essayAnswers = essayQuestions.map(() => "");
  let essaySubmitted = false;
  let isCheckingEssays = false;
  let essayScores = [];
  let essayFeedback = [];

  async function submitEssay() {
    isCheckingEssays = true;
    essaySubmitted = true;
    essayScores = new Array(essayQuestions.length).fill(0);
    essayFeedback = new Array(essayQuestions.length).fill(
      "Sedang mengevaluasi...",
    );

    const apiKey = import.meta.env.VITE_GROQ_API_KEY;

    for (let i = 0; i < essayQuestions.length; i++) {
      const prompt = `Anda adalah seorang guru yang sangat objektif dalam menilai jawaban siswa.
Tugas Anda: Bandingkan "Jawaban Siswa" dengan "Kunci Jawaban".

PANDUAN PENILAIAN:
1. Jika semua poin atau makna inti dari Kunci Jawaban sudah disebutkan oleh siswa (walaupun urutannya berbeda, tidak menggunakan tanda baca/koma, huruf kapital salah, atau ada typo), Anda WAJIB memberikan skor 100.
2. Jangan mengurangi nilai hanya karena masalah tata bahasa, tanda baca, atau format penulisan.
3. Berikan skor (0-100) murni berdasarkan kesamaan kelengkapan makna.
4. Berikan feedback singkat maksimal 1 kalimat yang ramah.

Kunci Jawaban: ${essayQuestions[i].reference}
Jawaban Siswa: ${essayAnswers[i]}

Format Wajib: Berikan respon HANYA berupa JSON valid tanpa teks lain (tanpa markdown). Strukturnya persis seperti ini:
{
  "score": 100,
  "feedback": "Jawaban kamu sudah memuat seluruh poin yang tepat."
}`;

      try {
        const res = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: "llama-3.1-8b-instant",
              messages: [{ role: "user", content: prompt }],
              temperature: 0.1,
              response_format: { type: "json_object" },
            }),
          },
        );

        if (!res.ok) {
          const errData = await res.text();
          throw new Error(`HTTP ${res.status}: ${errData}`);
        }

        const data = await res.json();
        const responseText =
          data.choices && data.choices.length > 0
            ? data.choices[0].message.content.trim()
            : "{}";

        let parsed = {
          score: 0,
          feedback: "Format balasan E-BEDANA tidak sesuai.",
        };
        try {
          let cleanStr = responseText;
          if (cleanStr.startsWith("```json")) {
            cleanStr = cleanStr.substring(7, cleanStr.length - 3);
          } else if (cleanStr.startsWith("```")) {
            cleanStr = cleanStr.substring(3, cleanStr.length - 3);
          }
          parsed = JSON.parse(cleanStr);
        } catch (e) {
          console.error("Parse JSON fall back", e);
        }

        // Re-assign reactivity
        essayScores[i] =
          typeof parsed.score === "number"
            ? parsed.score
            : parseInt(parsed.score) || 0;
        essayFeedback[i] =
          parsed.feedback || "Telah dievaluasi, mohon kaji ulang jawaban ini.";
        essayScores = [...essayScores];
        essayFeedback = [...essayFeedback];
      } catch (e) {
        console.error("Error fetching Groq:", e);
        essayScores[i] = 0;
        essayFeedback[i] =
          `Gagal menghubungi server Groq. (${e.message.substring(0, 50)}...)`;
        essayScores = [...essayScores];
        essayFeedback = [...essayFeedback];
      }
    }

    isCheckingEssays = false;
  }

  function resetEssay() {
    essayAnswers = essayQuestions.map(() => "");
    essaySubmitted = false;
    isCheckingEssays = false;
    essayScores = [];
    essayFeedback = [];
  }

  $: allEssayFilled = essayAnswers.every((a) => a.trim().length > 0);
  $: averageEssayScore = essayScores.length
    ? Math.round(essayScores.reduce((a, b) => a + b, 0) / essayScores.length)
    : 0;

  // =================
  // GUESS IMAGE STATE
  // =================
  const baseImageQuestions = [
    {
      id: 1,
      image: "/kesek_gantung.jpeg",
      correctAnswer: "khesek gantung",
      hint: "Gerakan kaki melangkah maju lalu kaki diayunkan/digantung ke samping",
    },
    {
      id: 2,
      image: "/kesek_injing.jpeg",
      correctAnswer: "khesek injing",
      hint: "Gerakan kaki melangkah lalu dihentakkan dengan posisi jinjit",
    },
    {
      id: 3,
      image: "/gelek.jpeg",
      correctAnswer: "gelek",
      hint: "Gerakan yang juga sering terlihat pada penari pria",
    },
    {
      id: 4,
      image: "/umbakmuloh_lakilaki.jpeg",
      correctAnswer: "humbak moloh",
      hint: "Gerakan kaki menyamping secara berurutan",
    },
  ];

  let imageQuestions = [...baseImageQuestions].sort(() => Math.random() - 0.5);
  let imageGuesses = imageQuestions.map(() => "");
  let imageSubmitted = false;
  let imageResults = [];

  function submitImageGuess() {
    imageResults = imageQuestions.map((q, i) => {
      const guess = imageGuesses[i].trim().toLowerCase();
      return guess === q.correctAnswer.toLowerCase();
    });
    imageSubmitted = true;
  }

  function resetImageGuess() {
    imageQuestions = [...baseImageQuestions].sort(() => Math.random() - 0.5);
    imageGuesses = imageQuestions.map(() => "");
    imageSubmitted = false;
    imageResults = [];
  }

  $: allImageFilled = imageGuesses.every((g) => g.trim().length > 0);
  $: imageScore = imageResults.filter((r) => r).length;
</script>

<section id="evaluasi" class="py-20 relative bg-black overflow-hidden">
  <!-- Decorative Background overlay -->
  <div
    class="absolute inset-0 bg-gradient-to-b from-black/70 via-bedana-red/40 to-bedana-gold/60 z-0 pointer-events-none"
  ></div>
  <div class="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div>

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

  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-white tracking-wide">
        Evaluasi Pembelajaran
      </h2>
      <div class="w-24 h-1 bg-bedana-gold mx-auto mt-4 rounded-full"></div>
      <p class="text-gray-300 mt-4 max-w-lg mx-auto font-light">
        Uji pemahamanmu tentang Tari Bedana melalui berbagai jenis soal berikut
      </p>
    </div>

    <!-- Section Tabs -->
    <div
      class="flex flex-col sm:flex-row bg-white/10 backdrop-blur-md rounded-xl p-1.5 mb-10 gap-1 border border-white/20"
    >
      {#each sections as sec}
        <button
          on:click={() => (activeSection = sec.id)}
          class="flex-1 py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300
            {activeSection === sec.id
            ? 'bg-bedana-gold text-black shadow-md'
            : 'text-gray-400 hover:text-white hover:bg-white/5'}"
        >
          <svelte:component this={sec.icon} size={16} />
          {sec.label}
        </button>
      {/each}
    </div>

    <!-- ======================== -->
    <!-- PILIHAN GANDA (MC) SECTION -->
    <!-- ======================== -->
    {#if activeSection === "pilgan"}
      <div in:fade={{ duration: 250 }}>
        {#if !mcSubmitted}
          <!-- Progress Bar -->
          <div
            class="mb-8 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
          >
            <div class="flex justify-between items-center mb-3">
              <span class="text-sm text-gray-400"
                >Soal {currentQuestion + 1} dari {mcQuestions.length}</span
              >
              <span class="text-sm font-medium text-bedana-gold"
                >{mcAnswers.filter((a) => a !== -1).length}/{mcQuestions.length}
                dijawab</span
              >
            </div>
            <div class="w-full bg-black/50 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-bedana-gold to-yellow-400 h-2 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(218,165,32,0.8)]"
                style="width: {((currentQuestion + 1) / mcQuestions.length) *
                  100}%"
              ></div>
            </div>
          </div>

          <!-- Question Dots -->
          <div class="flex justify-center gap-2 mb-8">
            {#each mcQuestions as _, i}
              <button
                on:click={() => (currentQuestion = i)}
                class="w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 border-2
                  {currentQuestion === i
                  ? 'border-bedana-gold bg-bedana-gold text-black scale-110 shadow-[0_0_10px_rgba(218,165,32,0.5)]'
                  : mcAnswers[i] !== -1
                    ? 'border-bedana-gold/50 bg-bedana-gold/20 text-bedana-gold'
                    : 'border-white/20 bg-white/5 text-gray-500 hover:border-white/50 hover:text-white'}"
              >
                {i + 1}
              </button>
            {/each}
          </div>

          <!-- Current Question Card -->
          <div
            class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(218,165,32,0.1)] p-6 sm:p-8 mb-6"
          >
            <p class="text-xl font-semibold text-white mb-6 leading-relaxed">
              <span class="text-bedana-gold mr-2">{currentQuestion + 1}.</span>
              {mcQuestions[currentQuestion].question}
            </p>

            <div class="space-y-3">
              {#each mcQuestions[currentQuestion].options as option, oi}
                <button
                  on:click={() => selectAnswer(currentQuestion, oi)}
                  disabled={mcAnswers[currentQuestion] !== -1}
                  class="w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-4
                  {mcAnswers[currentQuestion] !== -1
                    ? oi === mcQuestions[currentQuestion].correctIndex
                      ? 'border-emerald-500 bg-emerald-500/20 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                      : mcAnswers[currentQuestion] === oi
                        ? 'border-red-500 bg-red-500/20 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                        : 'border-white/10 bg-black/30 text-gray-500 opacity-50'
                    : 'border-white/10 bg-black/30 text-gray-300 hover:border-bedana-gold/50 hover:bg-black/50 hover:text-white'}"
                >
                  <span
                    class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 transition-colors
                    {mcAnswers[currentQuestion] !== -1
                      ? oi === mcQuestions[currentQuestion].correctIndex
                        ? 'border-emerald-500 bg-emerald-500 text-black'
                        : mcAnswers[currentQuestion] === oi
                          ? 'border-red-500 bg-red-500 text-white'
                          : 'border-white/30 text-gray-500'
                      : 'border-white/30 text-gray-400'}"
                  >
                    {String.fromCharCode(65 + oi)}
                  </span>
                  <span class="font-medium tracking-wide">{option}</span>
                </button>
              {/each}
            </div>
          </div>

          <!-- Navigation -->
          <div class="flex justify-between items-center">
            <button
              on:click={prevQuestion}
              disabled={currentQuestion === 0}
              class="px-5 py-2.5 rounded-lg font-medium text-sm transition-colors border border-transparent
                {currentQuestion === 0
                ? 'text-gray-600 cursor-not-allowed opacity-50'
                : 'text-gray-300 border-white/20 hover:text-white hover:bg-white/10'}"
            >
              ← Sebelumnya
            </button>

            {#if currentQuestion < mcQuestions.length - 1}
              <button
                on:click={nextQuestion}
                class="px-6 py-2.5 bg-bedana-gold text-black rounded-lg font-bold text-sm hover:shadow-[0_0_15px_rgba(218,165,32,0.6)] transition-all flex items-center gap-2"
              >
                Selanjutnya <ArrowRight size={16} />
              </button>
            {:else}
              <button
                on:click={submitMC}
                disabled={!allMCAnswered}
                class="px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2
                  {allMCAnswered
                  ? 'bg-bedana-red text-white hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.6)]'
                  : 'bg-white/10 text-gray-500 cursor-not-allowed'}"
              >
                Kirim Jawaban <CheckCircle size={16} />
              </button>
            {/if}
          </div>
        {:else}
          <!-- MC Results -->
          <div class="text-center" in:fade={{ duration: 300 }}>
            <div
              class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_40px_rgba(218,165,32,0.15)] p-8 sm:p-12 mb-6"
            >
              <div
                class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center border-2 shadow-lg
                {mcPercentage >= 70
                  ? 'bg-emerald-500/20 border-emerald-500/50 shadow-emerald-500/30'
                  : mcPercentage >= 40
                    ? 'bg-amber-500/20 border-amber-500/50 shadow-amber-500/30'
                    : 'bg-red-500/20 border-red-500/50 shadow-red-500/30'}"
              >
                <Trophy
                  size={36}
                  class={mcPercentage >= 70
                    ? "text-emerald-400"
                    : mcPercentage >= 40
                      ? "text-amber-400"
                      : "text-red-400"}
                />
              </div>

              <h3 class="text-2xl font-bold text-white mb-2 tracking-wide">
                Hasil Evaluasi
              </h3>
              <p class="text-gray-400 mb-8 font-light">Pilihan Ganda</p>

              <div
                class="text-7xl font-black mb-2 tracking-tighter drop-shadow-lg
                {mcPercentage >= 70
                  ? 'text-emerald-400'
                  : mcPercentage >= 40
                    ? 'text-amber-400'
                    : 'text-red-400'}"
              >
                {mcPercentage}
              </div>
              <p
                class="text-gray-500 text-sm mb-8 uppercase tracking-widest font-semibold"
              >
                Skor Kamu
              </p>

              <p class="text-white font-medium mb-2 text-lg">
                <span class="text-bedana-gold">{mcScore}</span> dari {mcQuestions.length}
                jawaban benar
              </p>
              <p class="text-sm text-gray-300 mb-8 font-light">
                {#if mcPercentage >= 70}
                  Luar biasa! Kamu memahami materi dengan sangat baik.
                {:else if mcPercentage >= 40}
                  Cukup baik! Coba pelajari kembali materi yang belum dikuasai.
                {:else}
                  Jangan menyerah! Pelajari kembali materinya dan coba lagi.
                {/if}
              </p>

              <!-- Answer Review -->
              <div
                class="text-left space-y-4 mt-8 pt-8 border-t border-white/10"
              >
                <h4 class="font-bold text-white mb-4 tracking-wide">
                  Pembahasan:
                </h4>
                {#each mcQuestions as q, i}
                  <div
                    class="p-5 rounded-xl border backdrop-blur-sm {mcAnswers[
                      i
                    ] === q.correctIndex
                      ? 'border-emerald-500/30 bg-emerald-500/10'
                      : 'border-red-500/30 bg-red-500/10'}"
                  >
                    <div class="flex items-start gap-4">
                      {#if mcAnswers[i] === q.correctIndex}
                        <CheckCircle
                          size={24}
                          class="text-emerald-400 shrink-0 mt-0.5"
                        />
                      {:else}
                        <XCircle
                          size={24}
                          class="text-red-400 shrink-0 mt-0.5"
                        />
                      {/if}
                      <div>
                        <p
                          class="font-medium text-white text-base leading-relaxed"
                        >
                          {q.question}
                        </p>
                        <p class="text-sm mt-3 border-t border-white/5 pt-3">
                          <span class="text-gray-400">Jawabanmu: </span>
                          <span
                            class="{mcAnswers[i] === q.correctIndex
                              ? 'text-emerald-400'
                              : 'text-red-400'} font-semibold"
                          >
                            {mcAnswers[i] !== -1
                              ? q.options[mcAnswers[i]]
                              : "Tidak dijawab"}
                          </span>
                        </p>
                        {#if mcAnswers[i] !== q.correctIndex}
                          <p class="text-sm mt-1">
                            <span class="text-gray-400">Jawaban benar: </span>
                            <span class="text-emerald-400 font-semibold"
                              >{q.options[q.correctIndex]}</span
                            >
                          </p>
                        {/if}
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>

            <button
              on:click={resetMC}
              class="px-8 py-3.5 bg-bedana-gold text-black rounded-xl font-bold hover:shadow-[0_0_20px_rgba(218,165,32,0.6)] transition-all inline-flex items-center gap-2"
            >
              <RotateCcw size={18} /> Coba Lagi
            </button>
          </div>
        {/if}
      </div>
    {/if}

    <!-- ============== -->
    <!-- ESSAY SECTION -->
    <!-- ============== -->
    {#if activeSection === "esai"}
      <div in:fade={{ duration: 250 }}>
        {#if !essaySubmitted}
          <div class="space-y-8">
            {#each essayQuestions as eq, i}
              <div
                class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(218,165,32,0.1)] p-6 sm:p-8"
              >
                <p
                  class="text-xl font-semibold text-white mb-4 leading-relaxed"
                >
                  <span class="text-bedana-gold mr-2">{i + 1}.</span>
                  {eq.question}
                </p>
                <textarea
                  bind:value={essayAnswers[i]}
                  placeholder={eq.placeholder}
                  rows="5"
                  class="w-full rounded-xl border border-white/20 bg-black/50 focus:border-bedana-gold focus:ring-2 focus:ring-bedana-gold/50 p-5 text-white resize-none transition-all outline-none placeholder:text-gray-500 shadow-inner"
                ></textarea>
                <div class="flex justify-end mt-3">
                  <span
                    class="text-xs text-gray-500 tracking-wider uppercase font-semibold"
                    >{essayAnswers[i].length} karakter</span
                  >
                </div>
              </div>
            {/each}
          </div>

          <div class="flex justify-end mt-8">
            <button
              on:click={submitEssay}
              disabled={!allEssayFilled}
              class="px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2
                {allEssayFilled
                ? 'bg-bedana-red text-white hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.6)]'
                : 'bg-white/10 text-gray-500 cursor-not-allowed'}"
            >
              Kirim Jawaban <CheckCircle size={18} />
            </button>
          </div>
        {:else}
          <!-- Essay Submitted Result View -->
          <div class="text-center" in:fade={{ duration: 300 }}>
            {#if isCheckingEssays}
              <div
                class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(218,165,32,0.15)] p-12 py-20 flex flex-col items-center justify-center"
              >
                <div
                  class="w-16 h-16 border-4 border-bedana-gold border-t-transparent rounded-full animate-spin mb-6 drop-shadow-[0_0_10px_rgba(218,165,32,0.8)]"
                ></div>
                <h3 class="text-2xl font-bold text-white mb-2">
                  E-BEDANA Sedang Mengoreksi...
                </h3>
                <p class="text-gray-400 font-light max-w-md">
                  Mohon tunggu sebentar, sistem sedang memetakan ketepatan makna
                  jawaban esai Anda dengan kunci jawaban.
                </p>
              </div>
            {:else}
              <div
                class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(218,165,32,0.15)] p-8 sm:p-12"
              >
                <div
                  class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center border-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]
                    {averageEssayScore >= 70
                    ? 'bg-emerald-500/20 border-emerald-500/50 shadow-emerald-500/30'
                    : averageEssayScore >= 40
                      ? 'bg-amber-500/20 border-amber-500/50 shadow-amber-500/30'
                      : 'bg-red-500/20 border-red-500/50 shadow-red-500/30'}"
                >
                  <Trophy
                    size={36}
                    class={averageEssayScore >= 70
                      ? "text-emerald-400"
                      : averageEssayScore >= 40
                        ? "text-amber-400"
                        : "text-red-400"}
                  />
                </div>

                <h3 class="text-2xl font-bold text-white mb-2 tracking-wide">
                  Hasil Evaluasi E-BEDANA
                </h3>
                <p class="text-gray-400 mb-8 font-light">Kategori Esai</p>

                <div
                  class="text-7xl font-black mb-2 tracking-tighter drop-shadow-lg
                    {averageEssayScore >= 70
                    ? 'text-emerald-400'
                    : averageEssayScore >= 40
                      ? 'text-amber-400'
                      : 'text-red-400'}"
                >
                  {averageEssayScore}
                </div>
                <p
                  class="text-gray-500 text-sm mb-8 uppercase tracking-widest font-semibold"
                >
                  Skor Rata-Rata Anda
                </p>

                <!-- Per-Question Feedback -->
                <div
                  class="text-left space-y-6 mt-10 pt-10 border-t border-white/10"
                >
                  <h4 class="font-bold text-white flex items-center gap-2 mb-6">
                    Detail Penilaian
                    <div class="flex-1 h-px bg-white/10 ml-4"></div>
                  </h4>
                  {#each essayQuestions as eq, i}
                    <div
                      class="bg-black/30 rounded-2xl border border-white/10 overflow-hidden hover:border-bedana-gold/30 transition-colors"
                    >
                      <div
                        class="bg-white/5 p-5 border-b border-white/5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4"
                      >
                        <p
                          class="font-medium text-white text-base leading-relaxed"
                        >
                          <span class="text-bedana-gold font-bold mr-2"
                            >{i + 1}.</span
                          >{eq.question}
                        </p>
                        <div
                          class="px-4 py-2 bg-black border border-white/10 rounded-xl shrink-0 text-center min-w-[5rem] shadow-inner"
                        >
                          <span
                            class="font-bold text-xl {essayScores[i] >= 70
                              ? 'text-emerald-400'
                              : essayScores[i] >= 40
                                ? 'text-amber-400'
                                : 'text-red-400'}">{essayScores[i]}</span
                          ><span class="text-gray-500 text-xs">/100</span>
                        </div>
                      </div>
                      <div class="p-5 space-y-4">
                        <div>
                          <span
                            class="text-xs font-bold uppercase text-gray-500 tracking-wider"
                            >Jawaban Kamu:</span
                          >
                          <p
                            class="text-gray-300 italic font-light leading-relaxed mt-1"
                          >
                            "{essayAnswers[i]}"
                          </p>
                        </div>
                        <div
                          class="bg-gradient-to-r from-bedana-gold/10 to-transparent border-l-2 border-bedana-gold p-4 rounded-r-lg"
                        >
                          <span
                            class="text-xs font-bold uppercase text-bedana-gold tracking-wider flex items-center gap-2 mb-2"
                            >Feedback E-BEDANA</span
                          >
                          <p
                            class="text-gray-200 text-sm font-light leading-relaxed"
                          >
                            {essayFeedback[i]}
                          </p>
                          <div class="mt-3 pt-3 border-t border-white/10">
                            <span
                              class="text-xs text-gray-400 flex items-start gap-1"
                              ><span class="font-bold shrink-0">Kunci:</span>
                              <span class="italic max-w-full"
                                >{eq.reference}</span
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>

              <button
                on:click={resetEssay}
                class="mt-8 px-8 py-3.5 bg-bedana-gold text-black rounded-xl font-bold hover:shadow-[0_0_20px_rgba(218,165,32,0.6)] transition-all inline-flex items-center gap-2"
              >
                <RotateCcw size={18} /> Ulangi Esai
              </button>
            {/if}
          </div>
        {/if}
      </div>
    {/if}

    <!-- ===================== -->
    <!-- GUESS IMAGE SECTION -->
    <!-- ===================== -->
    {#if activeSection === "tebak"}
      <div in:fade={{ duration: 250 }}>
        {#if !imageSubmitted}
          <div class="space-y-8">
            {#each imageQuestions as iq, i}
              <div
                class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(218,165,32,0.1)] overflow-hidden"
              >
                <div
                  class="bg-gradient-to-br from-black/80 to-bedana-red/20 border-b border-white/5 p-8 flex items-center justify-center"
                >
                  <div
                    class="w-48 h-48 rounded-2xl bg-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(218,165,32,0.3)] flex items-center justify-center overflow-hidden border-2 border-bedana-gold p-4"
                  >
                    <img
                      src={iq.image}
                      alt="Tebak gerakan"
                      class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    />
                  </div>
                </div>
                <div class="p-6 sm:p-8">
                  <p class="font-semibold text-white text-lg mb-2">
                    <span class="text-bedana-gold mr-2">{i + 1}.</span>
                    Gerakan apa yang ditunjukkan gambar di atas?
                  </p>
                  <p class="text-sm text-gray-400 mb-5 font-light italic">
                    💡 Petunjuk: {iq.hint}
                  </p>
                  <input
                    type="text"
                    bind:value={imageGuesses[i]}
                    placeholder="Ketik nama gerakan di sini..."
                    class="w-full rounded-xl border border-white/20 bg-black/50 focus:border-bedana-gold focus:ring-2 focus:ring-bedana-gold/50 px-5 py-4 text-white transition-all outline-none placeholder:text-gray-500 font-medium"
                  />
                </div>
              </div>
            {/each}
          </div>

          <div class="flex justify-end mt-8">
            <button
              on:click={submitImageGuess}
              disabled={!allImageFilled}
              class="px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2
                {allImageFilled
                ? 'bg-bedana-red text-white hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.6)]'
                : 'bg-white/10 text-gray-500 cursor-not-allowed'}"
            >
              Kirim Jawaban <CheckCircle size={18} />
            </button>
          </div>
        {:else}
          <!-- Image Results -->
          <div class="text-center" in:fade={{ duration: 300 }}>
            <div
              class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_40px_rgba(218,165,32,0.15)] p-8 sm:p-12 mb-6"
            >
              <div
                class="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center border-2
                {imageScore === imageQuestions.length
                  ? 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : imageScore > 0
                    ? 'bg-amber-500/20 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                    : 'bg-red-500/20 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]'}"
              >
                <Trophy
                  size={42}
                  class={imageScore === imageQuestions.length
                    ? "text-emerald-400"
                    : imageScore > 0
                      ? "text-amber-400"
                      : "text-red-400"}
                />
              </div>
              <h3 class="text-3xl font-bold text-white mb-2 tracking-wide">
                Hasil Tebak Gambar
              </h3>
              <p class="text-gray-300 font-light mb-8 text-lg">
                <span class="text-bedana-gold font-bold">{imageScore}</span>
                dari {imageQuestions.length} jawaban benar
              </p>

              <div class="space-y-6 text-left">
                {#each imageQuestions as iq, i}
                  <div
                    class="flex items-center gap-6 p-5 rounded-2xl border backdrop-blur-sm {imageResults[
                      i
                    ]
                      ? 'border-emerald-500/30 bg-emerald-500/10'
                      : 'border-red-500/30 bg-red-500/10'}"
                  >
                    <div
                      class="w-24 h-24 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden p-2"
                    >
                      <img
                        src={iq.image}
                        alt=""
                        class="w-full h-full object-contain filter brightness-110 drop-shadow-md"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      {#if imageResults[i]}
                        <div
                          class="flex items-center gap-2 mb-2 border-b border-white/5 pb-2"
                        >
                          <CheckCircle size={18} class="text-emerald-400" />
                          <span
                            class="text-emerald-400 font-bold uppercase tracking-wider text-xs"
                            >Benar</span
                          >
                        </div>
                      {:else}
                        <div
                          class="flex items-center gap-2 mb-2 border-b border-white/5 pb-2"
                        >
                          <XCircle size={18} class="text-red-400" />
                          <span
                            class="text-red-400 font-bold uppercase tracking-wider text-xs"
                            >Salah</span
                          >
                        </div>
                      {/if}
                      <p class="text-base text-gray-300 mt-2">
                        Jawabanmu: <span
                          class="text-white font-semibold capitalize bg-black/30 px-3 py-1 rounded-md ml-2 inline-block"
                          >"{imageGuesses[i]}"</span
                        >
                      </p>
                      {#if !imageResults[i]}
                        <p class="text-sm text-gray-400 mt-3 font-light">
                          Jawaban benar: <span
                            class="font-bold text-emerald-400 capitalize"
                            >"{iq.correctAnswer}"</span
                          >
                        </p>
                      {/if}
                    </div>
                  </div>
                {/each}
              </div>
            </div>

            <button
              on:click={resetImageGuess}
              class="px-8 py-3.5 bg-bedana-gold text-black rounded-xl font-bold hover:shadow-[0_0_20px_rgba(218,165,32,0.6)] transition-all inline-flex items-center gap-2"
            >
              <RotateCcw size={18} /> Main Lagi
            </button>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</section>
