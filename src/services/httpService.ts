import axiosClient from "./apiClient";
export interface User {
  id: number;
  name: string;
}

export interface Entity {
  id: number;
}
class httpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll<T>() {
    const controller = new AbortController();
    const request = axiosClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return {
      request,
      cancel: () => {
        controller.abort();
      },
    };
  }
  create<T extends Entity>(entity: T) {
    return axiosClient.post(this.endpoint, entity);
  }
  delete(id: number) {
    return axiosClient.delete(this.endpoint + "/" + id);
  }
  update<T extends Entity>(entity: T) {
    return axiosClient.patch(this.endpoint + "/" + entity.id, entity);
  }
}
const create = (endpoint: string) => {
  return new httpService(endpoint);
};
export default create;
