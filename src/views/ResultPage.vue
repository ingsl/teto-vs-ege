<template>
  <div :class="containerBg" class="min-h-screen flex items-center justify-center px-4">
    <div class="w-full max-w-sm bg-white shadow-xl rounded-3xl p-6 text-center space-y-6">
      
      <!-- 결과 이미지 -->
      <img :src="`/${result.image}`" class="w-28 h-28 mx-auto rounded-full shadow" alt="결과 이미지" />
      <h2 class="text-xl font-bold text-[#5e3c2c]">{{ result.title }}</h2>
      <p class="text-sm text-[#5e3c2c] whitespace-pre-line">{{ result.desc }}</p>

      <!-- 버튼 영역 -->
      <div class="flex justify-center gap-3">
        <!-- 카카오톡 공유 버튼 -->
        <button
          @click="shareToKakao"
          class="flex items-center bg-[#d8a47f] hover:bg-[#c98d6d] text-white text-sm font-semibold py-2 px-4 rounded-full transition"
        >
          <img src="/button/kakao-icon.png" alt="카카오톡" class="w-5 h-5 mr-2" />
          공유하기
        </button>

        <!-- 다시 테스트하기 버튼 -->
        <router-link to="/" class="inline-block">
          <button
            class="flex items-center bg-[#d8a47f] hover:bg-[#c98d6d] text-white text-sm font-semibold py-2 px-4 rounded-full transition"
          >
            <img src="/button/restart-icon.png" alt="다시 테스트" class="w-4 h-4 mr-2" />
            다시 하기
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import testData from '../data/test.json'
import { computed, onMounted } from 'vue' // ✅ 반드시 onMounted 포함!

const route = useRoute()
const resultKey = route.query.result
const result = testData.results[resultKey]

const containerBg = computed(() => {
  if (resultKey.startsWith('T')) {
    return 'bg-gradient-to-b from-[#e0f7fa] to-[#cce5ff]'
  } else {
    return 'bg-gradient-to-b from-[#fdf6f0] to-[#f5ebe0]'
  }
})

function shareToKakao() {
  const url = window.location.href
  const text = `${result.title} 유형 테스트 결과!\n\n${result.desc}`

  if (window.Kakao && window.Kakao.isInitialized()) {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `${result.title} 유형 테스트 결과!`,
        description: result.desc,
        imageUrl: `https://tetonam-vs-egen.netlify.app/${result.image}`,
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '나도 테스트하러 가기',
          link: {
            mobileWebUrl: 'https://tetonam-vs-egen.netlify.app',
            webUrl: 'https://tetonam-vs-egen.netlify.app',
          },
        },
      ],
    })
  } else {
    alert('카카오톡 공유 기능이 로드되지 않았습니다.')
  }
}

// ✅ onMounted 등록 시 import 꼭 필요!
onMounted(() => {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init('9d00addb581b032033f8b6cf7a6415b3')
    console.log('Kakao SDK 초기화됨:', window.Kakao.isInitialized())
  }
})
</script>
