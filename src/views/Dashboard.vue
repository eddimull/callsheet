<template>
  <main>
    <Dialog
      v-model:visible="showCreate"
      header="Header"
    >
      Content
    </Dialog>
    Concerts:{{ concertEvents }}
    <Button @click="openModal">
      Create Concert
    </Button>
    Checkbox: <Checkbox
      v-model="checked"
      :binary="true"
    />
    User: {{ user }}
  </main>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import {doc, setDoc, addDoc} from 'firebase/firestore';

export default {
  data() {
    return {
      showCreate: false,
      checked: false,
    };
  },
  computed: {
    ...mapGetters(['user', 'db', 'concertEvents']),
  },
  async created() {
    // this.$store.dispatch('FETCH_CONCERTS');
    this.fetchConcerts();
    console.log(this.$store.state);
    // this.addConcert();
    // const docRef = await addDoc(collection());
    // await setDoc(doc(this.db, 'cities', 'LA3'), {
    //   name: 'Los Angeles',
    //   state: 'CA',
    //   country: 'USA',
    // });
  },

  methods: {
    ...mapActions(['addConcert', 'fetchConcerts']),
    openModal() {
      this.showCreate = true;
    },
  },
};
</script>

<style>

</style>
