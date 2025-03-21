/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:JKAoPL32wCte@ep-yellow-base-a1xiwrw6.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };