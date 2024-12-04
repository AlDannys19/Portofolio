const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () =>{
  if (window.scrollY > 50){
    navbar.classList.add('scrolled');
  }else{
    navbar.classList.remove('scrolled');
  }
})

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");
  const navItems = document.querySelectorAll("nav a"); // Pilih semua link di dalam navbar

  // Toggle navbar saat burger diklik
  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });

  // Tutup navbar saat item menu diklik
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLists.classList.remove("nav-active"); // Hapus class untuk menutup navbar
      burger.classList.remove("toggle-burger"); // Hapus animasi burger
    });
  });
};

navSlide();

window.onbeforeunload =() => {
  for (const form of document.getElementsByTagName("form")){
    form.reset();
  }
}



