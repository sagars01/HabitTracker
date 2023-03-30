import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #cecece;
`;

const Navbar = ({ left, right}) => {
  return (
    <NavbarContainer>
      <div style={{ flex: 1 }}>{left}</div>
      <div style={{ flex: 1, textAlign: "right" }}>
        {right}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;