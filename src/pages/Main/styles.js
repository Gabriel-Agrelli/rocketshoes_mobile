import styled from 'styled-components';
import {darken} from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8;
  margin-bottom: 8;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  background: ${darken(0.03, colors.primary)};
  flex-direction: row;
  padding: 12px;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
