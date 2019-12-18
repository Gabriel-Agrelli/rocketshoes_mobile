import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null,
)(Header);

Header.propTypes = {
  cartSize: PropTypes.number,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
Header.defaultProps = { cartSize: 0 };
