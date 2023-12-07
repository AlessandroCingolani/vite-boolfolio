<script>

import axios from 'axios';
import { store } from '../data/store';
import ProjectsContainer from '../components/ProjectsContainer.vue';
import Loader from '../components/partials/Loader.vue';
import Paginator from '../components/partials/Paginator.vue';

export default {
  name:'App',
  components:{
    ProjectsContainer,
    Loader,
    Paginator
  },
  data(){
    return {
      isLoading: false,
      paginator:{
        links:[],
        firstPage:'',
        lastPageUrl:'',
        lastPage:'',
        currentPage:''
      }
    }
  },
  methods: {
    getApi(endpoint){
      axios.get(endpoint)
      .then(results => {
          this.isLoading = true;
          store.projects = results.data.data;
          this.paginator.links = results.data.links;
          this.paginator.firstPage = results.data.first_page_url;
          this.paginator.lastPageUrl = results.data.last_page_url;
          this.paginator.lastPage = results.data.last_page;
          this.paginator.currentPage = results.data.current_page;
        })
      .catch(error => {
          console.log(error);
        })
    }
  },
  mounted(){
    this.getApi(store.apiUrl + 'projects');
  }
}
</script>

<template>    
  <div class="container">
    <Loader v-if="!isLoading" />
    <div v-else  class="projects-container">
      <ProjectsContainer />
      <Paginator :paginator="paginator" @callApi="getApi" />
    </div>
  </div>
</template>



<style lang="scss"> 

  .projects-container {
    width: 100%;
    height: 100%;
    background-color: aqua;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
    overflow: auto;
  }

</style>