const sections = document.querySelectorAll("section");
const bubble = document.querySelector("nav ul .bubble");
const gradients =[
    "linear-gradient(to right top,#2980b9, #2c3e50)",
    "linear-gradient(to right top,#fd746c, #ff9068)",
    "linear-gradient(to right top,#B24592, #F15F79)"
];


const options={
    threshold:.65
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry =>{
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect(); DOMRect //{x: 650, y: 16, width: 64.03125, height: 27, top: 16, …}
        const directions={
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
            bubble.style.setProperty("height", `${directions.height}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("background", `${gradients[gradientIndex]}`);


        }
    })
}

sections.forEach(section =>{
    observer.observe(section);
});