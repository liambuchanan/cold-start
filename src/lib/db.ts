import { Kysely } from 'kysely'
import {PlanetScaleDialect} from 'kysely-planetscale'


interface Database { }

declare global {
    // eslint-disable-next-line no-var
    var kysely: Kysely<Database> | undefined;
}

export const kysely =
    global.kysely ||
    new Kysely<Database>({
        dialect: new PlanetScaleDialect({
            url: process.env.DATABASE_URL,
        })
    });

if (process.env.NODE_ENV !== "production") {
    global.kysely = kysely;
}