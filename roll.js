function virtualDice() {
    const number = document.getElementById("number").value;
    const result = document.getElementById("result");
    const images = document.getElementById("images");
    const values = [];
    const imagesArr = [];
    const max = 6;

    for (let i = 0; i < number; i++) {
        const value = Math.floor(Math.random() * max) + 1;
        values.push(value);
        imagesArr.push(`<img src="dicepics/${value}.png" alt="Result: ${value}" style="height:80px; margin:5px;">`);
    }

    result.textContent = `Result: ${values.join(', ')}`;
    images.innerHTML = imagesArr.join('');
}
