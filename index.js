const app = Vue.createApp({
  data() {
    return {
      rate: 0,
      givenRate: 0,
    }
  },
  methods: {
    setRate(num) {
      this.givenRate = num
    },
    submitRating() {
      this.rate = this.givenRate
    },
  },
})

app.mount("#card")
