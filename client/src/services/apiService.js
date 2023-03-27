// import axios from "axios";

// export default (baseURL) => {
//     return axios.create({
//         baseURL,
//         ...commonConfig,
//     });
// };
import axios from "axios";
const token = localStorage.getItem('token');
console.log(token)
// const commonConfig = {
   
// };
// console.log(commonConfig);

export default (baseURL) => {
    // console.log(ba);
    return axios.create({
        baseURL,
        headers: {
            // "Content-type": "application/json",
            // Accept: "application/json",
            authorization: `Bearer ${token}`
        },
    });
};