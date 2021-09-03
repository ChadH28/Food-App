<template>
  <div>
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">021 596 2579</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">foodie@gmail.com</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Covid-19</a>
          </li>
        </ul>
      </div>
    </nav>
    <nav  id="nav" class="navbar main-nav navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/" aria-current="page">Home</router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link" to="/about" aria-current="page">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login" aria-current="page">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard" aria-current="page">Dashboard</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <nav id="nav" class="ribbon" ><span class="navbar-text">KENSINGTON AND SURROUNDING AREAS NOW OPEN</span></nav>
  </div>
</template>


<style>
#nav {
  text-align: center;
}

.top-ribbon {
  width: 100%;
  background-color: black;
  color: white;
  height: auto;
  padding: 5px;
}

/* .main-nav {
  margin-top: 60px;
  margin-bottom: 44px; 
} */

.ribbon {
  text-align: center;
  height: auto;
  padding: 5px;
  width: 100%;
  background-color: #A8D3CC;
}


#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #A8D3CC;
}

</style>
