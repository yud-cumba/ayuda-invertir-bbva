<template>
    <div >
        <p class="font-weight-bold ml-4 mt-5">MIS GASTOS</p>
         <reactive-base :app="app" :credentials="credentials" :type="type">
      <ReactiveComponent componentId="Genre" :defaultQuery="genreDefaultQuery">
        <div slot-scope="{ value, setQuery, aggregations }">
          <DoughnutContainer
            :selectedValue="value"
            :aggregations="aggregations"
            :setQuery="setQuery"
            data-field="Genre.keyword"
          />
        </div>
      </ReactiveComponent>
    </reactive-base>
        </div>
</template>

<script>
import { MultiList } from '@appbaseio/reactivesearch-vue';
import DoughnutContainer from '@/components/DoughnutContainer.vue';

export default {
  name: 'App',
  components: {
    DoughnutContainer,
  },
  methods: {
    genreDefaultQuery: () => ({
      ...MultiList.generateQueryOptions({
        dataField: 'Genre.keyword',
        size: 100,
        sortBy: 'asc',
      }),
    }),
  },
  data() {
    return {
      app: 'sales_record',
      credentials: 'WbYwaDf6N:f81539fe-bd2a-45bc-a70a-64faf1624c42',
      type: 'sales_record',
    };
  },
};
</script>

<style lang="scss" scoped>
.graph{
  width: 50vw
}
</style>
