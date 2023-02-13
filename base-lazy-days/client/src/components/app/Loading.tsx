import { Spinner, Text } from '@chakra-ui/react';
import { Query, useIsFetching, useIsMutating } from '@tanstack/react-query';
import { ReactElement } from 'react';

export function Loading(): ReactElement {
  // will use React Query `useIsFetching` to determine whether or not to display
  const isFetching = useIsFetching({
    predicate: (query: Query) => query.state.status === 'loading',
  }); // for now, just don't display
  const isMutating = useIsMutating();
  const display = isFetching || isMutating ? 'inherit' : 'none';

  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="olive.200"
      color="olive.800"
      role="status"
      position="fixed"
      zIndex="9999"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      display={display}
    >
      <Text display={display}>Loading...</Text>
    </Spinner>
  );
}
