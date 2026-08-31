document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");

  // ตรวจจับการสโครลล์หน้าจอ
  window.addEventListener("scroll", function () {
    // ถ้าสโครลล์ลงมามากกว่า 300px ให้แสดงปุ่ม
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  // เมื่อคลิกปุ่ม ให้เลื่อนกลับขึ้นไปบนสุดแบบนุ่มนวล
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


