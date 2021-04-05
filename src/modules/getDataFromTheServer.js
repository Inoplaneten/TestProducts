import axios from 'axios';

export const getDataFromTheServer = (url, setBeginLoad, setSuccessLoad, setFailureLoad) => {
    setBeginLoad();
    const requestUrl = url;
    (async() => {
        try {
            const response = await axios.get(requestUrl);
            setTimeout(() => {
                setSuccessLoad(response.data);
            }, 2000);
        } catch(error) {
            setTimeout(() => {
                setFailureLoad();
            }, 2000);
        }
    })();
}