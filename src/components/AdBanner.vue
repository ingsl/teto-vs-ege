<template>
  <div class="w-full mt-6">
    <!-- 구글 애드센스 광고 영역 -->
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-6035066567852720"
      data-ad-slot="8843616507"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
    try {
      window.adsbygoogle.push({})
      console.log('✅ 구글 광고 push 성공')
    } catch (e) {
      console.error('❌ 광고 push 에러:', e)
    }
  } else {
    console.warn('⚠️ 구글 애드센스 로드 안됨')
  }
})
</script>
