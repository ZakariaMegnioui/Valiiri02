<template>
  <nav class="menu lg:w-80 lg:h-8 w-72 h-6">
    <a class="nav-item" @click="setBackground(0)">
      <i class="icon fa fa-user-circle hover:text-blue-500"></i>
    </a>
    <a class="nav-item" @click="setBackground(1)">
      <i class="icon fa fa-user-circle hover:text-indigo-600"></i>
    </a>
    <a class="nav-item" @click="setBackground(2)">
      <i class="icon fa fa-user-circle hover:text-gray-800"></i>
    </a>
    <a class="nav-item" @click="setBackground(3)">
      <i class="icon fa fa-user-circle hover:text-cyan-600"></i>
    </a>
    <a class="nav-item" @click="setBackground(4)">
      <i class="icon fa fa-user-circle hover:text-neutral-600"></i>
    </a>
  </nav>
</template>

<script>
export default {
  methods: {
    setBackground(i) {
      if (i === 0) {
        this.$store.commit(
          "SET_BACKGROUND",
          "bg-gradient-to-r from-indigo-900 via-sky-900 to-blue-900"
        );
      } else if (i === 1) {
        this.$store.commit(
          "SET_BACKGROUND",
          "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
        );
      } else if (i === 2) {
        this.$store.commit(
          "SET_BACKGROUND",
          "bg-gradient-to-l from-gray-700 via-gray-900 to-black"
        );
      } else if (i === 3) {
        this.$store.commit(
          "SET_BACKGROUND",
          "bg-gradient-to-r from-cyan-900 via-teal-900 to-cyan-900"
        );
      }else {
            this.$store.commit(
          "SET_BACKGROUND",
          "bg-gradient-to-r from-neutral-800 via-neutral-800 to-neutral-800"
        );
      }
    },
  },
};
</script>

<style>
.menu a {
  text-decoration: none;
  /*  text-transform: lowercase; */
  font-size: 1em;
  color: #b6b6b6;
}

.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 0 15px;
  border-radius: 15px;
  z-index: 9999;
  background: #23232e;

  transform: rotate(90deg);
}
.menu .icon {
  width: 15px;
  height: auto;
  fill: currentColor;
  transform: rotate(-90deg);
}
.icon:hover {
  fill: currentColor;
  transition: all ease-in-out 0.2s;
}
</style>