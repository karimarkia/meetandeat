<template>
  <nav>
    <div class="row">
      <img src="@/img/logo-white.png" alt="Omnifood logo" class="logo" />
      <img src="@/img/logo.png" alt="Omnifood logo" class="logo-black" />
      <ul class="main-nav">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/add">Become a host</router-link>
        </li>
        <li>
          <router-link to="/">logIn</router-link>
        </li>
        <li>
          <router-link to="/">signup</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.row {
  display: flex;
  justify-content: space-around;
}
.logo {
  height: 100px;
  width: auto;
  float: left;
  margin-top: 20px;
}

.logo-black {
  display: none;
  height: 50px;
  width: auto;
  float: left;
  margin: 5px 0;
}

/* Main navi */
.main-nav {
  float: right;
  list-style: none;
  margin-top: 55px;
  font-family: "Lato", "Arial", sans-serif;
  font-weight: 300;
}

.main-nav li {
  display: inline-block;
  margin-left: 40px;
}

.main-nav li a:link,
.main-nav li a:visited {
  padding: 8px 0;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 90%;
  border-bottom: 2px solid transparent;
  -webkit-transition: border-bottom 0.2s;
  transition: border-bottom 0.2s;
}

.main-nav li a:hover,
.main-nav li a:active {
  border-bottom: 2px solid #e67e22;
}
</style>