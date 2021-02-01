<template >
  <div class="header__content text">
    <h1>{{title}}</h1>
    <div class="menu__position">
    <header class="header">
      <nav class="header--nav">
        <ul class="header--navbar">
          <li class="header--item">
            <a href="#" class="header--link">
              <transition name="slide-fade">
                <!-- Header Navigation Menu Icons -->
                <button
                  class="header--button"
                  v-if="menuShow"
                  key="on"
                  @click="menuShow = false"
                >
                  <svg viewBox="0 0 24 24" class="header--icon">
                    <title>Close</title>
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    />
                  </svg>
                </button>
                <button
                  class="header--button"
                  v-else
                  key="off"
                  @click="menuShow = true"
                >
                  <svg viewBox="0 0 24 24" class="header--icon">
                    <title>Navigation Menu</title>
                    <path
                      fill="currentColor"
                      d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                    />
                  </svg>
                </button>
              </transition>
            </a>
            <!-- Dropdown Menu -->
            <transition name="dropdown">
              <div
                class="dropdown__menu"
                v-bind:class="{ active: menuShow }"
                v-if="menuShow"
              >
                <ul class="dropdown__menu--nav">
                  <!-- Will be changed into a component later -->
                  <li class="dropdown__menu--item">
                    <a href="#" class="dropdown__menu--link" title="Main Page">
                      <div class="dropdown__menu--svg">
                        <img src="assets/house.svg" />
                      </div>
                      <div @click="go(`/main`)" class="dropdown__menu--text">
                        Main Page
                      </div>
                    </a>
                  </li>

                  <li class="dropdown__menu--item">
                    <a href="#" class="dropdown__menu--link" title="Characters">
                      <div class="dropdown__menu--svg">
                        <img src="assets/actor.svg" />
                      </div>
                      <div
                        @click="go(`/characters`)"
                        class="dropdown__menu--text"
                      >
                        Characters
                      </div>
                    </a>
                  </li>
                  <li class="dropdown__menu--item">
                    <a href="#" class="dropdown__menu--link" title="Locations">
                      <div class="dropdown__menu--svg">
                        <img src="assets/jupiter.svg" />
                      </div>
                      <div
                        @click="go(`/locations`)"
                        class="dropdown__menu--text"
                      >
                        Locations
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </transition>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {
      menuShow: false,
    };
  },
  props:['title'],
  methods: {
    go(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>
:root {
  --font-primary: "Open Sans", sans-serif;
  --color-gray: #dadce0;
}

*,
::after,
::before {
  box-sizing: border-box;
}

body {
  font-size: 1rem;
  -webkit-text-size-adjust: 100%;
  font-family: var(--font-primary);
  overflow: hidden;
}
hr {
  border: 0;
  height: 0;
  margin: 1.5rem 0;
  border-top: 1px solid var(--color-gray);
}

.header__content {
  background: #000;
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
}

.menu__position {
  position: relative;
  top: 1rem;
  right: 1rem;
  z-index: 20;
}

.header__content > h1 {
  top: 1rem;
  left: 1rem;
  margin-bottom: 30px;

}

.header {
      position: absolute;
    z-index: 20;
    top: 3%;
    right: 5%;
}
.header--nav {
  position: relative;
}

.header--navbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header--navbar:first-child {
  list-style: none;
}

.header--item {
  padding: 1rem;
}
.header--icon {
  width: 3rem;
  height: 3rem;
}
.header--button {
  top: 0;
  right: 0;
  position: absolute;
  margin: 0;
  padding: 0;
  color: white;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
}
.header--button:focus {
  outline: 0;
}

.dropdown__menu {
  top: 100%;
  right: 0;
  z-index: 20;
  margin-top: 2rem;
  overflow-y: auto;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 3px 3px;
  background-color: white;
  background-clip: padding-box;
}
.dropdown__menu--link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  padding: 0.8rem 0 0.8rem 2rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  max-width: 300px;
  background-color: rgba(255, 255, 255, 0);
  overflow: hidden;
}
.dropdown__menu--link:hover {
  color: #ffffff;
  background-color: rgb(34, 34, 34);
  -webkit-transition: background-color 500ms linear;
  -ms-transition: background-color 500ms linear;
  transition: background-color 500ms linear;
}

.dropdown__menu--svg > img {
  width: 1.5rem;
  height: 1.5rem;
}

.dropdown__menu--text {
  font-weight: 300;
  margin-left: 1rem;
  margin-right: 1rem;
}
.dropdown__menu--nav {
  list-style: none;
  padding: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.main {
  margin: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.main--subtitle {
  color: #4f5959;
  font-weight: 100;
  margin-bottom: 2rem;
}
.main--link {
  margin-right: 1.5rem;
  display: inline-block;
}
.main--link:last-child {
  margin-right: 0;
}
.main--svg {
  width: 2rem;
  height: 2rem;
  opacity: 0.6;
  color: #94a2b0;
}
.main--svg:hover {
  color: #ffad1f;
}
</style>
