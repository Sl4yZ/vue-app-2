<template>
  <div class="starter-page">
    <HomePageWelcome/>
  </div>
</template>
<script>
import HomePageWelcome from "@/pages/components/HomePageWelcome";
export default {
  name: 'starter',
  components: {HomePageWelcome}
};
</script>
<style>
.starter-page {
  min-height: calc(100vh - 95px);
}
</style>
