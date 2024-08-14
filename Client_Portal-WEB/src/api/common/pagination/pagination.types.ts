import { type z } from 'zod';

import { type PaginationSchema } from 'src/api/common/pagination/pagination.schema';

export type PaginationType = z.infer<typeof PaginationSchema>;
