import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, Button, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';
import { useState } from 'react';
import AttemptSurveyForm from 'src/components/AttemptSurvey';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, cover, price, colors, status, priceSale } = product;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {product?.status}
          </Label>
        )}
        <StyledProductImg alt={name} src={'/assets/images/products/review.jpg'} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
          {product?.name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
       
          <Typography variant="subtitle1">
           
            &nbsp;
          {product?.reward} Eth
          </Typography>
        </Stack>
        <Button onClick={handleOpen}>Review</Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AttemptSurveyForm surveyData={product} onClose={handleClose} />
      </Modal>
    </Card>
  );
}
