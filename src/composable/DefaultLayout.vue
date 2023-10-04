<template>
  <navbar />
  <main>
    <div class="max-w-[1200px] mx-auto">
      <router-view />
    </div>
  </main>
  <BottomLayout/>
</template>

<script setup>
import Navbar from "../composable/Navbar.vue";
import BottomLayout from "./BottomLayout.vue";
</script>