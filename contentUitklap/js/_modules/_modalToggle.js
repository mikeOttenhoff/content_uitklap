export function modalToggle() {
  const content_body = document.querySelector(".content_body");
  const content_body_btn_close = document.querySelector(
    ".content_body_btn_close"
  );
  const content_head = document.querySelector(".content_head");

  const mToggle = (function () {
    content_head.addEventListener("click", function () {
      content_body.classList.add("content_body_modal_open");
    });
    content_body_btn_close.addEventListener("click", function () {
      content_body.classList.remove("content_body_modal_open");
    });
  })();
}
