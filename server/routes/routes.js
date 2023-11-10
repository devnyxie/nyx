import express from 'express';
import { getSpotifyAccessToken } from '../spotify/spotify_utils.js';
import { storage } from '../app.js';
import {
  getGithubUser,
  getGithubUsersReadme,
  getGithubUsersSocialAccounts,
} from '../github/github_utils.js';

const router = express.Router();

router.get('/spotify', async (req, res) => {
  try {
    const cached_res = storage.get('spotify');
    if (cached_res == undefined) {
      const token = await getSpotifyAccessToken();
      const result = await fetch(
        `https://api.spotify.com/v1/users/${process.env.SPOTIFY_TOKEN}`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      if (result.ok) {
        const response = await result.json();
        storage.set('spotify', response);
        res.json(response);
      }
    } else {
      res.json(cached_res);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/github', async (req, res) => {
  try {
    const cached_res = storage.get('github');
    if (cached_res == undefined) {
      const [user, readme, social_accounts] = await Promise.all([
        getGithubUser(),
        getGithubUsersReadme(),
        getGithubUsersSocialAccounts(),
      ]);
      const data = {
        user: user,
        readme: readme,
        social_accounts: social_accounts,
      };
      storage.set('github', data);
      res.json(data);
    } else {
      res.json(cached_res);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
