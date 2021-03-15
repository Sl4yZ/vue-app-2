<template>
  <div>
    <div style="text-align: center;">
      <div style="position:relative; display: inline-block; ">
        <vue-audio-mixer
            :config="config"
            size="medium"
            theme="dark"
            :showPan="true"
            :showTotalTime="true"
            @loaded="testt"
        />
        <div v-for="(c, index) in urls" :key="index">
          <input v-model="urls[index]" aria-describedby="addon-right addon-left" placeholder="Regular" class="form-control">
          <button type="button" class="btn btn-primary btn-sm addon-left" @click="removeTrack(index)">Delete</button>
        </div>
        <button type="button" class="btn btn-primary" @click="addNewTrack">ADD NEW </button>
        <button type="button" class="btn btn-primary" @click="updateConfig">RELOAD</button>
        <button type="button" class="btn btn-primary" @click="checkState">CHECK STATE</button>

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
      is_loaded:false,
      newconfig:{},
      urls: ["https://api.soundcloud.com/tracks/841840237/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
        "https://api.soundcloud.com/tracks/841840234/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
        "https://api.soundcloud.com/tracks/841840222/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
          "https://api.soundcloud.com/tracks/841840216/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
          "https://api.soundcloud.com/tracks/841840174/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
          "https://api.soundcloud.com/tracks/841840237/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
      ],
      config: {
        "tracks": [
          {
            "title": "Bass",
            "url": "https://api.soundcloud.com/tracks/841840237/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
            "pan": -30,
            "gain": 1,
            "muted": false,
            "hidden": false
          },
          {
            "title": "Flutes",
            "url": "https://api.soundcloud.com/tracks/841840234/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
            "pan": 81,
            "gain": 0.8,
            "muted": false,
            "hidden": false
          },
          {
            "title": "Perc",
            "url": "https://api.soundcloud.com/tracks/841840222/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
            "pan": -49,
            "gain": 0.4,
            "muted": false,
            "hidden": false
          },
          {
            "title": "Piano",
            "url": "https://api.soundcloud.com/tracks/841840216/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
            "pan": -60,
            "gain": 1.3,
            "muted": false,
            "hidden": false
          },
          {
            "title": "Strings",
            "url": "https://api.soundcloud.com/tracks/841840174/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
            "pan": -49,
            "gain": 0.6,
            "muted": false,
            "hidden": false
          },
          {
            "title": "Bass",
            "url": "https://api.soundcloud.com/tracks/841840237/stream?client_id=ae1dadcc70f054f451de8c6358bcf396",
            "pan": -30,
            "gain": 0.5,
            "muted": false,
            "hidden": false
          }
        ],
        "master": {
          "pan": 0,
          "gain": 1,
          "muted": false
        }
      }
    }
  },
  methods: {
    addNewTrack () {
      this.urls.push("");
    },
    removeTrack(index) {
      this.urls.splice(index, 1);
      console.log(this.urls)
      this.updateConfig();
      console.log(this.is_loaded);
    },
    checkState() {
      console.log(this.is_loaded);
    },
    testt (e) {
      this.is_loaded = e;
      console.log(e);
    },
    updateConfig () {
      this.config.tracks.length = 0;
      for (let i in this.urls) {
        this.config.tracks.push({
          title: i,
          url: this.urls[i],
          pan: 0,
          gain: 1,
          muted: false,
          hidden: false,
        })
      }
      console.log(this.urls)
    }
  },
}
</script>