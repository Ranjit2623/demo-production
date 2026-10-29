# Demo Production Service

Production management service for batches, work orders, and production tracking.

- **Port**: `3001`
- **Database**: `production_db` (MySQL)
- **Primary Entity**: `ProductionBatch`

## CI/CD
GitHub Actions workflow configured in `.github/workflows/ci.yml` triggers on pushes and PRs to branches:
- `ranjit`
- `master`
- `dev`

## Endpoints
- `GET /health` - Health status
- `POST /production` - Create production batch
- `GET /production` - List production batches
- `GET /production/:id` - Get production batch by ID
- `PATCH /production/:id/status` - Update batch status

## Setup & Running
```bash
npm install
npm run build
npm run start:dev
```
