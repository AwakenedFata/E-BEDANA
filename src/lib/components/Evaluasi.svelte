<script>
  import { fade } from 'svelte/transition';
  import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy, PenLine, Image } from 'lucide-svelte';

  // --- Quiz Sections State ---
  let activeSection = 'pilgan'; // 'pilgan' | 'esai' | 'tebak'

  const sections = [
    { id: 'pilgan', label: 'Pilihan Ganda', icon: CheckCircle },
    { id: 'esai', label: 'Esai', icon: PenLine },
    { id: 'tebak', label: 'Tebak Gambar', icon: Image }
  ];

  // =====================
  // MULTIPLE CHOICE STATE
  // =====================
  const mcQuestions = [
    {
      id: 1,
      question: 'Tari Bedana merupakan tarian tradisional yang berasal dari daerah...',
      options: ['Jawa Barat', 'Lampung', 'Sumatera Barat', 'Kalimantan Timur'],
      correctIndex: 1
    },
    {
      id: 2,
      question: 'Apa makna utama yang dilambangkan oleh Tari Bedana?',
      options: ['Kesedihan', 'Keberanian', 'Kegembiraan dan Rasa Syukur', 'Kemarahan'],
      correctIndex: 2
    },
    {
      id: 3,
      question: 'Gerakan pembuka dalam Tari Bedana disebut...',
      options: ['Ayun', 'Tahtim', 'Gelek', 'Belitut'],
      correctIndex: 1
    },
    {
      id: 4,
      question: 'Pada awalnya, Tari Bedana ditampilkan khusus untuk acara apa?',
      options: ['Hiburan rakyat', 'Upacara keagamaan dan adat', 'Perlombaan tari', 'Pesta panen'],
      correctIndex: 1
    },
    {
      id: 5,
      question: 'Gerakan "Humbak Moloh" dalam Tari Bedana terinspirasi dari...',
      options: ['Burung terbang', 'Ombak/gelombang', 'Angin bertiup', 'Pohon bergoyang'],
      correctIndex: 1
    }
  ];

  let mcAnswers = new Array(mcQuestions.length).fill(-1);
  let mcSubmitted = false;
  let mcScore = 0;
  let currentQuestion = 0;

  function selectAnswer(questionIndex, optionIndex) {
    if (mcSubmitted) return;
    mcAnswers[questionIndex] = optionIndex;
    mcAnswers = mcAnswers; // trigger reactivity
  }

  function submitMC() {
    mcScore = 0;
    for (let i = 0; i < mcQuestions.length; i++) {
      if (mcAnswers[i] === mcQuestions[i].correctIndex) {
        mcScore++;
      }
    }
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
  $: allMCAnswered = mcAnswers.every(a => a !== -1);
  $: mcPercentage = Math.round((mcScore / mcQuestions.length) * 100);

  // ===========
  // ESSAY STATE
  // ===========
  const essayQuestions = [
    {
      id: 1,
      question: 'Jelaskan pengertian Tari Bedana dan dari mana tarian ini berasal!',
      placeholder: 'Tuliskan jawaban kamu di sini...'
    },
    {
      id: 2,
      question: 'Sebutkan dan jelaskan minimal 3 fungsi Tari Bedana dalam kehidupan masyarakat Lampung!',
      placeholder: 'Tuliskan jawaban kamu di sini...'
    }
  ];

  let essayAnswers = essayQuestions.map(() => '');
  let essaySubmitted = false;

  function submitEssay() {
    essaySubmitted = true;
  }

  function resetEssay() {
    essayAnswers = essayQuestions.map(() => '');
    essaySubmitted = false;
  }

  $: allEssayFilled = essayAnswers.every(a => a.trim().length > 0);

  // =================
  // GUESS IMAGE STATE
  // =================
  const imageQuestions = [
    {
      id: 1,
      image: 'https://placehold.co/400x400/000000/DAA520/png?text=?',
      correctAnswer: 'tahtim',
      hint: 'Gerakan pembuka Tari Bedana'
    },
    {
      id: 2,
      image: 'https://placehold.co/400x400/000000/DAA520/png?text=?',
      correctAnswer: 'ayun',
      hint: 'Gerakan mengayunkan tangan dan kaki berirama'
    }
  ];

  let imageGuesses = imageQuestions.map(() => '');
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
    imageGuesses = imageQuestions.map(() => '');
    imageSubmitted = false;
    imageResults = [];
  }

  $: allImageFilled = imageGuesses.every(g => g.trim().length > 0);
  $: imageScore = imageResults.filter(r => r).length;
</script>

<section id="evaluasi" class="py-20 relative bg-black overflow-hidden">
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

  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-white tracking-wide">Evaluasi Pembelajaran</h2>
      <div class="w-24 h-1 bg-bedana-gold mx-auto mt-4 rounded-full"></div>
      <p class="text-gray-300 mt-4 max-w-lg mx-auto font-light">Uji pemahamanmu tentang Tari Bedana melalui berbagai jenis soal berikut</p>
    </div>

    <!-- Section Tabs -->
    <div class="flex flex-col sm:flex-row bg-white/10 backdrop-blur-md rounded-xl p-1.5 mb-10 gap-1 border border-white/20">
      {#each sections as sec}
        <button
          on:click={() => activeSection = sec.id}
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
    {#if activeSection === 'pilgan'}
      <div in:fade={{ duration: 250 }}>
        {#if !mcSubmitted}
          <!-- Progress Bar -->
          <div class="mb-8 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <div class="flex justify-between items-center mb-3">
              <span class="text-sm text-gray-400">Soal {currentQuestion + 1} dari {mcQuestions.length}</span>
              <span class="text-sm font-medium text-bedana-gold">{mcAnswers.filter(a => a !== -1).length}/{mcQuestions.length} dijawab</span>
            </div>
            <div class="w-full bg-black/50 rounded-full h-2">
              <div 
                class="bg-gradient-to-r from-bedana-gold to-yellow-400 h-2 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(218,165,32,0.8)]"
                style="width: {((currentQuestion + 1) / mcQuestions.length) * 100}%"
              ></div>
            </div>
          </div>

          <!-- Question Dots -->
          <div class="flex justify-center gap-2 mb-8">
            {#each mcQuestions as _, i}
              <button
                on:click={() => currentQuestion = i}
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
          <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(218,165,32,0.1)] p-6 sm:p-8 mb-6">
            <p class="text-xl font-semibold text-white mb-6 leading-relaxed">
              <span class="text-bedana-gold mr-2">{currentQuestion + 1}.</span>
              {mcQuestions[currentQuestion].question}
            </p>

            <div class="space-y-3">
              {#each mcQuestions[currentQuestion].options as option, oi}
                <button
                  on:click={() => selectAnswer(currentQuestion, oi)}
                  class="w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-4
                    {mcAnswers[currentQuestion] === oi 
                      ? 'border-bedana-gold bg-bedana-gold/10 text-white shadow-[0_0_15px_rgba(218,165,32,0.2)] scale-[1.01]' 
                      : 'border-white/10 bg-black/30 text-gray-300 hover:border-bedana-gold/50 hover:bg-black/50 hover:text-white'}"
                >
                  <span class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 transition-colors
                    {mcAnswers[currentQuestion] === oi 
                      ? 'border-bedana-gold bg-bedana-gold text-black' 
                      : 'border-white/30 text-gray-400'}">
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
                {currentQuestion === 0 ? 'text-gray-600 cursor-not-allowed opacity-50' : 'text-gray-300 border-white/20 hover:text-white hover:bg-white/10'}"
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
            <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_40px_rgba(218,165,32,0.15)] p-8 sm:p-12 mb-6">
              <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center border-2 shadow-lg
                {mcPercentage >= 70 ? 'bg-emerald-500/20 border-emerald-500/50 shadow-emerald-500/30' : mcPercentage >= 40 ? 'bg-amber-500/20 border-amber-500/50 shadow-amber-500/30' : 'bg-red-500/20 border-red-500/50 shadow-red-500/30'}">
                <Trophy size={36} class="{mcPercentage >= 70 ? 'text-emerald-400' : mcPercentage >= 40 ? 'text-amber-400' : 'text-red-400'}" />
              </div>

              <h3 class="text-2xl font-bold text-white mb-2 tracking-wide">Hasil Evaluasi</h3>
              <p class="text-gray-400 mb-8 font-light">Pilihan Ganda</p>

              <div class="text-7xl font-black mb-2 tracking-tighter drop-shadow-lg
                {mcPercentage >= 70 ? 'text-emerald-400' : mcPercentage >= 40 ? 'text-amber-400' : 'text-red-400'}">
                {mcPercentage}
              </div>
              <p class="text-gray-500 text-sm mb-8 uppercase tracking-widest font-semibold">Skor Kamu</p>

              <p class="text-white font-medium mb-2 text-lg">
                <span class="text-bedana-gold">{mcScore}</span> dari {mcQuestions.length} jawaban benar
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
              <div class="text-left space-y-4 mt-8 pt-8 border-t border-white/10">
                <h4 class="font-bold text-white mb-4 tracking-wide">Pembahasan:</h4>
                {#each mcQuestions as q, i}
                  <div class="p-5 rounded-xl border backdrop-blur-sm {mcAnswers[i] === q.correctIndex ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-red-500/30 bg-red-500/10'}">
                    <div class="flex items-start gap-4">
                      {#if mcAnswers[i] === q.correctIndex}
                        <CheckCircle size={24} class="text-emerald-400 shrink-0 mt-0.5" />
                      {:else}
                        <XCircle size={24} class="text-red-400 shrink-0 mt-0.5" />
                      {/if}
                      <div>
                        <p class="font-medium text-white text-base leading-relaxed">{q.question}</p>
                        <p class="text-sm mt-3 border-t border-white/5 pt-3">
                          <span class="text-gray-400">Jawabanmu: </span>
                          <span class="{mcAnswers[i] === q.correctIndex ? 'text-emerald-400' : 'text-red-400'} font-semibold">
                            {mcAnswers[i] !== -1 ? q.options[mcAnswers[i]] : 'Tidak dijawab'}
                          </span>
                        </p>
                        {#if mcAnswers[i] !== q.correctIndex}
                          <p class="text-sm mt-1">
                            <span class="text-gray-400">Jawaban benar: </span>
                            <span class="text-emerald-400 font-semibold">{q.options[q.correctIndex]}</span>
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
    {#if activeSection === 'esai'}
      <div in:fade={{ duration: 250 }}>
        {#if !essaySubmitted}
          <div class="space-y-8">
            {#each essayQuestions as eq, i}
              <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(218,165,32,0.1)] p-6 sm:p-8">
                <p class="text-xl font-semibold text-white mb-4 leading-relaxed">
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
                  <span class="text-xs text-gray-500 tracking-wider uppercase font-semibold">{essayAnswers[i].length} karakter</span>
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
          <!-- Essay Submitted -->
          <div class="text-center" in:fade={{ duration: 300 }}>
            <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(218,165,32,0.15)] p-8 sm:p-12">
              <div class="w-24 h-24 mx-auto mb-8 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <CheckCircle size={48} class="text-emerald-400" />
              </div>
              <h3 class="text-3xl font-bold text-white mb-3 tracking-wide">Jawaban Terkirim!</h3>
              <p class="text-gray-400 mb-8 max-w-md mx-auto font-light leading-relaxed">Jawaban esai kamu telah berhasil dikirim. Guru terkait akan memeriksa dan memberikan nilai Anda nantinya.</p>

              <!-- Show submitted answers -->
              <div class="text-left space-y-6 mt-10 pt-10 border-t border-white/10">
                {#each essayQuestions as eq, i}
                  <div>
                    <p class="font-medium text-white text-lg mb-3"><span class="text-bedana-gold">{i + 1}.</span> {eq.question}</p>
                    <div class="bg-black/40 rounded-xl p-5 border border-white/10 text-base text-gray-300 italic font-light leading-relaxed">
                      "{essayAnswers[i]}"
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
          </div>
        {/if}
      </div>
    {/if}

    <!-- ===================== -->
    <!-- GUESS IMAGE SECTION -->
    <!-- ===================== -->
    {#if activeSection === 'tebak'}
      <div in:fade={{ duration: 250 }}>
        {#if !imageSubmitted}
          <div class="space-y-8">
            {#each imageQuestions as iq, i}
              <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_20px_rgba(218,165,32,0.1)] overflow-hidden">
                <div class="bg-gradient-to-br from-black/80 to-bedana-red/20 border-b border-white/5 p-8 flex items-center justify-center">
                  <div class="w-48 h-48 rounded-2xl bg-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(218,165,32,0.3)] flex items-center justify-center overflow-hidden border-2 border-bedana-gold p-4">
                    <img src={iq.image} alt="Tebak gerakan" class="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                  </div>
                </div>
                <div class="p-6 sm:p-8">
                  <p class="font-semibold text-white text-lg mb-2">
                    <span class="text-bedana-gold mr-2">{i + 1}.</span>
                    Gerakan apa yang ditunjukkan gambar di atas?
                  </p>
                  <p class="text-sm text-gray-400 mb-5 font-light italic">💡 Petunjuk: {iq.hint}</p>
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
            <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_0_40px_rgba(218,165,32,0.15)] p-8 sm:p-12 mb-6">
              <div class="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center border-2
                {imageScore === imageQuestions.length ? 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : imageScore > 0 ? 'bg-amber-500/20 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.3)]' : 'bg-red-500/20 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]'}">
                <Trophy size={42} class="{imageScore === imageQuestions.length ? 'text-emerald-400' : imageScore > 0 ? 'text-amber-400' : 'text-red-400'}" />
              </div>
              <h3 class="text-3xl font-bold text-white mb-2 tracking-wide">Hasil Tebak Gambar</h3>
              <p class="text-gray-300 font-light mb-8 text-lg"><span class="text-bedana-gold font-bold">{imageScore}</span> dari {imageQuestions.length} jawaban benar</p>

              <div class="space-y-6 text-left">
                {#each imageQuestions as iq, i}
                  <div class="flex items-center gap-6 p-5 rounded-2xl border backdrop-blur-sm {imageResults[i] ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-red-500/30 bg-red-500/10'}">
                    <div class="w-24 h-24 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden p-2">
                      <img src={iq.image} alt="" class="w-full h-full object-contain filter brightness-110 drop-shadow-md" />
                    </div>
                    <div class="flex-1 min-w-0">
                      {#if imageResults[i]}
                        <div class="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
                          <CheckCircle size={18} class="text-emerald-400" />
                          <span class="text-emerald-400 font-bold uppercase tracking-wider text-xs">Benar</span>
                        </div>
                      {:else}
                        <div class="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
                          <XCircle size={18} class="text-red-400" />
                          <span class="text-red-400 font-bold uppercase tracking-wider text-xs">Salah</span>
                        </div>
                      {/if}
                      <p class="text-base text-gray-300 mt-2">
                        Jawabanmu: <span class="text-white font-semibold capitalize bg-black/30 px-3 py-1 rounded-md ml-2 inline-block">"{imageGuesses[i]}"</span>
                      </p>
                      {#if !imageResults[i]}
                        <p class="text-sm text-gray-400 mt-3 font-light">
                          Jawaban benar: <span class="font-bold text-emerald-400 capitalize">"{iq.correctAnswer}"</span>
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
