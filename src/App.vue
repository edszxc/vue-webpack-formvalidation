<template>
  <div id="app">
    <!-- Navigation -->
      <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <h2>Ed Lui Diongco</h2>
                </a>
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <h4>..////..</h4>
                  </button>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                      <li><router-link to="/">Registration Form</router-link></li>
                      <li><router-link to="/about">About</router-link></li>
                  </ul>
              </div>
              <!-- /.navbar-collapse -->
          </div>
          <!-- /container-fluid -->
      </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Comic Sans MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
nav { color: #ffffff; }
nav button { border: 1px solid #ffffff; }
</style>
