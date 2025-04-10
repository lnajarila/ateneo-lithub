/**
 * Author: Lurd Synell B. Najarila
 * Description: Wrapper to provide all data contexts to app.
 */

import { UserProvider } from './UserContext.jsx';
import { ListingProvider } from './ListingContext.jsx';

const providers = [
  UserProvider,
  ListingProvider,
];

function DataProvider({ children }) {
  return providers.reduce((accumulator, Provider) => {
    return (
      <Provider>
        {accumulator}
      </Provider>
    );
  }, children);
}

export default DataProvider;