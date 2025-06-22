<template>
  <div class="min-h-screen bg-gradient-to-b from-[#fdf6f0] to-[#f5ebe0] flex items-center justify-center px-4">
    <div
      class="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 space-y-6 text-center"
      v-if="currentQuestion"
    >
      <!-- 질문 -->
      <h2 class="text-lg font-semibold text-[#5e3c2c]">
        {{ currentQuestion.question }}
      </h2>

      <!-- 선택지 -->
      <div class="flex flex-col gap-4">
        <button
          v-for="(opt, idx) in currentQuestion.options"
          :key="idx"
          @click="selectOption(opt.weight)"
          class="w-full py-3 px-4 rounded-full bg-[#f5d6c6] text-[#5e3c2c] font-medium shadow-md hover:bg-[#f0c9b5] transition"
        >
          {{ opt.text }}
        </button>
      </div>

      <!-- 진행 상태 -->
      <div class="text-xs text-gray-400">
        Q{{ currentIdx + 1 }} / {{ testData.questions.length }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import testData from '../data/test.json'

const router = useRouter()
const currentIdx = ref(0)
const currentQuestion = ref(testData.questions[currentIdx.value])
const score = ref({ T: 0, E: 0 })

function selectOption(weight) {
  Object.entries(weight).forEach(([key, value]) => {
    score.value[key] += value
  })

  currentIdx.value++
  if (currentIdx.value < testData.questions.length) {
    currentQuestion.value = testData.questions[currentIdx.value]
  } else {
    const t = score.value.T
    let resultKey = ''
    if (t >= 15) resultKey = 'T_high'
    else if (t >= 10) resultKey = 'T_mid'
    else if (t >= 5) resultKey = 'E_mid'
    else resultKey = 'E_high'

    router.push({ name: 'ResultPage', query: { result: resultKey } })
  }
}
</script>
