<template>
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <NuxtLink to="/"><li>Home</li></NuxtLink>
        <NuxtLink to="/"><li>About</li></NuxtLink>
        <NuxtLink to="/"><li>Info</li></NuxtLink>
        <NuxtLink to="/"><li>Contact</li></NuxtLink>
        <NuxtLink to="https://stadion.uz"><li>Show me more</li></NuxtLink>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background: #232323;
  color: #cdcdcd;
  font-family: "Avenir Next", "Avenir", sans-serif;
}

#menuToggle {
  display: block;
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 1;
  margin-left: 10px;
  -webkit-user-select: none;
  user-select: none;
  display: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: tomato;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: 0px;
  left: 0px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0, 0, 0, 0),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}
#menuToggle span:first-child {
  transform-origin: 0% 0%;
}
#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}
#menu {
  position: absolute;
  width: 300px;
  height: 100vh;
  margin-top: -85px;
  padding: 50px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(120%, 0%);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  border-radius: 15px 0px 0px 15px;
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul {
  transform: none;
  transform: translate(-60%, 0%);
}
@media screen and (max-width: 970px) {
  #menuToggle {
    display: block;
  }
}
</style>
