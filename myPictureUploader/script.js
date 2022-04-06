const inputs = document.querySelectorAll(".controls input");
const fileInput = document.querySelector(".album input");
const image = document.querySelector("img");
const handleUpdate = (e) => {
    const { dataset, name, value } = e.currentTarget;
    const suffix = dataset.sizing || "";
    document.documentElement.style.setProperty(`--${name}`, value + suffix);
};
const uploadImage = (e) => {
    const target = e.target;
    const url = URL.createObjectURL(target.files[0]);
    image.src = url;
    console.log(url);
    image.onload = () => {
        URL.revokeObjectURL(image.src);
    };
};
inputs.forEach(input => {
    input.addEventListener("change", handleUpdate);
    input.addEventListener("mousemove", handleUpdate);
});
fileInput.addEventListener("change", uploadImage);
