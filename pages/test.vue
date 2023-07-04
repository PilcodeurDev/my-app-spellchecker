<template class="page">
  <div class="container">

    <div>
      <h3
        class="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Check to see if what you have written is Grammarly correct:
      </h3>
    </div>

    <!-- x2 textarea && button -->

    <div class="my-5 d-flex justify-content-around">
      <textarea type="text" class="area-text" placeholder="Write/paste any content..." autofocus
        v-model="text"></textarea>
      <div class="button-text align-self-center">
        <button class="px-4 py-2" @click="checkGrammar">
          {{ btnText }}
        </button>
      </div>
      <textarea type="text" class="area-text" placeholder="See if its correct..." readonly :value="res"></textarea>
    </div>

    <div>
      <p class="text-center">
        Made by RapidAPI DevRel Team -
        <a href="https://github.com/RapidAPI/DevRel-Examples-External">
          See more examples like this
        </a>
      </p>
    </div>

  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      text: 'Sam are off to garden.',
      res: '',
      btnText: 'Check',
    };
  },
  methods: {
    async checkGrammar() {
      // Logique de vérification de la grammaire ici
      // Vous pouvez utiliser this.text pour accéder au texte saisi
      // et mettre à jour this.res avec le résultat
      try {
        this.btnText = 'Checking...';
        const response = await axios.post('/api/check', {
          text: this.text,
        });
        this.res = response.data.matches[0].message;
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
  padding: 20px;

  border: 1px solid grey;
  border-radius: 21px;
  backdrop-filter: blur(10px);

  color: white;
  font-weight: 500;
}

.button-text {
  border: 1px solid grey;
  border-radius: 20px;
  backdrop-filter: blur(10px);

  color: white;
  font-weight: bold;
}
</style>
