<script>
export default {
  name:'Paginator',
  props: {
    paginator:Object
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

    <button @click="callApi(paginator.firstPage)" :disabled="paginator.currentPage === 1"><i class="fa-solid fa-backward-step"></i></button>

    <button @click="callApi(link.url)" v-for="link in paginator.links" :key="link.label" v-html="link.label" :disabled="link.active || !link.url"></button>
 
 
    <button @click="callApi(paginator.lastPageUrl)" :disabled="paginator.currentPage === paginator.lastPage"><i class="fa-solid fa-forward-step"></i></button>
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