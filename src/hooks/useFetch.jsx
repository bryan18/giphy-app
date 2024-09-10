export default function useFetch() {
    const get = async (url) => {
        return await fetch(url);
    }

    return { get };
};
