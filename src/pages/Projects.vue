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
      store,
      isLoading: false,
    }
  },
  methods: {
    getApi(endpoint, type ='projects'){
      this.isLoading = false;
      axios.get(endpoint)
      .then(results => {

          switch(type){
            case 'types':
              store.types = results.data;
           
            break;

            case 'technologies':
              store.techs = results.data;
             
            break;
            default:
              this.isLoading = true;
              store.projects = results.data.data;
              store.paginator.links = results.data.links;
              store.paginator.firstPage = results.data.first_page_url;
              store.paginator.lastPageUrl = results.data.last_page_url;
              store.paginator.lastPage = results.data.last_page;
              store.paginator.currentPage = results.data.current_page;
          }
        })
      .catch(error => {
          console.log(error);
        })
    }
  },
  mounted(){
    this.getApi(`${store.apiUrl}projects`);
    this.getApi(`${store.apiUrl}types`,'types');
    this.getApi(`${store.apiUrl}technologies`,'technologies');
  }
}
</script>

<template>    
  <div class="container">
    <Loader v-if="!isLoading" />
    <div v-else  class="projects-container">
      <ProjectsContainer />
      <Paginator :paginator="store.paginator" @callApi="getApi" />
    </div>
    <aside v-if="isLoading">
      <div class="sm-card">
        <h3>Techs</h3>
        <ul>
          <li
            v-for="tech in store.techs"
            :key="tech.id"
          > <router-link :to="{name: 'projectsTechType', params:{slug: tech.slug, type:'technology'}}">{{ tech.name }}</router-link>  </li>
        </ul>
      </div>

      <div class="sm-card">
        <h3>Types</h3>
        <ul>
          
          <li
            v-for="type in store.types"
            :key="type.id"
          > <router-link :to="{name: 'projectsTechType', params:{slug: type.slug, type:'type'}}">{{ type.name }}</router-link>  </li>

        </ul>

      </div>

    </aside>
  </div>
</template>



<style lang="scss"> 

  .container {
    height: 100%;
    display: flex;
    aside {
      margin-left: 40px;
      width: 20%;
      .sm-card{
        background-color: rgb(210, 200, 200);
        text-align: center;
        border: 1px solid black;
        border-radius: 10px;
        padding: 30px;
        margin-bottom: 20px;
        h3 {
          margin-bottom: 10px;
        }
        li {
          list-style: none;
          margin-bottom: 10px;
          a {
            text-decoration: none;
            color: black;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .projects-container {
      width: 90%;
      height: 90%;
      background-color: #d2c8c8;
      border-radius: 10px;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      padding: 20px;
      overflow: auto;
    }
  }

</style>