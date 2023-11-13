# nyx
Welcome to the "nyx" portfolio website repository! It's a cool site made with Express.js and React.js (Vite). I got tired of updating my portfolio manually, so I built "nyx" to do it for me. It fetches the latest info from Github and other APIs, keeping my work showcase always up-to-date and hassle-free.

I thought about using Next.js initially, but switched to Express.js for its server-side logic, especially handy for managing API limits. The Express server works hard to grab data from Github, Spotify, and Imgur. To keep things speedy and avoid overusing APIs, the fetched data is cached for 12 hours.

## flow
- Build Frontend:
  - First step, we build the frontend using React (Vite).
  - This involves compiling all the React code, styles, and assets to create the optimized client-side code.

- Start Express:
    - Next, we fire up the Express.js server.
    - This server will handle the backend logic, including fetching data from various APIs and serving the necessary information to the frontend.
    - We pre-load the frontend, optimizing the initial loading speed for a seamless user experience.

- Routing Logic:
    - All routes lead to the frontend by default except of few API routes needed for client side.
    - This setup allows us to enable redirects on the React side (react-dom-router).

## screenshots
Dark mode:
<img src="https://i.imgur.com/tXZ15Y4.png"/>
<br/>
Light mode:
<img src="https://i.imgur.com/jjMjcB6.png"/>
<br/>
Gallery tab:
<img src="https://i.imgur.com/tLibWAN.png"/>
