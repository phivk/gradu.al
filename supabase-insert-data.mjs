import { readFile } from "fs/promises";
import { createClient } from "@supabase/supabase-js";

// let file_path_members = "./content/data/supabase_members.json";
// let file_path_topics = "./content/data/supabase_topics.json";
// let file_path_members_topics = "./content/data/supabase_members_topics.json";

import members from "./content/data/supabase_members.json" assert { type: "json" };
import members_topics from "./content/data/supabase_members_topics.json" assert { type: "json" };
import topics from "./content/data/supabase_topics.json" assert { type: "json" };

async function getEnvVariables() {
  try {
    const env = await (await readFile(".env")).toString();

    let SUPABASE_KEY, SUPABASE_URL, COMMUNITY_NAME;

    env.split("\n").forEach((value) => {
      const line = value.split("=");
      switch (line[0]) {
        case "SUPABASE_KEY":
          SUPABASE_KEY = line[1];
          break;
        case "SUPABASE_URL":
          SUPABASE_URL = line[1];
          break;
        case "COMMUNITY_NAME":
          COMMUNITY_NAME = line[1];
          break;
        default:
          break;
      }
    });

    if (!SUPABASE_KEY || !SUPABASE_URL || !COMMUNITY_NAME) {
      throw new Error();
    }
    return { SUPABASE_KEY, SUPABASE_URL, COMMUNITY_NAME };
  } catch (error) {
    console.log(error);
    console.log("There was a problem loading the environment variables.");
    console.log(
      "Ensure that there is a .env file and the correct keys are defined."
    );
    console.log(
      "There should be SUPABASE_KEY, SUPABASE_URL and COMMUNITY_NAME."
    );
    process.exit(1);
  }
}

async function insert_member(member, supabase) {
  const { data, error } = await supabase
    .from(`${COMMUNITY_NAME}_members`)
    .insert({
      id: member.id,
      username: member.userName,
      created_at: member.created_at,
    });
  console.log(data, error);
}

async function run() {
  try {
    const { SUPABASE_KEY, SUPABASE_URL, COMMUNITY_NAME } =
      await getEnvVariables();
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    // insert members
    members.forEach(async (member) => {
      const { data, error } = await supabase
        .from(`${COMMUNITY_NAME}_members`)
        .insert({
          id: member.id,
          username: member.username,
          created_at: member.created_at,
        });
      console.log(data, error);
    });

    //insert topics
    topics.forEach(async (topic) => {
      const { data, error } = await supabase
        .from(`${COMMUNITY_NAME}_topics`)
        .insert({
          id: topic.id,
          name: topic.name,
          created_at: topic.created_at,
        });
      console.log(data, error);
    });

    //insert members_topics
    members_topics.forEach(async (member_topic) => {
      const { data, error } = await supabase
        .from(`${COMMUNITY_NAME}_members_topics`)
        .insert({
          id: member_topic.id,
          created_at: member_topic.created_at,
          learner: member_topic.learner,
          topic: member_topic.topic,
          sharer: member_topic.sharer,
        });
      console.log(data, error);
    });
  } catch (error) {
    console.log(error);
  }
}

run();
