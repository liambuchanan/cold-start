import { Kysely, MysqlDialect } from 'kysely'
import { createPool } from 'mysql2'

interface Database { }

declare global {
    // eslint-disable-next-line no-var
    var kysely: Kysely<Database> | undefined;
}

export const kysely =
    global.kysely ||
    new Kysely<Database>({
        dialect: new MysqlDialect({
            pool: createPool({
                database: process.env.DATABASE_NAME,
                host: process.env.DATABASE_HOST,
                user: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                ssl: {
                    verifyIdentity: true,
                }
            }),
        })
    });

if (process.env.NODE_ENV !== "production") {
    global.kysely = kysely;
}