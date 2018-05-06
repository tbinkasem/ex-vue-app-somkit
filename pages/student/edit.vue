<template>
    <div>
        <h1 class="info--text">Student Edits</h1>
        <v-text-field label="First Name" v-model="fname" />
        <v-text-field label="Last Name" v-model="lname" />
        <v-btn @click="save">Save !!</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fname: '',
            lname: '',
        }
    },
    async created() {
        let res = await this.$http.get('/student/id/' + this.$route.query.id)
        this.fname = res.data.student.fname || ''  // การใช้ || จะให้ค่าหรือไม่ซ้ายก็ขวาก็ได้ (จะไม่ใช่เปรียบเทียบได้จริงหรือเท็จ)
        this.lname = res.data.student.lname || ''
    },

    methods: {
        async save() {
            let res = await this.$http.post('/student/save', {
                id: this.$route.query.id,   // this.$route.params.id (หากส่งในรูปแบบพาราม)
                fname: this.fname,
                lname: this.lname,
            })
            if (!res.data.ok) {
                this.$router.push('/student/')
            } else {
                alert('Save Error!!')
            }
        },   
    },
}
</script>

