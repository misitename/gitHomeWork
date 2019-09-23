<template>
  <div class="advert_list">
    <div class="user-title">
      <span class="bars">
        当前位置：
        <span>广告列表</span>
      </span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>广告列表</span>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="排序"></el-table-column>
        <el-table-column prop="name" label="位置"></el-table-column>
        <el-table-column prop="date" label="图片"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary" icon="el-icon-edit" size="mini" circle
              @click.native.prevent="editRow(scope.$index, tableData)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        style="float:right;margin:20px 0 50px 0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 50, 100]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </el-card>
    <!-- 编辑弹窗 -->
    <el-dialog title="手机端首页轮播图" :visible.sync="dialogFormVisible" width="35%">
      <el-form :model="ruleForm">
        <el-form-item label="图片设置" :label-width="formLabelWidth">
          <el-upload
            style="width:60%"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-exceed="handle"
            :limit="6"
            multiple
            list-type="picture"
          >
            <el-button size="small" type="primary">选择图片</el-button>
            <div slot="tip" class="el-upload__tip">（建议图片尺寸 1:1）图片最大张数为 6。</div>
          </el-upload>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth">
          <el-button type="primary" size="small">保存</el-button>
          <el-button @click="cancel" size="small">返回</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        address: "",
        resource: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      currentPage: 1,
      pagesize: 5,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    // 分页
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    //编辑按钮
    editRow(index, rows) {
      this.dialogFormVisible = true;
      this.ruleForm.date = rows[index].date;
      this.ruleForm.name = rows[index].name;
      this.ruleForm.address = rows[index].address;
    },
    //弹框取消
    cancel() {
      this.dialogFormVisible = false;
      this.ruleForm.name = "";
      this.ruleForm.address = "";
      this.ruleForm.resource = "";
    },
    //上传图片
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
    handle(files, fileList) {
      // console.log(files,fileList);
      alert("图片数量已上限！");
    }
  }
};
</script>
<style scoped>
.advert_list {
  padding: 0 20px;
}
.user-title {
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  margin: 10px 10px;
}
.user-title span {
  display: inline-block;
}
.user-title .bars {
  border-left: 5px solid #409eff;
  padding-left: 15px;
  line-height: 20px;
  font-size: 16px;
}
.user-title .bars span {
  color: #409eff;
}
</style>
