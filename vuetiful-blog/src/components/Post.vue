<template>
<div class="post-view">
  <div class="thumbnail"
    v-bind:style="{ 'background-image': `url('${post.image}')`}"
    v-if="post.image"></div>
  <h1 v-text="post.title"></h1>
  <div class="content" v-if="this.post.markdown" v-html="mark(this.post.markdown)"></div>
</div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'post-view',
  components: {

  },
  beforeMount () {
    this.getPost()
  },
  mounted () {

  },
  data () {
    return {
      post: ''
    }
  },
  props: {

  },
  methods: {
    getPost: function () {
      this.$http.get(`http://localhost:3000/post/${this.$route.params.post}`)
      .then((response) => {
        this.post = response.data
      })
      .catch((error) => {
        alert('오류가 발생했습니다 : ', error)
      })
    },
    mark: function (value) {
      return marked(value)
    }
  },
  computed: {
  },
  watch: {

  }
}
</script>

<style scoped>
.post-view {

}
.post-view h1 {
  padding: 10px;
  box-sizing: border-box;
}
.post-view .thumbnail{
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.post-view .content {
  box-sizing: border-box;
  padding: 10px;
  word-break: break-all;
}
</style>
