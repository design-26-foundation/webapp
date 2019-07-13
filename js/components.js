Vue.component('banner', {
  template: `
    <article>
      <figure class="split-image">
        <img :src="data.image.url" :alt="data.image.text" />
      </figure>
      <div class="cta dark-cta">
        <h2>{{ data.heading }}</h2>
        <p>{{ data.text }}</p>
        <button class="button button-pink">{{ data.buttonText }}</button>
      </div>
    </article>
  `,
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
});