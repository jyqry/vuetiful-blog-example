<template>
<div class="list">
  <div v-for="(item, index) in list" class="post">
    <div class="thumb"
      v-bind:style="{ 'background-image': `url('${item.image}')` }"
      v-if="item.image">
    </div>
    <router-link :to="`/${item._id}`">{{ item.title }}</router-link>
    <time>{{ item.published_date }}</time>
  </div>
</div>
</template>

<script>
export default {
  name: 'list',
  components: {

  },
  beforeMount () {

  },
  mounted () {
    this.getList()
  },
  data () {
    return {
      list: []
    }
  },
  props: {

  },
  methods: {
    getList: function () {
      this.$http.get(`http://localhost:3000/post`)
      .then((response) => {
        this.list = response.data
      })
      .catch((error) => {
        alert('오류가 발생했습니다 : ', error)
      })
    }
  },
  computed: {

  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
.list {
  padding: 10px;
  .post {
    color: #333333;
    padding: 15px;
    border-bottom: 1px solid #d3d3d3;
    min-height: 50px;
    .thumb {
      width: 50px;
      height: 50px;
      background-color: #ececec;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      float: left;
      margin-right: 10px;
    }
    a {
      display: block;
      margin-bottom: 7px;
      color: inherit;
      text-decoration: none;
      font-size: 18px;
      font-weight: bold;
    }
    time {
      display: block;
      font-size: 12px;
      color: #aeaeae;
    }
  }
}
</style>
