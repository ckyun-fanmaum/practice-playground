#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/229becdb07b03e8ce917d026345ebffd5f7f2fb56d11c4791e5ff50bfacb58b5/contract';
import startContract from '../../snapshots/229becdb07b03e8ce917d026345ebffd5f7f2fb56d11c4791e5ff50bfacb58b5/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/aca8f267b67276d3b35b460e917dd7f4ab0fc6bdabd0e429a81fa19e4dd53303/contract';
import endContract from '../../snapshots/aca8f267b67276d3b35b460e917dd7f4ab0fc6bdabd0e429a81fa19e4dd53303/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [this.dropColumn({ schema: 'public', table: 'User', column: 'name' })];
  }
}

MigrationCLI.run(import.meta.url, M);
