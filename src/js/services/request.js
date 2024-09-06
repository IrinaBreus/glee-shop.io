const getResourse = async () => {
    const res = await fetch('http://localhost:3000/product');

    if (!res.ok) {
        throw new Error (`Could not fetch ${url}, status: ${res.status}`);
    }

    return res.json();
}

export  default getResourse;