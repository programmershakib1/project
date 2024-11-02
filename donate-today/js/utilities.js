function element(id){
    const element = document.getElementById(id);
    return element;
}

function inputValue(id){
    const inputValue = document.getElementById(id).value;
    const newValue = parseFloat(inputValue);
    return newValue;
}

function inputNumber(id){
    const inputNumber  = document.getElementById(id).innerText;
    const newNumber = parseFloat(inputNumber);
    return newNumber;
}

function commonEvent(input, cardBalance, allAvailableBalance, list, modal, text){
        const availableBalance = inputNumber(allAvailableBalance);
        const donatedMoney = inputValue(input);
        const balance = inputNumber(cardBalance);
        
        const check = document.getElementById(input).value;

        if(donatedMoney > 0 && availableBalance > donatedMoney && !isNaN(check)){
            const availableMoney = availableBalance - donatedMoney;
            element(allAvailableBalance).innerText = availableMoney;

            element(cardBalance).innerText = balance + donatedMoney;

            const historyList = document.createElement('div');
            historyList.classList.add('border-2', 'rounded-lg');

            historyList.innerHTML = `
                <p class="text-secondary text-xl font-bold my-5 mx-10">${donatedMoney} Taka is Donated for ${text}</p>
                <p class="text-third mb-5 mx-10">Date: ${new Date()}</p>
            `;
            element(list).appendChild(historyList);

            element(modal).showModal();

            element(input).value = '';
        }
        else{
            alert('Please Type Valid Input')
        }
}