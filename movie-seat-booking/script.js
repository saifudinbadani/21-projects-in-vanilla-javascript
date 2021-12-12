const container = document.querySelector('.container');
const movieSelect = document.getElementById('movie')
const seats = document.querySelectorAll('.row .seat');
const total = document.getElementById('total');
const count = document.getElementById('count');

populateUI();

let ticketPrice = +movieSelect.value;
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


function updateCountTotal(){
    const seatSelected = document.querySelectorAll('.row .seat.selected')
    // copying the selected seats in array and giving index with map function
    const seatIndex = [...seatSelected].map((seat) => [...seats].indexOf(seat));

    // storing the index in local storage
    localStorage.setItem('selectedSeatIndex', JSON.stringify(seatIndex));
    const selectedSeatsCount = seatSelected.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice;
}
//populate UI with localstorage data

function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeatIndex'));

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){seat.classList.add('selected')}
        })
    }
    const movieIndex = localStorage.getItem('selectedMovieIndex')
    if(movieIndex !== null){
        movieSelect.selectedIndex = movieIndex;
    }
    

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

    setMovieData(e.target.selectedIndex, e.target.value);
    updateCountTotal();
})


updateCountTotal();