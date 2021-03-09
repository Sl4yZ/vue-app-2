<template>
  <div class="about">
    <h1>salut </h1>
    <vue-swing
        @throwout="throwout"
        @throwin="throwin"
        :config="config"
    >
      <div class="box"><img src="https://st.depositphotos.com/1029286/3949/v/600/depositphotos_39492931-stock-illustration-joker-playing-card.jpg"></div>
    </vue-swing>
  </div>
</template>
<script>
import VueSwing from 'vue-swing'

export default {
  name: 'Test',
  components: {
    VueSwing,
  },
  data() {

    return {
      d: {

      }
    }
  }
}


</script>

