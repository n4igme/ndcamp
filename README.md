# Node.js Blog Application

A full-stack blog application built with Node.js, Express, MongoDB, and Edge.js templating engine. Features user authentication, image uploads via Cloudinary, and a clean responsive UI.

## Features

- **User Authentication**: Register, login, logout functionality with session management
- **Blog Management**: Create, read, update posts with categories
- **Image Upload**: Cloudinary integration for image handling
- **Search**: Search posts by title
- **Responsive Design**: Clean blog interface with Bootstrap styling
- **Security**: Password hashing with bcrypt, session-based authentication

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Templating**: Edge.js
- **Authentication**: express-session, bcrypt
- **File Upload**: express-fileupload, Cloudinary
- **Styling**: Bootstrap CSS

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose (for containerized setup)
- MongoDB (if running without Docker)
- Cloudinary account (for image uploads)

## Quick Start with Docker

### Development Environment

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ndcamp
   ```

2. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration values.

3. **Start the application**
   ```bash
   docker-compose up -d
   ```

4. **Access the application**
   - Blog: http://localhost:3000
   - MongoDB: localhost:27017
   - Redis: localhost:6379

5. **View logs**
   ```bash
   docker-compose logs -f blog_app
   ```

6. **Stop the application**
   ```bash
   docker-compose down
   ```

### Production Deployment

1. **Set up environment variables**
   Create `.env` file with production values:
   ```bash
   MONGO_PASSWORD=secure_mongodb_password
   SESSION_SECRET=your_super_secure_session_secret
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   CLOUDINARY_NAME=your_cloud_name
   REDIS_PASSWORD=secure_redis_password
   ```

2. **Deploy with production configuration**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

3. **Monitor the deployment**
   ```bash
   docker-compose -f docker-compose.prod.yml ps
   docker-compose -f docker-compose.prod.yml logs -f
   ```

## Manual Setup (Without Docker)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up MongoDB**
   - Install MongoDB locally or use MongoDB Atlas
   - Create a database named `blog_db`

3. **Configure environment variables**
   Create `.env` file in the root directory with:
   ```
   DB_URI=mongodb://localhost:27017/blog_db
   PORT=3000
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   CLOUDINARY_NAME=your_cloud_name
   ```

4. **Start the application**
   ```bash
   npm start
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home page with latest posts |
| GET | `/post/new` | Create new post form (authenticated) |
| POST | `/post/store` | Store new post (authenticated) |
| GET | `/post/:id` | View single post |
| GET | `/posts/category/:category` | Posts by category |
| GET | `/posts/by/:id` | Posts by author |
| GET | `/search/post/:q` | Search posts |
| GET | `/user/register` | User registration form |
| POST | `/user/store` | Create new user |
| GET | `/user/login` | Login form |
| POST | `/user/auth` | Authenticate user |
| GET | `/user/logout` | Logout user |

## Docker Services

### Development (docker-compose.yml)
- **blog_app**: Main Node.js application with hot reload
- **mongodb**: MongoDB database with data persistence
- **redis**: Redis for session storage (optional enhancement)

### Production (docker-compose.prod.yml)
- **blog_app**: Optimized production build
- **mongodb**: Production MongoDB with authentication
- **redis**: Redis with password protection
- **nginx**: Reverse proxy (optional)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Application port | 3000 |
| `NODE_ENV` | Environment mode | development |
| `DB_URI` | MongoDB connection string | - |
| `SESSION_SECRET` | Session encryption secret | - |
| `CLOUDINARY_API_KEY` | Cloudinary API key | - |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | - |
| `CLOUDINARY_NAME` | Cloudinary cloud name | - |

## Development Workflow

1. **Start development environment**
   ```bash
   docker-compose up -d
   ```

2. **Make code changes**
   - Code changes are automatically reflected (nodemon hot reload)
   - Database data persists between restarts

3. **View application logs**
   ```bash
   docker-compose logs -f blog_app
   ```

4. **Access database (optional)**
   ```bash
   docker exec -it blog_mongodb mongosh
   ```

5. **Stop services**
   ```bash
   docker-compose down
   ```

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   docker-compose down
   # Or change ports in docker-compose.yml
   ```

2. **Database connection issues**
   - Check if MongoDB is running: `docker-compose ps`
   - Verify DB_URI in environment variables
   - Check MongoDB logs: `docker-compose logs mongodb`

3. **Image upload not working**
   - Verify Cloudinary credentials in `.env`
   - Check network connectivity to Cloudinary

4. **Sessions not persisting**
   - Ensure Redis is running: `docker-compose ps redis`
   - Check session secret configuration

### Health Checks

The application includes health check endpoints:
- Docker health check runs every 30 seconds
- Manual check: `curl http://localhost:3000/`

### Performance Monitoring

Monitor application performance:
```bash
# View resource usage
docker stats

# Monitor logs
docker-compose logs -f --tail=100 blog_app

# Check MongoDB performance
docker exec -it blog_mongodb mongotop
```

## Security Considerations

- **Passwords**: All passwords are hashed using bcrypt
- **Sessions**: Secure session management with connect-mongo
- **Environment**: Sensitive data in environment variables
- **Docker**: Non-root user in containers
- **Database**: Authentication enabled in production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Docker: `docker-compose up`
5. Submit a pull request

## License

This project is for educational purposes as part of a [Node.js bootcamp](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/).
