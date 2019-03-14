import createStore from "unistore";
import axios from "axios";

const initialState = {
    listMovies: [],
    isLogin: false,
    username: "",
    password: "",
    email: ""
};
const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";

export const store = createStore(initialState)
export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogout: state => {
        return { isLogin: false };
    },
    postLogin: async state => {
        const data = { username: state.username, password: state.password };
        await axios
            .post("https://api-todofancy.herokuapp.com/api/auth", data)
            .then(response => {
                console.log("iki data e", response.data.user_data);
                if (response.data.user_data.hasOwnProperty("username")) {
                    store.setState({
                        isLogin: true,
                        username: response.data.user_data.username,
                        email: response.data.user_data.email
                    });
                }
            })
    },
    movieLists: async state => {
        const self = this;
        await axios 
        .get(baseUrl)
        .then(function(response){
            store.setState({listMovies: response.data.articles});
            console.log("ceeeekkkk", response.data);
        })
        .catch(function(error){
            console.log(error);
        })

    },
})