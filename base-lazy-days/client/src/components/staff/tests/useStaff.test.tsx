import { act, renderHook } from '@testing-library/react-hooks';

import { Staff } from '../../../../../shared/types';
import { createQueryClientWrapper } from '../../../test-utils';
import { useStaff } from '../hooks/useStaff';

const getStaffCount = (staff: Staff) =>
  Object.values(staff).reduce(
    (runningCount, appointmentsOnDate) =>
      runningCount + appointmentsOnDate.length,
    0,
  );

test('filter staff', async () => {
  const { result, waitFor } = renderHook(() => useStaff(), {
    wrapper: createQueryClientWrapper(),
  });

  // wait for the staff to populate
  await waitFor(() => result.current.staff.length === 4);

  // set to filter for only staff who give massage
  act(() => result.current.setFilter('massage'));

  // wait for the staff list to display only 3
  await waitFor(() => result.current.staff.length === 3);
});
