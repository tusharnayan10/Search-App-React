import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 6AF5M6buPr0195-kKM12RnLL_EvRlHdPsso_UdV6WPU'
      }
});