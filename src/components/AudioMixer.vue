<template>
  <div>
    <div style="text-align: center;">
      <div style="position:relative; display: inline-block; ">
        <vue-audio-mixer
            :config="newconf"
            size="medium"
            theme="dark"
            :showPan="true"
            :showTotalTime="true"
        />
        <input v-for="(c, index) in config.tracks" v-model="c.url" :key="index" @change="testMethod(index)" aria-describedby="addon-right addon-left" placeholder="Regular" class="form-control">
        <button type="button" class="btn btn-primary" @click="addNewTrack">ADD NEW </button>
        <button type="button" class="btn btn-primary" @click="is_loaded = false">RELOAD</button>

      </div>
    </div>
  </div>
</template>

<script>
import VueAudioMixer from 'vue-audio-mixer';
import 'vue-audio-mixer/dist/vue-audio-mixer.min.css';

export default {
  name: 'AudioMixer',
  components: {
    VueAudioMixer
  },
  data : function(){
    return {
      is_loaded:true,
      newconfig:{},
      config: {
        "tracks":[
          {
            "title": "Bass",
            "url": "https://api.soundcloud.com/tracks/841840237/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
            "pan": -30,
            "gain": 1,
            "muted": false,
            "hidden": false
          },
        ],
        "master":{
          "pan":0,
          "gain":1,
          "muted":false
        }
      }
    }
  },
  methods: {
    addNewTrack () {
      this.config.tracks.push({
        title: "?",
        url: "",
        pan: 0,
        gain: 0.5,
        muted: false,
        hidden: false,
      })
    },
    testMethod (index) {
      this.is_loaded = false;
      this.config.tracks.push({

      });
      this.config.tracks.pop();
      console.log(index);
      console.log(this.config.tracks[index]);
    }
  },
  computed: {
    newconf () {
      console.log(this.config);
      return this.config;
    }
  }
}
</script>