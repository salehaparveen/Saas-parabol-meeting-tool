import {Client} from 'pg'
import getPgConfig from '../getPgConfig'

export async function up() {
  const client = new Client(getPgConfig())
  await client.connect()
  await client.query(`
    CREATE TABLE IF NOT EXISTS "MeetingSeries" (
      "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
      "meetingType" "MeetingTypeEnum" NOT NULL,
      "title" VARCHAR(255) NOT NULL,
      "recurrenceRule" VARCHAR(255) NOT NULL,
      "duration" INT NOT NULL,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
      "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
      "cancelledAt" TIMESTAMP WITH TIME ZONE
    );

    DROP TRIGGER IF EXISTS "update_MeetingSeries_updatedAt" ON "MeetingSeries";
    CREATE TRIGGER "update_MeetingSeries_updatedAt" BEFORE UPDATE ON "MeetingSeries" FOR EACH ROW EXECUTE PROCEDURE "set_updatedAt"();
  `)
  await client.end()
}

export async function down() {
  const client = new Client(getPgConfig())
  await client.connect()
  await client.query(`
    DROP TABLE IF EXISTS "MeetingSeries";
    DROP TRIGGER IF EXISTS "update_MeetingSeries_updatedAt" ON "MeetingSeries";
  `)
  await client.end()
}
