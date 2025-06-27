import postgres from 'postgres';

const sql = postgres({
  host: 'aws-0-eu-north-1.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
  username: 'postgres.agqfgpwrdlthbviwybkr',
  password: '1599511241Atalay', // 👉 ŞİFREYİ BURAYA DOĞRU YAZ
  ssl: 'require',
});

export default sql;
