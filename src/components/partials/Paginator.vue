<script>
export default {
  name:'Paginator',
  props: {
    links:Array
  },
  methods: {
    callApi(linkUrl){
      this.$emit('callApi',linkUrl)
    }
  },
}
</script>


<template>
  <div class="nav-btn">

    <button @click="callApi(link.url)" v-for="link in links" :key="link.label" v-html="link.label" :disabled="link.active || !link.url"></button>
  </div>
</template>



<style lang="scss" scoped>

  .nav-btn {
    margin-top:15px ;
    text-align: center;
    button {
      padding:5px 8px;
      margin: 3px;
      &:hover{
        cursor: pointer;
      }
    }
  }

</style>