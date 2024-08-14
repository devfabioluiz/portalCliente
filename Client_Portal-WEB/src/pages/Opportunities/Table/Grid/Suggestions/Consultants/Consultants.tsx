import { type ReactElement, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Box } from '@mui/material';

import {
  type CreateSuggestionSchemaType,
  useGetConsultantsInfinite,
} from 'src/api';
import { Search } from 'src/components';
import { Consultant } from 'src/pages/Opportunities/Table/Grid/Suggestions/Consultants/Consultant';
import { ConsultantsContainer } from 'src/pages/Opportunities/Table/Grid/Suggestions/Consultants/Consultants.styles';
import { Submit } from 'src/pages/Opportunities/Table/Grid/Suggestions/Consultants/Submit';

interface IProps {
  onSubmit: (suggestion: CreateSuggestionSchemaType) => void;
  opportunityId: string;
}

const Consultants = ({ onSubmit, opportunityId }: IProps): ReactElement => {
  const { ref, inView } = useInView();
  const [searchValue, setSearchValue] = useState('');

  const { data, fetchNextPage, isSuccess, hasNextPage } =
    useGetConsultantsInfinite({ search: searchValue });

  useEffect(() => {
    if (inView && (hasNextPage ?? false)) {
      void fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <>
      <Search
        onSubmit={(value: string) => {
          setSearchValue(value);
        }}
      />
      <ConsultantsContainer>
        {data?.pages &&
          data?.pages.map((page) =>
            page.items.map((item) => (
              <Consultant
                key={item.id}
                id={item.id}
                name={item.name}
                role={item.role.name}
              />
            )),
          )}

        {/* Marker that indicates end of the list */}
        {isSuccess && <Box ref={ref} />}
      </ConsultantsContainer>

      <Submit onSubmit={onSubmit} opportunityId={opportunityId} />
    </>
  );
};

export default Consultants;
