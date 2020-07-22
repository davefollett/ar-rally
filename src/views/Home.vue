<template>
  <a-scene v-if="scriptsLoaded"
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-text
        value="Gazebo"
        look-at="[gps-camera]"
        scale="120 120 120"
        gps-entity-place="latitude: 42.8262959; longitude: -83.2889924;"
      ></a-text>
      <a-camera gps-camera="maxDistance: 500" rotation-reader > </a-camera>
    </a-scene>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => ({
    scriptsLoaded: false
  }),
  mounted () {
    // document.body.appendChild(this.$el)

    Promise.all([
      this.$loadScript('https://aframe.io/releases/1.0.4/aframe.min.js'),
      this.$loadScript('https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js'),
      this.$loadScript('https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js')
    ]).then(() => {
      console.log('success')
      this.scriptsLoaded = true
    }).catch(() => {
      console.log('error')
      this.scriptsLoaded = false
    })

    // this.$loadScript('https://aframe.io/releases/1.0.4/aframe.min.js')
    //   .then(() => {
    //     console.log('success')
    //   })
    //   .catch(() => {
    //     console.log('error')
    //   })
  }
}
</script>
