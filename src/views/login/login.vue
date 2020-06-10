<template>
  <div class="login">
    <!-- 标题栏 -->
    <div class="topSide">
      <div style="font-size:24px;">通州智慧园林APP</div>
      <div style="font-size:18px;margin-left:10%">病虫害监测管理系统</div>
    </div>

    <!-- 导航栏 -->
    <van-nav-bar title="请登录"></van-nav-bar>

    <!-- 输入框 -->
    <van-cell-group>
      <van-field
        v-model="user.name"
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="user.pass"
        label="密码"
        type="password"
        placeholder="请输入密码"
      />
    </van-cell-group>

    <!-- 登陆按钮 -->
    <div class="btn">
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    onLogin() {
      if (
        (this.user.name == "tzpark" && this.user.pass == "tzpark1234") ||
        (this.user.name == "dreamdeck" && this.user.pass == "dreamdeck1234")
      ) {
        window.sessionStorage.setItem("token", JSON.stringify(this.user));
        this.$router.replace("/home");
      } else if (this.user.name == "" && this.user.pass == "") {
        this.$toast.fail("请输入用户名和密码！");
      } else {
        this.$toast.fail("用户名或密码不正确！");
      }
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 20%;
  margin-left: 10%;
  margin-right: 10%;
}

.van-nav-bar {
  background-color: #fff !important;
}

.topSide {
  text-align: center;
  font-weight: 700;
  margin-bottom: 50px;
}

.btn {
  padding: 20px;
  margin-top: 40px;
}
.van-button {
  border-radius: 15px;
  width: 100%;
}
</style>
