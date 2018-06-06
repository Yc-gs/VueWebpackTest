<template>
	<div id="login">
		<!-- 头部 -->
		<div class="header">
			<mt-header title="登录">
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<!-- input -->
		<div class="input">
			<mt-field label="用户名" placeholder="输入用户名" v-model="username"></mt-field>
			<mt-field label="密码" placeholder="输入密码" type="password" v-model="password"></mt-field><!-- 数据双向绑定 -->
		</div>
		<!-- loginButton -->
		<div class="loginButton">
			<mt-button size="large" type="danger" @click.native='login'>登录</mt-button>
		</div>
		<!-- popup -->
		<div class="popup">
			<mt-popup
			  v-model="popupVisible" position="top"
			  popup-transition="popup-slideDown">
			  {{loginMsg}}
			</mt-popup>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import {Indicator} from 'mint-ui';
	import { Popup } from 'mint-ui';
	import Mock from 'mockjs';
	export default {
		data(){
			return {
				loginMsg:'请输入帐号密码',
				username:'',
				password:'',
				popupVisible:''
			}
		},
		methods:{
			login(){
				/*axios.post('http://test.advance.ai/login',{
					username:this.username,
					password:this.password
				}).then((res)=>{
					alert(res.data);
					Indicator.close();
				}).catch((err)=>{
					setTimeout(()=>{
						Indicator.close();
					},2000)
					console.log(err);
				})*/
				/*请求数据超时*/
				/*用mock模拟*/
					Mock.mock('http://test.advance.ai/login',(options)=>{
						console.log(options);
						return Mock.mock({
							"username":"admin",
							"password":123456
						})
					});
					Indicator.open('登录中');
					axios.post('http://test.advance.ai/login',{
						"username":this.username,
						"password":this.password
					}).then(function(res){	
						if(this.username == res.data.username && this.password == res.data.password){
							this.loginMsg = '登陆成功！1111'
							Indicator.close();
							this.popupVisible = true;
						}else{
							this.loginMsg = '帐号密码错误'
							this.popupVisible = true;
							Indicator.close();
						}}.bind(this)).catch((err)=>{
							console.log(err);
						})
			}
		}
	}
</script>
<style>
	.input {
		width: 60%;
		margin: 200px auto;
	}
	.mint-popup {
		width: 100%;
		font-size: 25px;
		height: 50px;
		line-height: 50px;
		background: #353C;
		text-align: center;
		color: #fff;
	}
</style>