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
      this.isLoading = false;
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
    background-color: #d2c8c8;
    border-radius: 10px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    padding: 20px;
    overflow: auto;
  }

</style>