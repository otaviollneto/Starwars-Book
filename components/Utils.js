export const request = async (baseUrl, data) => {
    let response = null
    try {
        response = await fetch(baseUrl, data)
    } catch (error) {
        response = {
            status: false,
            error
        }
    }
    return response
}