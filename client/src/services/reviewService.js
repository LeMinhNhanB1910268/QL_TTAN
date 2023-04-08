import createApiClient from "./apiService";
const api = createApiClient('http://localhost:8000');

const getAllReview = async() => {
    return (await api.get('api/review')).data
}

const getReview = async(review_id) => {
    return (await api.get('api/review/'+review_id)).data
}
const createReviewService = async(data) => {
    console.log('data1:', data)
    return (await api.post('api/review',data))

}

const deleteReviewService = async(review_id) => {
    console.log('id', review_id)
    return (await api.delete('api/review/'+ review_id))
}

const updateReviewService = async(review_id, data) => {
    console.log('id', review_id)
    console.log('date', data)
    return (await api.put('api/review/'+ review_id,data)
    );
}

export {
    getAllReview,
    getReview,
    createReviewService,
    deleteReviewService,
    updateReviewService
}