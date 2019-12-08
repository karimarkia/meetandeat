import ReviewService from '../services/ReviewService.js'

export default {
    state: {
        reviews: []
    },
    getters: {
        reviews(state) {
            return state.reviews;
        },

    },
    mutations: {
        setReviews(state, { reviews }) {
            state.reviews = reviews.reverse()
        },
        addReview(state, { review }) {
            state.reviews.unshift(review)
        },
        removeReview(state, { reviewId }) {
            state.reviews = state.reviews.filter(review => review._id !== reviewId)
        },
    },
    actions: {
        async addReview(context, { review }) {
            review = await ReviewService.add(review)
            context.commit({ type: 'addReview', review })
            return review;
        },

        async loadReviews(context, { mealId }) {
            let reviews = await ReviewService.query();
            reviews = await reviews.filter(review => {
                return review.aboutMeal._id === mealId;
            });
            context.commit({ type: 'setReviews', reviews })
        },
        async removeReview(context, { reviewId }) {
            await ReviewService.remove(reviewId);
            context.commit({ type: 'removeReview', reviewId })
        },

    }
}