<script>

import axios from 'axios';
import { store } from '../data/store'

  export default {
    name: 'ProjectsTechType',
    data() {
      return {
        projects:[],
        type:'',
        title:''
      }
    },
    components:{},
    methods: {
      getApi(slug){
        axios.get(`${store.apiUrl }projects-by-${this.type}/${slug}`)
          .then(res => {
            this.title = res.data.name;
            this.projects = res.data.projects;
          })
      }
    },
    mounted() {
      this.type = this.$route.params.type;
      this.getApi(this.$route.params.slug)
    },
    computed: {}
  }
</script>

<template>
  <div class="list-projects">
    <h1>Projects with {{ type }}: {{ title }}</h1>
    <ul>
      <li
      
        v-for="project in projects"
        :key="project.id"
      >
      <router-link
        :to="{name: 'ProjectDetails', params:{slug: project.slug}}"
      >{{ project.name }}</router-link>

      </li>

    </ul>
  </div>
</template>


<style lang="scss" scoped>

.list-projects {
  min-width: 1200px;
  height: 90%;
  background-color: #d2c8c8;
  border-radius: 10px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 20px;
  overflow: auto;
  h1 {
    margin-bottom: 30px ;
  }
  ul {
    list-style: square;
    margin-left:20px ;
    li {
      font-size: 1.3rem;
      margin-bottom: 30px;
      a{
        color:black;
        text-decoration: none;
           
        &:hover{
          text-decoration:underline;
        }
      }
    }  
  }
}
</style>