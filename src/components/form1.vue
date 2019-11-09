<!--
 * @Author: honghong
 * @Date: 2019-11-08 23:00:35
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-09 09:08:41
 * @Description: 
 * @email: 3300536651@qq.com
 -->
<template>
  <div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="Note" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-select
          v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
          placeholder="Select a option and change input text above"
          @change="handleSelectChange"
        >
          <a-select-option value="male">male</a-select-option>
          <a-select-option value="female">female</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </div>
</template> 

<script>
export default {
  name: "Form1",
  data() {
    return {
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
