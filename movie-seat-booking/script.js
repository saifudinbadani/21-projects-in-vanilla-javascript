const container = document.querySelector('.container');
const movieSelect = document.getElementById('movie')
const seat = document.querySelectorAll('.row .seat');
const total = document.getElementById('total');
const count = document.getElementById('count');

let ticketPrice = +movieSelect.value;

function updateCountTotal(){
    const seatSelected = document.querySelectorAll('.row .seat.selected')
    count.innerText = seatSelected.length;
    total.innerText = seatSelected.length*ticketPrice;
}

// seat click event

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateCountTotal();
    }
})

//movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +movieSelect.value
    updateCountTotal();
})