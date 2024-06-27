import { apiClient } from "./apiClient";

type PublishParams = {
    note: string;
};

export const publishMessage = (params: PublishParams) => {
    return apiClient.post("/publish", params);
};

export const getMessages = () => {
    return apiClient.get("/message");
};