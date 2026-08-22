const uploadInput = document.querySelector("#drawingUpload");
const fileList = document.querySelector("#fileList");
const statusTitle = document.querySelector("#statusTitle");
const statusCopy = document.querySelector("#statusCopy");

uploadInput.addEventListener("change", () => {
  const files = Array.from(uploadInput.files || []);
  fileList.textContent = files.length
    ? files.map((file) => file.name).join(", ")
    : "No files selected yet.";
});

if (new URLSearchParams(window.location.search).get("submitted") === "true") {
  statusTitle.textContent = "Quote request received";
  statusCopy.textContent = "Thank you. Your details have been sent to our quote inbox. We will review your request and respond within 24 hours.";
  document.querySelector("#quote").scrollIntoView({ behavior: "smooth", block: "center" });
}
