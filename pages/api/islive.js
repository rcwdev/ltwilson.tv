import { ClientCredentialsAuthProvider } from '@twurple/auth'
import { ApiClient } from '@twurple/api'

const authProvider = new ClientCredentialsAuthProvider(process.env.TWITCH_CLIENTID, process.env.TWITCH_SECRET)
const apiClient = new ApiClient({ authProvider })

async function isUserLive(name) {
  if (!name) {
    return false
  }

  const user = await apiClient.users.getUserByName(name);
  if (!user) {
    return false
  } else {
    const isLive = await apiClient.streams.getStreamByUserId(user.id);

    if (!isLive) {
      return {
        "name": user.displayName,
        "pfp_url": user.profilePictureUrl,
        "description": user.description
      }
    } else {
      return {
        "name": user.displayName,
        "pfp_url": user.profilePictureUrl,
        "description": user.description,
        "stream": {
          "title": isLive.title,
          "game": isLive.gameName
        }
      }
    }
  }
}

export default async function handler(req, res) {
  res.status(200)
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type','application/json')
  res.send(await isUserLive(req.query.channel))
}