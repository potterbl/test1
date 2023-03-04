<template>
  <div class="nav">
    <div class="content">
      <div class="profile__image"></div>
      <div class="menu">
        <ul>
          <router-link
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="`${menuItem.routLink}`"
          >
            <li>
              {{ menuItem.title }}
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-menu",
  data() {
    return {
      menuItems: [
        { title: "ПРИХОД", id: "1", routLink: "/" },
        { title: "ГРУППЫ", id: "2", routLink: "/orders" },
        { title: "ПРОДУКТЫ", id: "3", routLink: "/" },
        { title: "ПОЛЬЗОВАТЕЛИ", id: "4", routLink: "/" },
        { title: "НАСТРОЙКИ", id: "5", routLink: "/" },
      ],
    };
  },
};
</script>

<style scoped>
.nav {
  background: white;
  position: absolute;
  top: 100px;
  left: 0;
  width: 300px;
  height: calc(100vh - 100px);
  box-shadow: 0 5px 10px 0 #ede9e9;
  z-index: 1;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.profile__image {
  width: 200px;
  height: 200px;
  background-color: black;
}
.menu {
  text-align: center;
}
.menu ul {
  list-style-type: none;
  padding: 0;
}
.menu li {
  cursor: pointer;
  margin: 15px 0;
  font-size: 24px;
}
</style>
