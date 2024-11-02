element('btn-1')
    .addEventListener('click', function(){
        commonEvent('input-1', 'balance-1', 'balance', 'history-list', 'my-modal', 'Donate for Flood at Noakhali, Bangladesh');
});

element('btn-2')
    .addEventListener('click', function(){
        commonEvent('input-2', 'balance-2', 'balance', 'history-list', 'my-modal', 'Donate for Flood Relief in Feni,Bangladesh');
});

element('btn-3')
    .addEventListener('click', function(){
        commonEvent('input-3', 'balance-3', 'balance', 'history-list', 'my-modal', 'Aid for Injured in the Quota Movement');
});

element('btn-4')
    .addEventListener('click', function(){
        commonEvent('input-4', 'balance-4', 'balance', 'history-list', 'my-modal', 'Donate for Child Labor in Bangladesh');
});

element('btn-5')
    .addEventListener('click', function(){
        commonEvent('input-5', 'balance-5', 'balance', 'history-list', 'my-modal', 'Donate for Poor People in Bangladesh');
});

element('btn-6')
    .addEventListener('click', function(){
        commonEvent('input-6', 'balance-6', 'balance', 'history-list', 'my-modal', 'Donate for Helpless People in Palestine');
});

const historyBtn = element('history-btn');
const donationBtn = element('donation-btn');

historyBtn.addEventListener('click', function(){  
    historyBtn.classList.add('bg-primary');
    historyBtn.classList.remove('border-black', 'border-2');
    donationBtn.classList.remove('bg-primary');
    donationBtn.classList.add('border-2', 'border-black');

    element('history-list').classList.remove('hidden');

    element('card').classList.add('hidden');

    element('footer-bg').classList.add('hidden');
});

donationBtn.addEventListener('click', function(){  
    donationBtn.classList.add('bg-primary');
    donationBtn.classList.remove('border-black', 'border-2');
    historyBtn.classList.remove('bg-primary');
    historyBtn.classList.add('border-2', 'border-black');

    element('history-list').classList.add('hidden');

    element('card').classList.remove('hidden');

    element('footer-bg').classList.remove('hidden');
});