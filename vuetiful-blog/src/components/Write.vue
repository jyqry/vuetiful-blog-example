<template>
<div class="write">
  <div class="header">
    <input v-model="title" placeholder="제목">
    <input v-model="image" placeholder="썸네일 이미지">
  </div>
  <div class="edit">
    <textarea v-model="md"></textarea>
    <div class="preview" v-html="markdownToHTML"></div>
  </div>
  <button class="save" @click.once="save">저장하기</button>
</div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'write',
  data () {
    return {
      title: '',
      md: '',
      image: ''
    }
  },
  methods: {
    save: function () {
      let post = {
        title: this.title,
        markdown: this.md,
        image: this.image
      }
      this.$http.post(`http://localhost:3000/post`, post)
      .then((response) => {
        this.$router.push('/')
      })
      .catch((error) => {
        alert('오류가 발생했습니다 : ', error)
      })
    }
  },
  computed: {
    markdownToHTML: function () {
      return marked(this.md)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.write {
  padding: 10px;
  box-sizing: border-box;
}
.write .header {
}
.write .header input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
}
.write .edit {
  width: 100%;
  height: 70vh;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.write .edit textarea {
  display: block;
  width: 50%;
  height: 100%;
  min-height: 70vh;
  box-sizing: border-box;
  padding: 10px;
  float: left;
}
.write .edit .preview {
  width: 50%;
  height: 70vh;
  overflow: auto;
  float: right;
  box-sizing: border-box;
  padding: 10px;
  word-break: break-all;
}
.write .save {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #029dff;
  color: #ffffff;
  box-sizing: border-box;
  border: none;
  font-size: 16px;
}
</style>
