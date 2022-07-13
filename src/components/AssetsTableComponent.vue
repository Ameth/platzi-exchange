<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="a in lista" :key="a.id" class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100">
        <td>
          <img class="w-6 h-6" :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
            :alt="a.name">
        </td>
        <td>
          <strong>#{{ a.rank }}</strong>
        </td>
        <td>
          <router-link class="hover:underline text-green-600" :to="{ name: 'coin-detail', params: { id: a.id } }">
            {{ a.name }}
          </router-link>
          <small class="ml-1 text-gray-500">{{ a.symbol }}</small>
        </td>
        <td>{{ dollarFilter(a.priceUsd) }}</td>
        <td>{{ dollarFilter(a.marketCapUsd) }}</td>
        <td :class="a.changePercent24Hr.includes('-') ? 'text-red-600' : 'text-green-600'">{{
            percentFilter(a.changePercent24Hr)
        }}</td>
        <td class="hidden sm:block">
          <button-component @ir-a-detalle="goToCoin(a.id)">
            <span>Detalle</span>
          </button-component>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent'
import { dollarFilter, percentFilter } from '@/filters'

export default {
  name: 'AssetsTableComponent',

  components: {
    ButtonComponent
  },

  props: {
    lista: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    goToCoin(id) {
      this.$router.push({ name: 'coin-detail', params: { id } })
    }
  },

  setup() {
    return {
      dollarFilter,
      percentFilter
    }
  }
}
</script>

<style scoped>
.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {

  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
