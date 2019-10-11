import apiClient from './';

export const sendGetInTouchMail = ({
                                       email,
                                       name,
                                       message,
                                   }) => {
    return apiClient.post(`/mail/send/get-in-touch`, {
        email,
        name,
        message,
    });
};