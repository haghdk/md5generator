import { createHash } from 'crypto'
import { defineEventHandler, readBody, setResponseStatus, send } from 'h3'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const inputString = body.string

    if (!inputString) {
        setResponseStatus(event, 400)
        return send(event, JSON.stringify({ error: 'String input is required' }))
    }
    
    const md5Hash = createHash('md5').update(inputString).digest('hex')
    return send(event, JSON.stringify({ hash: md5Hash }))
})