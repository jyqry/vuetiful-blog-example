<template>
  <div class="app-header">
    <router-link to="/" class="home">블로그</router-link>
    <router-link to="/write" class="write">글쓰기</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.app-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #029dff;
  color: #ffffff;
  z-index: 9990;
  text-align: center;
  font-size: 16px;
  .home {
    float: left;
  }
  .write {
    float: right;
  }
  a {
    color: inherit;
    text-decoration: none;
    margin: 0 20px;
  }
}
</style>
