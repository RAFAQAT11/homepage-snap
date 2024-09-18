import { Box, Text, Input, Link } from '@metamask/snaps-sdk/jsx';
import { SnapComponent } from '@metamask/snaps-sdk/jsx';

export type SearchProps = {
  domain?: string;
};

export const Search: SnapComponent<SearchProps> = ({ domain = '' }) => {
  return (
    <Box direction="horizontal" alignment="center">
      <Input name="example-input" placeholder="Enter something..." />
      <Box direction="vertical" alignment="center">
        <Text>{''}</Text>
        <Link href={`https://3ns-dev.surge.sh/?q=${domain}`}>Search</Link>
      </Box>
    </Box>
  );
};
