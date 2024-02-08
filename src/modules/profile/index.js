import { getUser } from '../../api/index.js';
import { COMMIT_UPDATE_USERNAME } from '../../common/mutation-types.js';

const module = {
    state() {
        return {
            username: "J.Daniel"
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
        async updateUsername({ commit, state }, username) {
            const user = await getUser(1)
            commit(COMMIT_UPDATE_USERNAME, user.username)
        }
    }
}

export default module