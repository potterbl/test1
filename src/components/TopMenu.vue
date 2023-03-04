<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="search">
        <input type="search" placeholder="Поиск..." class="search__area" />
      </div>
      <div class="date">
        <div class="date__today">
          {{ currentDayOfWeek }} <br />
          {{ currentDate }} {{ currentMonth }} {{ currentYear }}
        </div>
        <div class="date__now">
          {{ currentTime }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "top-menu",
  data() {
    return {
      currentDateTime: new Date().toLocaleString(),
      currentDayOfWeek: "",
      currentDate: "",
      currentMonth: "",
      currentYear: "",
      currentTime: "",
    };
  },
  mounted() {

    setInterval(() => {
      const currentDateObject = new Date();
      const hours = currentDateObject.getHours();
      const minutes = currentDateObject.getMinutes();
      const seconds = currentDateObject.getSeconds();
      this.currentTime = `${hours}:${minutes}:${seconds}`;
    }, 1000);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const currentDayOfWeekIndex = currentDate.getDay();
    this.currentDayOfWeek = daysOfWeek[currentDayOfWeekIndex];
    const currentDateObject = new Date();
    this.currentDate = currentDateObject.getDate();
    this.currentMonth = currentDateObject.toLocaleString("default", {
      month: "long",
    });
    this.currentYear = currentDateObject.getFullYear();
  },
};
</script>

<style scoped>
.navbar {
  background: white;
  width: 100vw;
  height: 100px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  box-shadow: 0 0 10px 0 #ede9e9;
  display: flex;
  justify-content: center;
}

.container {
  width: 80vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.logo {
  width: 15%;
  height: 100%;
}
.logo img {
  mix-blend-mode: darken;
  margin-top: 25%;
  transform: translateY(-50%);
}
.search {
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
}
.search__area {
  padding: 10px;
  width: 65%;
  color: black;
  background-color: #ede9e9;
  border-radius: 1rem;
  border: 1px solid #bdbaba;
}
.search__area::placeholder {
  color: black;
}
.date {
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
