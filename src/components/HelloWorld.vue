<!--
 * @Author: honghong
 * @Date: 2019-11-08 23:00:35
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-09 09:51:28
 * @Description: 
 * @email: 3300536651@qq.com
 -->
<template>
  <div class="form-wrap">
    <div class="toolbar-form">
      <a-button type="primary">提交</a-button>
    </div>
    <div class="form-content">
      <a-collapse :bordered="false">
        <template v-slot:expandIcon="props">
          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
        </template>
        <a-collapse-panel header="集团" key="1" :style="customStyle">
          <Form1 />
          <a-collapse defaultActiveKey="2" :bordered="false">
            <template v-slot:expandIcon="props">
              <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
            </template>
            <a-collapse-panel header="集团-单位1" key="2" :style="customStyle">
              <a-collapse defaultActiveKey="3" :bordered="false">
                <template v-slot:expandIcon="props">
                  <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
                </template>
                <Form2 />
                <a-collapse-panel header="单位-分公司" key="3">
                  <a-collapse defaultActiveKey="4" :bordered="false">
                    <template v-slot:expandIcon="props">
                      <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
                    </template>
                    <Form3 />
                    <a-collapse-panel header="公司-小组" key="4">
                      <a-collapse defaultActiveKey="5" :bordered="false">
                        <template v-slot:expandIcon="props">
                          <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
                        </template>
                        <Form1 />
                        <a-collapse-panel header="各成员" key="5">
                          <Form1 />
                        </a-collapse-panel>
                      </a-collapse>
                    </a-collapse-panel>
                  </a-collapse>
                </a-collapse-panel>
              </a-collapse>
            </a-collapse-panel>
            <a-collapse-panel header="集团-单位2" key="100" :style="customStyle">
              <a-collapse defaultActiveKey="100" :bordered="false">
                <template v-slot:expandIcon="props">
                  <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
                </template>
                <Form1 />
              </a-collapse>
            </a-collapse-panel>
          </a-collapse>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template> 

<script>
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
export default {
  name: "HelloWorld",
  components: {
    Form1,
    Form2,
    Form3
  },
  data() {
    return {
      customStyle: "margin-bottom: 12px;border: 0;"
    };
  },
  props: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.form-wrap {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.toolbar-form {
  width: 100%;
  height: 36px;
  line-height: 36px;
}
.form-content {
  flex: 1;
  overflow: auto;
  margin-top: 20px;
}
.form-wrap .ant-collapse > .ant-collapse-item:last-child,
.form-wrap
  .ant-collapse
  > .ant-collapse-item:last-child
  > .ant-collapse-header {
  text-align: left;
}
.ant-collapse-borderless > .ant-collapse-item {
  border-bottom: 0;
}
</style>

<style>
.form-wrap .ant-collapse > .ant-collapse-item > .ant-collapse-header {
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  background: #fafafa;
}
</style>