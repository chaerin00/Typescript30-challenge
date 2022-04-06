const inputs = document.querySelectorAll(".controls input");
const fileInput = document.querySelector(".album input");
const image = document.querySelector("img");

const handleUpdate = (e: MouseEvent) => {
  const { dataset, name, value } = e.currentTarget as HTMLInputElement;
  const suffix = dataset.sizing || "";
  document.documentElement.style.setProperty(`--${name}`, value + suffix);
};

const uploadImage = (e: MouseEvent) => {
  const target = e.target as HTMLInputElement;
  image.src = URL.createObjectURL(target.files[0]);
  image.onload = () => {
    URL.revokeObjectURL(image.src);
  };
};

inputs.forEach(input => {
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
});

fileInput.addEventListener("change", uploadImage);
