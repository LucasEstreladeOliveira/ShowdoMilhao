<template>
  <div class="menu">
      <v-img src="../../public/menu-background.jpg"></v-img>
      <v-btn to="/game" class="button" height="100" width="300" rounded>
        <div style="color:#FFD700" class="text-h3"> 💰 Play 💰</div>
      </v-btn>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Menu',
}
</script>
<style scoped>
.button {
  position: relative;
  bottom: 50vh;
  left: 26vw;
	-moz-box-shadow:inset 0px 1px 0px 0px #1a61b8;
	-webkit-box-shadow:inset 0px 1px 0px 0px #1a61b8;
	box-shadow:inset 0px 1px 0px 0px #1a61b8;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #1365bd), color-stop(1, #0c3578));
	background:-moz-linear-gradient(top, #1365bd 5%, #0c3578 100%);
	background:-webkit-linear-gradient(top, #1365bd 5%, #0c3578 100%);
	background:-o-linear-gradient(top, #1365bd 5%, #0c3578 100%);
	background:-ms-linear-gradient(top, #1365bd 5%, #0c3578 100%);
	background:linear-gradient(to bottom, #1365bd 5%, #0c3578 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1365bd', endColorstr='#0c3578',GradientType=0);
	background-color:#1365bd;
	-webkit-border-radius:6px;
	-moz-border-radius:6px;
	border-radius:6px;
	border:1px solid #1255b3;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #0a3f73;
}
.button:hover {
	background:linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
	background-color:#1e62d0;
}
</style>