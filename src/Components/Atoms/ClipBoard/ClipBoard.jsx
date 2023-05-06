/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Snackbar } from '@mui/material';
import { FaCopy } from 'react-icons/fa';
import { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { StyledClipBoardWrapper, StyledCopyButton } from './ClipBoardStyles';

function CopyToClipboardButton() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(window.location.toString());
  };

  return (
    <StyledClipBoardWrapper>
      <PopoverPopup />
      <StyledCopyButton onClick={() => handleClick}>
        <FaCopy />
      </StyledCopyButton>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
    </StyledClipBoardWrapper>
  );
}

function PopoverPopup() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="outlined" size="large" {...bindTrigger(popupState)}>
            --
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <TextArea />
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

function TextArea() {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      style={{ width: 200, borderStyle: 'none' }}
    />
  );
}
export default CopyToClipboardButton;
