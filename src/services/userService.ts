import axiosClient from "./apiClient";
export interface User {
    id: number;
    name: string;
}
class UserService {
    getAllUser() {
        const controller = new AbortController();
        const request = axiosClient.get<User[]>("users", {
            signal: controller.signal,
        })

        return { request, cancel: () => { controller.abort() } }
    }
    Adduser(user: User) {
        return axiosClient
            .post("users/", user)
    }
    deleteUser(id: number) {
        return axiosClient
            .delete("users/" + id)
    }
    updateUser(user: User) {
        return axiosClient
            .patch("users/" + user.id, user)
    }

}


export default new UserService();
