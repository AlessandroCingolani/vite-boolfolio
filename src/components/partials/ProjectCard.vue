<script>
export default {
  name:'Cards',
  props:{
    name: String,
    description: String
  }
}
</script>


<template>
    <div class="my_card">
      <ul>
        <li>
          <h3>{{name}}</h3>
          <p v-html="description"></p>
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