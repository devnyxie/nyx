function Header() {
  return (
    <header
      className={`p-1 d-flex justify-content-between align-items-center border-custom-bottom`}
      style={{ backgroundColor: 'rgb(13, 17, 23, 0.2)' }}
    >
      <div></div>
      <div
        style={{ fontSize: '18px' }}
        className={`pt-2 pb-2 opacity-75 fw-light`}
      >
        {import.meta.env.VITE_GITHUB_USERNAME}
      </div>
      <div></div>
    </header>
  );
}
export default Header;
