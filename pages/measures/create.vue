<template>
  <div>
    <BaseLoading :isLoading="isLoading"></BaseLoading>
    <AdminTemplate>
      <div slot="body">
        <div class="row justify-content-center">
          <div class="col-sm-8 col-12">
            <div class="card-header">
              <h3>Adicionar</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      title: "Medidas | Criar",
    };
  },
  data: () => ({
    isLoading: true,
    measures: [],
  }),
  methods: {
    async getMeasures() {
      try {
        const response = await this.$axios.$get(`/measures`);
        this.measures = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  async mounted() {
    this.getMeasures();
  },
};
</script>
