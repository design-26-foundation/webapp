const donate = new Vue({
  el: '#donate-app',
  data: {
    banner: {
      image: {
        url: '',
        text: '',
      },
      heading: '',
      text: '',
    },
    aboutBlocks: [
      {
        title: '',
        content: '',
        buttonText: '',
        buttonUrl: '',
        image: {
          url: '',
          text: '',
        }
      }
    ],
  },
});