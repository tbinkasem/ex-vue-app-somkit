<template>
  <div>
    <h1>Student Lists</h1>
    <v-select
      :items="clsList"
      v-model="cls"
      label="Select"
      single-line
    />
    <select v-model="cls">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <ul>
      <li v-for="st in filteredStudent" :key="st.id">
        {{ st.code }} {{ st.first_name }} {{ st.last_name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cls: '1',
      students: [],
      clsList: [
        { value: '1', text: 'ชั้นปีที่ 1' },
        { value: '2', text: 'ชั้นปีที่ 2' },
        { value: '3', text: 'ชั้นปีที่ 3' },
      ],
    }
  },
  computed: {
    filteredStudent() {
      return this.students.filter(x => x.class + '' === this.cls)
    },
  },
  async created() {
    console.log('created')
    this.getStudent()
  },
  methods: {
    async getStudent() {
      // let res = await this.$http.get('/student?class=' + this.cls)
      let res = await this.$http.get('/student')
      this.students = res.data.student
    },
  }, // methods
}
</script>
