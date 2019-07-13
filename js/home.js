var home = new Vue({
  el: '#home-app',
  data: {
    banner: {
      left: {
        image: {
          url: '',
          text: '',
        },
        heading: '',
        text: '',
        buttonText: '',
      },
      right: {
        image: {
          url: '',
          text: '',
        },
        heading: '',
        text: '',
        buttonText: '',
      },
    },
    aboutBlocks: []
  },
});