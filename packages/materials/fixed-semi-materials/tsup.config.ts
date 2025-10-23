/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  bundle: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  legacyOutput: true,
  noExternal: ['@douyinfe/semi-icons', '@douyinfe/semi-ui'], // Only bundle semi-icons and semi-ui
});
