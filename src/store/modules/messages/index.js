import getters from "./getters"

const module = {
    namespaced: true,
    state() {
        return  {
            messages: [
                {
                    id: 1,
                    author: 1,
                    message: 'Hola 👀',
                    timestamp: new Date().toLocaleTimeString(),
                    read: false,
                    channelId: 1
                },
                {
                    id: 2,
                    author: 2,
                    message: 'Hey there 🐮',
                    timestamp: new Date().toLocaleTimeString(),
                    read: false,
                    channelId: 2
                },
                {
                    id: 3,
                    author: 3,
                    message: 'Oooh maaan 👻',
                    timestamp: new Date().toLocaleTimeString(),
                    read: false,
                    channelId: 3
                }
            ]
        }
    },
    getters
}

export default module