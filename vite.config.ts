import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
	build: {
		minify: true,
		// sourcemap: true,
		lib: {
			entry: [resolve(__dirname, 'src/index.ts')],
			name: 'AmitindUtil',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => {
				console.log(format, entryName);
				if (format === 'es') {
					return `${entryName}.js`;
				}
				return `${entryName}.${format}`;
			},
		},
	},
	plugins: [dts()],
});
