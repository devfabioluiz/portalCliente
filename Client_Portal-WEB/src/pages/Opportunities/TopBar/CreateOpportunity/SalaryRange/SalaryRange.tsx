import { type ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {
  FeeBox,
  FeeInput,
  FeeSlider,
  StyledFormControl,
} from 'src/pages/Opportunities/TopBar/CreateOpportunity/SalaryRange/SalaryRange.styles';

interface IProps {
  onSalaryChange?: (value: [number, number]) => void;
}

/**
 * Component for creating Salary Range indicator. Should be used with react-hook-form.
 */
const SalaryRange = ({ onSalaryChange }: IProps): ReactElement => {
  const { control, watch } = useFormContext<{ salary: [number, number] }>();
  const salary = watch('salary') ?? [];

  return (
    <StyledFormControl>
      Fee / day
      <FeeBox>
        <Controller
          control={control}
          name="salary"
          render={({ field: { value, onChange } }) => (
            <>
              <FeeInput type="number" placeholder="50 €" value={salary[0]} />
              <FeeSlider
                min={0}
                max={2000}
                step={10}
                size="small"
                value={value}
                className={'slider'}
                onChange={(e, newValue: number | number[]) => {
                  onChange(newValue as number[]);

                  if (onSalaryChange) {
                    onSalaryChange(newValue as [number, number]);
                  }
                }}
              />
              <FeeInput type="number" placeholder="2000 €" value={salary[1]} />
            </>
          )}
        />
      </FeeBox>
    </StyledFormControl>
  );
};

export default SalaryRange;
