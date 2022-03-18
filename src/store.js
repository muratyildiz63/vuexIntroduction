import { createStore } from "vuex";

const store = createStore({
    state: {
        users: {
            name: "murat",
            lname: "YİLDİZ",
            age: 26,
            password: "123456"
        },

        theme: "dark",
        permission: [1, 2, 3, 4, 5, 6, 7],
        itemList: [
            { id: 1, title: "Masa", type: "Mobilya" },
            { id: 1, title: "Sandalye", type: "Mobilya" },
            { id: 1, title: "telefon", type: "apple" },
            { id: 1, title: "kullaklık", type: "sony" }
        ]
    },
    mutations: {
        NewItems(state, item) {
            state.itemList.push(item)
        }
    },
    actions: {
        NewItems({ commit }, item) {
            setTimeout(() => {
                commit("NewItems", item)
            }, 2000)

        }
    },
    //2. kulanım
    // actions: {
    //     NewItems(context, item) {
    //         setTimeout(() => {
    //             context.commit("NewItems", item)
    //         }, 2000)

    //     }
    // },
    getters: {
        _woodItems: state => state.itemList.filter(i => i.type == "Mobilya"),
        _activeUsers(state) {
            const user = {
                ...state.users
            }
            delete user.password;
            return user
        }
    }
})
export default store;