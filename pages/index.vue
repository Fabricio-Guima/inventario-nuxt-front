<template>
  <div>
    <BaseLoading :isLoading="isLoading"></BaseLoading>
    <AdminTemplate>
      <div slot="body">
        <h1>TEste</h1>
        <div class="row">
          <div class="col-12">
            <div class="card-body">
              <table class="table">
                <thead>
                  <th class="py-0 px-1">#</th>
                  <th class="py-0 px-1">Name</th>
                  <th class="py-0 px-1">actions</th>
                </thead>
                <tbody>
                  <tr v-for="(measure, index) in measures" :key="index">
                    <td class="py-0 px-1">{{ measure.id }}</td>
                    <td class="py-0 px-1">{{ measure.name }}</td>
                    <td class="py-0 px-1">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-info btn-sm py-1 px-2"
                        >
                          <i class="fas fa-pen"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger btn-sm py-1 px-2"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
      title: "Index",
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
