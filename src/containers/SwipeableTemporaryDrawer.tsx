import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styled from 'styled-components';


/**
 * https://material-ui.com/components/drawers/
 */

type iDrawerPosition = 'top' | 'left' | 'bottom' | 'right'

interface iSwipeableTemporaryDrawer {
  isOpen?: boolean
  position?: iDrawerPosition
  children?: React.ReactNode
  width?: string
}

interface iListWrapper {
  width: string
  position: iDrawerPosition
}
const ListWrapper = styled.div<iListWrapper>`
  .MuiListItem-root {
    ${props => (props.position === 'left' || props.position === 'right') && `width: ${props.width};`
  }
`

const _SwipeableTemporaryDrawer:React.RefForwardingComponent<any, iSwipeableTemporaryDrawer> = (props, ref) => {
  const {
    position = 'left',
    isOpen = false,
    width = '250px'
  } = props
  const [stateIsOpen, setStateIsOpen] = React.useState(isOpen) 

  React.useImperativeHandle(ref, () => ({
    setIsOpen
  }));

  React.useEffect(
    () => {
      setIsOpen(!!props.isOpen)
    },
    [props.isOpen]
  ) 

  const setIsOpen = React.useCallback(
    (isOpen: boolean) => {
      setStateIsOpen(isOpen)
    },
    []
  )

  const onClose = React.useCallback(
    (event: React.SyntheticEvent<{}>)=> {
      setStateIsOpen(false)
    },
    []
  )

  const onOpen = React.useCallback(
    (event: React.SyntheticEvent<{}>)=> {
      setStateIsOpen(true)
    },
    []
  )

  const toggleHandle = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      setStateIsOpen(!stateIsOpen)
    },
    [stateIsOpen]
  )

  return (
    <SwipeableDrawer
      anchor={position}
      open={stateIsOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <ListWrapper
        role="presentation"
        onClick={toggleHandle}
        onKeyDown={toggleHandle}
        width={width}
        position={position}
      >
        {props.children}
      </ListWrapper>
    </SwipeableDrawer>
  );
}

export const SwipeableTemporaryDrawer = React.forwardRef(_SwipeableTemporaryDrawer);