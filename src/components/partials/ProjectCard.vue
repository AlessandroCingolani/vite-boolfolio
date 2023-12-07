<script>
import ProjectDetails from '@/pages/ProjectDetails.vue';

export default {
  name:'ProjectCard',
  props:{
    name: String,
    description: String,
    type: String,
    tech: Array,
    slug: String,
  },

}
</script>


<template>
    <div class="my_card">
      <ul>
        <li>
          <router-link :to="{name:'ProjectDetails',params:{slug:slug}}">{{name}}</router-link>
          <p v-html="description"></p>
          <strong>{{ type }}</strong>
          <span v-for="technology in tech" :key="technology.id">{{ technology.name }}</span>
        </li>
      </ul>
    </div>
</template>



<style lang="scss" scoped>

.my_card {
  ul {
    list-style:square;
    strong {
      font-size: 1.2rem;
      color: green;
      margin-right: 10px;
    }
    span {
      color: blue;
      margin: 0 5px;
      font-weight: bolder;
    }
  }
  margin: 15px 0;
 
  border-radius: 5px;
  padding: 10px;
}
  


</style>