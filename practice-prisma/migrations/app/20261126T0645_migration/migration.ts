#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/229becdb07b03e8ce917d026345ebffd5f7f2fb56d11c4791e5ff50bfacb58b5/contract';
import endContract from '../../snapshots/229becdb07b03e8ce917d026345ebffd5f7f2fb56d11c4791e5ff50bfacb58b5/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/a8baef10fd941db4a3fd990c5e75efb5fa59cd02564863cf072b9cebc5ba845e/contract';
import startContract from '../../snapshots/a8baef10fd941db4a3fd990c5e75efb5fa59cd02564863cf072b9cebc5ba845e/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'User',
        column: col('nameB', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
