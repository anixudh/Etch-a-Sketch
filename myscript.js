const gridbox=document.querySelector(".gridbox");

for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        const grid=document.createElement("div");
        grid.classList.add("grid");
        gridbox.appendChild(grid);
    }
}

const colorGrid=e=>{
    e.target.classList.add("colorGrid");
};

const grids=document.querySelectorAll(".grid");
grids.forEach(grid=>grid.addEventListener('mouseenter',colorGrid));


