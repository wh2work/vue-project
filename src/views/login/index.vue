<template>
    <div class="login-container">
        <div class="container">
            <div class="row">
                <div class="col-md-4 offset-md-4 col-sm-12 px-md-5">
                    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
                        <div class="title-container">
                            <h3 class="title">登录</h3>
                        </div>

                        <el-form-item prop="username">
                            <el-input
                                v-model="loginForm.username"
                                placeholder="请输入账号"
                                name="username"
                                type="text"
                                auto-complete="on"
                            />
                        </el-form-item>

                        <el-form-item prop="password">
                            <el-input
                                :type="passwordType"
                                v-model="loginForm.password"
                                placeholder="请输入密码"
                                name="password"
                                auto-complete="on"
                                @keyup.enter.native="handleLogin" />
                        </el-form-item>

                        <el-form-item prop="password">
                            <el-button :loading="loading" class="btn-block" type="primary" @click.native.prevent="handleLogin">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
    name: 'Login',
    data () {
        const validateUsername = (rule, value, callback) => {
            if (!isvalidUsername(value)) {
                callback(new Error('Please enter the correct user name'))
            } else {
                callback()
            }
        }
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error('The password can not be less than 6 digits'))
            } else {
                callback()
            }
        }
        return {
            loginForm: {
                username: 'admin',
                password: '1111111'
            },
            loginRules: {
                username: [
                    { required: true, trigger: 'blur', validator: validateUsername }
                ],
                password: [
                    { required: true, trigger: 'blur', validator: validatePassword }
                ]
            },
            passwordType: 'password',
            loading: false,
            showDialog: false
        }
    },
    methods: {
        showPwd () {
            if (this.passwordType === 'password') {
                this.passwordType = ''
            } else {
                this.passwordType = 'password'
            }
        },
        handleLogin () {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true
                    this.$store
                        .dispatch('LoginByUsername', this.loginForm)
                        .then(() => {
                            this.loading = false
                            this.$router.push({ path: '/' })
                        })
                        .catch(() => {
                            this.loading = false
                        })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.login-container {
    height: 100vh;
    background: url("../../assets/system_images/login_bg.jpeg") center;
    background-size: cover;

    .login-form {
        margin-top: 200px;
        background: transparent;
    }
}

</style>
