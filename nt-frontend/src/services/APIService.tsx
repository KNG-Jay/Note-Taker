import ApiClient from "./APIClient";


class ApiService {
    getEntries() {
        return ApiClient.get("/entries");

    }

    get(id: number) {
        return ApiClient.get(`/entries/${id}`)

    }

    create(entry: object) {
        return ApiClient.post("/create-note", entry);

    }

    update(id: number, entry: object) {
        return ApiClient.put(`/entries/${id}`, entry)

    }

    delete(id: number) {
        return ApiClient.delete(`/entries/${id}`)

    }
    
}

export default new ApiService();
