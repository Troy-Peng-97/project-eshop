import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken, shippingInfo }) => (
  <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }} key={shippingInfo.label}>
          <ListItemText primary={shippingInfo.label} secondary={`Quantity: 1`} />
          <Typography variant="body2">{shippingInfo.price}</Typography>
      </ListItem>
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {`${checkoutToken.live.subtotal.formatted_with_symbol.charAt(0)}${checkoutToken.live.subtotal.raw + shippingInfo.priceRaw}`}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;
