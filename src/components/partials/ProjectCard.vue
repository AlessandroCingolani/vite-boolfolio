<script>
export default {
  name:'ProjectCard',
  props:{
    name: String,
    description: String,
    type: String,
    tech: Array
  },

}
</script>


<template>
    <div class="my_card">
      <ul>
        <li>
          <h3>{{name}}</h3>
          <p v-html="description"></p>
          <strong>{{ type }}</strong>
          <p v-for="technology in tech" :key="technology.id">{{ technology.name }}</p>
        </li>
      </ul>
    </div>
</template>



<style lang="scss" scoped>

.my_card {
  ul {
    list-style:square
  }
  margin: 15px 0;
 
  border-radius: 5px;
  padding: 10px;
}
  


</style>