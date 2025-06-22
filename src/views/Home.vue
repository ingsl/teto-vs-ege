<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white"
  >
    <!-- 배경 이미지 -->
    <div
      class="relative w-full max-w-md h-[600px] bg-cover bg-top rounded-xl shadow-lg"
      style="background-image: url('/start.png');"
    >
      <router-link to="/quiz">
        <img
          src="/button/start-button.png"
          alt="테스트 시작하기"
          class="absolute bottom-6 left-1/2 -translate-x-1/2 w-36 md:w-40 cursor-pointer hover:scale-105 transition"
        />
      </router-link>
    </div>
  </div>
</template>
