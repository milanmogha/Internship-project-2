document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for restaurants (replace this with actual data)
    const restaurants = [
        {
            name: 'Diner',
            address: 'Janakpuri West',
            specialOffer: '20% off on all orders',
            offerImage: 'img1.jpeg',
            imageHeightSm: 'sm:h-48',
            imageHeightMd: 'md:h-64',
            imageHeightLg: 'lg:h-80',
        },
        {
            name: 'Lunch',
            address: '10 No. Market, Arera Colony, Bhopal.',
            specialOffer: '10% Discount on Food Bills',
            offerImage: 'img2.jpg',
            imageHeightSm: 'sm:h-48',
            imageHeightMd: 'md:h-64',
            imageHeightLg: 'lg:h-80',
        },
        {
            name: 'Breakfast',
            address: 'Tilak Nagar',
            specialOffer: 'Buffet Breakfast',
            offerImage: 'img3.jpg',
            imageHeightSm: 'sm:h-48',
            imageHeightMd: 'md:h-64',
            imageHeightLg: 'lg:h-80',
        },
    ];

    const restaurantFeed = document.getElementById('restaurantFeed');

    // Populate the restaurant feed
    restaurants.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        restaurantFeed.appendChild(card);
    });

    function createRestaurantCard(restaurant) {
        const card = document.createElement('div');
        card.classList.add('bg-white', 'p-6', 'rounded-2xl', 'shadow-md');

        const image = document.createElement('img');
        image.src = restaurant.offerImage;
        image.alt = 'Special Offer';
        image.classList.add('w-full', restaurant.imageHeight, 'object-cover','rounded-lg', 'mb-4');

        const name = document.createElement('h2');
        name.textContent = restaurant.name;
        name.classList.add('text-xl', 'font-semibold', 'mb-2');

        const address = document.createElement('p');
        address.textContent = restaurant.address;
        address.classList.add('text-gray-600', 'mb-2');

        const offer = document.createElement('p');
        offer.textContent = restaurant.specialOffer;
        offer.classList.add('lg:text-xl','xl:text-2xl','text-green-500', 'font-semibold', 'mb-4');

        const bookButton = document.createElement('button');
        bookButton.textContent = 'Book Now';
        bookButton.classList.add('bg-yellow-400', 'text-white', 'py-2', 'px-4', 'rounded-md', 'hover:bg-yellow-800', 'focus:outline-none');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(offer);
        card.appendChild(bookButton);

        return card;
    }
});
