# felicia

## How to run
Install `pnpm` first.
```bash

# Clone repo
$ git clone https://github.com/retraigo/felicia.git && cd felicia

# Install deps
$ pnpm i

# Development server
$ pnpm dev

# Deploy for production (server)
$ pnpm build
$ pnpm start
# Recommended to use a process manager like PM2 in case server crashes

# Deploy for production (static HTML files)
$ pnpm generate # Files will be generated in the /dist directory

```
