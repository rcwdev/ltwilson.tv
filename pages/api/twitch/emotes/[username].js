import { ClientCredentialsAuthProvider } from '@twurple/auth'
import { ApiClient } from '@twurple/api'

const authProvider = new ClientCredentialsAuthProvider(process.env.TWITCH_CLIENTID, process.env.TWITCH_SECRET)
const apiClient = new ApiClient({ authProvider })

async function getUserEmote(name) {
    if (!name) {
        return false
    } else {
        const user = await apiClient.users.getUserByName(name)

        if (!user) {
            return false
        } else {
            const emotes = await apiClient.chat.getChannelEmotes(user.id)

            if (!emotes) {
                return false
            } else {
                var emoteset = []

                emotes.forEach(emote => {
                    emoteset.push({
                        "name": emote.name,
                        "tier": emote.tier,
                        "type": emote.type,
                        "id": emote.id
                    })
                })

                return emoteset
            }
        }
        
    }
}

export default async function handler(req, res) {
    res.status(200)
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type','application/json')
    res.send(await getUserEmote(req.query.username))
  }