export default {
  profile: {
    name: "Carlos Mariscal",
    image:
      "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
    onClick() {
      console.log("Hola");
    },
  },
  items: [
    {
      id: 0,
      title: "Home",
      icon: "fa-house-user",
      onClick() {
        console.log("Home");
      },
    },
    {
      id: 1,
      title: "Reports",
      icon: "fa-screwdriver-wrench",
      onClick() {
        console.log("Reports");
      },
    },
    {
      id: 2,
      title: "About",
      icon: "fa-fire",
      onClick() {
        console.log("About");
      },
    },
  ],
};
