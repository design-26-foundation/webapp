var blog = new Vue({
  el: '#blog-app',
  data: {
    banner: {
      image: {
        url: '',
        text: '',
      },
      heading: '',
      text: '',
    },
    blogPosts: []
  },
});