module.exports = {
  apps: [
    {
      name: "secure-arc-backend",
      cwd: "./micro-backend/express-server",
      script: "yarn",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "development"
      }
    },
    {
      name: "secure-arc-frontend",
      cwd: "./packages/frontend",
      script: "yarn",
      args: "dev",
      watch: true,
      env: {
        NODE_ENV: "development"
      }
    }
  ]
};
