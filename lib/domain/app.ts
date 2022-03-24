import { Server } from '@hapi/hapi'

import { ratesRoute } from './api/routes'

export const init = async () => {
    const server = new Server({
        port: 3000,
        host: '0.0.0.0',
    })
    
    ratesRoute(server)

    await server.start()

    console.log('Server runing on %s', server.info.uri)
}