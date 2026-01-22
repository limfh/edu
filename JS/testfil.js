
const s = document.getElementById('search');
const c = document.getElementById('category');
const cards = document.querySelectorAll('.test-card');
const msg = document.getElementById('noResults');
const searchBtn = document.querySelector('.search-btn');


function filter() {
    let found = false;
    const text = s.value.toLowerCase();
    const cat = c.value;

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const category = card.dataset.category;

        let show = true;

        if (cat !== 'all' && category !== cat) {
            show = false;
        }

        if (text && !title.includes(text)) {
            show = false;
        }

        if (show) {
            card.classList.remove('hidden'); 
            found = true;
        } else {
            card.classList.add('hidden');    
        }

    
    });


    if (msg) {
        if (found) {
            msg.classList.remove('show');
        } else {
            msg.classList.add('show');
        }
    }
}


c.addEventListener('change' , filter)
s.addEventListener('input' , filter)


document.addEventListener('DOMContentLoaded', filter);

