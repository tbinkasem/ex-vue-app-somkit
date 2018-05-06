<template>
    <div>
    <!-- <div>
        <h1>Student Show</h1>
        <ul>
            <li v-for="st in students" :key="st.id">
                {{st.id}}, {{st.fname}}, {{st.lname}}, {{st.class}}
            </li>
        </ul>
    </div> -->

<v-select
    :headers="headers"
    :items="clsList"
    v-model="cls"
    label="โปรดเลือกชั้นปี"
    single-line
/>

    <v-data-table
        :headers="headers"
        :items="students"
        class="elevation-1"
    >
        <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.code }}</td>
        <td class="text-xs-left">{{ props.item.fname }}</td>
        <td class="text-xs-left">{{ props.item.lname }}</td>
        <td class="text-xs-left">{{ props.item.class_id }}</td>
       
        <td class="text-xs-left"><v-icon @click="editStudent(props.item.id)" class="green--text" style="cursor: pointer">edit</v-icon></td>
        <td class="text-xs-left"><v-icon @click="delStudent(props.item.id)" class="red--text" style="cursor: pointer">Delete</v-icon></td>
        </template>
    </v-data-table> 
  </div>   
</template>


<script>
export default {
  data() {
      return {
        cls: '1',
        students: [],
        clsList: [
            { value: '1', text: 'ชั้นปีที่ 1'},
            { value: '2', text: 'ชั้นปีที่ 2'},
        ],
        headers: [
            { text: 'Code', align: 'left', sortable: false},
            { text: 'First Name', align: 'left', sortable: false},
            { text: 'Last Name', align: 'left', sortable: false},
            { text: 'Class', align: 'left', sortable: false},
            { text: 'Edit', align: 'left', sortable: false},
            { text: 'Delete', align: 'left', sortable: false},
        ]
      }
  },
  
  // ไว้ มอนิเตอร์ ตัวแปร เช่่น หากตัวแปร cls เปลี่ยนค่า จะเรียก getStudent() 
  watch: {
      cls() {
          this.getStudent()
      }
  },

  // สำหรับเรียกใช้งานครั้งแรก
  async created() {
      console.log("created")
      this.getStudent()
  }, // created

  methods: {
      async getStudent() {
        let res = await this.$http.get('/student', {params: {cls: this.cls}})
        this.students = res.data.student
      },
      editStudent(id) {
          //Link to Edit
          this.$router.push('/student/edit?id=' + id)
      }
  }, //method
}
</script>
