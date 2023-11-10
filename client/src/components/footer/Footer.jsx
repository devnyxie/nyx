function Footer() {
  return (
    <footer
      className={`p-1 d-flex justify-content-between align-items-center border-custom-top`}
      style={{ backgroundColor: 'rgb(13, 17, 23, 0.2)' }}
    >
      <div></div>
      <small className={`pt-2 pb-2 opacity-75 fw-light`}>
        Created and made available through open-source development by{' '}
        <a
          href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}`}
          className="text-decoration-underline text-capitalize"
        >
          {import.meta.env.VITE_GITHUB_USERNAME}
        </a>
      </small>
      <div></div>
    </footer>
  );
}

export default Footer;
