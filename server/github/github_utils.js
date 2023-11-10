export async function getGithubUser() {
  const options = {
    url: 'https://api.github.com/user',
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
      Accept: 'application/vnd.github+json',
    },
  };
  try {
    const response = await fetch(options.url, {
      headers: options.headers,
    });
    if (!response.ok) {
      throw new Error('An error occured while fetching Github user data.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

export async function getGithubUsersReadme() {
  const options = {
    url: `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.GITHUB_USERNAME}/readme`,
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
      Accept: 'application/vnd.github.raw',
    },
  };
  try {
    const response = await fetch(options.url, {
      headers: options.headers,
    });
    if (!response.ok) {
      throw new Error('An error occured while fetching Github user data.');
    } else {
      return await response.text();
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

export async function getGithubUsersSocialAccounts() {
  const options = {
    url: 'https://api.github.com/user/social_accounts',
    headers: {
      Authorization: `token ${process.env.GITHUB_KEY}`,
      Accept: 'application/vnd.github+json',
    },
  };
  try {
    const response = await fetch(options.url, {
      headers: options.headers,
    });
    if (!response.ok) {
      throw new Error('An error occured while fetching Github user data.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}
