
const panel = document.getElementById('panel')


const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});


pickr.on('change', (...args) => {
    let color = args[0].toRGBA();
    console.log(color);

    
    panel.style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;

   
});
