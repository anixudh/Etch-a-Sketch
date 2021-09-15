const gridbox=document.querySelector(".gridbox");

const createNewGrid=(n)=>{

    if(n>100) n=100;
    let width=480/n + "px";

    for(let i=0;i<n;i++){
        const gridRow=document.createElement("div");
        for(let j=0;j<n;j++){
            const grid=document.createElement("div");
            grid.classList.add("grid");
            grid.style.width=width;
            grid.style.height=width;
            gridRow.appendChild(grid);
        }
        gridRow.classList.add("gridrow");
        gridbox.appendChild(gridRow);
    }
}

const resetGrid=e=>{
    rainbowc=0;
    const gridrows=document.querySelectorAll(".gridrow");
    const newSize=prompt("Enter new grid size (max:100)");
    gridrows.forEach(gridRow=>gridbox.removeChild(gridRow));
    createNewGrid(newSize);
    const grids=document.querySelectorAll(".grid");
    grids.forEach(grid=>grid.addEventListener('mouseenter',colorGrid));
};

const colorGrid=e=>{
    if(rainbowc==1){
        e.target.classList.add("rainbowColor");
        const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor= randomColor;
    }
    e.target.classList.add("colorGrid");
};

const changeRainbow=e=>{
   rainbowc=1;
};

let rainbowc=0;
createNewGrid(16);

const reset=document.querySelector(".reset");
reset.addEventListener('click',resetGrid);

const rainbow=document.querySelector(".rainbow");
rainbow.addEventListener('click',changeRainbow);

const grids=document.querySelectorAll(".grid");
grids.forEach(grid=>grid.addEventListener('mouseenter',colorGrid));


