<template>
  <div>
    <div class=" max-w-screen-xl m-auto">
      <router-view>
        
      </router-view>
    </div>
  </div>
</template>


<script>

import Header from './components/Header/Header.vue'
import Slider from './components/Slider/Slider.vue'
import Search from './components/Search/Search.vue'
import CrossItem from './components/CrossItem/CrossItem.vue'
import Footer from './components/Footer/Footer.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    Header,
    Slider,
    Search,
    CrossItem,
    Footer
  }
}

</script>
<style>
body{
  background-color:#d2eeff;
}
</style>
