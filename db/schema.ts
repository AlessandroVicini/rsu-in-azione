import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';
export const sessions=sqliteTable('sessions',{
 code:text('code').primaryKey(),hostHash:text('host_hash').notNull().unique(),title:text('title').notNull(),
 phase:integer('phase').notNull().default(1),paused:integer('paused').notNull().default(0),closed:integer('closed').notNull().default(0),
 created:integer('created').notNull(),expires:integer('expires').notNull()
});
export const teams=sqliteTable('teams',{
 id:text('id').primaryKey(),room:text('room').notNull().references(()=>sessions.code),tokenHash:text('token_hash').notNull().unique(),
 name:text('name').notNull(),sector:text('sector').notNull(),state:text('state').notNull().default('{}'),revision:integer('revision').notNull().default(0),
 feedback:text('feedback').notNull().default(''),messages:text('messages').notNull().default('[]'),updated:integer('updated').notNull()
},t=>[uniqueIndex('team_name').on(t.room,t.name)]);
