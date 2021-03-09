<template>
  <div class="starter-page">
    <div class="section text-center">
      <h3>Mix Assistant</h3>
      <AudioMixer />
    </div>
  </div>
</template>
<script>
import AudioMixer from "@/components/AudioMixer";
export default {
  name: 'mix',
  components: {AudioMixer},
};

</script>
<style>
.starter-page {
  min-height: calc(100vh - 95px);
}
</style>
