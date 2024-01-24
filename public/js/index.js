function crete_noise(canvas) {
    let ctx = canvas.getContext('2d');

    function noise() {
        window.addEventListener('resize', updateCanvasSize);
        updateCanvasSize();
        render();
    }

    function getRandom() {
        return Math.random() * 255;
    }

    function render() {
        let imageData = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            const color = getRandom();
            imageData.data[i] = color;
            imageData.data[i + 1] = color;
            imageData.data[i + 2] = color;
            imageData.data[i + 3] = 200;
        }
        ctx.putImageData(imageData, 0, 0);
        requestAnimationFrame(render);
    }

    function updateCanvasSize() {
        ctx.canvas.height = canvas.offsetHeight;
        ctx.canvas.width = canvas.offsetWidth;
    }

    noise();
}
document.querySelectorAll('.noise').forEach((el) => {
    crete_noise(el)
})

