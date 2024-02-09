import { getUser } from '@/api/index.js';
import { COMMIT_UPDATE_USERNAME,  COMMIT_SET_STATUS } from '../../../common/mutation-types.js';

const module = {
    namespaced: true,
    state() {
        return {
            id: 1,
            username: "",
            details: {
                id: 1,
                name: 'J.Daniel',
                avatar: '/avatars/avatar.jpg'
            }
        }
    },
    getters: {
        firstName: (state, getters, rootState) => (c) => {
            return rootState.profile.username.split("").join(c)
        }
    },
    mutations: {
        [COMMIT_UPDATE_USERNAME](state, username) {
            state.username = username
        }
    },
    actions: {
        async updateUsername({ commit, state, rootState }, username) {
            const user = await getUser(1)
            commit(COMMIT_UPDATE_USERNAME, user.username)
            if (state.username) {
                commit(COMMIT_SET_STATUS, "active", { root: true })
            }
        }
    }
}

export default module