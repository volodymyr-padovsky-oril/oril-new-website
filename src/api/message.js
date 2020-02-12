import apiClient from './';

export const sendGetInTouchMail = ({
                                       email,
                                       name,
                                       message,
                                       ip,
                                       country_name
                                   }) => {
    return apiClient.post(`/mail/send/get-in-touch`, {
        email,
        name,
        message,
        ip,
        country_name
    });
};