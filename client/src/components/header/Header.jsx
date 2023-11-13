import { BsMoonStars, BsSun } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AiOutlineMenu } from 'react-icons/ai';

function Header({ theme, setTheme }) {
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <header
      className={`w-100`}
      style={{ backgroundColor: 'rgb(13, 17, 23, 0.2)' }}
    >
      {/* MD+ */}
      <div className="p-1 d-flex justify-content-between align-items-center border-custom-bottom px-4 d-none d-md-flex">
        <div style={{ width: '33%' }}></div>
        <div
          style={{ fontSize: '18px', width: '33%' }}
          className={`pt-2 pb-2 ${
            theme == 'dark' ? 'opacity-75' : ''
          } fw-light d-flex justify-content-center`}
        >
          <Link to="/">{import.meta.env.VITE_GITHUB_USERNAME}</Link>
        </div>
        <div className="d-flex justify-content-end" style={{ width: '33%' }}>
          <div className="d-none d-md-flex align-items-center ">
            {['profile', 'gallery'].map((tab) => {
              let link;
              switch (tab) {
                case 'profile':
                  link = '/';
                  break;
                default:
                  link = `/${tab}`;
                  break;
              }
              console.log(link);

              return (
                <Link
                  to={link}
                  className={`ms-3 text-capitalize ${
                    link == pathname ? 'active' : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                >
                  {tab}
                </Link>
              );
            })}
          </div>
          <div
            className="rounded visible-bg h-100 border-custom p-1 px-2 ms-3 position-relative"
            style={{
              cursor: 'pointer',
              overflow: 'hidden',
              userSelect: 'none',
            }}
            onClick={() => {
              setTheme(theme == 'dark' ? 'light' : 'dark');
              Cookies.set('theme', theme == 'dark' ? 'light' : 'dark', {
                expires: 365,
              });
            }}
          >
            {theme == 'dark' ? (
              <BsSun size={20} className="slide-in-animation" />
            ) : (
              <BsMoonStars size={20} className="slide-in-animation" />
            )}
          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg w-100 d-block d-md-none px-4 border-custom-bottom">
        <div class="container-fluid d-flex justify-content-between">
          <div
            style={{ fontSize: '19px' }}
            className={`pt-2 pb-2 ${
              theme == 'dark' ? 'opacity-75' : ''
            } fw-light d-flex justify-content-center`}
          >
            <Link to="/">{import.meta.env.VITE_GITHUB_USERNAME}</Link>
          </div>
          <button
            class="navbar-toggler border-custom px-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span class="navbar-toggler-icon"></span> */}
            <AiOutlineMenu size={25} />
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ width: 'min-content', padding: 0, margin: 0 }}
          >
            <form
              class="d-flex flex-column align-items-center mt-3"
              role="search"
            >
              {/* routes */}
              {['profile', 'gallery'].map((tab) => {
                let link;
                switch (tab) {
                  case 'profile':
                    link = '/';
                    break;
                  default:
                    link = `/${tab}`;
                    break;
                }
                console.log(link);

                return (
                  <div
                    className="rounded visible-bg h-100 w-100 border-custom p-1 px-2 mb-2 d-flex justify-content-center align-items-center"
                    style={{
                      cursor: 'pointer',
                      overflow: 'hidden',
                    }}
                  >
                    <Link
                      to={link}
                      className={`ms-3 text-capitalize ${
                        link == pathname ? 'active' : ''
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      {tab}
                    </Link>
                  </div>
                );
              })}
              {/* theme button */}
              <div
                className="rounded visible-bg h-100 w-100 border-custom p-1 px-2 d-flex justify-content-between align-items-center"
                style={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  userSelect: 'none',
                }}
                onClick={() => {
                  setTheme(theme == 'dark' ? 'light' : 'dark');
                  Cookies.set('theme', theme == 'dark' ? 'light' : 'dark', {
                    expires: 365,
                  });
                }}
              >
                {theme == 'dark' ? (
                  <BsSun size={20} className="slide-in-animation me-2" />
                ) : (
                  <BsMoonStars size={20} className="slide-in-animation me-2" />
                )}
                Change theme
                <div></div>
              </div>
              {/* end */}
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
