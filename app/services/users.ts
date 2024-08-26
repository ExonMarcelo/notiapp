import apiFactos from "./apiFactos"

export const login = async (loginData: any) => {
    const resp = await apiFactos.post('/users/login', loginData)
    return resp.data;
}