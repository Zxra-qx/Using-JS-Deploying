// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const contactPage = document.getElementById("contact-page");

  const submitBtn = document.getElementById("submit-button");

  if (!contactPage || !submitBtn) return;

  submitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    const wrapper = document.createElement("div");
    wrapper.style.textAlign = "center";
    wrapper.style.padding = "28px";

    const message = document.createElement("p");
    message.textContent = "Thank you for your message";
    message.style.fontSize = "24px";
    message.style.marginBottom = "18px";
    wrapper.appendChild(message);

    const back = document.createElement("a");

    const isInPages = window.location.pathname.includes("/pages/") || window.location.pathname.includes("/scripts/");
    back.href = isInPages ? "../index.html" : "index.html";
    back.className = "fake-button blue-hover";
    back.textContent = "Back to Home";
    wrapper.appendChild(back);


    contactPage.innerHTML = "";
    contactPage.appendChild(wrapper);
  });
});
