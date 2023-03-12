let txtNamesInput = document.querySelector(".txtNamesInput");
let start_btn = document.querySelector("#start_btn");
let winner_number = document.querySelector(".winner_number");
let winners_list = document.querySelector(".winners_list");
let main_menu = document.querySelector(".main_menu");
let second_menu = document.querySelector(".second_menu");
let repeat_btn = document.querySelector("#repeat");
let exit_btn = document.querySelector("#exit");

let numbers = [];
let winner_people = [];


start_btn.addEventListener("click",()=>{
    let names = txtNamesInput.value.split(",");
    console.log(names);


    for(let i=0; i<winner_number.value ; i++){
        let number = Math.floor(Math.random()*names.length);

        if(numbers.indexOf(number) == -1){
            numbers.push(number);
        }
        else{
            i--;
        }
    }


    for(let i=0; i<winner_number.value ; i++){
        winner_people.push(names[numbers[i]]);
    }
    
    for(let i=0; i<winner_people.length ; i++ ){
        let winner = `
            <span class="winner_person"><b>${i+1}-</b>${winner_people[i]}</span>
        `;

        winners_list.insertAdjacentHTML("beforeend",winner);
    }

    numbers.splice(0,numbers.length);
    winner_people.splice(0,winner_people.length);
    
    main_menu.classList.add("hide");
    second_menu.classList.remove("hide");
});

repeat_btn.addEventListener("click",()=>{
    winners_list.innerHTML = "";
    start_btn.click();
})

exit_btn.addEventListener("click",()=>{
    window.location.reload();
})





