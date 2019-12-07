import HttpService from './HttpService'

export default {
    add,
    query,
    remove
}

function query() {
    return HttpService.get('review')
}

function remove(reviewId) {
    return HttpService.delete(`review/${reviewId}`)
}

function add(review) {
    review.date = Date.now()
    return HttpService.post(`review`, review)
}