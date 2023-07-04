<template>
  <div class="container">

    <div class="flex flex-col items-center relative min-h-screen">
      <h3
        class="text-lightYellow text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Check to see if what you have written is Grammarly correct:
      </h3>
    </div>

    <!-- x2 textarea -->

    <div class="my-3 flex justify-between">
      <textarea type="text" class="border border-primary outline-none text-primary"
        placeholder="Write/paste any content..." autofocus v-model="text"></textarea>
      <div class="flex items-center">
        <button class="m-4 border bg-danger" @click="checkGrammar">
          Check
        </button>
      </div>
      <textarea type="text" class="border border-primary outline-none text-primary" placeholder="See if its correct..."
        readonly :value="res"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Sam are off to garden.',
      res: '',
    };
  },
  methods: {
    checkGrammar() {
      // Logique de vérification de la grammaire ici
      // Vous pouvez utiliser this.text pour accéder au texte saisi
      // et mettre à jour this.res avec le résultat
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques à cette page */
</style>
