CREATE TABLE `sessions` (
	`code` text PRIMARY KEY NOT NULL,
	`host_hash` text NOT NULL,
	`title` text NOT NULL,
	`phase` integer DEFAULT 1 NOT NULL,
	`paused` integer DEFAULT 0 NOT NULL,
	`closed` integer DEFAULT 0 NOT NULL,
	`created` integer NOT NULL,
	`expires` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `sessions_host_hash_unique` ON `sessions` (`host_hash`);--> statement-breakpoint
CREATE TABLE `teams` (
	`id` text PRIMARY KEY NOT NULL,
	`room` text NOT NULL,
	`token_hash` text NOT NULL,
	`name` text NOT NULL,
	`sector` text NOT NULL,
	`state` text DEFAULT '{}' NOT NULL,
	`revision` integer DEFAULT 0 NOT NULL,
	`feedback` text DEFAULT '' NOT NULL,
	`messages` text DEFAULT '[]' NOT NULL,
	`updated` integer NOT NULL,
	FOREIGN KEY (`room`) REFERENCES `sessions`(`code`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `teams_token_hash_unique` ON `teams` (`token_hash`);--> statement-breakpoint
CREATE UNIQUE INDEX `team_name` ON `teams` (`room`,`name`);