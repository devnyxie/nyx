//profile section stands for User data + Readme
import React, { useEffect, useState } from 'react';
import { MdOutlineAccessTime, MdOutlineLocationOn } from 'react-icons/md';
import { CgWorkAlt } from 'react-icons/cg';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';

import MarkdownView from '../markdown/MarkdownView';

function Profile() {
  const [user, setUser] = useState({});
  const [readme, setReadme] = useState('');
  const [social_accounts, setSocialAccounts] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + '/github')
      .then((res) => res.json())
      .then((res) => {
        setUser(res.user);
        setReadme(res.readme);
        setSocialAccounts(res.social_accounts);
      });
  }, []);

  function extractUsername(url) {
    const username = url.replace(/^(https?:\/\/)?(www\.)?/, '');
    const parts = username.split('/');
    const usernameIndex = parts.findIndex((part) => part === 'in');

    if (usernameIndex !== -1 && usernameIndex < parts.length - 1) {
      const username = parts.slice(usernameIndex + 1).join('');
      return (
        <a href={url} target="_blank">
          {parts[usernameIndex]}/{username}
        </a>
      );
    } else {
      const remainingUrl = parts.slice(1).join('');
      return (
        <a href={url} target="_blank">
          {remainingUrl}
        </a>
      );
    }
  }

  function mapSocialMediaAccounts() {
    const mapped_accounts = social_accounts.map((account, index) => {
      let output = '';
      switch (account.provider) {
        case 'linkedin':
          output = (
            <>
              <AiFillLinkedin size={20} className={`me-1`} />
              {extractUsername(account.url)}
            </>
          );
          break;
        default:
          output = (
            <>
              <BsLink45Deg size={20} className={`me-1`} />
              {extractUsername(account.url)}
            </>
          );
      }
      return (
        <div key={index} className={`d-flex align-items-center pt-1 `}>
          <div>{output}</div>
        </div>
      );
    });
    return mapped_accounts;
  }
  function getCurrentCityTime(city) {
    // Get the time zone of the specified city
    const cityTimeZone = Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/' + city,
    }).resolvedOptions().timeZone;

    // Get the current time in the specified city's time zone
    const currentTime = new Date().toLocaleTimeString('en-US', {
      timeZone: cityTimeZone,
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    });

    return currentTime;
  }

  return (
    <div className={`row g-0`}>
      <div
        className={`col col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 d-flex flex-column`}
        style={{ height: 'min-content' }}
      >
        <img
          src={user.avatar_url}
          style={{ aspectRatio: 1 / 1 }}
          className={`rounded-circle border-custom`}
        />
        <div className={`p-2`}>
          <div className={`fs-4`}>{user.name}</div>
          <div className={`fs-5 opacity-50`}>{user.login}</div>
        </div>
        <small className={` rounded p-2`}>
          <div className={`w-100 text-break`}>{user.bio}</div>
          <hr className={`mt-1 mb-1`} />
          <div className={`d-flex align-items-center pt-1`}>
            <MdOutlineLocationOn size={20} className={`me-1`} />
            {user.location}
          </div>
          <div className={`d-flex align-items-center pt-1`}>
            <CgWorkAlt size={20} className={`me-1`} />
            {user.company}
          </div>
          <div className={`d-flex align-items-center pt-1`}>
            <MdOutlineAccessTime size={20} className={`me-1`} />{' '}
            {getCurrentCityTime('Warsaw')}
          </div>
          <div className={`d-flex align-items-center pt-1`}>
            <AiFillGithub size={20} className={`me-1`} />{' '}
            <a
              href={`https://github.com/${
                import.meta.env.VITE_GITHUB_USERNAME
              }`}
              target="_blank"
            >
              {import.meta.env.VITE_GITHUB_USERNAME}
            </a>
          </div>
          {mapSocialMediaAccounts()}
        </small>
      </div>
      <div
        className={`col col-xs-12 col-sm-8 col-md-8 col-md-4 col-lg-9 col-xl-10 ps-0 ps-0 ps-sm-2 ps-md-4`}
      >
        <div
          className="p-2 border-custom rounded visible-bg h-100"
          style={{
            maxHeight: 'content-fit',
            overflowY: 'auto',
            fontSize: '14px',
          }}
        >
          {<MarkdownView markdown={readme} />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
