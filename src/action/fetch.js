export function PostData(type, dt) {
    let url = 'http://localhost:5000/auth/social';
    
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dt)
        })
        .then((res) => {
            // console.log(res.json())
            resolve(dt);
        })
        .catch((err) => {
            // console.log(err);
            resolve(dt);
        })
    });
}