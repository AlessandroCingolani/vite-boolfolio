<script>

import Header from './components/partials/Header.vue';

export default {
  name:'App',
  components:{
    Header
  },
  
  data(){
    return {

      }
    }
  }
</script>

<template>  
  <Header/>
<div class="main-container">
  <RouterView/>
</div>
</template>



<style lang="scss"> 
  
</style>
