const card = ({ icon, title, description }) => `
        <div class="w-1/3 flex flex-col justify-center p-4">
            <div class="cursor-pointer text-center shadow-2xl border border-gray-300 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                    <svg id="icon" fill="none" stroke="#f56565" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                        ${icon}
                    </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">${title}</h2>
                <p class="leading-relaxed text-base">${description}</p>
                <div class="mt-8">
                    <button class="btn mr-4 border-2 py-2 px-8 hover:bg-red-100 rounded text-lg">No</button>
                    <button
                        class="btn text-white bg-red-500 py-2 px-8 hover:bg-red-700 rounded text-lg">Yes</button>
                </div>
            </div>
        </div>`,

icons = {
    moon: '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>',
    heartBeat: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
    person: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
    scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>'
},

createHabit = () => `
                <section class="text-gray-700 body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div class="bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 class="text-gray-900 text-lg font-medium title-font mb-8 text-center">Cultivate Habit</h2>
                            <div class="relative mb-5">
                                <label for="habit" class="habit__label absolute"> Habit</label>
                                <input
                                    class="title__input bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4"
                                    name="habit" type="text" />
                            </div>
                            <div class="relative mb-5">
                                <label for="description" class="description__label absolute">Description</label>
                                <input
                                    class="bg-white rounded border border-gray-400 focus:outline-none focus:border-red-500 text-base px-4 py-2 mb-4"
                                    name="description" type="text" />
                            </div>
                            <button
                                class="btn text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Start Habit</button>
                        </div>
                    </div>
                </section>
`
export { card, icons, createHabit };