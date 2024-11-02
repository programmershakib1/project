let petArray = [];

const loadAllPets = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    const data = await response.json();
    petArray = data?.pets;
    displayAllPets(data?.pets);
}

const displayAllPets = (pets) => {
    const petsContainer = document.getElementById('pets-container');
    pets.forEach((pet) =>{
        const {petId, breed, category, date_of_birth, price, image, gender, pet_details, vaccinated_status, pet_name} = pet;
        const div = document.createElement('div');
        div.classList = 'border rounded-xl p-5';
        div.innerHTML = `
            <div class="h-52">
                <img class="w-full h-full rounded-xl" src="${image?image:'Not available'}" alt="">
            </div>
            <div class="pt-4 pb-2">
                <h3 class="font-black text-xl">${pet_name?pet_name:'Not available'}</h3>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-border-all"></i>
                <p>Breed: ${breed?breed:'Not available'}</p>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-regular fa-calendar"></i>
                <p>Birth: ${date_of_birth?date_of_birth:'Not available'}</p>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-mercury"></i>
                <p>Gender: ${gender?gender:'Not available'}</p>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-dollar-sign"></i>
                <p>Price : ${price?price:'Not available'}$</p>
            </div>
            <div class="py-4">
                <div class="border"></div>
            </div>
            <div class="flex justify-between">
                <button onclick="addImage('${image}')" class="hover:bg-primary hover:text-white text-xl border px-7 py-2 rounded-lg"><i class="fa-regular fa-thumbs-up"></i></button>
                <button id="button-${pet_name}" onclick="adoptFunction('${pet_name}')" class="hover:bg-primary hover:text-white text-primary font-bold text-xl border px-5 py-2 rounded-lg">Adopt</button>
                <button onclick="detailLoad('${petId}')" class="hover:bg-primary text-primary hover:text-white font-bold text-xl border px-5 py-2 rounded-lg">Details</i></button>
            </div>
        `
        petsContainer.append(div);
    });
}

const loadPetCategory = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const data = await response.json();
    displayPetCategory(data?.categories);
}

const displayPetCategory = async (category) => {
    const petCategories = document.getElementById('pet-category');
    category.forEach((btn) => {
        const {category, category_icon, id} = btn;
        const div = document.createElement('div');
        div.innerHTML = `
            <button id="btn-${id}" onclick="categoryFunction('${category}', '${id}')"  class="flex justify-center items-center w-full gap-5 border border-inherit font-extrabold text-3xl rounded-xl px-12 py-4 lg:py-6 md:py-6 category-btn">
                <img src="${category_icon}" alt="">
                <p>${category}</p>
            </button>
        `
        petCategories.append(div);
    });
}

const categoryFunction = (category, id) => {
    loadCategory(category);
    activeButton(id);
}

const activeButton = (id) => {
    removeActive();
    const buttonActive = document.getElementById(`btn-${id}`);
    buttonActive.classList.remove('rounded-xl');
    buttonActive.classList.remove('border-inherit');
    buttonActive.classList.add('active');
    buttonActive.classList.add('rounded-full');
}

const removeActive = () => {
    const buttons = document.getElementsByClassName('category-btn');
    for(let btn of buttons){
        btn.classList.remove('active');
        btn.classList.add('rounded-xl');
    }
}

const loadCategory = async (id) => {
    document.getElementById('pets-container').innerHTML = "";
    document.getElementById('image-container').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`);
    const data = await response.json();
    petArray = data?.data;
    loading(data?.data);
}

const loading = (category) => {
    setTimeout(function () {
        if(category.length === 0){
            noAvailable();
        }
        else{
            displayCategory(category);
        }
    },2000);
}

const displayCategory = (category) => {
    document.getElementById('image-container').classList.remove('hidden');
    document.getElementById('loading').classList.add('hidden');
    const petsContainer = document.getElementById('pets-container');
    category.forEach((pet) =>{
        const {petId, breed, category, date_of_birth, price, image, gender, pet_details, vaccinated_status, pet_name} = pet;
        const div = document.createElement('div');
        div.classList = 'border rounded-xl p-5';
        div.innerHTML = `
            <div class="h-52">
                <img class="w-full h-full rounded-xl" src="${image?image:'Not available'}" alt="">
            </div>
            <div class="pt-4 pb-2">
                <h3 class="font-black text-xl">${pet_name?pet_name:'Not available'}</h3>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-border-all"></i>
                <p>Breed: ${breed?breed:'Not available'}</p>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-regular fa-calendar"></i>
                <p>Birth: ${date_of_birth?date_of_birth:'Not available'}</p>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-mercury"></i>
                <p>Gender: ${gender?gender:'Not available'}</p>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-dollar-sign"></i>
                <p>Price : ${price?price:'Not available'}$</p>
            </div>
            <div class="py-4">
                <div class="border"></div>
            </div>
            <div class="flex justify-between">
                <button onclick="addImage('${image}')" class="hover:bg-primary hover:text-white text-xl border px-7 py-2 rounded-lg"><i class="fa-regular fa-thumbs-up"></i></button>
                <button id="button-${pet_name}" onclick="adoptFunction('${pet_name}')" class="hover:bg-primary hover:text-white text-primary font-bold text-xl border px-5 py-2 rounded-lg">Adopt</button>
                <button onclick="detailLoad('${petId}')" class="hover:bg-primary text-primary hover:text-white font-bold text-xl border px-5 py-2 rounded-lg">Details</i></button>
            </div>
        `
        petsContainer.append(div);
    });
}

const noAvailable = () => {
    document.getElementById('loading').classList.add('hidden');
    const petsContainer = document.getElementById('pets-container');
    petsContainer.innerHTML = `
        <div class="col-span-3">
            <div class="bg-no_data_bg rounded-xl p-10">
                <div class="flex justify-center lg:pt-20 md:pt-16">
                    <img class="" src="images/error.webp" alt="">
                </div>
                <div class="text-center pt-8 lg:pb-20 md:pb-20">
                    <h2 class="text-5xl font-black">No Information Available</h2>
                    <p class="text-xl font-normal pt-7">The data you are looking for is not currently available. Please try again later. We are sorry for the problem. <br> We will solve the problem soon.</p>
                </div>
            </div>
        </div>
    `
}

const addImage = (image) => {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML += `
        <div class="h-52 lg:h-40">
            <img class="w-full h-full rounded-xl" src="${image}" alt="">
        </div>
    `
}

const adoptFunction = (id) => {
    adoptButton();
    count3();
    adopted(id);
}

const adoptButton = () => {
    const adoptModal = document.getElementById('adopt-modal');
    adoptModal.innerHTML = `
        <dialog id="my_modal_5" class="modal sm:modal-middle">
            <div class="modal-box">
                <div>
                    <div class="flex justify-center pt-5">
                        <img src="images/handshake.png" alt="">
                    </div>
                    <div class="flex justify-center">
                        <h2 class="font-black text-5xl">Congrates</h2>
                    </div>
                    <div class="flex justify-center py-5">
                        <p>Adoption Process is Start For your pet</p>
                    </div>
                    <div class="flex justify-center pb-3">
                        <h2 id="count-3" class="font-black text-8xl md:text-9xl lg:text-9xl hidden">3</h2>
                        <h2 id="count-2" class="font-black text-8xl md:text-9xl lg:text-9xl hidden">2</h2>
                        <h2 id="count-1" class="font-black text-8xl md:text-9xl lg:text-9xl hidden">1</h2>
                    </div>
                </div>
            </div>
        </dialog>
    `
    my_modal_5.showModal();
    setTimeout(function () {
        my_modal_5.close();
    },3000);
}

const adopted = (id) => {
    const adoptDisable = document.getElementById(`button-${id}`);
    setTimeout(function () {
        adoptDisable.innerText = 'Adopted';
        adoptDisable.disabled = true;
        adoptDisable.classList.remove('text-primary');
        adoptDisable.classList.remove('hover:bg-primary');
        adoptDisable.classList.remove('hover:text-white');
        adoptDisable.classList.add('bg-disable_bg');
        adoptDisable.classList.add('text-third');
    },3000);
}

const detailLoad = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`);
    const data = await response.json();
    displayDetails(data);
}

const displayDetails = (id) => {
    const modalContainer = document.getElementById('modal-container');
    const date = new Date(id?.petData?.date_of_birth).getFullYear();
    modalContainer.innerHTML = `
        <dialog id="my_modal_4" class="modal">
            <div class="modal-box w-11/12 max-w-5xl lg:p-10">
                <div class="lg:h-[440px] md:h-[440px]">
                    <img class="w-full h-full rounded-xl" src="${id?.petData?.image?id?.petData?.image:'Not available'}" alt="">
                </div>
                <h3 class="font-black text-xl py-5">${id?.petData?.pet_name?id?.petData?.pet_name:'Not available'}</h3>
                <div class="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4">
                    <div>
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-border-all"></i></i>
                            <p>Breed: ${id?.petData?.breed?id?.petData?.breed:'Not available'}</p>
                        </div>
                        <div class="flex items-center gap-3 py-2">
                            <i class="fa-solid fa-mercury"></i>
                            <p>Gender: ${id?.petData?.gender?id?.petData?.gender:'Not available'}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-syringe"></i>
                            <p>Vaccinated status: ${id?.petData?.vaccinated_status?id?.petData?.vaccinated_status:'Not available'}</p>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-3 pb-2">
                            <i class="fa-regular fa-calendar"></i></i>
                            <p>Birth: ${date?date:'Not available'}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <p>Price : ${id?.petData?.price?id?.petData?.price:'Not available'}$</p>
                        </div>
                    </div>
                </div>
                <div class="py-4">
                    <div class="border"></div>
                </div>
                <div>
                    <h3 class="font-black text-xl pt-2 pb-3
                    ">Details Information</h3>
                </div>
                <div>
                    <p>${id?.petData?.pet_details?id?.petData?.pet_details:'Not available'}</p>
                </div>
                <div class="modal-action">
                    <form class="w-full" method="dialog">
                        <button class="btn w-full text-xl text-primary bg-cancel_bg border-cyan-100">Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
    `
    my_modal_4.showModal();
}

document.getElementById('sort-button').addEventListener('click', () => {
    document.getElementById('pets-container').innerHTML = "";
    document.getElementById('image-container').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    setTimeout(function () {
        sortData();
    },2000);
})

const sortData = () => {
    const priceDse = petArray?.sort(function (a, b) { return b.price - a.price });
    if(priceDse.length === 0){
        sortDataNotFound();
    }
    else{
        displaySortData(priceDse);
    }
}

const displaySortData = (data) => {
    document.getElementById('image-container').classList.remove('hidden');
    document.getElementById('loading').classList.add('hidden');
    const petsContainer = document.getElementById('pets-container');
    data.forEach((pet) =>{
        const {petId, breed, category, date_of_birth, price, image, gender, pet_details, vaccinated_status, pet_name} = pet;
        const div = document.createElement('div');
        div.classList = 'border rounded-xl p-5';
        div.innerHTML = `
            <div class="h-52">
                <img class="w-full h-full rounded-xl" src="${image?image:'Not available'}" alt="">
            </div>
            <div class="pt-4 pb-2">
                <h3 class="font-black text-xl">${pet_name?pet_name:'Not available'}</h3>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-border-all"></i>
                <p>Breed: ${breed?breed:'Not available'}</p>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-regular fa-calendar"></i>
                <p>Birth: ${date_of_birth?date_of_birth:'Not available'}</p>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-mercury"></i>
                <p>Gender: ${gender?gender:'Not available'}</p>
            </div>
            <div class="flex items-center gap-3">
                <i class="fa-solid fa-dollar-sign"></i>
                <p>Price : ${price?price:'Not available'}$</p>
            </div>
            <div class="py-4">
                <div class="border"></div>
            </div>
            <div class="flex justify-between">
                <button onclick="addImage('${image}')" class="hover:bg-primary hover:text-white text-xl border px-7 py-2 rounded-lg"><i class="fa-regular fa-thumbs-up"></i></button>
                <button id="button-${pet_name}" onclick="adoptFunction('${pet_name}')" class="hover:bg-primary hover:text-white text-primary font-bold text-xl border px-5 py-2 rounded-lg">Adopt</button>
                <button onclick="detailLoad('${petId}')" class="hover:bg-primary text-primary hover:text-white font-bold text-xl border px-5 py-2 rounded-lg">Details</i></button>
            </div>
        `
        petsContainer.append(div);
    });
}

const sortDataNotFound = () => {
    document.getElementById('image-container').classList.add('hidden');
    document.getElementById('loading').classList.add('hidden');
    const petsContainer = document.getElementById('pets-container');
    petsContainer.innerHTML = `
        <div class="col-span-3">
            <div class="bg-no_data_bg rounded-xl p-10">
                <div class="flex justify-center lg:pt-20 md:pt-16">
                    <img class="" src="images/error.webp" alt="">
                </div>
                <div class="text-center pt-8 lg:pb-20 md:pb-20">
                    <h2 class="text-5xl font-black">Sort Data Is Not Found</h2>
                    <p class="text-xl font-normal pt-7">The data you are looking for is not currently available. Please try again later. We are sorry for the problem. <br> We will solve the problem soon.</p>
                </div>
            </div>
        </div>
    `
}

const count3 = () => {
    const count3 = document.getElementById('count-3');
    count3.classList.remove('hidden');
    setTimeout(function () {
        count3.classList.add('hidden');
        count2();
    },1000);
}
const count2 = () => {
    const count2 = document.getElementById('count-2');
    count2.classList.remove('hidden');
    setTimeout(function () {
        count2.classList.add('hidden');
        count1();
    },1000);
}
const count1 = () => {
    const count1 = document.getElementById('count-1');
    count1.classList.remove('hidden');
    setTimeout(function () {
        count1.classList.add('hidden');
    },1000);
}

loadAllPets();
loadPetCategory();