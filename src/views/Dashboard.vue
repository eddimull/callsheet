<template>
  <main>
    <Dialog
      v-model:visible="showCreate"
      header="Header"
    >
      Content
    </Dialog>
    Concerts:
    <Button @click="openModal">
      Create Concert
    </Button>
    Checkbox: <Checkbox
      v-model="checked"
      :binary="true"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      showCreate: false,
      checked: false,
      concerts: [],
    };
  },
  methods: {
    openModal() {
      this.showCreate = true;
    },
  },
};
</script>

<style>

</style>
