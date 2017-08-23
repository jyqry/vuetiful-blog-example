<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
body {
  margin: 0;
}
img {
  max-width: 100%;
}
.content {
  margin-top: 50px;
}

#app {

}
</style>
