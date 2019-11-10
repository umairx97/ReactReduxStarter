class StorageManager {

    static setData = (obj) => {
        sessionStorage.setItem("data", JSON.stringify(obj));
    }

    static getData = () => {
        return JSON.parse(sessionStorage.getItem("data"));
    }

    static clearData = () => {
        sessionStorage.clear();
    }
}

export default StorageManager