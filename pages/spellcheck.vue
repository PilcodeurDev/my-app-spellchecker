<template class="page">
  <div class="container">

    <div>
      <h3
        class="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Check to see if what you have written is Grammarly correct:
      </h3>
    </div>

    <!-- x2 text area && button -->

    <div class="my-5 d-flex justify-content-around">
      <textarea type="text" class="area-text" placeholder="Write/paste any content..." style="color:white" autofocus
        v-model="text"></textarea>
      <div class="button align-self-center">
        <button class="button-text px-4 py-2" @click="checkGrammar">
          {{ btnText }}
        </button>
      </div>
      <div class="area-response">
        <h2 v-if="errors.length > 0" class="pb-4"> You have {{ errors.length }} error<h2 v-if="errors.length > 1">s</h2> :
        </h2>
        <h3 v-else-if="errors.length < 1">0 Error ! 😎👌</h3>
        <ul>
          <div v-for="(error, index) in errors" v-if="errors.length > 0" class="cards">
            <h4>Error N°{{ index + 1 }}:</h4>
            {{ error.message }}
            <h4 class="mt-3 mb-2">Suggestion:</h4>
            <p inline v-for="replacement in error.replacements"> - {{ replacement.value }}</p>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      text: '',
      errors: [],
      btnText: 'Check',
    };
  },
  methods: {
    async checkGrammar() {
      // Grammar check logic here
      // You can use this.text to access the text entered
      // And update this.res with the result
      try {
        this.btnText = 'Checking...';
        const response = await axios.post('/api/check', {
          text: this.text,
        });
        this.errors = response.data.matches;
      } catch (error) {
        console.error(error);
      }
      this.btnText = 'Check';
    },
  },
};
</script>

<style>
.area-text {
  width: 30%;
  height: 30vh;
  padding: 20px 30px;

  border: 1px solid grey;
  border-radius: 21px;
  backdrop-filter: blur(10px);
  background: rgb(85 85 85 / 31%);

  color: white;
  font-weight: 500;
}

.button {
  border: 1px solid grey;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  background: rgb(85 85 85 / 31%);

  color: white;
  font-weight: bold;

}

.button-text {
  letter-spacing: 1px;
}

.area-response {
  padding: 20px 40px;
  width: 40%;

  border: 1px solid grey;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  background: rgb(85 85 85 / 31%);
}

h4 {
  font-style: italic;
}

.cards {
  padding: 20px;
  margin: 15px auto;

  border: 1px solid grey;
  border-radius: 10px;

  background: rgb(89 98 118 / 52%);
}
</style>
