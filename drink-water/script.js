const smallCups = document.querySelectorAll('.cup-small')
const litres = document.getElementById('litres')
const percentage = document.getElementById('percentage')
const remaining = document.getElementById('remaining')

updateBigCup()

//add a 'click' eventlistener  that calls the highlight function to all the small cups
smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
    
})



function highlightCups(index) {
    if (index===7 && smallCups[index].classList.contains("full")) index--;
    else if(smallCups[index].classList.contains('full') && !smallCups[index + 1].classList.contains('full')) {
        index--;
        //console.log('the index is: ' + index)
    }


    smallCups.forEach((cup, index2) => {
        if(index2 <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full');
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length//8

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        //if fullcups == 8 
        remaining.style.visibility = 'hidden'
        remaining.style.height = 0
    } else {
        remaining.style.visibility = 'visible'
        litres.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
