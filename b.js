async function tinhDienTich(a, b, h) {
    try {
        const tong = await congPromise(a, b);
        const tich = await nhanPromise(tong, h);
        const kq = await chiaPromise(tich, 2);
        return kq;
    } catch(err) {
        // return Promise.reject(new Error());
        // throw new Error()
    }
}