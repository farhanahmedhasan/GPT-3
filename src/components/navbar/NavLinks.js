import { navData } from '../../data/navData';
const NavLinks = ({ className }) => {
  return (
    <>
      {navData.map((link) => {
        const { id, name, url } = link;
        return (
          <li key={id}>
            <a className={`navbar__links__link ${className}`} href={url}>
              {name}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
