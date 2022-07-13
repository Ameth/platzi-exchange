<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100"></bounce-loader>
    <assets-table-component v-if="!isLoading" :lista="assets" />
  </div>
</template>

<script>
import api from '@/api'
import AssetsTableComponent from '@/components/AssetsTableComponent'

export default {
  name: 'HomeView',
  components: {
    AssetsTableComponent
  },

  data() {
    return {
      isLoading: false,
      assets: [],
    }
  },

  created() {
    this.isLoading = true
    api.getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => this.isLoading = false)
  },
}
</script>
