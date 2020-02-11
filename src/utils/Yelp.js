import { apiKey } from './secret';

const Yelp = {
    async search(term, location, sortBy) {
        const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        let response;
        try {
            response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            });
        } catch (error) {
            alert(`Error fetching: ${error}`);
            return;
        }
        if (response.ok) {
            try {
                const jsonResponse = await response.json();
                if (Object.keys(jsonResponse).includes('businesses')) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        };
                    });
                }
            } catch (error) {
                alert(`Error getting json: ${error}`);
            }
        }
    }
};

export default Yelp;
