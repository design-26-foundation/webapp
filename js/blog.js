function transformData (response) {
  return {
    banner: {
      image: {
        url: response.acf.banner_image.url,
        text: response.acf.banner_image.alt,
      },
      heading: response.acf.banner_header,
      text: response.acf.banner_content,
    },
  }
}

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

axios.get(ENDPOINTS.blog).then(function (res) {
  var data = transformData(res.data);

  blog.banner = data.banner;
});