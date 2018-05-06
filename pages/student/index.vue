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
     
      <li v-for="st in students" :key="st.id">
         
        {{ st.code }} {{ st.firstName }} {{ st.lastName }}
        <v-btn color="info" @click="editStudent(st.id)">Edit</v-btn>
        <v-btn color="info" @click="deleteStudent(st.id)">Delete</v-btn>
       
 
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
  watch: {
    cls() {
      this.getStudent()
    },
  },
  async created() {
    console.log('created')
    this.getStudent()
  },
  methods: {
    async getStudent() {
      // let res = await this.$http.get('/student?class=' + this.cls)
      let res = await this.$http.get('/student', {params: {class: this.cls}})
      this.students = res.data.student
      //console.log(students)
    },
    editStudent(id) {
      this.$router.push('/student/edit?id=' + id)
    },
    deleteStudent(id) {
      this.$router.push('/student/del?id=' + id)
    },
  }, // methods
}
</script>
