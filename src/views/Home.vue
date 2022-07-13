<template>
  <div>
    <assets-table-component :lista="assets" />
  </div>
</template>

<script>
import api from '@/api'
import AssetsTableComponent from '@/components/AssetsTableComponent'

export default {
  name: 'HomeView',
  components: {
    AssetsTableComponent,
  },

  data() {
    return {
      assets: [],
    }
  },

  created() {
    api.getAssets().then((assets) => (this.assets = assets))
  },
}
</script>
