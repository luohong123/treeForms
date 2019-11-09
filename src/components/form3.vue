<!--
 * @Author: honghong
 * @Date: 2019-11-08 23:00:35
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-09 09:44:19
 * @Description: 
 * @email: 3300536651@qq.com
 -->
<template>
  <div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="名字" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
    </a-form>
  </div>
</template> 

<script>
export default {
  name: "Form3",
  data() {
    return {
      myName: "红红",
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
    },
    handleSelectChange(value) {
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
