import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../utils/format';
import colors from '../../styles/colors';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ products }) {
  return (
    <Container>
      {products.length ? (
        <>
          <View>
            {products.map(product => (
              <View key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <Text>{product.title}</Text>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete onPress={() => {}}>
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.primary}
                    />
                  </ProductDelete>
                </ProductInfo>

                <ProductControls>
                  <TouchableOpacity onPress={() => {}}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                  <ProductAmount value={String(product.amount)} />
                  <TouchableOpacity onPress={() => {}}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                  <ProductSubtotal>{product.subtotal}</ProductSubtotal>
                </ProductControls>
              </View>
            ))}
          </View>

          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>{12}</TotalAmount>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  })),
  // total: formatPrice(
  //   state.cart.reduce((total, producut) => {
  //     return total + producut.price * producut.amount;
  //   }),
  // ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
