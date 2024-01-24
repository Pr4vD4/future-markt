function handleMouseEnter(el) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let value = el.textContent
    let intervalSpeed = 10
    let textIndex = 0;

    const animationInterval = setInterval(() => {
        value.split("").map((char, index) => {
            if (index < textIndex) {
                el.textContent = value[index];
            } else {
                console.log(1)
                el.textContent = alphabet[Math.floor(Math.random() * 26)];
            }
        }).join("")

        if (textIndex >= value.length) {
            clearInterval(animationInterval);
        }
        textIndex += 1 / 5;
    }, intervalSpeed);

    // clearInterval(animationInterval);


}